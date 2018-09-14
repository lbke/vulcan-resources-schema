/**
 * Properties common to any Vulcan schema
 */
const JSGenerator = require("../utils/JSGenerator");
const {
  obj,
  braces,
  toField,
  toFieldStr,
  arrowFunc,
  commaSeparated
} = JSGenerator;
const DEFAULT_FIELD_PROPS = require("./defaultFieldProperties");

module.exports = [
  toField(
    "_id",
    obj([
      ...DEFAULT_FIELD_PROPS,
      toField("type", "String"),
      toField("optional", "true")
    ])
  ),
  toField(
    "createdAt",
    obj([
      ...DEFAULT_FIELD_PROPS,
      toField("type", "Date"),
      toField("optional", "true"),
      toField(
        "onCreate",
        arrowFunc(
          braces(commaSeparated(["document", "context"])),
          "return new Date()"
        )
      )
    ])
  ),
  toField(
    "userId",
    obj([
      ...DEFAULT_FIELD_PROPS,
      toField("type", "String"),
      toField("optional", "true"),

      toField(
        "resolveAs",
        obj([
          toFieldStr("fieldName", "user"),
          toFieldStr("type", "User"),
          toField(
            "resolver",
            arrowFunc(
              commaSeparated(["document", "args", "context"]),
              `
        return context.Users.findOne(
          { _id: document.userId },
          {
            fields: context.Users.getViewableFields(
              context.currentUser,
              context.Users
            )
          }
        );
       `
            )
          ),
          toField("optional", "true")
        ])
      )
    ])
  )
];
