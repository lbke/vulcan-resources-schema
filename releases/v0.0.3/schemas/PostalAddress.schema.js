export const PostalAddress = {
  label: "PostalAddress",
  description: `The mailing address.`,
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
  faxNumber: {
    label: "faxNumber",
    description: `The fax number.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  hoursAvailable: {
    label: "hoursAvailable",
    description: `The hours during which this service or contact is available.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OpeningHoursSpecificationResolved",
      type: "OpeningHoursSpecification",
      resolver: (document, args, context) => {
        return context.OpeningHoursSpecification.findOne(
          { _id: document.OpeningHoursSpecification },
          {
            fields: context.OpeningHoursSpecification.getViewableFields(
              context.currentUser,
              context.OpeningHoursSpecification
            ),
          }
        )
      },
      optional: true,
    },
  },
  contactOption: {
    label: "contactOption",
    description: `An option available on this contact point (e.g. a toll-free number or support
for hearing-impaired callers).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ContactPointOptionResolved",
      type: "ContactPointOption",
      resolver: (document, args, context) => {
        return context.ContactPointOption.findOne(
          { _id: document.ContactPointOption },
          {
            fields: context.ContactPointOption.getViewableFields(
              context.currentUser,
              context.ContactPointOption
            ),
          }
        )
      },
      optional: true,
    },
  },
  availableLanguage: {
    label: "availableLanguage",
    description: `A language someone may use with or at the item, service or place. Please use one
of the language codes from the IETF BCP 47 standard. See also inLanguage`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "LanguageResolved",
      type: "Language",
      resolver: (document, args, context) => {
        return context.Language.findOne(
          { _id: document.Language },
          {
            fields: context.Language.getViewableFields(
              context.currentUser,
              context.Language
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
  contactType: {
    label: "contactType",
    description: `A person or organization can have different contact points, for different
purposes. For example, a sales contact point, a PR contact point and so on. This
property is used to specify the kind of contact point.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  productSupported: {
    label: "productSupported",
    description: `The product or service this support contact point is related to (such as product
support for a particular product line). This can be a specific product or
product line (e.g. "iPhone") or a general category of products or services (e.g.
"smartphones").`,
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
  postOfficeBoxNumber: {
    label: "postOfficeBoxNumber",
    description: `The post office box number for PO box addresses.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  streetAddress: {
    label: "streetAddress",
    description: `The street address. For example, 1600 Amphitheatre Pkwy.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  addressCountry: {
    label: "addressCountry",
    description: `The country. For example, USA. You can also provide the two-letter ISO 3166-1
alpha-2 country code.`,
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
  addressRegion: {
    label: "addressRegion",
    description: `The region. For example, CA.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  postalCode: {
    label: "postalCode",
    description: `The postal code. For example, 94043.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  addressLocality: {
    label: "addressLocality",
    description: `The locality. For example, Mountain View.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
}
export default PostalAddress
