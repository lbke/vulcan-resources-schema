const test = require("tape");
const VulcanSchemasGenerator = require("../src/converters/shemaorg");
const { SCHEMAS_PATH } = VulcanSchemasGenerator;

const openJSON = require("../src/utils/openJSON");

test("open a JSON file", t => {
  const schemas = openJSON(SCHEMAS_PATH);
  t.ok(typeof schemas === "object");
  t.ok(Object.keys(schemas).length > 0);
  t.end();
});
