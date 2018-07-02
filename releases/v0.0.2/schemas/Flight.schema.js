export default {
  arrivalTime: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "arrivalTime",
  },
  departureTime: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "departureTime",
  },
  boardingPolicy: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "boardingPolicy",
  },
  aircraft: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "aircraft",
  },
  seller: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "seller",
  },
  webCheckinTime: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "webCheckinTime",
  },
  mealService: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "mealService",
  },
  departureGate: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "departureGate",
  },
  departureTerminal: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "departureTerminal",
  },
  estimatedFlightDuration: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "estimatedFlightDuration",
  },
  flightDistance: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "flightDistance",
  },
  arrivalTerminal: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "arrivalTerminal",
  },
  departureAirport: {
    viewableBy: ["guests"],
    editableBy: ["guests"],
    insertableBy: ["guests"],
    type: String,
    label: "departureAirport",
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
