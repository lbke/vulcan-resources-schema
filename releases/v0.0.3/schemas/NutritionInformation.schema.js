export const NutritionInformation = {
  label: "NutritionInformation",
  description: `Nutritional information about the recipe.`,
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
  saturatedFatContent: {
    label: "saturatedFatContent",
    description: `The number of grams of saturated fat.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  fatContent: {
    label: "fatContent",
    description: `The number of grams of fat.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  unsaturatedFatContent: {
    label: "unsaturatedFatContent",
    description: `The number of grams of unsaturated fat.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  sugarContent: {
    label: "sugarContent",
    description: `The number of grams of sugar.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  cholesterolContent: {
    label: "cholesterolContent",
    description: `The number of milligrams of cholesterol.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  carbohydrateContent: {
    label: "carbohydrateContent",
    description: `The number of grams of carbohydrates.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  proteinContent: {
    label: "proteinContent",
    description: `The number of grams of protein.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  sodiumContent: {
    label: "sodiumContent",
    description: `The number of milligrams of sodium.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  transFatContent: {
    label: "transFatContent",
    description: `The number of grams of trans fat.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  fiberContent: {
    label: "fiberContent",
    description: `The number of grams of fiber.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "MassResolved",
      type: "Mass",
      resolver: (document, args, context) => {
        return context.Mass.findOne(
          { _id: document.Mass },
          {
            fields: context.Mass.getViewableFields(
              context.currentUser,
              context.Mass
            ),
          }
        )
      },
      optional: true,
    },
  },
  calories: {
    label: "calories",
    description: `The number of calories.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "EnergyResolved",
      type: "Energy",
      resolver: (document, args, context) => {
        return context.Energy.findOne(
          { _id: document.Energy },
          {
            fields: context.Energy.getViewableFields(
              context.currentUser,
              context.Energy
            ),
          }
        )
      },
      optional: true,
    },
  },
  servingSize: {
    label: "servingSize",
    description: `The serving size, in terms of the number of volume or mass.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
}
export default NutritionInformation
