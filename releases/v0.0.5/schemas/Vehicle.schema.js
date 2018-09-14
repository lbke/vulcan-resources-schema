export const Vehicle = {
  label: "Vehicle",
  description: `A vehicle is a device that is designed or used to transport people or cargo over
land, water, air, or through space.`,
  _id: {
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    type: String,
    optional: true,
  },
  createdAt: {
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    type: Date,
    optional: true,
    onCreate: ({ document, context }) => {
      return new Date()
    },
  },
  userId: {
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
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
  vehicleSpecialUsage: {
    label: "vehicleSpecialUsage",
    description: `Indicates whether the vehicle has been used for special purposes, like
commercial rental, driving school, or as a taxi. The legislation in many
countries requires this information to be revealed when offering a car for sale.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  numberOfForwardGears: {
    label: "numberOfForwardGears",
    description: `The total number of forward gears available for the transmission system of the
vehicle.

Typical unit code(s): C62`,
    type: Number,
    input: "number",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  mileageFromOdometer: {
    label: "mileageFromOdometer",
    description: `The total distance travelled by the particular vehicle since its initial
production, as read from its odometer.

Typical unit code(s): KMT for kilometers, SMI for statute miles`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  cargoVolume: {
    label: "cargoVolume",
    description: `The available volume for cargo or luggage. For automobiles, this is usually the
trunk volume.

Typical unit code(s): LTR for liters, FTQ for cubic foot/feet

Note: You can use minValue and maxValue to indicate ranges.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleInteriorColor: {
    label: "vehicleInteriorColor",
    description: `The color or color combination of the interior of the vehicle.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  steeringPosition: {
    label: "steeringPosition",
    description: `The position of the steering wheel or similar device (mostly for cars).`,
    resolveAs: {
      fieldName: "SteeringPositionValueResolved",
      type: "SteeringPositionValue",
      resolver: (document, args, context) => {
        return context.SteeringPositionValue.findOne(
          { _id: document.SteeringPositionValue },
          {
            fields: context.SteeringPositionValue.getViewableFields(
              context.currentUser,
              context.SteeringPositionValue
            ),
          }
        )
      },
      optional: true,
    },
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleSeatingCapacity: {
    label: "vehicleSeatingCapacity",
    description: `The number of passengers that can be seated in the vehicle, both in terms of the
physical space available, and in terms of limitations set by law.

Typical unit code(s): C62 for persons.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleEngine: {
    label: "vehicleEngine",
    description: `Information about the engine or engines of the vehicle.`,
    resolveAs: {
      fieldName: "EngineSpecificationResolved",
      type: "EngineSpecification",
      resolver: (document, args, context) => {
        return context.EngineSpecification.findOne(
          { _id: document.EngineSpecification },
          {
            fields: context.EngineSpecification.getViewableFields(
              context.currentUser,
              context.EngineSpecification
            ),
          }
        )
      },
      optional: true,
    },
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleModelDate: {
    label: "vehicleModelDate",
    description: `The release date of a vehicle model (often used to differentiate versions of the
same make and model).`,
    type: Date,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  numberOfDoors: {
    label: "numberOfDoors",
    description: `The number of doors.

Typical unit code(s): C62`,
    type: Number,
    input: "number",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleConfiguration: {
    label: "vehicleConfiguration",
    description: `A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST
2.5 MT 225 hp' or 'limited edition'.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  fuelType: {
    label: "fuelType",
    description: `The type of fuel suitable for the engine or engines of the vehicle. If the
vehicle has only one engine, this property can be attached directly to the
vehicle.`,
    type: String,
    input: "url",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  fuelConsumption: {
    label: "fuelConsumption",
    description: `The amount of fuel consumed for traveling a particular distance or temporal
duration with the given vehicle (e.g. liters per 100 km).

 * Note 1: There are unfortunately no standard unit codes for liters per 100 km.
   Use unitText to indicate the unit of measurement, e.g. L/100 km.
 * Note 2: There are two ways of indicating the fuel consumption, 
   fuelConsumption (e.g. 8 liters per 100 km) and fuelEfficiency (e.g. 30 miles
   per gallon). They are reciprocal.
 * Note 3: Often, the absolute value is useful only when related to driving
   speed ("at 80 km/h") or usage pattern ("city traffic"). You can use 
   valueReference to link the value for the fuel consumption to another value.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  numberOfPreviousOwners: {
    label: "numberOfPreviousOwners",
    description: `The number of owners of the vehicle, including the current one.

Typical unit code(s): C62`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  fuelEfficiency: {
    label: "fuelEfficiency",
    description: `The distance traveled per unit of fuel used; most commonly miles per gallon
(mpg) or kilometers per liter (km/L).

 * Note 1: There are unfortunately no standard unit codes for miles per gallon
   or kilometers per liter. Use unitText to indicate the unit of measurement,
   e.g. mpg or km/L.
 * Note 2: There are two ways of indicating the fuel consumption, 
   fuelConsumption (e.g. 8 liters per 100 km) and fuelEfficiency (e.g. 30 miles
   per gallon). They are reciprocal.
 * Note 3: Often, the absolute value is useful only when related to driving
   speed ("at 80 km/h") or usage pattern ("city traffic"). You can use 
   valueReference to link the value for the fuel economy to another value.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  numberOfAxles: {
    label: "numberOfAxles",
    description: `The number of axles.

Typical unit code(s): C62`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleInteriorType: {
    label: "vehicleInteriorType",
    description: `The type or material of the interior of the vehicle (e.g. synthetic fabric,
leather, wood, etc.). While most interior types are characterized by the
material used, an interior type can also be based on vehicle usage or target
audience.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  numberOfAirbags: {
    label: "numberOfAirbags",
    description: `The number or type of airbags in the vehicle.`,
    type: Number,
    input: "number",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  vehicleTransmission: {
    label: "vehicleTransmission",
    description: `The type of component used for transmitting the power from a rotating power
source to the wheels or other relevant component(s) ("gearbox" for cars).`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  dateVehicleFirstRegistered: {
    label: "dateVehicleFirstRegistered",
    description: `The date of the first registration of the vehicle with the respective public
authorities.`,
    type: Date,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  purchaseDate: {
    label: "purchaseDate",
    description: `The date the item e.g. vehicle was purchased by the current owner.`,
    type: Date,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  productionDate: {
    label: "productionDate",
    description: `The date of production of the item, e.g. vehicle.`,
    type: Date,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  knownVehicleDamages: {
    label: "knownVehicleDamages",
    description: `A textual description of known damages, both repaired and unrepaired.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  driveWheelConfiguration: {
    label: "driveWheelConfiguration",
    description: `The drive wheel configuration, i.e. which roadwheels will receive torque from
the vehicle's engine via the drivetrain.`,
    resolveAs: {
      fieldName: "DriveWheelConfigurationValueResolved",
      type: "DriveWheelConfigurationValue",
      resolver: (document, args, context) => {
        return context.DriveWheelConfigurationValue.findOne(
          { _id: document.DriveWheelConfigurationValue },
          {
            fields: context.DriveWheelConfigurationValue.getViewableFields(
              context.currentUser,
              context.DriveWheelConfigurationValue
            ),
          }
        )
      },
      optional: true,
    },
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  identifierObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      isbn: {
        label: "isbn",
        description: `The ISBN of the book.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      sku: {
        label: "sku",
        description: `The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product
or service, or the product to which the offer refers.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      serialNumber: {
        label: "serialNumber",
        description: `The serial number or any alphanumeric identifier of a particular product. When
attached to an offer, it is a shortcut for the serial number of the product
included in the offer.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      orderNumber: {
        label: "orderNumber",
        description: `The identifier of the transaction.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      gtin8: {
        label: "gtin8",
        description: `The GTIN-8 code of the product, or the product to which the offer refers. This
code is also known as EAN/UCC-8 or 8-digit EAN. See GS1 GTIN Summary for more
details.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      flightNumber: {
        label: "flightNumber",
        description: `The unique identifier for a flight including the airline IATA code. For example,
if describing United flight 110, where the IATA code for United is 'UA', the
flightNumber is 'UA110'.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      globalLocationNumber: {
        label: "globalLocationNumber",
        description: `The Global Location Number (GLN, sometimes also referred to as International
Location Number or ILN) of the respective organization, person, or place. The
GLN is a 13-digit number used to identify parties and physical locations.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      confirmationNumber: {
        label: "confirmationNumber",
        description: `A number that confirms the given order or payment has been received.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      duns: {
        label: "duns",
        description: `The Dun & Bradstreet DUNS number for identifying an organization or business
person.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      taxID: {
        label: "taxID",
        description: `The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the
CIF/NIF in Spain.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      issn: {
        label: "issn",
        description: `The International Standard Serial Number (ISSN) that identifies this serial
publication. You can repeat this property to identify different formats of, or
the linking ISSN (ISSN-L) for, this serial publication.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      leiCode: {
        label: "leiCode",
        description: `An organization identifier that uniquely identifies a legal entity as defined in
ISO 17442.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      gtin14: {
        label: "gtin14",
        description: `The GTIN-14 code of the product, or the product to which the offer refers. See 
GS1 GTIN Summary for more details.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      gtin13: {
        label: "gtin13",
        description: `The GTIN-13 code of the product, or the product to which the offer refers. This
is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes
can be converted into a GTIN-13 code by simply adding a preceeding zero. See GS1
GTIN Summary for more details.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      gtin12: {
        label: "gtin12",
        description: `The GTIN-12 code of the product, or the product to which the offer refers. The
GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company
Prefix, Item Reference, and Check Digit used to identify trade items. See GS1
GTIN Summary for more details.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      productID: {
        label: "productID",
        description: `The product identifier, such as ISBN. For example: meta itemprop="productID"
content="isbn:123-456-789".`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      accountId: {
        label: "accountId",
        description: `The identifier for the account the payment will be applied to.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  instrumentObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      query: {
        label: "query",
        description: `A sub property of instrument. The query used on this action.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      recipe: {
        label: "recipe",
        description: `A sub property of instrument. The recipe/instructions used to perform the
action.`,
        resolveAs: {
          fieldName: "RecipeResolved",
          type: "Recipe",
          resolver: (document, args, context) => {
            return context.Recipe.findOne(
              { _id: document.Recipe },
              {
                fields: context.Recipe.getViewableFields(
                  context.currentUser,
                  context.Recipe
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      deliveryMethod: {
        label: "deliveryMethod",
        description: `A sub property of instrument. The method of delivery.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      language: {
        label: "language",
        description: `A sub property of instrument. The language used on this action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      supply: {
        label: "supply",
        description: `A sub-property of instrument. A supply consumed when performing instructions or
a direction.`,
        resolveAs: {
          fieldName: "HowToSupplyResolved",
          type: "HowToSupply",
          resolver: (document, args, context) => {
            return context.HowToSupply.findOne(
              { _id: document.HowToSupply },
              {
                fields: context.HowToSupply.getViewableFields(
                  context.currentUser,
                  context.HowToSupply
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      tool: {
        label: "tool",
        description: `A sub property of instrument. An object used (but not consumed) when performing
instructions or a direction.`,
        resolveAs: {
          fieldName: "HowToToolResolved",
          type: "HowToTool",
          resolver: (document, args, context) => {
            return context.HowToTool.findOne(
              { _id: document.HowToTool },
              {
                fields: context.HowToTool.getViewableFields(
                  context.currentUser,
                  context.HowToTool
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  sponsorObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      funder: {
        label: "funder",
        description: `A person or organization that supports (sponsors) something through some kind of
financial contribution.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  yieldObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      recipeYield: {
        label: "recipeYield",
        description: `The quantity produced by the recipe (for example, number of people served,
number of servings, etc).`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  participantObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      buyer: {
        label: "buyer",
        description: `A sub property of participant. The participant/person/organization that bought
the object.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      landlord: {
        label: "landlord",
        description: `A sub property of participant. The owner of the real estate property.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      loser: {
        label: "loser",
        description: `A sub property of participant. The loser of the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      sportsTeam: {
        label: "sportsTeam",
        description: `A sub property of participant. The sports team that participated on this action.`,
        resolveAs: {
          fieldName: "SportsTeamResolved",
          type: "SportsTeam",
          resolver: (document, args, context) => {
            return context.SportsTeam.findOne(
              { _id: document.SportsTeam },
              {
                fields: context.SportsTeam.getViewableFields(
                  context.currentUser,
                  context.SportsTeam
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      opponent: {
        label: "opponent",
        description: `A sub property of participant. The opponent on this action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      vendor: {
        label: "vendor",
        description: `'vendor' is an earlier term for 'seller'.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      winner: {
        label: "winner",
        description: `A sub property of participant. The winner of the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      recipient: {
        label: "recipient",
        description: `A sub property of participant. The participant who is at the receiving end of
the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      realEstateAgent: {
        label: "realEstateAgent",
        description: `A sub property of participant. The real estate agent involved in the action.`,
        resolveAs: {
          fieldName: "RealEstateAgentResolved",
          type: "RealEstateAgent",
          resolver: (document, args, context) => {
            return context.RealEstateAgent.findOne(
              { _id: document.RealEstateAgent },
              {
                fields: context.RealEstateAgent.getViewableFields(
                  context.currentUser,
                  context.RealEstateAgent
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      endorsee: {
        label: "endorsee",
        description: `A sub property of participant. The person/organization being supported.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      sender: {
        label: "sender",
        description: `A sub property of participant. The participant who is at the sending end of the
action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      seller: {
        label: "seller",
        description: `An entity which offers (sells / leases / lends / loans) the services / goods. A
seller may also be a provider.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      lender: {
        label: "lender",
        description: `A sub property of participant. The person that lends the object being borrowed.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      borrower: {
        label: "borrower",
        description: `A sub property of participant. The person that borrows the object being lent.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  competitorObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      awayTeam: {
        label: "awayTeam",
        description: `The away team in a sports event.`,
        resolveAs: {
          fieldName: "SportsTeamResolved",
          type: "SportsTeam",
          resolver: (document, args, context) => {
            return context.SportsTeam.findOne(
              { _id: document.SportsTeam },
              {
                fields: context.SportsTeam.getViewableFields(
                  context.currentUser,
                  context.SportsTeam
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      homeTeam: {
        label: "homeTeam",
        description: `The home team in a sports event.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  objectObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      actionOption: {
        label: "actionOption",
        description: `A sub property of object. The options subject to this action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      option: {
        label: "option",
        description: `A sub property of object. The options subject to this action.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      followee: {
        label: "followee",
        description: `A sub property of object. The person or organization being followed.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      replacee: {
        label: "replacee",
        description: `A sub property of object. The object that is being replaced.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      replacer: {
        label: "replacer",
        description: `A sub property of object. The object that replaces.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      question: {
        label: "question",
        description: `A sub property of object. A question.`,
        resolveAs: {
          fieldName: "QuestionResolved",
          type: "Question",
          resolver: (document, args, context) => {
            return context.Question.findOne(
              { _id: document.Question },
              {
                fields: context.Question.getViewableFields(
                  context.currentUser,
                  context.Question
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      collection: {
        label: "collection",
        description: `A sub property of object. The collection target of the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      targetCollection: {
        label: "targetCollection",
        description: `A sub property of object. The collection target of the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      candidate: {
        label: "candidate",
        description: `A sub property of object. The candidate subject of this action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  locationObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      workLocation: {
        label: "workLocation",
        description: `A contact location for a person's place of work.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      course: {
        label: "course",
        description: `A sub property of location. The course where this action was taken.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      homeLocation: {
        label: "homeLocation",
        description: `A contact location for a person's residence.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      sportsEvent: {
        label: "sportsEvent",
        description: `A sub property of location. The sports event where this action occurred.`,
        resolveAs: {
          fieldName: "SportsEventResolved",
          type: "SportsEvent",
          resolver: (document, args, context) => {
            return context.SportsEvent.findOne(
              { _id: document.SportsEvent },
              {
                fields: context.SportsEvent.getViewableFields(
                  context.currentUser,
                  context.SportsEvent
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      sportsActivityLocation: {
        label: "sportsActivityLocation",
        description: `A sub property of location. The sports activity location where this action
occurred.`,
        resolveAs: {
          fieldName: "SportsActivityLocationResolved",
          type: "SportsActivityLocation",
          resolver: (document, args, context) => {
            return context.SportsActivityLocation.findOne(
              { _id: document.SportsActivityLocation },
              {
                fields: context.SportsActivityLocation.getViewableFields(
                  context.currentUser,
                  context.SportsActivityLocation
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      foodEvent: {
        label: "foodEvent",
        description: `A sub property of location. The specific food event where the action occurred.`,
        resolveAs: {
          fieldName: "FoodEventResolved",
          type: "FoodEvent",
          resolver: (document, args, context) => {
            return context.FoodEvent.findOne(
              { _id: document.FoodEvent },
              {
                fields: context.FoodEvent.getViewableFields(
                  context.currentUser,
                  context.FoodEvent
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      toLocation: {
        label: "toLocation",
        description: `A sub property of location. The final location of the object or the agent after
the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      fromLocation: {
        label: "fromLocation",
        description: `A sub property of location. The original location of the object or the agent
before the action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      foodEstablishment: {
        label: "foodEstablishment",
        description: `A sub property of location. The specific food establishment where the action
occurred.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      entertainmentBusiness: {
        label: "entertainmentBusiness",
        description: `A sub property of location. The entertainment business where the action
occurred.`,
        resolveAs: {
          fieldName: "EntertainmentBusinessResolved",
          type: "EntertainmentBusiness",
          resolver: (document, args, context) => {
            return context.EntertainmentBusiness.findOne(
              { _id: document.EntertainmentBusiness },
              {
                fields: context.EntertainmentBusiness.getViewableFields(
                  context.currentUser,
                  context.EntertainmentBusiness
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      exerciseCourse: {
        label: "exerciseCourse",
        description: `A sub property of location. The course where this action was taken.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  durationObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      loanTerm: {
        label: "loanTerm",
        description: `The duration of the loan or credit agreement.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  hasPartObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      season: {
        label: "season",
        description: `A season in a media series.`,
        resolveAs: {
          fieldName: "CreativeWorkSeasonResolved",
          type: "CreativeWorkSeason",
          resolver: (document, args, context) => {
            return context.CreativeWorkSeason.findOne(
              { _id: document.CreativeWorkSeason },
              {
                fields: context.CreativeWorkSeason.getViewableFields(
                  context.currentUser,
                  context.CreativeWorkSeason
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      containsSeason: {
        label: "containsSeason",
        description: `A season that is part of the media series.`,
        resolveAs: {
          fieldName: "CreativeWorkSeasonResolved",
          type: "CreativeWorkSeason",
          resolver: (document, args, context) => {
            return context.CreativeWorkSeason.findOne(
              { _id: document.CreativeWorkSeason },
              {
                fields: context.CreativeWorkSeason.getViewableFields(
                  context.currentUser,
                  context.CreativeWorkSeason
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      episode: {
        label: "episode",
        description: `An episode of a tv, radio or game media within a series or season.`,
        resolveAs: {
          fieldName: "EpisodeResolved",
          type: "Episode",
          resolver: (document, args, context) => {
            return context.Episode.findOne(
              { _id: document.Episode },
              {
                fields: context.Episode.getViewableFields(
                  context.currentUser,
                  context.Episode
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  materialObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      artMedium: {
        label: "artMedium",
        description: `The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble,
Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil,
Mixed Media, etc.)`,
        type: String,
        input: "url",
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      surface: {
        label: "surface",
        description: `A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board,
etc.`,
        type: String,
        input: "url",
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  isPartOfObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      partOfEpisode: {
        label: "partOfEpisode",
        description: `The episode to which this clip belongs.`,
        resolveAs: {
          fieldName: "EpisodeResolved",
          type: "Episode",
          resolver: (document, args, context) => {
            return context.Episode.findOne(
              { _id: document.Episode },
              {
                fields: context.Episode.getViewableFields(
                  context.currentUser,
                  context.Episode
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      partOfSeries: {
        label: "partOfSeries",
        description: `The series to which this episode or season belongs.`,
        resolveAs: {
          fieldName: "CreativeWorkSeriesResolved",
          type: "CreativeWorkSeries",
          resolver: (document, args, context) => {
            return context.CreativeWorkSeries.findOne(
              { _id: document.CreativeWorkSeries },
              {
                fields: context.CreativeWorkSeries.getViewableFields(
                  context.currentUser,
                  context.CreativeWorkSeries
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      partOfTVSeries: {
        label: "partOfTVSeries",
        description: `The TV series to which this episode or season belongs.`,
        resolveAs: {
          fieldName: "TVSeriesResolved",
          type: "TVSeries",
          resolver: (document, args, context) => {
            return context.TVSeries.findOne(
              { _id: document.TVSeries },
              {
                fields: context.TVSeries.getViewableFields(
                  context.currentUser,
                  context.TVSeries
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      partOfSeason: {
        label: "partOfSeason",
        description: `The season to which this episode belongs.`,
        resolveAs: {
          fieldName: "CreativeWorkSeasonResolved",
          type: "CreativeWorkSeason",
          resolver: (document, args, context) => {
            return context.CreativeWorkSeason.findOne(
              { _id: document.CreativeWorkSeason },
              {
                fields: context.CreativeWorkSeason.getViewableFields(
                  context.currentUser,
                  context.CreativeWorkSeason
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  imageObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      photo: {
        label: "photo",
        description: `A photograph of this place.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      logo: {
        label: "logo",
        description: `An associated logo.`,
        type: String,
        input: "url",
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  "rdf:typeObject": {
    label: "",
    description: ``,
    type: new SimpleSchema({
      additionalType: {
        label: "additionalType",
        description: `An additional type for the item, typically used for adding more specific types
from external vocabularies in microdata syntax. This is a relationship between
something and a class that the thing is in. In RDFa syntax, it is better to use
the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org
tools may have only weaker understanding of extra types, in particular those
defined externally.`,
        type: String,
        input: "url",
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  "rdfs:labelObject": {
    label: "",
    description: ``,
    type: new SimpleSchema({
      name: {
        label: "name",
        description: `The name of the item.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  resultObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      resultReview: {
        label: "resultReview",
        description: `A sub property of result. The review that resulted in the performing of the
action.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      resultComment: {
        label: "resultComment",
        description: `A sub property of result. The Comment created or sent as a result of this
action.`,
        resolveAs: {
          fieldName: "CommentResolved",
          type: "Comment",
          resolver: (document, args, context) => {
            return context.Comment.findOne(
              { _id: document.Comment },
              {
                fields: context.Comment.getViewableFields(
                  context.currentUser,
                  context.Comment
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  recipientObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      bccRecipient: {
        label: "bccRecipient",
        description: `A sub property of recipient. The recipient blind copied on a message.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      ccRecipient: {
        label: "ccRecipient",
        description: `A sub property of recipient. The recipient copied on a message.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      toRecipient: {
        label: "toRecipient",
        description: `A sub property of recipient. The recipient who was directly sent the message.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  serialNumberObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      vehicleIdentificationNumber: {
        label: "vehicleIdentificationNumber",
        description: `The Vehicle Identification Number (VIN) is a unique serial number used by the
automotive industry to identify individual motor vehicles.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  supplyObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      recipeIngredient: {
        label: "recipeIngredient",
        description: `A single ingredient used in the recipe, e.g. sugar, flour or garlic.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      ingredients: {
        label: "ingredients",
        description: `A single ingredient used in the recipe, e.g. sugar, flour or garlic.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  stepObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      recipeInstructions: {
        label: "recipeInstructions",
        description: `A step in making the recipe, in the form of a single item (document, video,
etc.) or an ordered list with HowToStep and/or HowToSection items.`,
        resolveAs: {
          fieldName: "ItemListResolved",
          type: "ItemList",
          resolver: (document, args, context) => {
            return context.ItemList.findOne(
              { _id: document.ItemList },
              {
                fields: context.ItemList.getViewableFields(
                  context.currentUser,
                  context.ItemList
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  areaServedObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      availableAtOrFrom: {
        label: "availableAtOrFrom",
        description: `The place(s) from which the offer can be obtained (e.g. store locations).`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      eligibleRegion: {
        label: "eligibleRegion",
        description: `The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the
GeoShape for the geo-political region(s) for which the offer or delivery charge
specification is valid.

See also ineligibleRegion.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  contentLocationObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      spatialCoverage: {
        label: "spatialCoverage",
        description: `The spatialCoverage of a CreativeWork indicates the place(s) which are the focus
of the content. It is a subproperty of contentLocation intended primarily for
more technical and detailed materials. For example with a Dataset, it indicates
areas that the dataset describes: a dataset of New York weather would have
spatialCoverage which was the place: the state of New York.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  positionObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      issueNumber: {
        label: "issueNumber",
        description: `Identifies the issue of publication; for example, "iii" or "2".`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      episodeNumber: {
        label: "episodeNumber",
        description: `Position of the episode within an ordered group of episodes.`,
        resolveAs: {
          fieldName: "IntegerResolved",
          type: "Integer",
          resolver: (document, args, context) => {
            return context.Integer.findOne(
              { _id: document.Integer },
              {
                fields: context.Integer.getViewableFields(
                  context.currentUser,
                  context.Integer
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      volumeNumber: {
        label: "volumeNumber",
        description: `Identifies the volume of publication or multi-part work; for example, "iii" or
"2".`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      seasonNumber: {
        label: "seasonNumber",
        description: `Position of the season within an ordered group of seasons.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      clipNumber: {
        label: "clipNumber",
        description: `Position of the clip within an ordered group of clips.`,
        resolveAs: {
          fieldName: "IntegerResolved",
          type: "Integer",
          resolver: (document, args, context) => {
            return context.Integer.findOne(
              { _id: document.Integer },
              {
                fields: context.Integer.getViewableFields(
                  context.currentUser,
                  context.Integer
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  workFeaturedObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      workPerformed: {
        label: "workPerformed",
        description: `A work performed in some event, for example a play performed in a TheaterEvent.`,
        resolveAs: {
          fieldName: "CreativeWorkResolved",
          type: "CreativeWork",
          resolver: (document, args, context) => {
            return context.CreativeWork.findOne(
              { _id: document.CreativeWork },
              {
                fields: context.CreativeWork.getViewableFields(
                  context.currentUser,
                  context.CreativeWork
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
      workPresented: {
        label: "workPresented",
        description: `The movie presented during this event.`,
        resolveAs: {
          fieldName: "MovieResolved",
          type: "Movie",
          resolver: (document, args, context) => {
            return context.Movie.findOne(
              { _id: document.Movie },
              {
                fields: context.Movie.getViewableFields(
                  context.currentUser,
                  context.Movie
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  suggestedAnswerObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      acceptedAnswer: {
        label: "acceptedAnswer",
        description: `The answer(s) that has been accepted as best, typically on a Question/Answer
site. Sites vary in their selection mechanisms, e.g. drawing on community
opinion and/or the view of the Question author.`,
        resolveAs: {
          fieldName: "ItemListResolved",
          type: "ItemList",
          resolver: (document, args, context) => {
            return context.ItemList.findOne(
              { _id: document.ItemList },
              {
                fields: context.ItemList.getViewableFields(
                  context.currentUser,
                  context.ItemList
                ),
              }
            )
          },
          optional: true,
        },
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  aboutObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      mainEntity: {
        label: "mainEntity",
        description: `Indicates the primary entity described in some page or other CreativeWork.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  performTimeObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      cookTime: {
        label: "cookTime",
        description: `The time it takes to actually cook the dish, in ISO 8601 duration format.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  descriptionObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      disambiguatingDescription: {
        label: "disambiguatingDescription",
        description: `A sub property of description. A short description of the item used to
disambiguate from other, similar items. Information from other properties (in
particular, name) may be necessary for the description to be useful for
disambiguation.`,
        type: String,
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  memberOfObject: {
    label: "",
    description: ``,
    type: new SimpleSchema({
      affiliation: {
        label: "affiliation",
        description: `An organization that this person is affiliated with. For example, a
school/university, a club, or a team.`,
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
        canRead: ["guests"],
        canCreate: ["members"],
        canUpdate: ["members"],
      },
    }),
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  manufacturer: {
    label: "manufacturer",
    description: `The manufacturer of the product.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  audience: {
    label: "audience",
    description: `An intended audience, i.e. a group for whom something was created.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  mpn: {
    label: "mpn",
    description: `The Manufacturer Part Number (MPN) of the product, or the product to which the
offer refers.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  height: {
    label: "height",
    description: `The height of the item.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  aggregateRating: {
    label: "aggregateRating",
    description: `The overall rating, based on a collection of reviews or ratings, of the item.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  isConsumableFor: {
    label: "isConsumableFor",
    description: `A pointer to another product (or multiple products) for which this product is a
consumable.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  reviews: {
    label: "reviews",
    description: `Review of the item.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  offers: {
    label: "offers",
    description: `An offer to provide this item—for example, an offer to sell a product, rent the
DVD of a movie, perform a service, or give away tickets to an event.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  award: {
    label: "award",
    description: `An award won by or for this item.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  category: {
    label: "category",
    description: `A category for the item. Greater signs or slashes can be used to informally
indicate a category hierarchy.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  width: {
    label: "width",
    description: `The width of the item.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  awards: {
    label: "awards",
    description: `Awards won by or for this item.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  isAccessoryOrSparePartFor: {
    label: "isAccessoryOrSparePartFor",
    description: `A pointer to another product (or multiple products) for which this product is an
accessory or spare part.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  material: {
    label: "material",
    description: `A material that something is made from, e.g. leather, wool, cotton, paper.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  weight: {
    label: "weight",
    description: `The weight of the product or person.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  isSimilarTo: {
    label: "isSimilarTo",
    description: `A pointer to another, functionally similar product (or multiple products).`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  model: {
    label: "model",
    description: `The model of the product. Use with the URL of a ProductModel or a textual
representation of the model identifier. The URL of the ProductModel can be from
an external source. It is recommended to additionally provide strong product
identifiers via the gtin8/gtin13/gtin14 and mpn properties.`,
    resolveAs: {
      fieldName: "ProductModelResolved",
      type: "ProductModel",
      resolver: (document, args, context) => {
        return context.ProductModel.findOne(
          { _id: document.ProductModel },
          {
            fields: context.ProductModel.getViewableFields(
              context.currentUser,
              context.ProductModel
            ),
          }
        )
      },
      optional: true,
    },
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  color: {
    label: "color",
    description: `The color of the product.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  isRelatedTo: {
    label: "isRelatedTo",
    description: `A pointer to another, somehow related product (or multiple products).`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  review: {
    label: "review",
    description: `A review of the item.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  depth: {
    label: "depth",
    description: `The depth of the item.`,
    resolveAs: {
      fieldName: "DistanceResolved",
      type: "Distance",
      resolver: (document, args, context) => {
        return context.Distance.findOne(
          { _id: document.Distance },
          {
            fields: context.Distance.getViewableFields(
              context.currentUser,
              context.Distance
            ),
          }
        )
      },
      optional: true,
    },
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  itemCondition: {
    label: "itemCondition",
    description: `A predefined value from OfferItemCondition or a textual description of the
condition of the product or service, or the products or services included in the
offer.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  brand: {
    label: "brand",
    description: `The brand(s) associated with a product or service, or the brand(s) maintained by
an organization or business person.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  releaseDate: {
    label: "releaseDate",
    description: `The release date of a product or product model. This can be used to distinguish
the exact variant of a product.`,
    type: Date,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  sameAs: {
    label: "sameAs",
    description: `URL of a reference Web page that unambiguously indicates the item's identity.
E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.`,
    type: String,
    input: "url",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  alternateName: {
    label: "alternateName",
    description: `An alias for the item.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  image: {
    label: "image",
    description: `An image of the item. This can be a URL or a fully described ImageObject.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  identifier: {
    label: "identifier",
    description: `The identifier property represents any kind of identifier for any kind of Thing,
such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties
for representing many of these, either as textual strings or as URL (URI) links.
See background notes for more details.`,
    type: String,
    input: "url",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  mainEntityOfPage: {
    label: "mainEntityOfPage",
    description: `Indicates a page (or other CreativeWork) for which this thing is the main entity
being described. See background notes for details.`,
    type: String,
    input: "url",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  url: {
    label: "url",
    description: `URL of the item.`,
    type: String,
    input: "url",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  potentialAction: {
    label: "potentialAction",
    description: `Indicates a potential Action, which describes an idealized action in which this
thing would play an 'object' role.`,
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
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  description: {
    label: "description",
    description: `A description of the item.`,
    type: String,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
}
export default Vehicle
