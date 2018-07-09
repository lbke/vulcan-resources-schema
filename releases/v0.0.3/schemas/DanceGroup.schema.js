export const DanceGroup = {
  label: "DanceGroup",
  description: `A dance group—for example, the Alvin Ailey Dance Theater or Riverdance.`,
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
  serviceArea: {
    label: "serviceArea",
    description: `The geographic area where the service is provided.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "AdministrativeAreaResolved",
      type: "AdministrativeArea",
      resolver: (document, args, context) => {
        return context.AdministrativeArea.findOne(
          { _id: document.AdministrativeArea },
          {
            fields: context.AdministrativeArea.getViewableFields(
              context.currentUser,
              context.AdministrativeArea
            ),
          }
        )
      },
      optional: true,
    },
  },
  memberOf: {
    label: "memberOf",
    description: `An Organization (or ProgramMembership) to which this Person or Organization
belongs.`,
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
  events: {
    label: "events",
    description: `Upcoming or past events associated with this place or organization.`,
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
  faxNumber: {
    label: "faxNumber",
    description: `The fax number.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  subOrganization: {
    label: "subOrganization",
    description: `A relationship between two organizations where the first includes the second,
e.g., as a subsidiary. See also: the more specific 'department' property.`,
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
  hasOfferCatalog: {
    label: "hasOfferCatalog",
    description: `Indicates an OfferCatalog listing for this Organization, Person, or Service.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OfferCatalogResolved",
      type: "OfferCatalog",
      resolver: (document, args, context) => {
        return context.OfferCatalog.findOne(
          { _id: document.OfferCatalog },
          {
            fields: context.OfferCatalog.getViewableFields(
              context.currentUser,
              context.OfferCatalog
            ),
          }
        )
      },
      optional: true,
    },
  },
  globalLocationNumber: {
    label: "globalLocationNumber",
    description: `The Global Location Number (GLN, sometimes also referred to as International
Location Number or ILN) of the respective organization, person, or place. The
GLN is a 13-digit number used to identify parties and physical locations.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  members: {
    label: "members",
    description: `A member of this organization.`,
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
  duns: {
    label: "duns",
    description: `The Dun & Bradstreet DUNS number for identifying an organization or business
person.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  taxID: {
    label: "taxID",
    description: `The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the
CIF/NIF in Spain.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
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
  award: {
    label: "award",
    description: `An award won by or for this item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  makesOffer: {
    label: "makesOffer",
    description: `A pointer to products or services offered by the organization or person.`,
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
  contactPoints: {
    label: "contactPoints",
    description: `A contact point for a person or organization.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ContactPointResolved",
      type: "ContactPoint",
      resolver: (document, args, context) => {
        return context.ContactPoint.findOne(
          { _id: document.ContactPoint },
          {
            fields: context.ContactPoint.getViewableFields(
              context.currentUser,
              context.ContactPoint
            ),
          }
        )
      },
      optional: true,
    },
  },
  awards: {
    label: "awards",
    description: `Awards won by or for this item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  foundingDate: {
    label: "foundingDate",
    description: `The date that this organization was founded.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  leiCode: {
    label: "leiCode",
    description: `An organization identifier that uniquely identifies a legal entity as defined in
ISO 17442.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  seeks: {
    label: "seeks",
    description: `A pointer to products or services sought by the organization or person (demand).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "DemandResolved",
      type: "Demand",
      resolver: (document, args, context) => {
        return context.Demand.findOne(
          { _id: document.Demand },
          {
            fields: context.Demand.getViewableFields(
              context.currentUser,
              context.Demand
            ),
          }
        )
      },
      optional: true,
    },
  },
  member: {
    label: "member",
    description: `A member of an Organization or a ProgramMembership. Organizations can be members
of organizations; ProgramMembership is typically for individuals.`,
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
  founders: {
    label: "founders",
    description: `A person who founded this organization.`,
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
  alumni: {
    label: "alumni",
    description: `Alumni of an organization.`,
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
  dissolutionDate: {
    label: "dissolutionDate",
    description: `The date that this organization was dissolved.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  address: {
    label: "address",
    description: `Physical address of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  logo: {
    label: "logo",
    description: `An associated logo.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  employees: {
    label: "employees",
    description: `People working for this organization.`,
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
  telephone: {
    label: "telephone",
    description: `The telephone number.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  email: {
    label: "email",
    description: `Email address.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  department: {
    label: "department",
    description: `A relationship between an organization and a department of that organization,
also described as an organization (allowing different urls, logos, opening
hours). For example: a store with a pharmacy, or a bakery with a cafe.`,
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
  contactPoint: {
    label: "contactPoint",
    description: `A contact point for a person or organization.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ContactPointResolved",
      type: "ContactPoint",
      resolver: (document, args, context) => {
        return context.ContactPoint.findOne(
          { _id: document.ContactPoint },
          {
            fields: context.ContactPoint.getViewableFields(
              context.currentUser,
              context.ContactPoint
            ),
          }
        )
      },
      optional: true,
    },
  },
  parentOrganization: {
    label: "parentOrganization",
    description: `The larger organization that this organization is a subOrganization of, if any.`,
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
  legalName: {
    label: "legalName",
    description: `The official name of the organization, e.g. the registered company name.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  employee: {
    label: "employee",
    description: `Someone working for this organization.`,
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
  numberOfEmployees: {
    label: "numberOfEmployees",
    description: `The number of employees in an organization e.g. business.`,
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
  naics: {
    label: "naics",
    description: `The North American Industry Classification System (NAICS) code for a particular
organization or business person.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  hasPOS: {
    label: "hasPOS",
    description: `Points-of-Sales operated by the organization or person.`,
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
  foundingLocation: {
    label: "foundingLocation",
    description: `The place where the Organization was founded.`,
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
  owns: {
    label: "owns",
    description: `Products owned by the organization or person.`,
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
  event: {
    label: "event",
    description: `Upcoming or past event associated with this place, organization, or action.`,
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
  founder: {
    label: "founder",
    description: `A person who founded this organization.`,
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
  isicV4: {
    label: "isicV4",
    description: `The International Standard of Industrial Classification of All Economic
Activities (ISIC), Revision 4 code for a particular organization, business
person, or place.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  location: {
    label: "location",
    description: `The location of for example where the event is happening, an organization is
located, or where an action takes place.`,
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
  brand: {
    label: "brand",
    description: `The brand(s) associated with a product or service, or the brand(s) maintained by
an organization or business person.`,
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
  vatID: {
    label: "vatID",
    description: `The Value-added Tax ID of the organization or person.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  areaServed: {
    label: "areaServed",
    description: `The geographic area where a service or offered item is provided.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
}
export default DanceGroup
