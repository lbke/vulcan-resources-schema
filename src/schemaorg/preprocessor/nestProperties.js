/**
 * Nest the properties with multiple subproperties
 * Field "subPropertyOf"
 *
 */
const R = require("ramda");
const { hasSuperProperty, getSuperPropertiesAsArray } = require("./common");
const { isClass } = require("../common");
const reduceOnly = require("../../utils/reduceOnly");

// create a new super property
const createSuperProperty = superPropertyId =>
  R.set(R.lensPath([superPropertyId]), {
    "@id": superPropertyId,
    "@type": "Nested",
    fields: {}
  });
// add a subproperty to an existing superProperty
const addSubProperty = (superPropertyId, subProperty) =>
  R.set(
    R.lensPath([superPropertyId, "fields", subProperty["@id"]]),
    subProperty
  );

const generateSuperProperty = subProperty => (resGraph, superProperty) => {
  const superPropertyId = superProperty["@id"] + "Object";
  const newGraph = R.pipe(
    R.ifElse(
      R.has(superPropertyId),
      R.identity,
      createSuperProperty(superPropertyId)
    ),
    addSubProperty(superPropertyId, subProperty)
  )(resGraph);
  return newGraph;
};

const removeSubPropertyFromFields = subPropertyId => schema => {
  const newFields = R.omit([subPropertyId], schema.fields);
  return { ...schema, fields: newFields };
};

// remove occurrence of a subproperty from the fields
const removeSubProperty = subProperty => graph => {
  const subPropertyId = subProperty["@id"];
  const removeCurrentSubPropertyFromFields = removeSubPropertyFromFields(
    subPropertyId
  );
  // for each schema
  return R.reduce((resGraph, schema) => {
    // if the schema is a class, remove the subProperty from the fields
    const cleanSchema = R.ifElse(
      isClass,
      removeCurrentSubPropertyFromFields,
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
      return cleanedGraph;
    },
    graph
  )(R.values(graph));

module.exports = {
  default: nestProperties
};
