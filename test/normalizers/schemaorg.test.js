const openJSON = require("../../src/utils/openJSON");
const VulcanSchemasGenerator = require("../../src/normalizers/shemaorg");
const {
  _normalizeGraph,
  _generateVulcanSchemas,
  _getGraph,
  SCHEMAS_PATH
} = VulcanSchemasGenerator;

describe("schemaorg.tests.js", () => {
  test("define the correct functions", () => {
    expect(_generateVulcanSchemas).toBeDefined();
    expect(_normalizeGraph).toBeDefined();
  });

  test("get the graph", () => {
    const graph = _getGraph(openJSON(SCHEMAS_PATH));
    expect(graph).toBeInstanceOf(Array);
    expect(graph.length).toBeGreaterThan(0);
  });

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
    expect(normalizedGraph[noRangeField["@id"]].possibleTypes).toBeUndefined();
  });
});
