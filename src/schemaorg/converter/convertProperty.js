const R = require("ramda");
const JSGenerator = require("../../utils/JSGenerator");
const DEFAULT_FIELD_PROPS = require("../../config/defaultFieldProperties");
const { obj, toField, toFieldStr } = JSGenerator;
const { isClass, getTypesAsArray } = require("../common");

const handleType = (graph, schema) => {
  const possibleTypes = getTypesAsArray(schema);
  // TODO: should handle multiple types
  const possibleType = possibleTypes[0];
  if (isClass) {
    return [
      toField("type", "String")
      // TODO: resolveAs
      //toField('resolveAs')
    ];
  } else {
    // TODO: write a switch
    console.log("Property type is:", possibleType);
    return [toField("type", "String")];
  }
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
    ...handleType(propertySchema),
    getPropertyLabel(propertySchema)
  ]);

module.exports = {
  _handleType: handleType,
  default: convertProperty
};
