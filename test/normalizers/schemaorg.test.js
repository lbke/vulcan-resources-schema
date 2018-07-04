const R = require("ramda");
const openJSON = require("../../src/utils/openJSON");
const { hasSuperClass } = require("../../src/normalizers/schemaorg/common");
const {
  _mergeSuperClasses,
  default: handleSuperClasses
} = require("../../src/normalizers/schemaorg/handleSuperClasses");
const {
  default: handleTypes
} = require("../../src/normalizers/schemaorg/handleTypes");
const VulcanSchemasGenerator = require("../../src/normalizers/schemaorg/index");
const { _normalizeGraph, _getGraph, SCHEMAS_PATH } = VulcanSchemasGenerator;

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
    const restaurant = {
      "@id": "Restaurant"
    };
    test("normalize a schema with no domains", () => {
      const graph = [coffeeShop];
      const result = { [coffeeShop["@id"]]: coffeeShop };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });

    const someFieldId = {
      "@id": "somefield"
    };
    const someField = {
      ...someFieldId,
      domainIncludes: {
        "@id": coffeeShop["@id"]
      }
    };
    test("normalize a graph (one field one domain)", () => {
      const graph = [coffeeShop, someField];
      const result = {
        [coffeeShop["@id"]]: {
          ...coffeeShop,
          fields: { [someField["@id"]]: someFieldId }
        },
        [someField["@id"]]: someFieldId
      };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("normalize a graph (one field many domains)", () => {
      const someField = {
        ...someFieldId,
        domainIncludes: [
          {
            "@id": coffeeShop["@id"]
          },
          {
            "@id": restaurant["@id"]
          }
        ]
      };
      const graph = [coffeeShop, restaurant, someField];
      const result = {
        [coffeeShop["@id"]]: {
          ...coffeeShop,
          fields: { [someField["@id"]]: someFieldId }
        },
        [restaurant["@id"]]: {
          ...restaurant,
          fields: { [someField["@id"]]: someFieldId }
        },
        [someField["@id"]]: someFieldId
      };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("normalize a graph when domain not yet seen(one field many domains)", () => {
      const someField = {
        ...someFieldId,
        domainIncludes: [{ "@id": "CafeOrCoffeeShop" }, { "@id": "Restaurant" }]
      };
      const graph = [coffeeShop, someField];
      const result = {
        [coffeeShop["@id"]]: {
          ...coffeeShop,
          fields: { [someField["@id"]]: someFieldId }
        },
        [restaurant["@id"]]: {
          fields: { [someField["@id"]]: someFieldId }
        },
        [someField["@id"]]: someFieldId
      };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toBeInstanceOf(Object);
      expect(normalizedGraph).toMatchObject(result);
    });

    test("remove the domainIncludes field from domains", () => {
      const graph = [coffeeShop, someField];
      const result = someFieldId;
      const normalizedGraph = _normalizeGraph(graph);
      expect(
        normalizedGraph[coffeeShop["@id"]].fields[someField["@id"]]
      ).toMatchObject(result);
    });
  });

  describe("rangeIncludes (possibleTypes)", () => {
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
      const graph = [rangeField];
      const result = {
        [rangeField["@id"]]: {
          ...rangeFieldId,
          possibleTypes: {
            [someTypeId["@id"]]: someTypeId
          }
        }
      };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("normalize the rangeIncludes (multiple ranges)", () => {
      const someOtherTypeId = { "@id": "someOtherType" };
      const rangeField = {
        ...rangeFieldId,
        rangeIncludes: [someTypeId, someOtherTypeId]
      };
      const graph = [rangeField];
      const result = {
        [rangeField["@id"]]: {
          ...rangeFieldId,
          possibleTypes: {
            [someTypeId["@id"]]: someTypeId,
            [someOtherTypeId["@id"]]: someOtherTypeId
          }
        }
      };
      const normalizedGraph = _normalizeGraph(graph);
      expect(normalizedGraph).toMatchObject(result);
    });
    test("should not add the possibleTypes prop when there are no types", () => {
      const someOtherTypeId = { "@id": "someOtherType" };
      const noRangeField = {
        ...rangeFieldId
      };
      const graph = [noRangeField];
      const normalizedGraph = _normalizeGraph(graph);
      expect(
        normalizedGraph[noRangeField["@id"]].possibleTypes
      ).toBeUndefined();
    });
  });

  describe("handleTypes", () => {
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
      const res = handleTypes(graph);
      expect(
        res.propertyOneSubproperty.possibleTypes[someProperty["@id"]]
      ).toEqual(someProperty);
    });
    test("add the type to class fields", () => {
      const graph = { propertyOneClass, someClass };
      const res = handleTypes(graph);
      const expectedRes = R.omit(["smth"], someClass);
      expect(res.propertyOneClass.possibleTypes[someClass["@id"]]).toEqual(
        expectedRes
      );
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
