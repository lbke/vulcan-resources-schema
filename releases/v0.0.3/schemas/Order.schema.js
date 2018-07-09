export const Order = {
  label: "Order",
  description: `An order is a confirmation of a transaction (a receipt), which can contain
multiple line items, each represented by an Offer that has been accepted by the
customer.`,
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
  orderDate: {
    label: "orderDate",
    description: `Date order was placed.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  paymentDue: {
    label: "paymentDue",
    description: `The date that payment is due.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  orderNumber: {
    label: "orderNumber",
    description: `The identifier of the transaction.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  paymentUrl: {
    label: "paymentUrl",
    description: `The URL for sending a payment.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
    input: "url",
  },
  orderStatus: {
    label: "orderStatus",
    description: `The current status of the order.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrderStatusResolved",
      type: "OrderStatus",
      resolver: (document, args, context) => {
        return context.OrderStatus.findOne(
          { _id: document.OrderStatus },
          {
            fields: context.OrderStatus.getViewableFields(
              context.currentUser,
              context.OrderStatus
            ),
          }
        )
      },
      optional: true,
    },
  },
  billingAddress: {
    label: "billingAddress",
    description: `The billing address for the order.`,
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
  partOfInvoice: {
    label: "partOfInvoice",
    description: `The order is being paid as part of the referenced Invoice.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "InvoiceResolved",
      type: "Invoice",
      resolver: (document, args, context) => {
        return context.Invoice.findOne(
          { _id: document.Invoice },
          {
            fields: context.Invoice.getViewableFields(
              context.currentUser,
              context.Invoice
            ),
          }
        )
      },
      optional: true,
    },
  },
  confirmationNumber: {
    label: "confirmationNumber",
    description: `A number that confirms the given order or payment has been received.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  customer: {
    label: "customer",
    description: `Party placing the order or paying the invoice.`,
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
  merchant: {
    label: "merchant",
    description: `'merchant' is an out-dated term for 'seller'.`,
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
  isGift: {
    label: "isGift",
    description: `Was the offer accepted as a gift for someone other than the buyer.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Boolean,
    input: "checkbox",
  },
  paymentMethod: {
    label: "paymentMethod",
    description: `The name of the credit card or other method of payment for the order.`,
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
  paymentMethodId: {
    label: "paymentMethodId",
    description: `An identifier for the method of payment used (e.g. the last 4 digits of the
credit card).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  discount: {
    label: "discount",
    description: `Any discount applied (to an Order).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  orderDelivery: {
    label: "orderDelivery",
    description: `The delivery of the parcel related to this order or order item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "ParcelDeliveryResolved",
      type: "ParcelDelivery",
      resolver: (document, args, context) => {
        return context.ParcelDelivery.findOne(
          { _id: document.ParcelDelivery },
          {
            fields: context.ParcelDelivery.getViewableFields(
              context.currentUser,
              context.ParcelDelivery
            ),
          }
        )
      },
      optional: true,
    },
  },
  orderedItem: {
    label: "orderedItem",
    description: `The item ordered.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrderItemResolved",
      type: "OrderItem",
      resolver: (document, args, context) => {
        return context.OrderItem.findOne(
          { _id: document.OrderItem },
          {
            fields: context.OrderItem.getViewableFields(
              context.currentUser,
              context.OrderItem
            ),
          }
        )
      },
      optional: true,
    },
  },
  acceptedOffer: {
    label: "acceptedOffer",
    description: `The offer(s) -- e.g., product, quantity and price combinations -- included in
the order.`,
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
  discountCurrency: {
    label: "discountCurrency",
    description: `The currency of the discount.

Use standard formats: ISO 4217 currency format e.g. "USD"; Ticker symbol for
cryptocurrencies e.g. "BTC"; well known names for Local Exchange Tradings
Systems (LETS) and other currency types e.g. "Ithaca HOUR".`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  paymentDueDate: {
    label: "paymentDueDate",
    description: `The date that payment is due.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  discountCode: {
    label: "discountCode",
    description: `Code used to redeem a discount.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
}
export default Order
