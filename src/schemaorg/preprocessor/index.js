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
const handleProperties = require("./handleProperties").default;
const nestProperties = require("./nestProperties").default;

/**
 * Fill the graph "fields" depending on the domainInclues
 * @param {*} graph The whole graph
 * @param {*} schema A low leval field
 * @param {*} domains An array of domains the low level field is included in
 */
const fillFields = graph =>
  R.pipe(
    R.values,
    R.reduce((resGraph, schema) => {
      // fill the related entities fields (domain) with the current schema
      domains = getDomainsAsArray(schema);
      if (!domains || R.isEmpty(domains)) return resGraph;
      const cleanSchema = R.omit(["domainIncludes"])(schema);
      // add the fields in the relevant schema
      return R.reduce(
        (currentGraph, domain) =>
          R.pipe(
            // set the class fields
            R.set(
              R.lensPath([domain["@id"], "fields", schema["@id"]]),
              cleanSchema
            ),
            // remove domain includes from the property
            R.set(R.lensPath([schema["@id"]]), cleanSchema)
          )(currentGraph),
        resGraph
      )(domains);
    }, graph)
  )(graph);

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
const fillPossibleTypes = graph =>
  R.map(schema => {
    const normalizedRanges = normalizeSchemaRanges(schema);
    if (!normalizedRanges || R.isEmpty(normalizedRanges)) return schema;
    const newSchema = R.pipe(
      R.set(R.lensPath(["possibleTypes"]), normalizedRanges),
      R.omit(["rangeIncludes"])
    )(schema);
    return newSchema;
  })(graph);

const normalizeGraph = R.reduce((normalizedGraph, schema) => {
  let res = { ...normalizedGraph };
  const key = schema["@id"];
  res[key] = schema;
  return res;
}, {});

/**
 * Normalize the graph (arrays become hashmaps)
 * @param {*} graph
 */
const restructureGraph = R.pipe(normalizeGraph);

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
    R.tap(() => console.log("Opening JSON")),
    openJSON,
    R.tap(() => console.log("Getting the graph")),
    getGraph,
    R.tap(() => console.log("Getting the graph")),
    scrapHttp,
    R.tap(() => console.log("Scrap the http")),
    restructureGraph,
    R.tap(() => console.log("Filling the possible types")),
    fillPossibleTypes,
    R.tap(() => console.log("Filling the possibleTypes of Properties")),
    handleProperties, // fill the properties with their possibleTypes
    R.tap(() => console.log("Filling the Class fields with own fields")),
    fillFields
    // this come after the fields are filled, maybe we could optimize this workflow
    // and avoid filling the fields beforehand
    R.tap(() => console.log("Generating nested properties")),
    nestProperties,
    R.tap(() =>
      console.log("Filling the Class fields with super classes fields")
    ),
    handleSuperClasses,
    R.curry(createFile)(outdir, "schemaorg-normalized.jsonld")
  )(schemasPath);
};

module.exports = {
  SCHEMAS_PATH,
  _getGraph: getGraph,
  _normalizeGraph: normalizeGraph,
  _fillPossibleTypes: fillPossibleTypes,
  _fillFields: fillFields,
  default: run
};
