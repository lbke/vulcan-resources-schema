export default {
  application: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "application",
  },
  actionPlatform: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "actionPlatform",
  },
  httpMethod: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "httpMethod",
  },
  encodingType: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "encodingType",
  },
  contentType: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "contentType",
  },
  _id: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    optional: true,
  },
  createdAt: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: Date,
    optional: true,
    viewableBy: ["guests"],
    onInsert: (document, context) => {
      return new Date()
    },
  },
  userId: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
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
            ),
          }
        )
      },
      optional: true,
    },
  },
}
