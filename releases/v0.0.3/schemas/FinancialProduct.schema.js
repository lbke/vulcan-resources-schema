export const FinancialProduct = {
  label: "FinancialProduct",
  description: `A product provided to consumers and businesses by financial institutions such as
banks, insurance companies, brokerage firms, consumer finance companies, and
investment companies which comprise the financial services industry.`,
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
  serviceAudience: {
    label: "serviceAudience",
    description: `The audience eligible for this service.`,
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
  produces: {
    label: "produces",
    description: `The tangible thing generated by the service, e.g. a passport, permit, etc.`,
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
  providerMobility: {
    label: "providerMobility",
    description: `Indicates the mobility of a provided service (e.g. 'static', 'dynamic').`,
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
  award: {
    label: "award",
    description: `An award won by or for this item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  category: {
    label: "category",
    description: `A category for the item. Greater signs or slashes can be used to informally
indicate a category hierarchy.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  broker: {
    label: "broker",
    description: `An entity that arranges for an exchange between a buyer and a seller. In most
cases a broker never acquires or releases ownership of a product or service
involved in an exchange. If it is not clear whether an entity is a broker,
seller, or buyer, the latter two terms are preferred.`,
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
  serviceOutput: {
    label: "serviceOutput",
    description: `The tangible thing generated by the service, e.g. a passport, permit, etc.`,
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
  logo: {
    label: "logo",
    description: `An associated logo.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  isSimilarTo: {
    label: "isSimilarTo",
    description: `A pointer to another, functionally similar product (or multiple products).`,
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
  isRelatedTo: {
    label: "isRelatedTo",
    description: `A pointer to another, somehow related product (or multiple products).`,
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
  availableChannel: {
    label: "availableChannel",
    description: `A means of accessing the service (e.g. a phone bank, a web site, a location,
etc.).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ServiceChannelResolved",
      type: "ServiceChannel",
      resolver: (document, args, context) => {
        return context.ServiceChannel.findOne(
          { _id: document.ServiceChannel },
          {
            fields: context.ServiceChannel.getViewableFields(
              context.currentUser,
              context.ServiceChannel
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
  serviceType: {
    label: "serviceType",
    description: `The type of service being offered, e.g. veterans' benefits, emergency relief,
etc.`,
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
  areaServed: {
    label: "areaServed",
    description: `The geographic area where a service or offered item is provided.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  annualPercentageRate: {
    label: "annualPercentageRate",
    description: `The annual rate that is charged for borrowing (or made by investing), expressed
as a single percentage number that represents the actual yearly cost of funds
over the term of a loan. This includes any fees or additional costs associated
with the transaction.`,
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
  feesAndCommissionsSpecification: {
    label: "feesAndCommissionsSpecification",
    description: `Description of fees, commissions, and other terms applied either to a class of
financial product, or by a financial service organization.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  interestRate: {
    label: "interestRate",
    description: `The interest rate, charged or paid, applicable to the financial product. Note:
This is different from the calculated annualPercentageRate.`,
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
}
export default FinancialProduct
