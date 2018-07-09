const R = require("ramda");
const DEFAULT_PROPS = require("../../config/defaultProperties");
const JSGenerator = require("../../utils/JSGenerator");
const { obj, toField } = JSGenerator;
const convertProperty = require("./convertProperty").default;
const { generateDescriptionFields } = require("./common");

const convertClass = classSchema => {
  const fields = R.pipe(
    R.prop("fields"),
    R.values,
    R.map(field => toField(field["@id"], convertProperty(field)))
  )(classSchema);
  return obj([
    ...generateDescriptionFields(classSchema),
    ...DEFAULT_PROPS,
    ...fields
  ]);
};
module.exports = {
  default: convertClass
};
