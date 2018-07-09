export const VideoGame = {
  label: "VideoGame",
  description: `A video game is an electronic game that involves human interaction with a user
interface to generate visual feedback on a video device.`,
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
  about: {
    label: "about",
    description: `The subject matter of the content.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ThingResolved",
      type: "Thing",
      resolver: (document, args, context) => {
        return context.Thing.findOne(
          { _id: document.Thing },
          {
            fields: context.Thing.getViewableFields(
              context.currentUser,
              context.Thing
            ),
          }
        )
      },
      optional: true,
    },
  },
  accessibilitySummary: {
    label: "accessibilitySummary",
    description: `A human-readable summary of specific accessibility features or deficiencies,
consistent with the other accessibility metadata but expressing subtleties such
as "short descriptions are present but long descriptions will be needed for
non-visual users" or "short descriptions are present and no long descriptions
are needed."`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  educationalAlignment: {
    label: "educationalAlignment",
    description: `An alignment to an established educational framework.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "AlignmentObjectResolved",
      type: "AlignmentObject",
      resolver: (document, args, context) => {
        return context.AlignmentObject.findOne(
          { _id: document.AlignmentObject },
          {
            fields: context.AlignmentObject.getViewableFields(
              context.currentUser,
              context.AlignmentObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  associatedMedia: {
    label: "associatedMedia",
    description: `A media object that encodes this CreativeWork. This property is a synonym for
encoding.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MediaObjectResolved",
      type: "MediaObject",
      resolver: (document, args, context) => {
        return context.MediaObject.findOne(
          { _id: document.MediaObject },
          {
            fields: context.MediaObject.getViewableFields(
              context.currentUser,
              context.MediaObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  funder: {
    label: "funder",
    description: `A person or organization that supports (sponsors) something through some kind of
financial contribution.`,
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
  sponsor: {
    label: "sponsor",
    description: `A person or organization that supports a thing through a pledge, promise, or
financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor
of an event.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrganizationResolved",
      type: "Organization",
      resolver: (document, args, context) => {
        return context.Organization.findOne(
          { _id: document.Organization },
          {
            fields: context.Organization.getViewableFields(
              context.currentUser,
              context.Organization
            ),
          }
        )
      },
      optional: true,
    },
  },
  audio: {
    label: "audio",
    description: `An embedded audio object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "AudioObjectResolved",
      type: "AudioObject",
      resolver: (document, args, context) => {
        return context.AudioObject.findOne(
          { _id: document.AudioObject },
          {
            fields: context.AudioObject.getViewableFields(
              context.currentUser,
              context.AudioObject
            ),
          }
        )
      },
      optional: true,
    },
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
  encoding: {
    label: "encoding",
    description: `A media object that encodes this CreativeWork. This property is a synonym for
associatedMedia.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MediaObjectResolved",
      type: "MediaObject",
      resolver: (document, args, context) => {
        return context.MediaObject.findOne(
          { _id: document.MediaObject },
          {
            fields: context.MediaObject.getViewableFields(
              context.currentUser,
              context.MediaObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  interactivityType: {
    label: "interactivityType",
    description: `The predominant mode of learning supported by the learning resource. Acceptable
values are 'active', 'expositive', or 'mixed'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  character: {
    label: "character",
    description: `Fictional person connected with a creative work.`,
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
  audience: {
    label: "audience",
    description: `An intended audience, i.e. a group for whom something was created.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "AudienceResolved",
      type: "Audience",
      resolver: (document, args, context) => {
        return context.Audience.findOne(
          { _id: document.Audience },
          {
            fields: context.Audience.getViewableFields(
              context.currentUser,
              context.Audience
            ),
          }
        )
      },
      optional: true,
    },
  },
  sourceOrganization: {
    label: "sourceOrganization",
    description: `The Organization on whose behalf the creator was working.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrganizationResolved",
      type: "Organization",
      resolver: (document, args, context) => {
        return context.Organization.findOne(
          { _id: document.Organization },
          {
            fields: context.Organization.getViewableFields(
              context.currentUser,
              context.Organization
            ),
          }
        )
      },
      optional: true,
    },
  },
  isPartOf: {
    label: "isPartOf",
    description: `Indicates an item or CreativeWork that this item, or CreativeWork (in some
sense), is part of.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  video: {
    label: "video",
    description: `An embedded video object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "VideoObjectResolved",
      type: "VideoObject",
      resolver: (document, args, context) => {
        return context.VideoObject.findOne(
          { _id: document.VideoObject },
          {
            fields: context.VideoObject.getViewableFields(
              context.currentUser,
              context.VideoObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  publication: {
    label: "publication",
    description: `A publication event associated with the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PublicationEventResolved",
      type: "PublicationEvent",
      resolver: (document, args, context) => {
        return context.PublicationEvent.findOne(
          { _id: document.PublicationEvent },
          {
            fields: context.PublicationEvent.getViewableFields(
              context.currentUser,
              context.PublicationEvent
            ),
          }
        )
      },
      optional: true,
    },
  },
  text: {
    label: "text",
    description: `The textual content of this CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  expires: {
    label: "expires",
    description: `Date the content expires and is no longer useful or available. For example a 
VideoObject or NewsArticle whose availability or relevance is time-limited, or a 
ClaimReview fact check whose publisher wants to indicate that it may no longer
be relevant (or helpful to highlight) after some date.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  contributor: {
    label: "contributor",
    description: `A secondary contributor to the CreativeWork or Event.`,
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
  typicalAgeRange: {
    label: "typicalAgeRange",
    description: `The typical expected age range, e.g. '7-9', '11-'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  position: {
    label: "position",
    description: `The position of an item in a series or sequence of items.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "IntegerResolved",
      type: "Integer",
      resolver: (document, args, context) => {
        return context.Integer.findOne(
          { _id: document.Integer },
          {
            fields: context.Integer.getViewableFields(
              context.currentUser,
              context.Integer
            ),
          }
        )
      },
      optional: true,
    },
  },
  releasedEvent: {
    label: "releasedEvent",
    description: `The place and time the release was issued, expressed as a PublicationEvent.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PublicationEventResolved",
      type: "PublicationEvent",
      resolver: (document, args, context) => {
        return context.PublicationEvent.findOne(
          { _id: document.PublicationEvent },
          {
            fields: context.PublicationEvent.getViewableFields(
              context.currentUser,
              context.PublicationEvent
            ),
          }
        )
      },
      optional: true,
    },
  },
  educationalUse: {
    label: "educationalUse",
    description: `The purpose of a work in the context of education; for example, 'assignment',
'group work'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  contentLocation: {
    label: "contentLocation",
    description: `The location depicted or described in the content. For example, the location in
a photograph or painting.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PlaceResolved",
      type: "Place",
      resolver: (document, args, context) => {
        return context.Place.findOne(
          { _id: document.Place },
          {
            fields: context.Place.getViewableFields(
              context.currentUser,
              context.Place
            ),
          }
        )
      },
      optional: true,
    },
  },
  schemaVersion: {
    label: "schemaVersion",
    description: `Indicates (by URL or string) a particular version of a schema used in some
CreativeWork. For example, a document could declare a schemaVersion using an URL
such as version/2.0/ if precise indication of schema version was required by
some application.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  accessibilityFeature: {
    label: "accessibilityFeature",
    description: `Content features of the resource, such as accessible media, alternatives and
supported enhancements for accessibility (WebSchemas wiki lists possible values
).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  aggregateRating: {
    label: "aggregateRating",
    description: `The overall rating, based on a collection of reviews or ratings, of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "AggregateRatingResolved",
      type: "AggregateRating",
      resolver: (document, args, context) => {
        return context.AggregateRating.findOne(
          { _id: document.AggregateRating },
          {
            fields: context.AggregateRating.getViewableFields(
              context.currentUser,
              context.AggregateRating
            ),
          }
        )
      },
      optional: true,
    },
  },
  locationCreated: {
    label: "locationCreated",
    description: `The location where the CreativeWork was created, which may not be the same as
the location depicted in the CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PlaceResolved",
      type: "Place",
      resolver: (document, args, context) => {
        return context.Place.findOne(
          { _id: document.Place },
          {
            fields: context.Place.getViewableFields(
              context.currentUser,
              context.Place
            ),
          }
        )
      },
      optional: true,
    },
  },
  accessModeSufficient: {
    label: "accessModeSufficient",
    description: `A list of single or combined accessModes that are sufficient to understand all
the intellectual content of a resource. Expected values include: auditory,
tactile, textual, visual.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  temporalCoverage: {
    label: "temporalCoverage",
    description: `The temporalCoverage of a CreativeWork indicates the period that the content
applies to, i.e. that it describes, either as a DateTime or as a textual string
indicating a time period in ISO 8601 time interval format. In the case of a
Dataset it will typically indicate the relevant time period in a precise
notation (e.g. for a 2011 census dataset, the year 2011 would be written
"2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or
TVEpisode may indicate their temporalCoverage in broader terms - textually or
via well-known URL. Written works such as books may sometimes have precise
temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO
8601 interval format format via "1939/1945".`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  accountablePerson: {
    label: "accountablePerson",
    description: `Specifies the Person that is legally accountable for the CreativeWork.`,
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
  spatialCoverage: {
    label: "spatialCoverage",
    description: `The spatialCoverage of a CreativeWork indicates the place(s) which are the focus
of the content. It is a subproperty of contentLocation intended primarily for
more technical and detailed materials. For example with a Dataset, it indicates
areas that the dataset describes: a dataset of New York weather would have
spatialCoverage which was the place: the state of New York.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PlaceResolved",
      type: "Place",
      resolver: (document, args, context) => {
        return context.Place.findOne(
          { _id: document.Place },
          {
            fields: context.Place.getViewableFields(
              context.currentUser,
              context.Place
            ),
          }
        )
      },
      optional: true,
    },
  },
  reviews: {
    label: "reviews",
    description: `Review of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ReviewResolved",
      type: "Review",
      resolver: (document, args, context) => {
        return context.Review.findOne(
          { _id: document.Review },
          {
            fields: context.Review.getViewableFields(
              context.currentUser,
              context.Review
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
  editor: {
    label: "editor",
    description: `Specifies the Person who edited the CreativeWork.`,
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
  discussionUrl: {
    label: "discussionUrl",
    description: `A link to the page containing the comments of the CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  award: {
    label: "award",
    description: `An award won by or for this item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  copyrightHolder: {
    label: "copyrightHolder",
    description: `The party holding the legal copyright to the CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrganizationResolved",
      type: "Organization",
      resolver: (document, args, context) => {
        return context.Organization.findOne(
          { _id: document.Organization },
          {
            fields: context.Organization.getViewableFields(
              context.currentUser,
              context.Organization
            ),
          }
        )
      },
      optional: true,
    },
  },
  accessibilityHazard: {
    label: "accessibilityHazard",
    description: `A characteristic of the described resource that is physiologically dangerous to
some users. Related to WCAG 2.0 guideline 2.3 (WebSchemas wiki lists possible
values).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  copyrightYear: {
    label: "copyrightYear",
    description: `The year during which the claimed copyright for the CreativeWork was first
asserted.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Number,
    input: "number",
  },
  awards: {
    label: "awards",
    description: `Awards won by or for this item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  recordedAt: {
    label: "recordedAt",
    description: `The Event where the CreativeWork was recorded. The CreativeWork may capture all
or part of the event.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "EventResolved",
      type: "Event",
      resolver: (document, args, context) => {
        return context.Event.findOne(
          { _id: document.Event },
          {
            fields: context.Event.getViewableFields(
              context.currentUser,
              context.Event
            ),
          }
        )
      },
      optional: true,
    },
  },
  commentCount: {
    label: "commentCount",
    description: `The number of comments this CreativeWork (e.g. Article, Question or Answer) has
received. This is most applicable to works published in Web sites with
commenting system; additional comments may exist elsewhere.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "IntegerResolved",
      type: "Integer",
      resolver: (document, args, context) => {
        return context.Integer.findOne(
          { _id: document.Integer },
          {
            fields: context.Integer.getViewableFields(
              context.currentUser,
              context.Integer
            ),
          }
        )
      },
      optional: true,
    },
  },
  fileFormat: {
    label: "fileFormat",
    description: `Media type, typically MIME format (see IANA site) of the content e.g.
application/zip of a SoftwareApplication binary. In cases where a CreativeWork
has several media type representations, 'encoding' can be used to indicate each
MediaObject alongside particular fileFormat information. Unregistered or niche
file formats can be indicated instead via the most appropriate URL, e.g.
defining Web page or a Wikipedia entry.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  inLanguage: {
    label: "inLanguage",
    description: `The language of the content or performance or used in an action. Please use one
of the language codes from the IETF BCP 47 standard. See also availableLanguage.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  accessibilityAPI: {
    label: "accessibilityAPI",
    description: `Indicates that the resource is compatible with the referenced accessibility API
(WebSchemas wiki lists possible values).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  publisher: {
    label: "publisher",
    description: `The publisher of the creative work.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrganizationResolved",
      type: "Organization",
      resolver: (document, args, context) => {
        return context.Organization.findOne(
          { _id: document.Organization },
          {
            fields: context.Organization.getViewableFields(
              context.currentUser,
              context.Organization
            ),
          }
        )
      },
      optional: true,
    },
  },
  interactionStatistic: {
    label: "interactionStatistic",
    description: `The number of interactions for the CreativeWork using the WebSite or
SoftwareApplication. The most specific child type of InteractionCounter should
be used.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "InteractionCounterResolved",
      type: "InteractionCounter",
      resolver: (document, args, context) => {
        return context.InteractionCounter.findOne(
          { _id: document.InteractionCounter },
          {
            fields: context.InteractionCounter.getViewableFields(
              context.currentUser,
              context.InteractionCounter
            ),
          }
        )
      },
      optional: true,
    },
  },
  contentRating: {
    label: "contentRating",
    description: `Official rating of a piece of content—for example,'MPAA PG-13'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "RatingResolved",
      type: "Rating",
      resolver: (document, args, context) => {
        return context.Rating.findOne(
          { _id: document.Rating },
          {
            fields: context.Rating.getViewableFields(
              context.currentUser,
              context.Rating
            ),
          }
        )
      },
      optional: true,
    },
  },
  learningResourceType: {
    label: "learningResourceType",
    description: `The predominant type or kind characterizing the learning resource. For example,
'presentation', 'handout'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  accessMode: {
    label: "accessMode",
    description: `The human sensory perceptual system or cognitive faculty through which a person
may process or perceive information. Expected values include: auditory, tactile,
textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual,
mathOnVisual, musicOnVisual, textOnVisual.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  material: {
    label: "material",
    description: `A material that something is made from, e.g. leather, wool, cotton, paper.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  isFamilyFriendly: {
    label: "isFamilyFriendly",
    description: `Indicates whether this content is family friendly.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Boolean,
    input: "checkbox",
  },
  exampleOfWork: {
    label: "exampleOfWork",
    description: `A creative work that this work is an example/instance/realization/derivation of.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  version: {
    label: "version",
    description: `The version of the CreativeWork embodied by a specified resource.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  dateModified: {
    label: "dateModified",
    description: `The date on which the CreativeWork was most recently modified or when the item's
entry was modified within a DataFeed.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  keywords: {
    label: "keywords",
    description: `Keywords or tags used to describe this content. Multiple entries in a keywords
list are typically delimited by commas.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  genre: {
    label: "genre",
    description: `Genre of the creative work, broadcast channel or group.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  mainEntity: {
    label: "mainEntity",
    description: `Indicates the primary entity described in some page or other CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ThingResolved",
      type: "Thing",
      resolver: (document, args, context) => {
        return context.Thing.findOne(
          { _id: document.Thing },
          {
            fields: context.Thing.getViewableFields(
              context.currentUser,
              context.Thing
            ),
          }
        )
      },
      optional: true,
    },
  },
  author: {
    label: "author",
    description: `The author of this content or rating. Please note that author is special in that
HTML 5 provides a special mechanism for indicating authorship via the rel tag.
That is equivalent to this and may be used interchangeably.`,
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
  encodings: {
    label: "encodings",
    description: `A media object that encodes this CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MediaObjectResolved",
      type: "MediaObject",
      resolver: (document, args, context) => {
        return context.MediaObject.findOne(
          { _id: document.MediaObject },
          {
            fields: context.MediaObject.getViewableFields(
              context.currentUser,
              context.MediaObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  isBasedOnUrl: {
    label: "isBasedOnUrl",
    description: `A resource that was used in the creation of this resource. This term can be
repeated for multiple sources. For example,
http://example.com/great-multiplication-intro.html.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ProductResolved",
      type: "Product",
      resolver: (document, args, context) => {
        return context.Product.findOne(
          { _id: document.Product },
          {
            fields: context.Product.getViewableFields(
              context.currentUser,
              context.Product
            ),
          }
        )
      },
      optional: true,
    },
  },
  timeRequired: {
    label: "timeRequired",
    description: `Approximate or typical time it takes to work with or through this learning
resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "DurationResolved",
      type: "Duration",
      resolver: (document, args, context) => {
        return context.Duration.findOne(
          { _id: document.Duration },
          {
            fields: context.Duration.getViewableFields(
              context.currentUser,
              context.Duration
            ),
          }
        )
      },
      optional: true,
    },
  },
  translator: {
    label: "translator",
    description: `Organization or person who adapts a creative work to different languages,
regional differences and technical requirements of a target market, or that
translates during some event.`,
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
  thumbnailUrl: {
    label: "thumbnailUrl",
    description: `A thumbnail image relevant to the Thing.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  hasPart: {
    label: "hasPart",
    description: `Indicates an item or CreativeWork that is part of this item, or CreativeWork (in
some sense).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  comment: {
    label: "comment",
    description: `Comments, typically from users.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CommentResolved",
      type: "Comment",
      resolver: (document, args, context) => {
        return context.Comment.findOne(
          { _id: document.Comment },
          {
            fields: context.Comment.getViewableFields(
              context.currentUser,
              context.Comment
            ),
          }
        )
      },
      optional: true,
    },
  },
  encodingFormat: {
    label: "encodingFormat",
    description: `Media type typically expressed using a MIME format (see IANA site and MDN
reference) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for
.mp3 etc.).

In cases where a CreativeWork has several media type representations, encoding 
can be used to indicate each MediaObject alongside particular encodingFormat 
information.

Unregistered or niche encoding and file formats can be indicated instead via the
most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  review: {
    label: "review",
    description: `A review of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ReviewResolved",
      type: "Review",
      resolver: (document, args, context) => {
        return context.Review.findOne(
          { _id: document.Review },
          {
            fields: context.Review.getViewableFields(
              context.currentUser,
              context.Review
            ),
          }
        )
      },
      optional: true,
    },
  },
  license: {
    label: "license",
    description: `A license document that applies to this content, typically indicated by URL.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  accessibilityControl: {
    label: "accessibilityControl",
    description: `Identifies input methods that are sufficient to fully control the described
resource (WebSchemas wiki lists possible values).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  isBasedOn: {
    label: "isBasedOn",
    description: `A resource that was used in the creation of this resource. This term can be
repeated for multiple sources. For example,
http://example.com/great-multiplication-intro.html.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  creator: {
    label: "creator",
    description: `The creator/author of this CreativeWork. This is the same as the Author property
for CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrganizationResolved",
      type: "Organization",
      resolver: (document, args, context) => {
        return context.Organization.findOne(
          { _id: document.Organization },
          {
            fields: context.Organization.getViewableFields(
              context.currentUser,
              context.Organization
            ),
          }
        )
      },
      optional: true,
    },
  },
  publishingPrinciples: {
    label: "publishingPrinciples",
    description: `The publishingPrinciples property indicates (typically via URL) a document
describing the editorial principles of an Organization (or individual e.g. a 
Person writing a blog) that relate to their activities as a publisher, e.g.
ethics or diversity policies. When applied to a CreativeWork (e.g. NewsArticle)
the principles are those of the party primarily responsible for the creation of
the CreativeWork.

While such policies are most typically expressed in natural language, sometimes
related information (e.g. indicating a funder) can be expressed using schema.org
terminology.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  producer: {
    label: "producer",
    description: `The person or organization who produced the work (e.g. music album, movie,
tv/radio series etc.).`,
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
  mentions: {
    label: "mentions",
    description: `Indicates that the CreativeWork contains a reference to, but is not necessarily
about a concept.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ThingResolved",
      type: "Thing",
      resolver: (document, args, context) => {
        return context.Thing.findOne(
          { _id: document.Thing },
          {
            fields: context.Thing.getViewableFields(
              context.currentUser,
              context.Thing
            ),
          }
        )
      },
      optional: true,
    },
  },
  workExample: {
    label: "workExample",
    description: `Example/instance/realization/derivation of the concept of this creative work.
eg. The paperback edition, first edition, or eBook.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  dateCreated: {
    label: "dateCreated",
    description: `The date on which the CreativeWork was created or the item was added to a
DataFeed.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  datePublished: {
    label: "datePublished",
    description: `Date of first broadcast/publication.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  isAccessibleForFree: {
    label: "isAccessibleForFree",
    description: `A flag to signal that the item, event, or place is accessible for free.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Boolean,
    input: "checkbox",
  },
  alternativeHeadline: {
    label: "alternativeHeadline",
    description: `A secondary title of the CreativeWork.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  headline: {
    label: "headline",
    description: `Headline of the article.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  citation: {
    label: "citation",
    description: `A citation or reference to another creative work, such as another publication,
web page, scholarly article, etc.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  downloadUrl: {
    label: "downloadUrl",
    description: `If the file can be downloaded, URL to download the binary.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  softwareRequirements: {
    label: "softwareRequirements",
    description: `Component dependency requirements for application. This includes runtime
environments and shared libraries that are not included in the application
distribution package, but required to run the application (Examples: DirectX,
Java or .NET runtime).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  permissions: {
    label: "permissions",
    description: `Permission(s) required to run the app (for example, a mobile app may require
full internet access or may run only on wifi).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  processorRequirements: {
    label: "processorRequirements",
    description: `Processor architecture required to run the application (e.g. IA64).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  availableOnDevice: {
    label: "availableOnDevice",
    description: `Device required to run the application. Used in cases where a specific
make/model is required to run the application.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  featureList: {
    label: "featureList",
    description: `Features or modules provided by this application (and possibly required by other
applications).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  applicationSubCategory: {
    label: "applicationSubCategory",
    description: `Subcategory of the application, e.g. 'Arcade Game'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  device: {
    label: "device",
    description: `Device required to run the application. Used in cases where a specific
make/model is required to run the application.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  applicationCategory: {
    label: "applicationCategory",
    description: `Type of software application, e.g. 'Game, Multimedia'.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  softwareVersion: {
    label: "softwareVersion",
    description: `Version of the software instance.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  storageRequirements: {
    label: "storageRequirements",
    description: `Storage requirements (free space required).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  applicationSuite: {
    label: "applicationSuite",
    description: `The name of the application suite to which the application belongs (e.g. Excel
belongs to Office).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  memoryRequirements: {
    label: "memoryRequirements",
    description: `Minimum memory requirements.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  screenshot: {
    label: "screenshot",
    description: `A link to a screenshot image of the app.`,
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
  countriesSupported: {
    label: "countriesSupported",
    description: `Countries for which the application is supported. You can also provide the
two-letter ISO 3166-1 alpha-2 country code.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  softwareHelp: {
    label: "softwareHelp",
    description: `Software application help.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  softwareAddOn: {
    label: "softwareAddOn",
    description: `Additional content for a software application.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "SoftwareApplicationResolved",
      type: "SoftwareApplication",
      resolver: (document, args, context) => {
        return context.SoftwareApplication.findOne(
          { _id: document.SoftwareApplication },
          {
            fields: context.SoftwareApplication.getViewableFields(
              context.currentUser,
              context.SoftwareApplication
            ),
          }
        )
      },
      optional: true,
    },
  },
  releaseNotes: {
    label: "releaseNotes",
    description: `Description of what changed in this version.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  supportingData: {
    label: "supportingData",
    description: `Supporting data for a SoftwareApplication.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "DataFeedResolved",
      type: "DataFeed",
      resolver: (document, args, context) => {
        return context.DataFeed.findOne(
          { _id: document.DataFeed },
          {
            fields: context.DataFeed.getViewableFields(
              context.currentUser,
              context.DataFeed
            ),
          }
        )
      },
      optional: true,
    },
  },
  requirements: {
    label: "requirements",
    description: `Component dependency requirements for application. This includes runtime
environments and shared libraries that are not included in the application
distribution package, but required to run the application (Examples: DirectX,
Java or .NET runtime).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  countriesNotSupported: {
    label: "countriesNotSupported",
    description: `Countries for which the application is not supported. You can also provide the
two-letter ISO 3166-1 alpha-2 country code.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  operatingSystem: {
    label: "operatingSystem",
    description: `Operating systems supported (Windows 7, OSX 10.6, Android 1.6).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  fileSize: {
    label: "fileSize",
    description: `Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB
etc.), KB will be assumed.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  installUrl: {
    label: "installUrl",
    description: `URL at which the app may be installed, if different from the URL of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  gameItem: {
    label: "gameItem",
    description: `An item is an object within the game world that can be collected by a player or,
occasionally, a non-player character.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ThingResolved",
      type: "Thing",
      resolver: (document, args, context) => {
        return context.Thing.findOne(
          { _id: document.Thing },
          {
            fields: context.Thing.getViewableFields(
              context.currentUser,
              context.Thing
            ),
          }
        )
      },
      optional: true,
    },
  },
  characterAttribute: {
    label: "characterAttribute",
    description: `A piece of data that represents a particular aspect of a fictional character
(skill, power, character points, advantage, disadvantage).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ThingResolved",
      type: "Thing",
      resolver: (document, args, context) => {
        return context.Thing.findOne(
          { _id: document.Thing },
          {
            fields: context.Thing.getViewableFields(
              context.currentUser,
              context.Thing
            ),
          }
        )
      },
      optional: true,
    },
  },
  gameLocation: {
    label: "gameLocation",
    description: `Real or fictional location of the game (or part of game).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PostalAddressResolved",
      type: "PostalAddress",
      resolver: (document, args, context) => {
        return context.PostalAddress.findOne(
          { _id: document.PostalAddress },
          {
            fields: context.PostalAddress.getViewableFields(
              context.currentUser,
              context.PostalAddress
            ),
          }
        )
      },
      optional: true,
    },
  },
  quest: {
    label: "quest",
    description: `The task that a player-controlled character, or group of characters may complete
in order to gain a reward.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ThingResolved",
      type: "Thing",
      resolver: (document, args, context) => {
        return context.Thing.findOne(
          { _id: document.Thing },
          {
            fields: context.Thing.getViewableFields(
              context.currentUser,
              context.Thing
            ),
          }
        )
      },
      optional: true,
    },
  },
  numberOfPlayers: {
    label: "numberOfPlayers",
    description: `Indicate how many people can play this game (minimum, maximum, or range).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QuantitativeValueResolved",
      type: "QuantitativeValue",
      resolver: (document, args, context) => {
        return context.QuantitativeValue.findOne(
          { _id: document.QuantitativeValue },
          {
            fields: context.QuantitativeValue.getViewableFields(
              context.currentUser,
              context.QuantitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  gamePlatform: {
    label: "gamePlatform",
    description: `The electronic systems used to play video games.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  gameServer: {
    label: "gameServer",
    description: `The server on which it is possible to play the game.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "GameServerResolved",
      type: "GameServer",
      resolver: (document, args, context) => {
        return context.GameServer.findOne(
          { _id: document.GameServer },
          {
            fields: context.GameServer.getViewableFields(
              context.currentUser,
              context.GameServer
            ),
          }
        )
      },
      optional: true,
    },
  },
  actor: {
    label: "actor",
    description: `An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can
be associated with individual items or with a series, episode, clip.`,
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
  trailer: {
    label: "trailer",
    description: `The trailer of a movie or tv/radio series, season, episode, etc.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "VideoObjectResolved",
      type: "VideoObject",
      resolver: (document, args, context) => {
        return context.VideoObject.findOne(
          { _id: document.VideoObject },
          {
            fields: context.VideoObject.getViewableFields(
              context.currentUser,
              context.VideoObject
            ),
          }
        )
      },
      optional: true,
    },
  },
  cheatCode: {
    label: "cheatCode",
    description: `Cheat codes to the game.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  gameTip: {
    label: "gameTip",
    description: `Links to tips, tactics, etc.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CreativeWorkResolved",
      type: "CreativeWork",
      resolver: (document, args, context) => {
        return context.CreativeWork.findOne(
          { _id: document.CreativeWork },
          {
            fields: context.CreativeWork.getViewableFields(
              context.currentUser,
              context.CreativeWork
            ),
          }
        )
      },
      optional: true,
    },
  },
  musicBy: {
    label: "musicBy",
    description: `The composer of the soundtrack.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MusicGroupResolved",
      type: "MusicGroup",
      resolver: (document, args, context) => {
        return context.MusicGroup.findOne(
          { _id: document.MusicGroup },
          {
            fields: context.MusicGroup.getViewableFields(
              context.currentUser,
              context.MusicGroup
            ),
          }
        )
      },
      optional: true,
    },
  },
  directors: {
    label: "directors",
    description: `A director of e.g. tv, radio, movie, video games etc. content. Directors can be
associated with individual items or with a series, episode, clip.`,
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
  playMode: {
    label: "playMode",
    description: `Indicates whether this game is multi-player, co-op or single-player. The game
can be marked as multi-player, co-op and single-player at the same time.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "GamePlayModeResolved",
      type: "GamePlayMode",
      resolver: (document, args, context) => {
        return context.GamePlayMode.findOne(
          { _id: document.GamePlayMode },
          {
            fields: context.GamePlayMode.getViewableFields(
              context.currentUser,
              context.GamePlayMode
            ),
          }
        )
      },
      optional: true,
    },
  },
  director: {
    label: "director",
    description: `A director of e.g. tv, radio, movie, video gaming etc. content, or of an event.
Directors can be associated with individual items or with a series, episode,
clip.`,
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
  actors: {
    label: "actors",
    description: `An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated
with individual items or with a series, episode, clip.`,
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
}
export default VideoGame
