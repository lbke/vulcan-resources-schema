export const Demand = {
  label: "Demand",
  description: `A demand entity represents the public, not necessarily binding, not necessarily
exclusive, announcement by an organization or person to seek a certain type of
goods or services. For describing demand using this type, the very same
properties used for Offer apply.`,
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
  sku: {
    label: "sku",
    description: `The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product
or service, or the product to which the offer refers.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  availabilityStarts: {
    label: "availabilityStarts",
    description: `The beginning of the availability of the product or service included in the
offer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  availableDeliveryMethod: {
    label: "availableDeliveryMethod",
    description: `The delivery method(s) available for this offer.`,
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
  mpn: {
    label: "mpn",
    description: `The Manufacturer Part Number (MPN) of the product, or the product to which the
offer refers.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  serialNumber: {
    label: "serialNumber",
    description: `The serial number or any alphanumeric identifier of a particular product. When
attached to an offer, it is a shortcut for the serial number of the product
included in the offer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  ineligibleRegion: {
    label: "ineligibleRegion",
    description: `The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the
GeoShape for the geo-political region(s) for which the offer or delivery charge
specification is not valid, e.g. a region where the transaction is not allowed.

See also eligibleRegion.`,
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
  gtin8: {
    label: "gtin8",
    description: `The GTIN-8 code of the product, or the product to which the offer refers. This
code is also known as EAN/UCC-8 or 8-digit EAN. See GS1 GTIN Summary for more
details.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  availability: {
    label: "availability",
    description: `The availability of this item—for example In stock, Out of stock, Pre-order,
etc.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ItemAvailabilityResolved",
      type: "ItemAvailability",
      resolver: (document, args, context) => {
        return context.ItemAvailability.findOne(
          { _id: document.ItemAvailability },
          {
            fields: context.ItemAvailability.getViewableFields(
              context.currentUser,
              context.ItemAvailability
            ),
          }
        )
      },
      optional: true,
    },
  },
  priceSpecification: {
    label: "priceSpecification",
    description: `One or more detailed price specifications, indicating the unit price and
delivery or payment charges.`,
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
  inventoryLevel: {
    label: "inventoryLevel",
    description: `The current approximate inventory level for the item or items.`,
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
  availableAtOrFrom: {
    label: "availableAtOrFrom",
    description: `The place(s) from which the offer can be obtained (e.g. store locations).`,
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
  warranty: {
    label: "warranty",
    description: `The warranty promise(s) included in the offer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "WarrantyPromiseResolved",
      type: "WarrantyPromise",
      resolver: (document, args, context) => {
        return context.WarrantyPromise.findOne(
          { _id: document.WarrantyPromise },
          {
            fields: context.WarrantyPromise.getViewableFields(
              context.currentUser,
              context.WarrantyPromise
            ),
          }
        )
      },
      optional: true,
    },
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
  gtin14: {
    label: "gtin14",
    description: `The GTIN-14 code of the product, or the product to which the offer refers. See 
GS1 GTIN Summary for more details.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  gtin13: {
    label: "gtin13",
    description: `The GTIN-13 code of the product, or the product to which the offer refers. This
is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes
can be converted into a GTIN-13 code by simply adding a preceeding zero. See GS1
GTIN Summary for more details.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  gtin12: {
    label: "gtin12",
    description: `The GTIN-12 code of the product, or the product to which the offer refers. The
GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company
Prefix, Item Reference, and Check Digit used to identify trade items. See GS1
GTIN Summary for more details.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  seller: {
    label: "seller",
    description: `An entity which offers (sells / leases / lends / loans) the services / goods. A
seller may also be a provider.`,
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
  deliveryLeadTime: {
    label: "deliveryLeadTime",
    description: `The typical delay between the receipt of the order and the goods either leaving
the warehouse or being prepared for pickup, in case the delivery method is on
site pickup.`,
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
  availabilityEnds: {
    label: "availabilityEnds",
    description: `The end of the availability of the product or service included in the offer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  includesObject: {
    label: "includesObject",
    description: `This links to a node or nodes indicating the exact quantity of the products
included in the offer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "TypeAndQuantityNodeResolved",
      type: "TypeAndQuantityNode",
      resolver: (document, args, context) => {
        return context.TypeAndQuantityNode.findOne(
          { _id: document.TypeAndQuantityNode },
          {
            fields: context.TypeAndQuantityNode.getViewableFields(
              context.currentUser,
              context.TypeAndQuantityNode
            ),
          }
        )
      },
      optional: true,
    },
  },
  businessFunction: {
    label: "businessFunction",
    description: `The business function (e.g. sell, lease, repair, dispose) of the offer or
component of a bundle (TypeAndQuantityNode). The default is
http://purl.org/goodrelations/v1#Sell.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "BusinessFunctionResolved",
      type: "BusinessFunction",
      resolver: (document, args, context) => {
        return context.BusinessFunction.findOne(
          { _id: document.BusinessFunction },
          {
            fields: context.BusinessFunction.getViewableFields(
              context.currentUser,
              context.BusinessFunction
            ),
          }
        )
      },
      optional: true,
    },
  },
  eligibleCustomerType: {
    label: "eligibleCustomerType",
    description: `The type(s) of customers for which the given offer is valid.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "BusinessEntityTypeResolved",
      type: "BusinessEntityType",
      resolver: (document, args, context) => {
        return context.BusinessEntityType.findOne(
          { _id: document.BusinessEntityType },
          {
            fields: context.BusinessEntityType.getViewableFields(
              context.currentUser,
              context.BusinessEntityType
            ),
          }
        )
      },
      optional: true,
    },
  },
  itemCondition: {
    label: "itemCondition",
    description: `A predefined value from OfferItemCondition or a textual description of the
condition of the product or service, or the products or services included in the
offer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OfferItemConditionResolved",
      type: "OfferItemCondition",
      resolver: (document, args, context) => {
        return context.OfferItemCondition.findOne(
          { _id: document.OfferItemCondition },
          {
            fields: context.OfferItemCondition.getViewableFields(
              context.currentUser,
              context.OfferItemCondition
            ),
          }
        )
      },
      optional: true,
    },
  },
  itemOffered: {
    label: "itemOffered",
    description: `The item being offered.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ServiceResolved",
      type: "Service",
      resolver: (document, args, context) => {
        return context.Service.findOne(
          { _id: document.Service },
          {
            fields: context.Service.getViewableFields(
              context.currentUser,
              context.Service
            ),
          }
        )
      },
      optional: true,
    },
  },
  eligibleDuration: {
    label: "eligibleDuration",
    description: `The duration for which the given offer is valid.`,
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
  acceptedPaymentMethod: {
    label: "acceptedPaymentMethod",
    description: `The payment method(s) accepted by seller for this offer.`,
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
  areaServed: {
    label: "areaServed",
    description: `The geographic area where a service or offered item is provided.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  eligibleRegion: {
    label: "eligibleRegion",
    description: `The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the
GeoShape for the geo-political region(s) for which the offer or delivery charge
specification is valid.

See also ineligibleRegion.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  advanceBookingRequirement: {
    label: "advanceBookingRequirement",
    description: `The amount of time that is required between accepting the offer and the actual
usage of the resource or service.`,
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
export default Demand
