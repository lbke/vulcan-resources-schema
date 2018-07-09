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
const openJSON = require("../../utils/openJSON");
const createOutdir = require("../../utils/createOutdir");

const OUTDIR = path.resolve(__dirname, "../../../build/");

const SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../../resources/all-layers.jsonld"
);

const { getDomainsAsArray, getRangesAsArray, getGraph } = require("./common");
const handleSuperClasses = require("./handleSuperClasses").default;
const handleTypes = require("./handleTypes").default;

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

const scrapHttp = R.pipe(
  graph => JSON.stringify(graph),
  str => {
    // remove all urls and keep only the last part
    return str.replace(/https?:\/\/schema.org\//g, "");
  },
  str => JSON.parse(str)
);

// convert an array of types into a normalized object
const normalizeRanges = R.reduce(
  (res, range) => ({ ...res, [range["@id"]]: range }),
  {}
);
const normalizeSchemaRanges = R.compose(
  normalizeRanges,
  getRangesAsArray
);
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

const normalizeGraph = R.reduce((normalizedGraph, schema) => {
  let res = { ...normalizedGraph };
  const key = schema["@id"];
  // add the schema to the result if it does not exist
  const cleanSchema = cleanLinkedSchema(schema);
  res[key] = cleanSchema;
  // normalize the ranges
  res = fillDomains(res, schema);
  res = fillPossibleTypes(res, schema);
  return res;
}, {});

/**
 * Normalize the graph (arrays become hashmaps)
 * @param {*} graph
 */
const restructureGraph = R.pipe(
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
    restructureGraph,
    handleSuperClasses,
    handleTypes,
    R.curry(createFile)(outdir, "schemaorg-normalized.jsonld")
  )(schemasPath);
};

module.exports = {
  SCHEMAS_PATH,
  _getGraph: getGraph,
  _normalizeGraph: normalizeGraph,
  default: run
};
