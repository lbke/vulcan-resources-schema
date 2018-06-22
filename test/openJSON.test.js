const VulcanSchemasGenerator = require("../src/normalizers/shemaorg");
const { SCHEMAS_PATH } = VulcanSchemasGenerator;

const openJSON = require("../src/utils/openJSON");

describe("utils/openJSON", () => {
  test("open a JSON file", () => {
    const schemas = openJSON(SCHEMAS_PATH);
    expect(schemas).toBeInstanceOf(Object);
    expect(Object.keys(schemas).length).toBeGreaterThan(0);
  });
});
