const openJSON = require("../../src/utils/openJSON");
const VulcanSchemasGenerator = require("../../src/normalizers/shemaorg");
const {
  _normalizeGraph,
  _handleSuperClasses,
  _getGraph,
  SCHEMAS_PATH
} = VulcanSchemasGenerator;

describe("schemaorg.tests.js", () => {
  describe("utils", () => {
    test("get the graph", () => {
      const graph = _getGraph(openJSON(SCHEMAS_PATH));
      expect(graph).toBeInstanceOf(Array);
      expect(graph.length).toBeGreaterThan(0);
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

  describe("superClasses", () => {
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
      const res = _handleSuperClasses(graph);
      const expectedRes = { foo: 42, bar: 34 };
      expect(res).toBeDefined();
      expect(res["subClass"]).toBeDefined();
      expect(res["subClass"].fields).toEqual(expectedRes);
    });
    test.skip("handle multiple level of inheritance recursively", () => {
      expect(false).toBe(true);
    });
    test.skip("handle multiple superClass", () => {
      expect(false).toBe(true);
    });
  });
});
