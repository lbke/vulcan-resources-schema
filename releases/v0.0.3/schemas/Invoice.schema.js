export const Invoice = {
  label: "Invoice",
  description: `A statement of the money due for goods or services; a bill.`,
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
  paymentDue: {
    label: "paymentDue",
    description: `The date that payment is due.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
    input: "datetime",
  },
  billingPeriod: {
    label: "billingPeriod",
    description: `The time interval used to compute the invoice.`,
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
  confirmationNumber: {
    label: "confirmationNumber",
    description: `A number that confirms the given order or payment has been received.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  scheduledPaymentDate: {
    label: "scheduledPaymentDate",
    description: `The date the invoice is scheduled to be paid.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
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
  category: {
    label: "category",
    description: `A category for the item. Greater signs or slashes can be used to informally
indicate a category hierarchy.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  paymentStatus: {
    label: "paymentStatus",
    description: `The status of payment; whether the invoice has been paid or not.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PaymentStatusTypeResolved",
      type: "PaymentStatusType",
      resolver: (document, args, context) => {
        return context.PaymentStatusType.findOne(
          { _id: document.PaymentStatusType },
          {
            fields: context.PaymentStatusType.getViewableFields(
              context.currentUser,
              context.PaymentStatusType
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
  paymentMethodId: {
    label: "paymentMethodId",
    description: `An identifier for the method of payment used (e.g. the last 4 digits of the
credit card).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  minimumPaymentDue: {
    label: "minimumPaymentDue",
    description: `The minimum payment required at this time.`,
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
  totalPaymentDue: {
    label: "totalPaymentDue",
    description: `The total amount due.`,
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
  accountId: {
    label: "accountId",
    description: `The identifier for the account the payment will be applied to.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  referencesOrder: {
    label: "referencesOrder",
    description: `The Order(s) related to this Invoice. One or more Orders may be combined into a
single Invoice.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "OrderResolved",
      type: "Order",
      resolver: (document, args, context) => {
        return context.Order.findOne(
          { _id: document.Order },
          {
            fields: context.Order.getViewableFields(
              context.currentUser,
              context.Order
            ),
          }
        )
      },
      optional: true,
    },
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
}
export default Invoice
