const R = require("ramda");
const JSGenerator = require("../../utils/JSGenerator");
const DEFAULT_FIELD_PROPS = require("../../config/defaultFieldProperties");
const { obj, toField, toFieldStr, arrowFunc, commaSeparated } = JSGenerator;
const { isClass, getTypesAsArray } = require("../common");

const handleType = (graph, schema) => {
  const possibleTypes = getTypesAsArray(schema);
  // TODO: should handle multiple types
  const possibleType = possibleTypes[0];
  if (isClass) {
    console.log("Class type is:", possibleType);
    return [
      // TODO: resolveAs
      toField(
        "resolveAs",
        obj([
          toFieldStr("fieldName", possibleType + "Resolved"),
          toFieldStr("type", possibleType),
          toField(
            "resolver",
            arrowFunc(
              commaSeparated(["document", "args", "context"]),
              `
        return context.${possibleType}.findOne(
          { _id: document.${possibleType} },
          {
            fields: context.${possibleType}.getViewableFields(
              context.currentUser,
              context.${possibleType}
            )
          }
        );
       `
            )
          ),
          toField("optional", "true")
        ])
      )
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
