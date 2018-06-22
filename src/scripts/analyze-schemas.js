/**
 * Perform a small analysis of our normalized file
 */
const openJSON = require("../utils/openJSON");
const SCHEMAS_PATH = "../../build/schemaorg-normalized.jsonld";

/**
 * Split schemas between properties and classes
 */
const classifySchemas = R.reduce(
  (res, entity) => {
    switch (entity["@type"]) {
      case "rdf:Property":
        return R.set(["classes", entity["@id"]], entity);
      case "rdf:Class":
    }
  },
  { classes: {}, properties: {} }
);

/**
 * List the range includes for properties
 * @param {*} schemas
 */
const listRangeIncludes = schemas => {};

const schemas = openJSON(SCHEMAS_PATH);
const { classes, properties } = classifySchemas(schemas);
