/**
 * Nest the properties with multiple subproperties
 * Field "subPropertyOf"
 *
 */
const R = require("ramda");
const { hasSuperProperty, getSuperPropertiesAsArray } = require("./common");
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

// TODO: handle the description field that is special with vulcan
const nestProperties = graph =>
  reduceOnly(
    hasSuperProperty,
    (resultGraph, subProperty) => {
      const superProperties = getSuperPropertiesAsArray(subProperty);
      return R.reduce(generateSuperProperty(subProperty), resultGraph)(
        superProperties
      );
    },
    graph
  )(R.values(graph));

module.exports = {
  default: nestProperties
};
