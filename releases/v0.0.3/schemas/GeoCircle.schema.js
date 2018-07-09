export const GeoCircle = {
  label: "GeoCircle",
  description: `A GeoCircle is a GeoShape representing a circular geographic area. As it is a
GeoShape it provides the simple textual property 'circle', but also allows the
combination of postalCode alongside geoRadius. The center of the circle can be
indicated via the 'geoMidpoint' property, or more approximately using 'address',
'postalCode'.`,
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
  address: {
    label: "address",
    description: `Physical address of the item.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  circle: {
    label: "circle",
    description: `A circle is the circular region of a specified radius centered at a specified
latitude and longitude. A circle is expressed as a pair followed by a radius in
meters.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  box: {
    label: "box",
    description: `A box is the area enclosed by the rectangle formed by two points. The first
point is the lower corner, the second point is the upper corner. A box is
expressed as two points separated by a space character.`,
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
  postalCode: {
    label: "postalCode",
    description: `The postal code. For example, 94043.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  elevation: {
    label: "elevation",
    description: `The elevation of a location (WGS 84).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  polygon: {
    label: "polygon",
    description: `A polygon is the area enclosed by a point-to-point path for which the starting
and ending points are the same. A polygon is expressed as a series of four or
more space delimited points where the first and final points are identical.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  line: {
    label: "line",
    description: `A line is a point-to-point path consisting of two or more points. A line is
expressed as a series of two or more point objects separated by space.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  geoRadius: {
    label: "geoRadius",
    description: `Indicates the approximate radius of a GeoCircle (metres unless indicated
otherwise via Distance notation).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Number,
    input: "number",
  },
  geoMidpoint: {
    label: "geoMidpoint",
    description: `Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    resolveAs: {
      fieldName: "GeoCoordinatesResolved",
      type: "GeoCoordinates",
      resolver: (document, args, context) => {
        return context.GeoCoordinates.findOne(
          { _id: document.GeoCoordinates },
          {
            fields: context.GeoCoordinates.getViewableFields(
              context.currentUser,
              context.GeoCoordinates
            ),
          }
        )
      },
      optional: true,
    },
  },
}
export default GeoCircle
