export const Person = {
  label: "Person",
  description: `A person (alive, dead, undead, or fictional).`,
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
  spouse: {
    label: "spouse",
    description: `The person's spouse.`,
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
  colleagues: {
    label: "colleagues",
    description: `A colleague of the person.`,
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
  deathDate: {
    label: "deathDate",
    description: `Date of death.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  height: {
    label: "height",
    description: `The height of the item.`,
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
  workLocation: {
    label: "workLocation",
    description: `A contact location for a person's place of work.`,
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
  faxNumber: {
    label: "faxNumber",
    description: `The fax number.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  children: {
    label: "children",
    description: `A child of the person.`,
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
  jobTitle: {
    label: "jobTitle",
    description: `The job title of the person (for example, Financial Manager).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
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
  deathPlace: {
    label: "deathPlace",
    description: `The place where the person died.`,
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
  birthPlace: {
    label: "birthPlace",
    description: `The place where the person was born.`,
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
  gender: {
    label: "gender",
    description: `Gender of the person. While Male and Female may be used, text strings are also
acceptable for people who do not identify as a binary gender.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "GenderTypeResolved",
      type: "GenderType",
      resolver: (document, args, context) => {
        return context.GenderType.findOne(
          { _id: document.GenderType },
          {
            fields: context.GenderType.getViewableFields(
              context.currentUser,
              context.GenderType
            ),
          }
        )
      },
      optional: true,
    },
  },
  parents: {
    label: "parents",
    description: `A parents of the person.`,
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
  alumniOf: {
    label: "alumniOf",
    description: `An organization that the person is an alumni of.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "EducationalOrganizationResolved",
      type: "EducationalOrganization",
      resolver: (document, args, context) => {
        return context.EducationalOrganization.findOne(
          { _id: document.EducationalOrganization },
          {
            fields: context.EducationalOrganization.getViewableFields(
              context.currentUser,
              context.EducationalOrganization
            ),
          }
        )
      },
      optional: true,
    },
  },
  homeLocation: {
    label: "homeLocation",
    description: `A contact location for a person's residence.`,
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
  award: {
    label: "award",
    description: `An award won by or for this item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  birthDate: {
    label: "birthDate",
    description: `Date of birth.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
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
  givenName: {
    label: "givenName",
    description: `Given name. In the U.S., the first name of a Person. This can be used along with
familyName instead of the name property.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
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
  familyName: {
    label: "familyName",
    description: `Family name. In the U.S., the last name of an Person. This can be used along
with givenName instead of the name property.`,
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
  sibling: {
    label: "sibling",
    description: `A sibling of the person.`,
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
  address: {
    label: "address",
    description: `Physical address of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  performerIn: {
    label: "performerIn",
    description: `Event that this person is a performer or participant in.`,
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
  honorificPrefix: {
    label: "honorificPrefix",
    description: `An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  additionalName: {
    label: "additionalName",
    description: `An additional name for a Person, can be used for a middle name.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  siblings: {
    label: "siblings",
    description: `A sibling of the person.`,
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
  weight: {
    label: "weight",
    description: `The weight of the product or person.`,
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
  colleague: {
    label: "colleague",
    description: `A colleague of the person.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
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
  parent: {
    label: "parent",
    description: `A parent of this person.`,
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
  affiliation: {
    label: "affiliation",
    description: `An organization that this person is affiliated with. For example, a
school/university, a club, or a team.`,
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
  honorificSuffix: {
    label: "honorificSuffix",
    description: `An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  netWorth: {
    label: "netWorth",
    description: `The total financial value of the person as calculated by subtracting assets from
liabilities.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PriceSpecificationResolved",
      type: "PriceSpecification",
      resolver: (document, args, context) => {
        return context.PriceSpecification.findOne(
          { _id: document.PriceSpecification },
          {
            fields: context.PriceSpecification.getViewableFields(
              context.currentUser,
              context.PriceSpecification
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
  nationality: {
    label: "nationality",
    description: `Nationality of the person.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "CountryResolved",
      type: "Country",
      resolver: (document, args, context) => {
        return context.Country.findOne(
          { _id: document.Country },
          {
            fields: context.Country.getViewableFields(
              context.currentUser,
              context.Country
            ),
          }
        )
      },
      optional: true,
    },
  },
  relatedTo: {
    label: "relatedTo",
    description: `The most generic familial relation.`,
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
  follows: {
    label: "follows",
    description: `The most generic uni-directional social relation.`,
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
  knows: {
    label: "knows",
    description: `The most generic bi-directional social/work relation.`,
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
  worksFor: {
    label: "worksFor",
    description: `Organizations that the person works for.`,
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
}
export default Person
