/**
 * Nest the properties with multiple subproperties
 * Field "subPropertyOf"
 *
 */
const R = require("ramda");
const { hasSuperProperty, getSuperPropertiesAsArray } = require("./common");
const { isClass } = require("../common");
const reduceOnly = require("../../utils/reduceOnly");

const addFieldToGraph = R.curry((field, schemaId, graph) =>
  R.set(R.lensPath([schemaId, "fields", field["@id"]]), field)(graph)
);
const addFieldsToGraph = R.curry((fields, schemaId, graph) =>
  R.reduce(
    (newGraph, field) => addFieldToGraph(field, schemaId, newGraph),
    graph
  )(fields)
);
const addFieldToSchema = R.curry((field, schema) => ({
  ...schema,
  fields: {
    ...(schema.fields || {}),
    [field["@id"]]: field
  }
}));
//  R.set(R.lensPath(["fields", field["@id"]]), field)(schema)
const addFieldsToSchema = R.curry((fields, schema) =>
  R.reduce((newSchema, field) => addFieldToSchema(field, newSchema), schema)(
    fields
  )
);

const removeFieldFromSchema = R.curry((fieldId, schema) => {
  const newFields = R.omit([fieldId], schema.fields);
  return { ...schema, fields: newFields };
});

// create a new super property
const createSuperProperty = superPropertyId =>
  R.set(R.lensPath([superPropertyId]), {
    "@id": superPropertyId,
    "@type": "NestedObject",
    fields: {}
  });

/**
 * Add a subProperty to a superProperty. Create the superProperty if it does not exist yet.
 * @param {*} subProperty
 */
const generateSuperProperty = subProperty => (resGraph, superProperty) => {
  const superPropertyId = superProperty["@id"] + "Object";
  const newGraph = R.pipe(
    R.ifElse(
      R.has(superPropertyId),
      R.identity,
      createSuperProperty(superPropertyId)
    ),
    addFieldToGraph(subProperty, superPropertyId)
  )(resGraph);
  return newGraph;
};

// remove occurrence of a subproperty from the fields
const removeSubProperty = subProperty => graph => {
  const subPropertyId = subProperty["@id"];
  // get the super properties names
  const superProperties = getSuperPropertiesAsArray(subProperty);
  const superPropertiesIds = R.map(sp => `${sp["@id"]}Object`)(superProperties);
  const superPropertiesSchemas = R.map(id => graph[id])(superPropertiesIds);

  // for each schema
  return R.reduce((resGraph, schema) => {
    // if the schema is a class, remove the subProperty from the fields
    // and add the superProperties
    const cleanSchema = R.ifElse(
      isClass,
      R.pipe(
        removeFieldFromSchema(subPropertyId),
        addFieldsToSchema(superPropertiesSchemas)
      ),
      R.identity
    )(schema);
    // update the graph
    const newGraph = R.set(R.lensPath([schema["@id"]]), cleanSchema)(resGraph);
    return newGraph;
  }, graph)(R.values(graph));
  // delete the subproperty
  //return R.omit([subPropertyId], newGraph);
};

// TODO: handle the description field that is special with vulcan
const nestProperties = graph =>
  reduceOnly(
    hasSuperProperty,
    (resultGraph, subProperty) => {
      const superProperties = getSuperPropertiesAsArray(subProperty);
      const enhancedGraph = R.reduce(
        generateSuperProperty(subProperty),
        resultGraph
      )(superProperties);
      // TODO: replace subProperty with superProperty
      const cleanedGraph = removeSubProperty(subProperty)(enhancedGraph);
      console.log("Handling subProperty " + subProperty["@id"]);
      return cleanedGraph;
    },
    graph
  )(R.values(graph));

module.exports = {
  default: nestProperties
};
