const R = require("ramda");
const JSGenerator = require("../../utils/JSGenerator");
const DEFAULT_FIELD_PROPS = require("../../config/defaultFieldProperties");
const {
  obj,
  toField,
  paren,
  toFieldStr,
  arrowFunc,
  commaSeparated
} = JSGenerator;
const { isNested, isClass, getTypesAsArray } = require("../common");
const { generateDescriptionFields } = require("./common");

const DATA_TYPES = [
  "Boolean",
  "Date",
  "DateTime",
  "Number",
  "String",
  "Time",
  "URL"
];

const handleClassType = possibleTypeName => [
  // TODO: resolveAs
  toField(
    "resolveAs",
    obj([
      toFieldStr("fieldName", possibleTypeName + "Resolved"),
      toFieldStr("type", possibleTypeName),
      toField(
        "resolver",
        arrowFunc(
          commaSeparated(["document", "args", "context"]),
          `
        return context.${possibleTypeName}.findOne(
          { _id: document.${possibleTypeName} },
          {
            fields: context.${possibleTypeName}.getViewableFields(
              context.currentUser,
              context.${possibleTypeName}
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
const handlePropertyType = possibleTypeName => {
  switch (possibleTypeName) {
    //@see https://github.com/VulcanJS/Vulcan/blob/devel/packages/vulcan-forms/lib/components/FormComponent.jsx#L56
    case "Boolean":
      return [toField("type", "Boolean"), toFieldStr("input", "checkbox")];
    case "Date":
      return [toField("type", "Date")];
    case "DateTime":
      return [toField("type", "Date"), toFieldStr("input", "datetime")];
    case "Number":
      return [toField("type", "Number"), toFieldStr("input", "number")];
    case "Text":
      return [toField("type", "String")];
    case "Time":
      return [toField("type", "Date"), toFieldStr("input", "time")];
    case "URL":
      return [toField("type", "String"), toFieldStr("input", "url")];

    default:
      /*console.log(
          `Possible types for ${schema["@id"]}: ${possibleTypes.map(
            p => p["@id"]
          )}`
        );*/
      return [toField("type", "String")];
  }
};

/**
 * Generate object field properties
 * type: new SimpleSchema({  ...the subschema })
 * @param {*} propertyField
 */
const handleNestedType = (propertyField, generateFields) => {
  // recursive call will generate the schema own subschema (for properties that are objects)
  const nestedVulcanSchema = obj(generateFields(propertyField));
  //console.log("nestedVulcanSchema", nestedVulcanSchema);
  return [toField("type", "new SimpleSchema" + paren(nestedVulcanSchema))];
};

/**
 * Generate the field specific to the schema
 * @param {*} schema
 */
const generateSpecificFields = (schema, generateFields) => {
  if (isNested(schema)) {
    return handleNestedType(schema, generateFields);
  }
  const possibleTypes = getTypesAsArray(schema);
  // TODO: should handle multiple types
  const possibleType = possibleTypes[0];
  const possibleTypeName = possibleType["@id"];
  if (isClass(possibleType) && !DATA_TYPES.includes(possibleTypeName)) {
    //console.log("possibleType", possibleTypeName);
    return handleClassType(possibleTypeName);
  } else {
    return handlePropertyType(possibleTypeName);
  }
};
// handle a property
// create a Vulcan schema and additionnal schemas if needed (arrays, objects)
const convertProperty = (schema, generateFields) =>
  obj([
    ...generateDescriptionFields(schema),
    ...generateSpecificFields(schema, generateFields),
    ...DEFAULT_FIELD_PROPS
  ]);

module.exports = {
  DATA_TYPES,
  _handleType: generateSpecificFields,
  default: convertProperty
};
