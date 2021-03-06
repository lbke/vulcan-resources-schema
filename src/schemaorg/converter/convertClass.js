const R = require("ramda");
const JSGenerator = require("../../utils/JSGenerator");
const { obj, toField } = JSGenerator;
const { isNestedObject } = require("../common");
const { generateDescriptionFields } = require("./common");
const DEFAULT_PROPS = require("../../config/defaultProperties");
const convertProperty = require("./convertProperty").default;

// for each subfield of the schema, generate its VulcanSchema
const generateFields = R.pipe(
  R.prop("fields"),
  R.values,
  R.reduce((results, propertyField) => {
    const propertyVulcanSchema = toField(
      propertyField["@id"],
      convertProperty(propertyField, generateFields)
    );
    // TODO: use this for array (but not object)
    //if (isNestedObject(propertyField)) {
    //  //
    //  // recursive call will generate the schema own subschema (for properties that are objects)
    //  const nestedVulcanSchema = toField(
    //    propertyField["@id"] + ".$",
    //    obj(generateFields(propertyField))
    //  );
    //  //console.log("nestedVulcanSchema", nestedVulcanSchema);
    //  return [...results, propertyVulcanSchema, nestedVulcanSchema];
    //}
    return [...results, propertyVulcanSchema];
  }, [])
);
const convertClass = classSchema => {
  const fields = generateFields(classSchema);
  return obj([
    ...generateDescriptionFields(classSchema),
    ...DEFAULT_PROPS,
    ...fields
  ]);
};
module.exports = {
  default: convertClass,
  generateFields
};
