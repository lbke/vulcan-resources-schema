/**
 * Convert the Schema.orgs schemas into Vulcan schemas
 * A path to a .jsonld file containing all the schemas must be passed to the script
 *
 * This file can be found in the schemaorg repo:
 * https://github.com/schemaorg/schemaorg/tree/master/data/releases/XX/all-layers.jsonld
 *
 * Currently used version of schema.org: 3.4
 *
 * domainIncludes: the classes a property belongs to
 * rangeIncludes: the possible type for an abstract entity (e.g owner can be Person or Organization)
 */
const fs = require("fs");
const path = require("path");
const R = require("ramda");
const openJSON = require("../utils/openJSON");
const createOutdir = require("../utils/createOutdir");
const chalk = require("chalk");

const OUTDIR = path.resolve(__dirname, "../../build/");

const SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../resources/all-layers.jsonld"
);

// TODO: rewrite with Ramda and Functor?
const asArray = value => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};
/**
 * Domains can be objects or array, we want them as array
 * @param {*} schema
 */
const getDomainsAsArray = R.compose(
  asArray,
  R.prop("domainIncludes")
);
const getRangesAsArray = R.compose(
  asArray,
  R.prop("rangeIncludes")
);
const getSuperClassesAsArray = R.pipe(
  R.prop("rdfs:subClassOf"),
  asArray
);
const hasSuperClass = R.has("rdfs:subClassOf");

const extractId = R.pipe(
  R.split("/"),
  R.takeLast
);

/**
 * Extract the graph from the schemas (other metadatas are not useful)
 * @param {*} schemas
 */
const getGraph = R.path(["@graph", 0, "@graph"]);

/**
 * Normalize the ranges
 * @param {*} ranges
 */
const normalizeRanges = R.reduce(
  (res, range) => ({ ...res, [range["@id"]]: range }),
  {}
);
/**
 * Remove the domainIncludes part of the schema
 * Avoid redundancy during the normalization process
 * @param {*} schema
 */
const cleanLinkedSchema = R.omit(["domainIncludes", "rangeIncludes"]);
/**
 * Fill the domains with the schema according to its dependency
 * @param {*} graph The whole graph
 * @param {*} schema A low leval field
 * @param {*} domains An array of domains the low level field is included in
 */
const fillDomains = (graph, schema) => {
  // fill the related entities fields (domain) with the current schema
  domains = getDomainsAsArray(schema);
  const cleanSchema = cleanLinkedSchema(schema);
  return domains.reduce(
    (res, domain) =>
      R.set(
        R.lensPath([domain["@id"], "fields", schema["@id"]]),
        cleanSchema,
        res
      ),
    graph
  );
};

const normalizeSchemaRanges = R.compose(
  normalizeRanges,
  getRangesAsArray
);

/**
 * Fill the possible types
 * @param {*} graph
 * @param {*} schema
 */
const fillPossibleTypes = (graph, schema) => {
  const normalizedRanges = normalizeSchemaRanges(schema);
  if (!normalizedRanges) return graph;
  if (R.isEmpty(normalizedRanges)) return graph;
  return R.set(
    R.lensPath([schema["@id"], "possibleTypes"]),
    normalizedRanges,
    graph
  );
};

/**
 * Fill the fields with the super class field
 */
const fillSuperClass = (graph, schema) => {};

const scrapHttp = R.pipe(
  graph => JSON.stringify(graph),
  str => {
    // remove all urls and keep only the last part
    return str.replace(/https?:\/\/schema.org\//g, "");
  },
  str => JSON.parse(str)
);

const normalizeGraph = R.reduce((normalizedGraph, schema) => {
  let res = { ...normalizedGraph };
  const key = schema["@id"];
  // add the schema to the result if it does not exist
  const cleanSchema = cleanLinkedSchema(schema);
  res[key] = cleanSchema;
  // normalize the ranges
  res = fillPossibleTypes(res, schema);
  res = fillDomains(res, schema);
  return res;
}, {});

const handleSuperClasses = normalizedGraph =>
  R.pipe(
    R.filter(hasSuperClass),
    R.reduce((resultGraph, schema) => {
      const superClasses = schema.superClasses;
      if (superClasses.length !== 1) {
        console.log(
          chalk.orange(
            `Schema ${schema["@id"]} has ${superClasses.length} superClasses`
          )
        );
      }
      // TODO
      return resultGraph;
    }, normalizeGraph)
  );
/**
 * Normalize the graph (arrays become hashmaps)
 * @param {*} graph
 */
const normalizeGraph = R.pipe(
  scrapHttp,
  normalizeGraph
);

const generateVulcanSchemas = normalizeGraph;

/**
 * Generate the file
 * @param {*} outdir
 * @param {*} filename
 * @param {*} data
 */
const createFile = (outdir, filename, data) => {
  fs.writeFileSync(
    path.join(outdir, filename),
    JSON.stringify(data, undefined, 2),
    { encoding: "utf8", flag: "w" }
  );
};

const run = (outdir = OUTDIR, schemasPath = SCHEMAS_PATH) => {
  createOutdir();
  R.pipe(
    openJSON,
    getGraph,
    normalizeGraph,
    handleSuperlasses,
    R.curry(createFile)(outdir, "schemaorg-normalized.jsonld")
  )(schemasPath);
};

module.exports = {
  SCHEMAS_PATH,
  _getGraph: getGraph,
  _normalizeGraph: normalizeGraph,
  _generateVulcanSchemas: generateVulcanSchemas,
  default: run
};
