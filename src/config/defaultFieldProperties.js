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
  editableBy: ["members"],
  insertableBy: ["members"]
};

module.exports = [
  toField("viewableBy", arr([str("guests")])),
  toField("editableBy", arr([str("members")])),
  toField("insertableBy", arr([str("members")]))
];
