/**
 * Properties common to any Vulcan schema
 */
const JSGenerator = require("../utils/JSGenerator");
const { obj, toField, toFieldStr, arrowFunc, commaSeparated } = JSGenerator;
const DEFAULT_FIELD_PROPS = require("./defaultFieldProperties");

const fields = {
  _id: {
    ...DEFAULT_FIELD_PROPS,
    type: String,
    optional: true
  },
  createdAt: {
    ...DEFAULT_FIELD_PROPS,
    type: Date,
    optional: true,
    viewableBy: ["guests"],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },
  userId: {
    ...DEFAULT_FIELD_PROPS,
    type: String,
    optional: true,
    resolveAs: {
      fieldName: "user",
      type: "User",
      resolver: (movie, args, context) => {
        return context.Users.findOne(
          { _id: movie.userId },
          {
            fields: context.Users.getViewableFields(
              context.currentUser,
              context.Users
            )
          }
        );
      },
      addOriginalField: true
    }
  }
};

module.exports = [
  toField(
    "_id",
    obj([
      ...DEFAULT_FIELD_PROPS,
      toField("type", "String"),
      toField("optional", "true")
    ]),
    toField(
      "createdAt",
      obj([
        ...DEFAULT_FIELD_PROPS,
        toField("type", "Date"),
        toField("optional", "true"),
        toField("viewableBy", `["guests"]`),
        toField(
          "onInsert",
          arrowFunc(
            commaSeparated(["document", "context"]),
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
                commaSeparated(["movie", "args", "context"]),
                `
        return context.Users.findOne(
          { _id: movie.userId },
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
  )
];
