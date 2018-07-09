/**
 * Convert a normalized schemaorg schema into a Vulcan schema
 */

// those basic properties are common to any Vulcan schema,
// we add them systematically
const R = require("ramda");
const fs = require("fs");
const path = require("path");
const openJSON = require("../../utils/openJSON");
const createOutdir = require("../../utils/createOutdir");
const prettify = require("../../utils/prettify");
const JSGenerator = require("../../utils/JSGenerator");
const { arr, es6ExportDefault, es6Export, declareConst, str } = JSGenerator;
const convertProperty = require("./convertProperty").default;
const convertClass = require("./convertClass").default;
const { isClass } = require("../common");

const BUILD_PATH = path.resolve(__dirname, "../../../build");
const SCHEMAS_PATH = path.join(BUILD_PATH, "./schemaorg-normalized.jsonld");

const getId = R.prop("@id");

const exportSchema = schema =>
  R.compose(
    es6Export,
    declareConst(getId(schema))
  )(schema);

const addDefaultExport = schema =>
  R.flip(R.concat)(`\nexport default ${getId(schema)}`); // add a default export

const generateSchema = schema =>
  R.pipe(
    R.tap(() => {
      console.log("Generating schema ", schema["@id"]);
    }),
    convertClass, // actually generate the schema
    exportSchema, // export const NAME = {...},
    addDefaultExport, // add an export default NAME
    prettify
  )(schema);

const generateVulcanSchemas = R.pipe(
  R.filter(isClass), // right now we export only classes
  R.values, // schemas is an object so we must convert it to an array
  R.map(classSchema => ({
    name: getId(classSchema),
    schema: generateSchema(classSchema)
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

const writeSchemaFile = ({ name, schema }) => {
  const filePath = path.resolve(
    BUILD_PATH,
    "./schemas/",
    `./${schemaFileName(name)}`
  );
  fs.writeFileSync(filePath, schema, { encoding: "utf8", flag: "w" });
};

const writeIndexFile = R.pipe(
  R.tap(() => console.log("Generating the index file")),
  generateIndex,
  index => {
    const filePath = path.join(BUILD_PATH, "./schemas/", "./index.js");
    fs.writeFileSync(filePath, index, { encoding: "utf8", flag: "w" });
  }
);

const writeNamesTableFile = R.pipe(
  R.tap(() => console.log("Generating the tablesName file")),
  generateNamesTable,
  table => {
    const filePath = path.join(BUILD_PATH, "./schemasNames.js");
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
  R.map(writeSchemaFile)(schemas);
  // generate the index
  writeIndexFile(schemas);
  writeNamesTableFile(schemas);
};

module.exports = {
  _convertProperty: convertProperty,
  _convertClass: convertClass,
  _generateVulcanSchemas: generateVulcanSchemas,
  default: run
};
