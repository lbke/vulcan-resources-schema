/**
 * Properties common to any Vulcan schema
 */
import DEFAULT_FIELD_PROPS from "./defaultFieldProperties";
module.exports = {
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
