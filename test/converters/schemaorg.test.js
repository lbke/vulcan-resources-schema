const SchemaOrg = require("../../src/converters/schemaorg");
const { _convertProperty, _convertClass, _generateVulcanSchemas } = SchemaOrg;
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
  const schemas = {
    [classSchema["@id"]]: classSchema
  };
  const richSchemas = {
    ["foo"]: { ...classSchema, "@id": "foo" },
    ["bar"]: { ...classSchema, "@id": "bar" }
  };
  const expectedPropertySchema = {
    label: "PropertyLabel",
    type: String
  };
  const expectedClassSchema = {
    "some-property": expectedPropertySchema
  };

  test("convert a property", () => {
    const vulcanSchema = _convertProperty(propertySchema);
    expect(vulcanSchema).toMatchObject(expectedPropertySchema);
  });
  test("convert a class", () => {
    const vulcanSchema = _convertClass(classSchema);
    expect(vulcanSchema).toMatchObject(expectedClassSchema);
  });
  test("convert a map of classes (one class)", () => {
    const vulcanSchemas = _generateVulcanSchemas(schemas);
    expect(vulcanSchemas).toBeInstanceOf(Object);
    expect(vulcanSchemas["some-class"]).toMatchObject(expectedClassSchema);
  });
  test("convert a map of classes (many classes)", () => {
    const vulcanSchemas = _generateVulcanSchemas(richSchemas);
    expect(vulcanSchemas).toBeInstanceOf(Object);
    expect(vulcanSchemas["foo"]).toMatchObject(expectedClassSchema);
    expect(vulcanSchemas["bar"]).toMatchObject(expectedClassSchema);
  });
});
