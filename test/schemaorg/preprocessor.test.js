const R = require("ramda");
const openJSON = require("../../src/utils/openJSON");
const { hasSuperClass } = require("../../src/schemaorg/preprocessor/common");
const {
  _mergeSuperClasses,
  default: handleSuperClasses
} = require("../../src/schemaorg/preprocessor/handleSuperClasses");
const {
  default: handleProperties
} = require("../../src/schemaorg/preprocessor/handleProperties");
const {
  default: nestProperties
} = require("../../src/schemaorg/preprocessor/nestProperties");
const VulcanSchemasGenerator = require("../../src/schemaorg/preprocessor/index");
const {
  _normalizeGraph,
  _getGraph,
  _fillFields,
  _fillPossibleTypes,
  SCHEMAS_PATH
} = VulcanSchemasGenerator;

describe("schemaorg.tests.js", () => {
  describe("common", () => {
    test("get the graph", () => {
      const graph = _getGraph(openJSON(SCHEMAS_PATH));
      expect(graph).toBeInstanceOf(Array);
      expect(graph.length).toBeGreaterThan(0);
    });
    describe("hasSuperClass", () => {
      test("object", () => {
        const schema = { "rdfs:subClassOf": { "@id": "foobar" } };
        expect(hasSuperClass(schema)).toEqual(true);
      });
      test("array", () => {
        const schema = { "rdfs:subClassOf": [{ "@id": "foobar" }] };
        expect(hasSuperClass(schema)).toEqual(true);
      });
      test("undefined", () => {
        const schema = {};
        expect(hasSuperClass(schema)).toEqual(false);
      });
      test("empty array", () => {
        const schema = { "rdfs:subClassOf": [] };
        expect(hasSuperClass(schema)).toEqual(false);
      });
    });
  });

  describe("normalization", () => {
    const coffeeShop = {
      "@id": "CafeOrCoffeeShop"
    };
    test("transform the graph into a normalized hashMap", () => {
      const graph = [coffeeShop];
      const result = { [coffeeShop["@id"]]: coffeeShop };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });
  });

  describe("fillFields", () => {
    const CafeOrCoffeeShop = {
      "@id": "CafeOrCoffeeShop"
    };
    const Restaurant = {
      "@id": "Restaurant"
    };
    const someFieldId = {
      "@id": "someField"
    };
    const someField = {
      ...someFieldId,
      domainIncludes: {
        "@id": CafeOrCoffeeShop["@id"]
      }
    };
    test("fill fields of a class (one field one domain)", () => {
      const graph = { CafeOrCoffeeShop, someField };
      const result = {
        [CafeOrCoffeeShop["@id"]]: {
          ...CafeOrCoffeeShop,
          fields: { [someField["@id"]]: someFieldId }
        },
        [someField["@id"]]: someFieldId
      };
      const normalizedGraph = _fillFields(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("fill fields of a class (one field many domains)", () => {
      const someField = {
        ...someFieldId,
        domainIncludes: [
          {
            "@id": CafeOrCoffeeShop["@id"]
          },
          {
            "@id": Restaurant["@id"]
          }
        ]
      };
      const graph = { CafeOrCoffeeShop, Restaurant, someField };
      const result = {
        [CafeOrCoffeeShop["@id"]]: {
          ...CafeOrCoffeeShop,
          fields: { [someField["@id"]]: someFieldId }
        },
        [Restaurant["@id"]]: {
          ...Restaurant,
          fields: { [someField["@id"]]: someFieldId }
        },
        [someField["@id"]]: someFieldId
      };
      const normalizedGraph = _fillFields(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("fill fields of class a graph when domain not yet seen(one field many domains)", () => {
      const someField = {
        ...someFieldId,
        domainIncludes: [{ "@id": "CafeOrCoffeeShop" }, { "@id": "Restaurant" }]
      };
      const graph = { CafeOrCoffeeShop, someField };
      const result = {
        [CafeOrCoffeeShop["@id"]]: {
          ...CafeOrCoffeeShop,
          fields: { [someField["@id"]]: someFieldId }
        },
        [Restaurant["@id"]]: {
          fields: { [someField["@id"]]: someFieldId }
        },
        [someField["@id"]]: someFieldId
      };
      const normalizedGraph = _fillFields(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });

    test("remove the domainIncludes field in the class after processing", () => {
      const graph = { CafeOrCoffeeShop, someField };
      const result = someFieldId;
      const normalizedGraph = _fillFields(graph);
      expect(
        normalizedGraph[CafeOrCoffeeShop["@id"]].fields[someField["@id"]]
      ).toMatchObject(result);
    });
    test("remove the domainIncludes field in the property after processing", () => {
      const graph = { CafeOrCoffeeShop, someField };
      const normalizedGraph = _fillFields(graph);
      expect(normalizedGraph[someField["@id"]]).toMatchObject(someFieldId);
    });
  });

  describe("fillePossibleTypes (rangeIncludes)", () => {
    // rangeIncludes (= possibleTypes for the entity)
    const rangeFieldId = { "@id": "someRangeField" };
    const someTypeId = { "@id": "someType" };
    test("normalize the rangeIncludes (one range)", () => {
      const rangeField = {
        ...rangeFieldId,
        rangeIncludes: {
          ...someTypeId
        }
      };
      const graph = { someRangeField: rangeField };
      const result = {
        [rangeField["@id"]]: {
          ...rangeFieldId,
          possibleTypes: {
            [someTypeId["@id"]]: someTypeId
          }
        }
      };
      const normalizedGraph = _fillPossibleTypes(graph);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("normalize the rangeIncludes (multiple ranges)", () => {
      const someOtherTypeId = { "@id": "someOtherType" };
      const rangeField = {
        ...rangeFieldId,
        rangeIncludes: [someTypeId, someOtherTypeId]
      };
      const graph = { someRangeField: rangeField };
      const result = {
        [rangeField["@id"]]: {
          ...rangeFieldId,
          possibleTypes: {
            [someTypeId["@id"]]: someTypeId,
            [someOtherTypeId["@id"]]: someOtherTypeId
          }
        }
      };
      const normalizedGraph = _fillPossibleTypes(graph);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("should not add the possibleTypes prop when there are no types", () => {
      const noRangeField = {
        ...rangeFieldId
      };
      const graph = { someRangeField: noRangeField };
      const normalizedGraph = _fillPossibleTypes(graph);
      expect(
        normalizedGraph[noRangeField["@id"]].possibleTypes
      ).toBeUndefined();
    });
  });

  describe("handleProperties", () => {
    const property = {
      "@id": "withType",
      "@type": "rdfs:Property"
    };
    const propertyOneClass = {
      ...property,
      possibleTypes: {
        someClass: { "@id": "someClass" }
      }
    };
    const propertyOneSubproperty = {
      ...property,
      possibleTypes: {
        someProperty: { "@id": "someProperty" }
      }
    };
    const someProperty = {
      "@id": "someProperty",
      "@type": "rdfs:Property",
      foo: "bar"
    };
    const someClass = {
      "@id": "someClass",
      "@type": "rdfs:Class",
      smth: 42
    };
    test("load a property definition", () => {
      const graph = { propertyOneSubproperty, someProperty };
      const res = handleProperties(graph);
      expect(
        res.propertyOneSubproperty.possibleTypes[someProperty["@id"]]
      ).toEqual(someProperty);
    });
    test("add the type to class fields", () => {
      const graph = { propertyOneClass, someClass };
      const res = handleProperties(graph);
      const expectedRes = R.omit(["smth"], someClass);
      expect(res.propertyOneClass.possibleTypes[someClass["@id"]]).toEqual(
        expectedRes
      );
    });
  });

  describe("nestProperties", () => {
    const logo = {
      "@id": "logo",
      "@type": "rdf:Property",
      "rdfs:subPropertyOf": {
        "@id": "image"
      },
      possibleTypes: {
        URL: {
          "@id": "URL",
          "@type": "rdfs:Class"
        }
      }
    };
    const photo = {
      "@id": "photo",
      "@type": "rdf:Property",
      "rdfs:subPropertyOf": {
        "@id": "image"
      },
      possibleTypes: {
        URL: {
          "@id": "URL",
          "@type": "rdfs:Class"
        }
      }
    };
    const SomeClass = {
      "@id": "SomeClass",
      "@type": "rdfs:Class",
      fields: {
        logo: {
          "@id": "logo"
        }
      }
    };
    test("generate the nested property", () => {
      const graph = { logo };
      const res = nestProperties(graph);
      const imageObject = res["imageObject"];
      expect(imageObject).toBeDefined();
      expect(imageObject).toBeInstanceOf(Object);
      expect(imageObject["@id"]).toEqual("imageObject");
      expect(imageObject["@type"]).toEqual("Nested");
    });
    test("replace the fields in the classes with the superproperty property", () => {
      const graph = { SomeClass, logo };
      const res = nestProperties(graph);
      const imageObject = res["SomeClass"]["fields"]["imageObject"];
      expect(imageObject).toBeDefined();
      expect(imageObject).toBeInstanceOf(Object);
      expect(imageObject["@id"]).toEqual("imageObject");
    });
    test("remove the unnecessary fields", () => {
      const graph = { SomeClass, logo };
      const res = nestProperties(graph);
      const logoRes = res["SomeClass"]["fields"]["logo"];
      expect(logoRes).toBeUndefined();
    });
  });

  describe("handleSuperClasses", () => {
    const subClass = {
      "@id": "subClass",
      fields: {
        foo: 42
      },
      "rdfs:subClassOf": {
        "@id": "superClass"
      }
    };
    const superClass = {
      "@id": "superClass",
      fields: {
        bar: 34
      }
    };
    test("fill the subclass fields with the superclass fields", () => {
      const graph = { subClass, superClass };
      const res = handleSuperClasses(graph);
      const expectedRes = { foo: 42, bar: 34 };
      expect(res).toBeDefined();
      expect(res["subClass"]).toBeDefined();
      expect(res["subClass"].fields).toEqual(expectedRes);
    });

    describe("recursive inheritance and multiple classes", () => {
      const intermediateClass = {
        "@id": "intermediateClass",
        fields: {
          intermediate: 42
        },
        "rdfs:subClassOf": {
          "@id": "superClass"
        }
      };
      const intermediateClassMultiple = {
        "@id": "intermediateClassMultiple",
        fields: {
          interMultiple: "smth"
        },
        "rdfs:subClassOf": [
          {
            "@id": "superClass2"
          },
          { "@id": "superClass3" }
        ]
      };
      test("store the parent superClass to allow recursive calls", () => {
        const newSubClass = {
          ...subClass,
          "rdfs:subClassOf": {
            "@id": "intermediateClass"
          }
        };
        const graph = { subClass: newSubClass, intermediateClass, superClass };
        const res = _mergeSuperClasses(graph).res;
        expect(res["subClass"]["rdfs:subClassOf"]).toEqual([
          {
            "@id": "superClass"
          }
        ]);
      });
      test("handle multiple level of inheritance recursively", () => {
        const newSubClass = {
          ...subClass,
          "rdfs:subClassOf": {
            "@id": "intermediateClass"
          }
        };
        const graph = { subClass: newSubClass, intermediateClass, superClass };
        const res = handleSuperClasses(graph);
        const fields = res["subClass"].fields;
        expect(fields).toEqual({
          foo: 42,
          intermediate: 42,
          bar: 34
        });
      });
      test("store the super class own super classes to allow recursive calls - multiple", () => {
        const newSubClass = {
          ...subClass,
          "rdfs:subClassOf": [
            {
              "@id": "intermediateClass"
            },
            { "@id": "intermediateClassMultiple" }
          ]
        };
        const graph = {
          subClass: newSubClass,
          intermediateClass,
          intermediateClassMultiple,
          superClass,
          superClass2: {},
          superClass3: {}
        };
        const res = _mergeSuperClasses(graph).res;
        const newSubClassOf = res["subClass"]["rdfs:subClassOf"];
        expect(newSubClassOf).toBeInstanceOf(Array);
        expect(newSubClassOf.map(R.prop("@id"))).toEqual([
          "superClass",
          "superClass2",
          "superClass3"
        ]);
      });
      test("handle multiple superClass", () => {
        const newSubClass = {
          ...subClass,
          "rdfs:subClassOf": [
            {
              "@id": "intermediateClass"
            },
            { "@id": "intermediateClassMultiple" }
          ]
        };
        const graph = {
          subClass: newSubClass,
          intermediateClass,
          intermediateClassMultiple,
          superClass,
          superClass2: {},
          superClass3: {}
        };
        const res = handleSuperClasses(graph);
        const fields = res["subClass"]["fields"];
        expect(fields).toEqual({
          foo: 42,
          bar: 34,
          intermediate: 42,
          interMultiple: "smth"
        });
      });
    });
  });
});
