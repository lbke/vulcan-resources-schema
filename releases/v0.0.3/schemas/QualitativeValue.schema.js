export const QualitativeValue = {
  label: "QualitativeValue",
  description: `A predefined value for a product characteristic, e.g. the power cord plug type
'US' or the garment sizes 'S', 'M', 'L', and 'XL'.`,
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
  greater: {
    label: "greater",
    description: `This ordering relation for qualitative values indicates that the subject is
greater than the object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  equal: {
    label: "equal",
    description: `This ordering relation for qualitative values indicates that the subject is
equal to the object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  additionalProperty: {
    label: "additionalProperty",
    description: `A property-value pair representing an additional characteristics of the
entitity, e.g. a product feature or another characteristic for which there is no
matching property in schema.org.

Note: Publishers should be aware that applications designed to use specific
schema.org properties (e.g. width, color, gtin13, ...) will typically expect
such data to be provided using those properties, rather than using the generic
property/value mechanism.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "PropertyValueResolved",
      type: "PropertyValue",
      resolver: (document, args, context) => {
        return context.PropertyValue.findOne(
          { _id: document.PropertyValue },
          {
            fields: context.PropertyValue.getViewableFields(
              context.currentUser,
              context.PropertyValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  lesser: {
    label: "lesser",
    description: `This ordering relation for qualitative values indicates that the subject is
lesser than the object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  valueReference: {
    label: "valueReference",
    description: `A pointer to a secondary value that provides additional information on the
original value, e.g. a reference temperature.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  nonEqual: {
    label: "nonEqual",
    description: `This ordering relation for qualitative values indicates that the subject is not
equal to the object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  lesserOrEqual: {
    label: "lesserOrEqual",
    description: `This ordering relation for qualitative values indicates that the subject is
lesser than or equal to the object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
  greaterOrEqual: {
    label: "greaterOrEqual",
    description: `This ordering relation for qualitative values indicates that the subject is
greater than or equal to the object.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "QualitativeValueResolved",
      type: "QualitativeValue",
      resolver: (document, args, context) => {
        return context.QualitativeValue.findOne(
          { _id: document.QualitativeValue },
          {
            fields: context.QualitativeValue.getViewableFields(
              context.currentUser,
              context.QualitativeValue
            ),
          }
        )
      },
      optional: true,
    },
  },
}
export default QualitativeValue
