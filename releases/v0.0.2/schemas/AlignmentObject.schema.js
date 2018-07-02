export default {
  alignmentType: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "alignmentType",
  },
  targetUrl: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "targetUrl",
  },
  targetName: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "targetName",
  },
  educationalFramework: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "educationalFramework",
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
