const R = require("ramda");
const DEFAULT_PROPS = require("../../config/defaultProperties");
const JSGenerator = require("../../utils/JSGenerator");
const { obj, toField } = JSGenerator;
const convertProperty = require("./convertProperty").default;

const convertClass = R.pipe(
  R.prop("fields"),
  R.values,
  R.map(field => toField(field["@id"], convertProperty(field))),
  // add default props
  R.concat(DEFAULT_PROPS),
  obj
);

module.exports = {
  default: convertClass
};
