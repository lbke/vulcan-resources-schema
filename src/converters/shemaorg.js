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
const OUTDIR = path.resolve(__dirname, "../dist/");

const generateOutdir = () => mkdirp.sync(OUTDIR);

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

const getGraph = schemas => schemas["@graph"][0]["@graph"];

/**
 * Fill the domains with the schema according to its dependency
 * @param {*} graph The whole graph
 * @param {*} schema A low leval field
 * @param {*} domains An array of domains the low level field is included in
 */
const fillDomains = (graph, schema, domains) => {
  return domains.reduce(
    (res, domain) =>
      R.set(R.lensPath([domain["@id"], "domains", schema["@id"]]), schema, res),
    graph
  );
};
const normalizeGraph = graph => {
  return graph.reduce((normalizedGraph, schema) => {
    const res = { ...normalizedGraph };
    const key = schema["@id"];
    // add the schema to the result if it does not exist
    res[key] = schema;
    // fill the related entities fields (domain) with the current schema
    domains = getDomainsAsArray(schema);
    return fillDomains(res, schema, domains);
  }, {});
};

const generateVulcanSchemas = normalizeGraph;

const createFile = (outdir, filename, data) => {
  fs.writeFileSync(
    path.join(outdir, filename),
    JSON.stringify(data, undefined, 2),
    { encoding: "utf8", flag: "w" }
  );
};

const run = (schemasPath, outdir) => {
  R.compose(
    generateOutdir,
    getSchemas,
    generateVulcanSchemas,
    R.curry(createFile)(outdir)
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