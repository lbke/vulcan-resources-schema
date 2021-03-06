export const ConfirmAction = {
  label: "ConfirmAction",
  description: `The act of notifying someone that a future event/action is going to happen as
expected.

Related actions:

 * CancelAction: The antonym of ConfirmAction.`,
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
  identifierObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "identifierObject.$": {
    isbn: {
      label: "isbn",
      description: `The ISBN of the book.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    sku: {
      label: "sku",
      description: `The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product
or service, or the product to which the offer refers.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    serialNumber: {
      label: "serialNumber",
      description: `The serial number or any alphanumeric identifier of a particular product. When
attached to an offer, it is a shortcut for the serial number of the product
included in the offer.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    orderNumber: {
      label: "orderNumber",
      description: `The identifier of the transaction.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    gtin8: {
      label: "gtin8",
      description: `The GTIN-8 code of the product, or the product to which the offer refers. This
code is also known as EAN/UCC-8 or 8-digit EAN. See GS1 GTIN Summary for more
details.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    flightNumber: {
      label: "flightNumber",
      description: `The unique identifier for a flight including the airline IATA code. For example,
if describing United flight 110, where the IATA code for United is 'UA', the
flightNumber is 'UA110'.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    globalLocationNumber: {
      label: "globalLocationNumber",
      description: `The Global Location Number (GLN, sometimes also referred to as International
Location Number or ILN) of the respective organization, person, or place. The
GLN is a 13-digit number used to identify parties and physical locations.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    confirmationNumber: {
      label: "confirmationNumber",
      description: `A number that confirms the given order or payment has been received.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    duns: {
      label: "duns",
      description: `The Dun & Bradstreet DUNS number for identifying an organization or business
person.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    taxID: {
      label: "taxID",
      description: `The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the
CIF/NIF in Spain.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    issn: {
      label: "issn",
      description: `The International Standard Serial Number (ISSN) that identifies this serial
publication. You can repeat this property to identify different formats of, or
the linking ISSN (ISSN-L) for, this serial publication.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    leiCode: {
      label: "leiCode",
      description: `An organization identifier that uniquely identifies a legal entity as defined in
ISO 17442.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    gtin14: {
      label: "gtin14",
      description: `The GTIN-14 code of the product, or the product to which the offer refers. See 
GS1 GTIN Summary for more details.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    gtin13: {
      label: "gtin13",
      description: `The GTIN-13 code of the product, or the product to which the offer refers. This
is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes
can be converted into a GTIN-13 code by simply adding a preceeding zero. See GS1
GTIN Summary for more details.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    gtin12: {
      label: "gtin12",
      description: `The GTIN-12 code of the product, or the product to which the offer refers. The
GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company
Prefix, Item Reference, and Check Digit used to identify trade items. See GS1
GTIN Summary for more details.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    productID: {
      label: "productID",
      description: `The product identifier, such as ISBN. For example: meta itemprop="productID"
content="isbn:123-456-789".`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    accountId: {
      label: "accountId",
      description: `The identifier for the account the payment will be applied to.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  instrumentObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "instrumentObject.$": {
    query: {
      label: "query",
      description: `A sub property of instrument. The query used on this action.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  sponsorObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "sponsorObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  yieldObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "yieldObject.$": {
    recipeYield: {
      label: "recipeYield",
      description: `The quantity produced by the recipe (for example, number of people served,
number of servings, etc).`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  participantObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "participantObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  competitorObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "competitorObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  objectObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "objectObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    option: {
      label: "option",
      description: `A sub property of object. The options subject to this action.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  locationObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "locationObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  durationObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "durationObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  hasPartObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "hasPartObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  materialObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "materialObject.$": {
    artMedium: {
      label: "artMedium",
      description: `The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble,
Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil,
Mixed Media, etc.)`,
      type: String,
      input: "url",
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    surface: {
      label: "surface",
      description: `A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board,
etc.`,
      type: String,
      input: "url",
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  isPartOfObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "isPartOfObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  imageObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "imageObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    logo: {
      label: "logo",
      description: `An associated logo.`,
      type: String,
      input: "url",
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  "rdf:typeObject": {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "rdf:typeObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  "rdfs:labelObject": {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "rdfs:labelObject.$": {
    name: {
      label: "name",
      description: `The name of the item.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  resultObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "resultObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  recipientObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "recipientObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  serialNumberObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "serialNumberObject.$": {
    vehicleIdentificationNumber: {
      label: "vehicleIdentificationNumber",
      description: `The Vehicle Identification Number (VIN) is a unique serial number used by the
automotive industry to identify individual motor vehicles.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  supplyObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "supplyObject.$": {
    recipeIngredient: {
      label: "recipeIngredient",
      description: `A single ingredient used in the recipe, e.g. sugar, flour or garlic.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    ingredients: {
      label: "ingredients",
      description: `A single ingredient used in the recipe, e.g. sugar, flour or garlic.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  stepObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "stepObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  areaServedObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "areaServedObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    eligibleRegion: {
      label: "eligibleRegion",
      description: `The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the
GeoShape for the geo-political region(s) for which the offer or delivery charge
specification is valid.

See also ineligibleRegion.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  contentLocationObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "contentLocationObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  positionObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "positionObject.$": {
    issueNumber: {
      label: "issueNumber",
      description: `Identifies the issue of publication; for example, "iii" or "2".`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    volumeNumber: {
      label: "volumeNumber",
      description: `Identifies the volume of publication or multi-part work; for example, "iii" or
"2".`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
    seasonNumber: {
      label: "seasonNumber",
      description: `Position of the season within an ordered group of seasons.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  workFeaturedObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "workFeaturedObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  suggestedAnswerObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "suggestedAnswerObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  aboutObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "aboutObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  performTimeObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "performTimeObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  descriptionObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "descriptionObject.$": {
    disambiguatingDescription: {
      label: "disambiguatingDescription",
      description: `A sub property of description. A short description of the item used to
disambiguate from other, similar items. Information from other properties (in
particular, name) may be necessary for the description to be useful for
disambiguation.`,
      type: String,
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  memberOfObject: {
    label: "",
    description: ``,
    type: Object,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  "memberOfObject.$": {
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
      viewableBy: ["guests"],
      editableBy: ["members"],
      insertableBy: ["members"],
    },
  },
  event: {
    label: "event",
    description: `Upcoming or past event associated with this place, organization, or action.`,
    resolveAs: {
      fieldName: "EventResolved",
      type: "Event",
      resolver: (document, args, context) => {
        return context.Event.findOne(
          { _id: document.Event },
          {
            fields: context.Event.getViewableFields(
              context.currentUser,
              context.Event
            ),
          }
        )
      },
      optional: true,
    },
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  about: {
    label: "about",
    description: `The subject matter of the content.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  inLanguage: {
    label: "inLanguage",
    description: `The language of the content or performance or used in an action. Please use one
of the language codes from the IETF BCP 47 standard. See also availableLanguage.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  result: {
    label: "result",
    description: `The result produced in the action. e.g. John wrote a book.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  startTime: {
    label: "startTime",
    description: `The startTime of something. For a reserved event or service (e.g.
FoodEstablishmentReservation), the time that it is expected to start. For
actions that span a period of time, when the action was performed. e.g. John
wrote a book from January to December.

Note that Event uses startDate/endDate instead of startTime/endTime, even when
describing dates with times. This situation may be clarified in future
revisions.`,
    type: Date,
    input: "datetime",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  actionStatus: {
    label: "actionStatus",
    description: `Indicates the current disposition of the Action.`,
    resolveAs: {
      fieldName: "ActionStatusTypeResolved",
      type: "ActionStatusType",
      resolver: (document, args, context) => {
        return context.ActionStatusType.findOne(
          { _id: document.ActionStatusType },
          {
            fields: context.ActionStatusType.getViewableFields(
              context.currentUser,
              context.ActionStatusType
            ),
          }
        )
      },
      optional: true,
    },
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  target: {
    label: "target",
    description: `Indicates a target EntryPoint for an Action.`,
    resolveAs: {
      fieldName: "EntryPointResolved",
      type: "EntryPoint",
      resolver: (document, args, context) => {
        return context.EntryPoint.findOne(
          { _id: document.EntryPoint },
          {
            fields: context.EntryPoint.getViewableFields(
              context.currentUser,
              context.EntryPoint
            ),
          }
        )
      },
      optional: true,
    },
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  agent: {
    label: "agent",
    description: `The direct performer or driver of the action (animate or inanimate). e.g. John 
wrote a book.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  endTime: {
    label: "endTime",
    description: `The endTime of something. For a reserved event or service (e.g.
FoodEstablishmentReservation), the time that it is expected to end. For actions
that span a period of time, when the action was performed. e.g. John wrote a
book from January to December.

Note that Event uses startDate/endDate instead of startTime/endTime, even when
describing dates with times. This situation may be clarified in future
revisions.`,
    type: Date,
    input: "datetime",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  participant: {
    label: "participant",
    description: `Other co-agents that participated in the action indirectly. e.g. John wrote a
book with Steve.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  instrument: {
    label: "instrument",
    description: `The object that helped the agent perform the action. e.g. John wrote a book with 
a pen.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  object: {
    label: "object",
    description: `The object upon which the action is carried out, whose state is kept intact or
changed. Also known as the semantic roles patient, affected or undergoer (which
change their state) or theme (which doesn't). e.g. John read a book.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  error: {
    label: "error",
    description: `For failed actions, more information on the cause of the failure.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  location: {
    label: "location",
    description: `The location of for example where the event is happening, an organization is
located, or where an action takes place.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  sameAs: {
    label: "sameAs",
    description: `URL of a reference Web page that unambiguously indicates the item's identity.
E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  alternateName: {
    label: "alternateName",
    description: `An alias for the item.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  identifier: {
    label: "identifier",
    description: `The identifier property represents any kind of identifier for any kind of Thing,
such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties
for representing many of these, either as textual strings or as URL (URI) links.
See background notes for more details.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  mainEntityOfPage: {
    label: "mainEntityOfPage",
    description: `Indicates a page (or other CreativeWork) for which this thing is the main entity
being described. See background notes for details.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  url: {
    label: "url",
    description: `URL of the item.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  description: {
    label: "description",
    description: `A description of the item.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
}
export default ConfirmAction
