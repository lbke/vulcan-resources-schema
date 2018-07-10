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
    "@type": "rdfs:Property",
    fields: {}
  });

const addSubProperty = (superPropertyId, subProperty) =>
  R.set(
    R.lensPath([superPropertyId, "fields", subProperty["id"]], subProperty)
  );

// TODO: handle the description field that is special with vulcan
const nestProperties = reduceOnly(hasSuperProperty, (resultGraph, schema) => {
  // pour chaque subProperty
  const superProperties = getSuperPropertiesAsArray(schema);
  return R.reduce((resGraph, superProperty) => {
    const superPropertyId = superProperty["@id"];
    const schemaId = schema["@id"];
    // créer si besoin le champ parent de type nested
    const graphWithSuperProperty = R.ifElse(
      R.has(superPropertyId),
      R.identity,
      createSuperProperty
    )(resGraph);
    return addSubProperty(superPropertyId, subProperty)(graphWithSuperProperty);
  }, resultGraph)(superProperties);
});

module.exports = {
  default: nestProperties
};
