/** Fields common to a schema subfield (viewableBy etc) */
const JSGenerator = require("../utils/JSGenerator");
const {
  obj,
  arr,
  str,
  toField,
  toFieldStr,
  arrowFunc,
  commaSeparated
} = JSGenerator;

module.exports = [
  toField("canRead", arr([str("guests")])),
  toField("canCreate", arr([str("members")])),
  toField("canUpdate", arr([str("members")]))
];
