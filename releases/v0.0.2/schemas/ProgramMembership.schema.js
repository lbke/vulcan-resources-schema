export default {
  members: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "members",
  },
  member: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "member",
  },
  programName: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "programName",
  },
  hostingOrganization: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "hostingOrganization",
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
