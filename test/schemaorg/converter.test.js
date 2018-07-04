const SchemaOrg = require("../../src/schemaorg/converter");
const { _convertProperty, _convertClass, _generateVulcanSchemas } = SchemaOrg;
const {
  _handleType
} = require("../../src/schemaorg/converter/convertProperty");
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
  describe("convertProperty", () => {
    const property = {
      "@id": "withType",
      "@type": "rdfs:Property"
    };
    const propertyOneClass = {
      ...property,
      possibleTypes: {
        someClass: { "@id": "SomeClass", "@type": "rdfs:Class" }
      }
    };
    const propertyOneSubproperty = {
      ...property,
      possibleTypes: {
        someProperty: { "@id": "someProperty", "@type": "rdfs:Property" }
      }
    };
    const someProperty = {
      "@id": "someProperty",
      "@type": "rdfs:Property",
      foo: "bar"
    };

    test("type is String when possibleTypes is one class", () => {
      const res = _handleType(propertySchema);
      expect(res[0]).toEqual({ key: "type", value: "String" });
    });
    test.skip("set resolveAs when possibleTypes is one class", () => {
      const res = _handleType(propertySchema);
      //expect(res[1]).toEqual({ key: "resolveAs", value: "..." });
    });
    test("type is String when possibleTypes is one property and is a String", () => {
      const res = _handleType(propertySchema);
      expect(res[0]).toEqual({ key: "type", value: "String" });
    });
  });

  describe("convertClass", () => {
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
});
