/**
 * Convert a normalized schemaorg schema into a Vulcan schema
 */

// those basic properties are common to any Vulcan schema,
// we add them systematically
const R = require("ramda");
const path = require("path");
const DEFAULT_PROPS = require("./defaultProperties");
const DEFAULT_FIELD_PROPS = require("./defaultFieldProperties");
const openJSON = require("../utils/openJSON");
const createOutdir = require("../utils/createOutdir");
const writeJSON = require("../utils/writeJSON");

const SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../build/schemaorg-normalized.jsonld"
);

const getPropertyLabel = R.prop("rdfs:label");
const getPropertyType = R.always(String);

const isClass = R.propEq("@type", "rdfs:Class");

/**
 * Create a vulcan property
 * @param {*} schema
 */
const convertProperty = propertySchema => ({
  ...DEFAULT_FIELD_PROPS,
  type: getPropertyType(propertySchema),
  label: getPropertyLabel(propertySchema)
});

const convertClass = R.pipe(
  R.prop("fields"),
  R.values, // reduce does not accept object contrary to map
  R.reduce(
    (res, field) => ({
      ...res,
      [field["@id"]]: convertProperty(field)
    }),
    { ...DEFAULT_PROPS }
  )
);

const generateVulcanSchemas = R.pipe(
  // right now we handle only classes
  R.filter(isClass),
  R.reduce(
    (res, classSchema) => ({
      ...res,
      [classSchema["@id"]]: convertClass(classSchema)
    }),
    {}
  )
);

const run = R.pipe(
  () => openJSON(SCHEMAS_PATH),
  generateVulcanSchemas,
  createOutdir,
  writeJSON(undefined, "schemaorg-vulcanized.jsonld")
);

module.exports = {
  _convertProperty: convertProperty,
  _convertClass: convertClass,
  default: run
};
