const SchemaOrg = require("../../src/converters/schemaorg");
const { _convertProperty, _convertClass } = SchemaOrg;
describe("converters/schemaorg", () => {
  const propertySchema = {
    "@id": "some-property",
    "rdfs:label": "PropertyLabel",
    "@type": "rdfs:Property"
  };
  const classSchema = {
    "@id": "some-class",
    "rdfs:label": "ClassLabel",
    "@type": "rdfs:Class",
    fields: {
      [propertySchema["@id"]]: propertySchema
    }
  };
  const expectedPropertySchema = {
    label: "PropertyLabel",
    type: String
  };
  test("convert a property", () => {
    const vulcanSchema = _convertProperty(propertySchema);
    expect(vulcanSchema).toMatchObject(expectedPropertySchema);
  });
  test("convert a class", () => {
    const vulcanSchema = _convertClass(classSchema);
    expect(vulcanSchema).toMatchObject({
      "some-property": expectedPropertySchema
    });
  });
});
