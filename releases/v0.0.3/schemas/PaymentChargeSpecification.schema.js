export const PaymentChargeSpecification = {
  label: "PaymentChargeSpecification",
  description: `The costs of settling the payment using a particular payment method.`,
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
  minPrice: {
    label: "minPrice",
    description: `The lowest price if the price is a range.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Number,
    input: "number",
  },
  eligibleTransactionVolume: {
    label: "eligibleTransactionVolume",
    description: `The transaction volume, in a monetary unit, for which the offer or price
specification is valid, e.g. for indicating a minimal purchasing volume, to
express free shipping above a certain order volume, or to limit the acceptance
of credit cards to purchases to a certain minimal amount.`,
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
  maxPrice: {
    label: "maxPrice",
    description: `The highest price if the price is a range.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Number,
    input: "number",
  },
  priceCurrency: {
    label: "priceCurrency",
    description: `The currency of the price, or a price component when attached to 
PriceSpecification and its subtypes.

Use standard formats: ISO 4217 currency format e.g. "USD"; Ticker symbol for
cryptocurrencies e.g. "BTC"; well known names for Local Exchange Tradings
Systems (LETS) and other currency types e.g. "Ithaca HOUR".`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  eligibleQuantity: {
    label: "eligibleQuantity",
    description: `The interval and unit of measurement of ordering quantities for which the offer
or price specification is valid. This allows e.g. specifying that a certain
freight charge is valid only for a certain quantity.`,
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
  validFrom: {
    label: "validFrom",
    description: `The date when the item becomes valid.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  validThrough: {
    label: "validThrough",
    description: `The date after when the item is not valid. For example the end of an offer,
salary period, or a period of opening hours.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  price: {
    label: "price",
    description: `The offer price of a product, or of a price component when attached to
PriceSpecification and its subtypes.

Usage guidelines:

 * Use the priceCurrency property (with standard formats: ISO 4217 currency
   format e.g. "USD"; Ticker symbol for cryptocurrencies e.g. "BTC"; well known
   names for Local Exchange Tradings Systems (LETS) and other currency types
   e.g. "Ithaca HOUR") instead of including ambiguous symbols such as '$' in the
   value.
 * Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal
   point. Avoid using these symbols as a readability separator.
 * Note that both RDFa and Microdata syntax allow the use of a "content="
   attribute for publishing simple machine-readable values alongside more
   human-friendly formatting.
 * Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE'
   (U+0039)) rather than superficially similiar Unicode symbols.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Number,
    input: "number",
  },
  valueAddedTaxIncluded: {
    label: "valueAddedTaxIncluded",
    description: `Specifies whether the applicable value-added tax (VAT) is included in the price
specification or not.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Boolean,
    input: "checkbox",
  },
  appliesToPaymentMethod: {
    label: "appliesToPaymentMethod",
    description: `The payment method(s) to which the payment charge specification applies.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PaymentMethodResolved",
      type: "PaymentMethod",
      resolver: (document, args, context) => {
        return context.PaymentMethod.findOne(
          { _id: document.PaymentMethod },
          {
            fields: context.PaymentMethod.getViewableFields(
              context.currentUser,
              context.PaymentMethod
            ),
          }
        )
      },
      optional: true,
    },
  },
  appliesToDeliveryMethod: {
    label: "appliesToDeliveryMethod",
    description: `The delivery method(s) to which the delivery charge or payment charge
specification applies.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "DeliveryMethodResolved",
      type: "DeliveryMethod",
      resolver: (document, args, context) => {
        return context.DeliveryMethod.findOne(
          { _id: document.DeliveryMethod },
          {
            fields: context.DeliveryMethod.getViewableFields(
              context.currentUser,
              context.DeliveryMethod
            ),
          }
        )
      },
      optional: true,
    },
  },
}
export default PaymentChargeSpecification
