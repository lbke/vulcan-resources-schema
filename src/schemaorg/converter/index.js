/**
 * Convert a normalized schemaorg schema into a Vulcan schema
 */

// those basic properties are common to any Vulcan schema,
// we add them systematically
const R = require("ramda");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const DEFAULT_PROPS = require("../../config/defaultProperties");
const openJSON = require("../../utils/openJSON");
const createOutdir = require("../../utils/createOutdir");
const prettify = require("../../utils/prettify");
const JSGenerator = require("../../utils/JSGenerator");
const {
  objField,
  arr,
  es6ExportDefault,
  obj,
  str,
  toField,
  toFieldStr
} = JSGenerator;
const convertProperty = require("./convertProperty");

const SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../build/schemaorg-normalized.jsonld"
);

const isClass = R.propEq("@type", "rdfs:Class");

const convertClass = R.pipe(
  R.prop("fields"),
  R.values,
  R.map(field => toField(field["@id"], convertProperty(field))),
  // add default props
  R.flip(R.concat)(DEFAULT_PROPS),
  obj
);

const generateVulcanSchemas = R.pipe(
  // right now we handle only classes
  R.filter(isClass),
  R.values, // schemas is an object so we must convert
  R.map(classSchema => ({
    name: R.prop("@id")(classSchema),
    schema: R.pipe(
      R.tap(() => {
        console.log("Generating schema ", classSchema["@id"]);
      }),
      convertClass,
      es6ExportDefault,
      prettify
    )(classSchema)
  }))
);

const schemaFileName = name => `${name}.schema.js`;
// generate the index.js from the schemas
const generateIndex = R.pipe(
  R.map(
    ({ name, schema }) =>
      `export { default as ${name} } from "./${schemaFileName(name)}"`
  ),
  R.join("\n"),
  prettify
);

// generate an array of the existing tables
const generateNamesTable = R.pipe(
  R.map(
    R.pipe(
      R.prop("name"),
      str
    )
  ),
  arr,
  es6ExportDefault,
  prettify
);

const exportSchema = ({ name, schema }) => {
  const filePath = path.resolve(
    __dirname,
    "../../build/schemas",
    `./${schemaFileName(name)}`
  );
  fs.writeFileSync(filePath, schema, { encoding: "utf8", flag: "w" });
};

const exportIndex = R.pipe(
  R.tap(() => console.log("Generating the index file")),
  generateIndex,
  index => {
    const filePath = path.resolve(__dirname, "../../build/schemas", "index.js");
    fs.writeFileSync(filePath, index, { encoding: "utf8", flag: "w" });
  }
);

const exportNamesTable = R.pipe(
  R.tap(() => console.log("Generating the tablesName file")),
  generateNamesTable,
  table => {
    const filePath = path.resolve(__dirname, "../../build", "schemasNames.js");
    fs.writeFileSync(filePath, table, { encoding: "utf8", flag: "w" });
  }
);

const run = () => {
  createOutdir();
  const schemas = R.pipe(
    () => openJSON(SCHEMAS_PATH),
    generateVulcanSchemas
  )();
  // generate the schemas
  R.map(exportSchema)(schemas);
  // generate the index
  exportIndex(schemas);
  exportNamesTable(schemas);
};

module.exports = {
  _convertProperty: convertProperty,
  _convertClass: convertClass,
  _generateVulcanSchemas: generateVulcanSchemas,
  default: run
};
