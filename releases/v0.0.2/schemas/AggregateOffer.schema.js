export default {
  advanceBookingRequirement: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "advanceBookingRequirement",
  },
  offers: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "offers",
  },
  offerCount: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "offerCount",
  },
  lowPrice: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "lowPrice",
  },
  highPrice: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "highPrice",
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
