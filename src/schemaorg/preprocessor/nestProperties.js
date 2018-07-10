/**
 * Nest the properties with multiple subproperties
 * Field "subPropertyOf"
 *
 */
const R = require("ramda");
const { hasSuperProperty, getSuperPropertiesAsArray } = require("./common");
const reduceOnly = require("../../utils/reduceOnly");

const createSuperProperty = superPropertyId =>
  R.set(R.lensPath([superPropertyId]), {
    "@id": superPropertyId,
    "@type": "Nested",
    fields: {}
  });

const addSubProperty = (superPropertyId, subProperty) =>
  R.set(
    R.lensPath([superPropertyId, "fields", subProperty["@id"]]),
    subProperty
  );

// TODO: handle the description field that is special with vulcan
const nestProperties = graph =>
  reduceOnly(
    hasSuperProperty,
    (resultGraph, schema) => {
      // pour chaque subProperty
      const superProperties = getSuperPropertiesAsArray(schema);
      return R.reduce((resGraph, superProperty) => {
        const superPropertyId = superProperty["@id"] + "Object";
        const newGraph = R.pipe(
          R.ifElse(
            R.has(superPropertyId),
            R.identity,
            createSuperProperty(superPropertyId)
          ),
          addSubProperty(superPropertyId, schema)
        )(resGraph);
        return newGraph;
      }, resultGraph)(superProperties);
    },
    graph
  )(R.values(graph));

module.exports = {
  default: nestProperties
};
