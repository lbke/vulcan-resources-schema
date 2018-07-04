const R = require("ramda");

const asArray = require("../../utils/asArray");

const getPossibleTypesAsArray = R.pipe(
  R.prop("possibleTypes"),
  asArray
);

const getPropertyType = (graph, schema) => {
  const possibleTypes = getPossibleTypesAsArray(schema);
  // TODO: should handle multiple types
  const possibleType = possibleTypes[0];
  // if the type is a class => String with id
  // if the type is a Property =>
  //    if it is a basic property, use the correct type and control
  //    else iterate to get the underlying basic property
};

const getPropertyLabel = R.pipe(
  R.prop("rdfs:label"),
  toFieldStr("label")
);

R.pipe(
  R.always("String"),
  toField("type")
);
/**
 * Create a vulcan property
 * @param {*} schema
 */
const convertProperty = propertySchema =>
  obj([
    ...DEFAULT_FIELD_PROPS,
    getPropertyType(propertySchema),
    getPropertyLabel(propertySchema)
  ]);

module.exports = convertProperty;
