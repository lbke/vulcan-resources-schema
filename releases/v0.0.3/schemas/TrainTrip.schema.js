export const TrainTrip = {
  label: "TrainTrip",
  description: `A trip on a commercial train line.`,
  _id: {
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    optional: true,
  },
  createdAt: {
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    optional: true,
    viewableBy: ["guests"],
    onInsert: (document, context) => {
      return new Date()
    },
  },
  userId: {
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    optional: true,
    resolveAs: {
      fieldName: "user",
      type: "User",
      resolver: (document, args, context) => {
        return context.Users.findOne(
          { _id: document.userId },
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
  sameAs: {
    label: "sameAs",
    description: `URL of a reference Web page that unambiguously indicates the item's identity.
E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  alternateName: {
    label: "alternateName",
    description: `An alias for the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  image: {
    label: "image",
    description: `An image of the item. This can be a URL or a fully described ImageObject.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ImageObjectResolved",
      type: "ImageObject",
      resolver: (document, args, context) => {
        return context.ImageObject.findOne(
          { _id: document.ImageObject },
          {
            fields: context.ImageObject.getViewableFields(
              context.currentUser,
              context.ImageObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  additionalType: {
    label: "additionalType",
    description: `An additional type for the item, typically used for adding more specific types
from external vocabularies in microdata syntax. This is a relationship between
something and a class that the thing is in. In RDFa syntax, it is better to use
the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org
tools may have only weaker understanding of extra types, in particular those
defined externally.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  name: {
    label: "name",
    description: `The name of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  identifier: {
    label: "identifier",
    description: `The identifier property represents any kind of identifier for any kind of Thing,
such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties
for representing many of these, either as textual strings or as URL (URI) links.
See background notes for more details.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  mainEntityOfPage: {
    label: "mainEntityOfPage",
    description: `Indicates a page (or other CreativeWork) for which this thing is the main entity
being described. See background notes for details.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  url: {
    label: "url",
    description: `URL of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  potentialAction: {
    label: "potentialAction",
    description: `Indicates a potential Action, which describes an idealized action in which this
thing would play an 'object' role.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ActionResolved",
      type: "Action",
      resolver: (document, args, context) => {
        return context.Action.findOne(
          { _id: document.Action },
          {
            fields: context.Action.getViewableFields(
              context.currentUser,
              context.Action
            ),
          }
        )
      },
      optional: true,
    },
  },
  description: {
    label: "description",
    description: `A description of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  disambiguatingDescription: {
    label: "disambiguatingDescription",
    description: `A sub property of description. A short description of the item used to
disambiguate from other, similar items. Information from other properties (in
particular, name) may be necessary for the description to be useful for
disambiguation.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  provider: {
    label: "provider",
    description: `The service provider, service operator, or service performer; the goods
producer. Another party (a seller) may offer those services or goods on behalf
of the provider. A provider may also serve as the seller.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PersonResolved",
      type: "Person",
      resolver: (document, args, context) => {
        return context.Person.findOne(
          { _id: document.Person },
          {
            fields: context.Person.getViewableFields(
              context.currentUser,
              context.Person
            ),
          }
        )
      },
      optional: true,
    },
  },
  offers: {
    label: "offers",
    description: `An offer to provide this item—for example, an offer to sell a product, rent the
DVD of a movie, perform a service, or give away tickets to an event.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OfferResolved",
      type: "Offer",
      resolver: (document, args, context) => {
        return context.Offer.findOne(
          { _id: document.Offer },
          {
            fields: context.Offer.getViewableFields(
              context.currentUser,
              context.Offer
            ),
          }
        )
      },
      optional: true,
    },
  },
  arrivalTime: {
    label: "arrivalTime",
    description: `The expected arrival time.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  departureTime: {
    label: "departureTime",
    description: `The expected departure time.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  departureStation: {
    label: "departureStation",
    description: `The station from which the train departs.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "TrainStationResolved",
      type: "TrainStation",
      resolver: (document, args, context) => {
        return context.TrainStation.findOne(
          { _id: document.TrainStation },
          {
            fields: context.TrainStation.getViewableFields(
              context.currentUser,
              context.TrainStation
            ),
          }
        )
      },
      optional: true,
    },
  },
  arrivalPlatform: {
    label: "arrivalPlatform",
    description: `The platform where the train arrives.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  departurePlatform: {
    label: "departurePlatform",
    description: `The platform from which the train departs.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  trainName: {
    label: "trainName",
    description: `The name of the train (e.g. The Orient Express).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  trainNumber: {
    label: "trainNumber",
    description: `The unique identifier for the train.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  arrivalStation: {
    label: "arrivalStation",
    description: `The station where the train trip ends.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "TrainStationResolved",
      type: "TrainStation",
      resolver: (document, args, context) => {
        return context.TrainStation.findOne(
          { _id: document.TrainStation },
          {
            fields: context.TrainStation.getViewableFields(
              context.currentUser,
              context.TrainStation
            ),
          }
        )
      },
      optional: true,
    },
  },
}
export default TrainTrip
