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
const fields = {
  viewableBy: ["guests"],
  editableBy: ["guests"],
  insertableBy: ["guests"]
};

module.exports = [
  toField("By", arr([str("guests")])),
  toField("editableBy", arr([str("guests")])),
  toField("insertableBy", arr([str("guests")]))
];
