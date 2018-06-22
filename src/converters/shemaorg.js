/**
 * Convert the Schema.orgs schemas into Vulcan schemas
 * A path to a .jsonld file containing all the schemas must be passed to the script
 *
 * This file can be found in the schemaorg repo:
 * https://github.com/schemaorg/schemaorg/tree/master/data/releases/XX/all-layers.jsonld
 *
 * Currently used version of schema.org: 3.4
 */
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const fp = require("lodash/fp");
const R = require("ramda");

const SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../resources/all-layers.jsonld"
);
const OUTDIR = path.resolve(__dirname, "../../build/");

const createOutdir = () => mkdirp.sync(OUTDIR);

/**
 * Open the schemas file and parse it
 */
const getSchemas = R.compose(
  JSON.parse,
  fs.readFileSync
);

/**
 * Domains can be objects or array, we want them as array
 * @param {*} schema
 */
const getDomainsAsArray = schema => {
  const rawDomains = schema["http://schema.org/domainIncludes"];
  if (!rawDomains) return [];
  return Array.isArray(rawDomains) ? rawDomains : [rawDomains];
};

/**
 * Extract the graph from the schemas (other metadatas are not useful)
 * @param {*} schemas
 */
const getGraph = schemas => schemas["@graph"][0]["@graph"];

/**
 * Remove the domainIncludes part of the schema
 * Avoid redundancy during the normalization process
 * @param {*} schema
 */
const cleanLinkedSchema = R.omit(["http://schema.org/domainIncludes"]);
/**
 * Fill the domains with the schema according to its dependency
 * @param {*} graph The whole graph
 * @param {*} schema A low leval field
 * @param {*} domains An array of domains the low level field is included in
 */
const fillDomains = (graph, schema, domains) => {
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

/**
 * Normalize the graph (arrays become hashmaps)
 * @param {*} graph
 */
const normalizeGraph = graph => {
  return graph.reduce((normalizedGraph, schema) => {
    const res = { ...normalizedGraph };
    const key = schema["@id"];
    // add the schema to the result if it does not exist
    const cleanSchema = cleanLinkedSchema(schema);
    res[key] = cleanSchema;
    // fill the related entities fields (domain) with the current schema
    domains = getDomainsAsArray(schema);
    return fillDomains(res, schema, domains);
  }, {});
};

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
  R.compose(
    R.curry(createFile)(outdir, "schemaorg-normalized.jsonld"),
    // generateVulcanSchemas
    normalizeGraph,
    getGraph,
    getSchemas
  )(schemasPath);
};

module.exports = {
  SCHEMAS_PATH,
  _getGraph: getGraph,
  _getSchemas: getSchemas,
  _normalizeGraph: normalizeGraph,
  _generateVulcanSchemas: generateVulcanSchemas,
  default: run
};
