const R = require("ramda");
const JSGenerator = require("../../utils/JSGenerator");
const { obj, toField, templateStr, toFieldStr } = JSGenerator;

const getLabel = R.prop("rdfs:label");
const getComment = R.prop("rdfs:comment");
const generateDescriptionFields = schema => [
  toFieldStr("label", getLabel(schema)),
  toField("description", templateStr(getComment(schema)))
];
// TODO: move this reusable helper elsewhere
const generateViewOnlyField = (fieldName, fieldValue) => {
  return [
    toField(
      fieldName,
      obj([
        toField("type", "String"),
        toField("defaultValue", fieldValue),
        toField("viewableBy", '["guests"]'),
        toField("editableBy", '["admins"]'),
        toField("insertableBy", '["admins"]')
      ])
    )
  ];
};

module.exports = {
  generateViewOnlyField,
  generateDescriptionFields
};
