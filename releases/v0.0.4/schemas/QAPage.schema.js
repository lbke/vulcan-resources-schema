export const QAPage = {
  label: "QAPage",
  description: `A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in
a question answering site or documenting Frequently Asked Questions (FAQs).`,
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
  lastReviewed: {
    label: "lastReviewed",
    description: `Date on which the content on this web page was last reviewed for accuracy and/or
completeness.`,
    type: Date,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  breadcrumb: {
    label: "breadcrumb",
    description: `A set of links that can help a user understand and navigate a website hierarchy.`,
    resolveAs: {
      fieldName: "BreadcrumbListResolved",
      type: "BreadcrumbList",
      resolver: (document, args, context) => {
        return context.BreadcrumbList.findOne(
          { _id: document.BreadcrumbList },
          {
            fields: context.BreadcrumbList.getViewableFields(
              context.currentUser,
              context.BreadcrumbList
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
  significantLink: {
    label: "significantLink",
    description: `One of the more significant URLs on the page. Typically, these are the
non-navigation links that are clicked on the most.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  relatedLink: {
    label: "relatedLink",
    description: `A link related to this web page, for example to other related web pages.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  mainContentOfPage: {
    label: "mainContentOfPage",
    description: `Indicates if this web page element is the main subject of the page.`,
    resolveAs: {
      fieldName: "WebPageElementResolved",
      type: "WebPageElement",
      resolver: (document, args, context) => {
        return context.WebPageElement.findOne(
          { _id: document.WebPageElement },
          {
            fields: context.WebPageElement.getViewableFields(
              context.currentUser,
              context.WebPageElement
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
  reviewedBy: {
    label: "reviewedBy",
    description: `People or organizations that have reviewed the content on this web page for
accuracy and/or completeness.`,
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
  primaryImageOfPage: {
    label: "primaryImageOfPage",
    description: `Indicates the main image on the page.`,
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
  significantLinks: {
    label: "significantLinks",
    description: `The most significant URLs on the page. Typically, these are the non-navigation
links that are clicked on the most.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  specialty: {
    label: "specialty",
    description: `One of the domain specialities to which this web page's content applies.`,
    resolveAs: {
      fieldName: "SpecialtyResolved",
      type: "Specialty",
      resolver: (document, args, context) => {
        return context.Specialty.findOne(
          { _id: document.Specialty },
          {
            fields: context.Specialty.getViewableFields(
              context.currentUser,
              context.Specialty
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
  accessibilitySummary: {
    label: "accessibilitySummary",
    description: `A human-readable summary of specific accessibility features or deficiencies,
consistent with the other accessibility metadata but expressing subtleties such
as "short descriptions are present but long descriptions will be needed for
non-visual users" or "short descriptions are present and no long descriptions
are needed."`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  educationalAlignment: {
    label: "educationalAlignment",
    description: `An alignment to an established educational framework.`,
    resolveAs: {
      fieldName: "AlignmentObjectResolved",
      type: "AlignmentObject",
      resolver: (document, args, context) => {
        return context.AlignmentObject.findOne(
          { _id: document.AlignmentObject },
          {
            fields: context.AlignmentObject.getViewableFields(
              context.currentUser,
              context.AlignmentObject
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
  associatedMedia: {
    label: "associatedMedia",
    description: `A media object that encodes this CreativeWork. This property is a synonym for
encoding.`,
    resolveAs: {
      fieldName: "MediaObjectResolved",
      type: "MediaObject",
      resolver: (document, args, context) => {
        return context.MediaObject.findOne(
          { _id: document.MediaObject },
          {
            fields: context.MediaObject.getViewableFields(
              context.currentUser,
              context.MediaObject
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
  sponsor: {
    label: "sponsor",
    description: `A person or organization that supports a thing through a pledge, promise, or
financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor
of an event.`,
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
  audio: {
    label: "audio",
    description: `An embedded audio object.`,
    resolveAs: {
      fieldName: "AudioObjectResolved",
      type: "AudioObject",
      resolver: (document, args, context) => {
        return context.AudioObject.findOne(
          { _id: document.AudioObject },
          {
            fields: context.AudioObject.getViewableFields(
              context.currentUser,
              context.AudioObject
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
  provider: {
    label: "provider",
    description: `The service provider, service operator, or service performer; the goods
producer. Another party (a seller) may offer those services or goods on behalf
of the provider. A provider may also serve as the seller.`,
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
  encoding: {
    label: "encoding",
    description: `A media object that encodes this CreativeWork. This property is a synonym for
associatedMedia.`,
    resolveAs: {
      fieldName: "MediaObjectResolved",
      type: "MediaObject",
      resolver: (document, args, context) => {
        return context.MediaObject.findOne(
          { _id: document.MediaObject },
          {
            fields: context.MediaObject.getViewableFields(
              context.currentUser,
              context.MediaObject
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
  interactivityType: {
    label: "interactivityType",
    description: `The predominant mode of learning supported by the learning resource. Acceptable
values are 'active', 'expositive', or 'mixed'.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  character: {
    label: "character",
    description: `Fictional person connected with a creative work.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  sourceOrganization: {
    label: "sourceOrganization",
    description: `The Organization on whose behalf the creator was working.`,
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
  isPartOf: {
    label: "isPartOf",
    description: `Indicates an item or CreativeWork that this item, or CreativeWork (in some
sense), is part of.`,
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
  video: {
    label: "video",
    description: `An embedded video object.`,
    resolveAs: {
      fieldName: "VideoObjectResolved",
      type: "VideoObject",
      resolver: (document, args, context) => {
        return context.VideoObject.findOne(
          { _id: document.VideoObject },
          {
            fields: context.VideoObject.getViewableFields(
              context.currentUser,
              context.VideoObject
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
  publication: {
    label: "publication",
    description: `A publication event associated with the item.`,
    resolveAs: {
      fieldName: "PublicationEventResolved",
      type: "PublicationEvent",
      resolver: (document, args, context) => {
        return context.PublicationEvent.findOne(
          { _id: document.PublicationEvent },
          {
            fields: context.PublicationEvent.getViewableFields(
              context.currentUser,
              context.PublicationEvent
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
  text: {
    label: "text",
    description: `The textual content of this CreativeWork.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  expires: {
    label: "expires",
    description: `Date the content expires and is no longer useful or available. For example a 
VideoObject or NewsArticle whose availability or relevance is time-limited, or a 
ClaimReview fact check whose publisher wants to indicate that it may no longer
be relevant (or helpful to highlight) after some date.`,
    type: Date,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  contributor: {
    label: "contributor",
    description: `A secondary contributor to the CreativeWork or Event.`,
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
  typicalAgeRange: {
    label: "typicalAgeRange",
    description: `The typical expected age range, e.g. '7-9', '11-'.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  position: {
    label: "position",
    description: `The position of an item in a series or sequence of items.`,
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
  releasedEvent: {
    label: "releasedEvent",
    description: `The place and time the release was issued, expressed as a PublicationEvent.`,
    resolveAs: {
      fieldName: "PublicationEventResolved",
      type: "PublicationEvent",
      resolver: (document, args, context) => {
        return context.PublicationEvent.findOne(
          { _id: document.PublicationEvent },
          {
            fields: context.PublicationEvent.getViewableFields(
              context.currentUser,
              context.PublicationEvent
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
  educationalUse: {
    label: "educationalUse",
    description: `The purpose of a work in the context of education; for example, 'assignment',
'group work'.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  contentLocation: {
    label: "contentLocation",
    description: `The location depicted or described in the content. For example, the location in
a photograph or painting.`,
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
  schemaVersion: {
    label: "schemaVersion",
    description: `Indicates (by URL or string) a particular version of a schema used in some
CreativeWork. For example, a document could declare a schemaVersion using an URL
such as version/2.0/ if precise indication of schema version was required by
some application.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  accessibilityFeature: {
    label: "accessibilityFeature",
    description: `Content features of the resource, such as accessible media, alternatives and
supported enhancements for accessibility (WebSchemas wiki lists possible values
).`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  locationCreated: {
    label: "locationCreated",
    description: `The location where the CreativeWork was created, which may not be the same as
the location depicted in the CreativeWork.`,
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
  accessModeSufficient: {
    label: "accessModeSufficient",
    description: `A list of single or combined accessModes that are sufficient to understand all
the intellectual content of a resource. Expected values include: auditory,
tactile, textual, visual.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  temporalCoverage: {
    label: "temporalCoverage",
    description: `The temporalCoverage of a CreativeWork indicates the period that the content
applies to, i.e. that it describes, either as a DateTime or as a textual string
indicating a time period in ISO 8601 time interval format. In the case of a
Dataset it will typically indicate the relevant time period in a precise
notation (e.g. for a 2011 census dataset, the year 2011 would be written
"2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or
TVEpisode may indicate their temporalCoverage in broader terms - textually or
via well-known URL. Written works such as books may sometimes have precise
temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO
8601 interval format format via "1939/1945".`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  accountablePerson: {
    label: "accountablePerson",
    description: `Specifies the Person that is legally accountable for the CreativeWork.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  editor: {
    label: "editor",
    description: `Specifies the Person who edited the CreativeWork.`,
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
  discussionUrl: {
    label: "discussionUrl",
    description: `A link to the page containing the comments of the CreativeWork.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  award: {
    label: "award",
    description: `An award won by or for this item.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  copyrightHolder: {
    label: "copyrightHolder",
    description: `The party holding the legal copyright to the CreativeWork.`,
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
  accessibilityHazard: {
    label: "accessibilityHazard",
    description: `A characteristic of the described resource that is physiologically dangerous to
some users. Related to WCAG 2.0 guideline 2.3 (WebSchemas wiki lists possible
values).`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  copyrightYear: {
    label: "copyrightYear",
    description: `The year during which the claimed copyright for the CreativeWork was first
asserted.`,
    type: Number,
    input: "number",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  awards: {
    label: "awards",
    description: `Awards won by or for this item.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  recordedAt: {
    label: "recordedAt",
    description: `The Event where the CreativeWork was recorded. The CreativeWork may capture all
or part of the event.`,
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
  commentCount: {
    label: "commentCount",
    description: `The number of comments this CreativeWork (e.g. Article, Question or Answer) has
received. This is most applicable to works published in Web sites with
commenting system; additional comments may exist elsewhere.`,
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
  fileFormat: {
    label: "fileFormat",
    description: `Media type, typically MIME format (see IANA site) of the content e.g.
application/zip of a SoftwareApplication binary. In cases where a CreativeWork
has several media type representations, 'encoding' can be used to indicate each
MediaObject alongside particular fileFormat information. Unregistered or niche
file formats can be indicated instead via the most appropriate URL, e.g.
defining Web page or a Wikipedia entry.`,
    type: String,
    input: "url",
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
  accessibilityAPI: {
    label: "accessibilityAPI",
    description: `Indicates that the resource is compatible with the referenced accessibility API
(WebSchemas wiki lists possible values).`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  publisher: {
    label: "publisher",
    description: `The publisher of the creative work.`,
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
  interactionStatistic: {
    label: "interactionStatistic",
    description: `The number of interactions for the CreativeWork using the WebSite or
SoftwareApplication. The most specific child type of InteractionCounter should
be used.`,
    resolveAs: {
      fieldName: "InteractionCounterResolved",
      type: "InteractionCounter",
      resolver: (document, args, context) => {
        return context.InteractionCounter.findOne(
          { _id: document.InteractionCounter },
          {
            fields: context.InteractionCounter.getViewableFields(
              context.currentUser,
              context.InteractionCounter
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
  contentRating: {
    label: "contentRating",
    description: `Official rating of a piece of content—for example,'MPAA PG-13'.`,
    resolveAs: {
      fieldName: "RatingResolved",
      type: "Rating",
      resolver: (document, args, context) => {
        return context.Rating.findOne(
          { _id: document.Rating },
          {
            fields: context.Rating.getViewableFields(
              context.currentUser,
              context.Rating
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
  learningResourceType: {
    label: "learningResourceType",
    description: `The predominant type or kind characterizing the learning resource. For example,
'presentation', 'handout'.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  accessMode: {
    label: "accessMode",
    description: `The human sensory perceptual system or cognitive faculty through which a person
may process or perceive information. Expected values include: auditory, tactile,
textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual,
mathOnVisual, musicOnVisual, textOnVisual.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  material: {
    label: "material",
    description: `A material that something is made from, e.g. leather, wool, cotton, paper.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  isFamilyFriendly: {
    label: "isFamilyFriendly",
    description: `Indicates whether this content is family friendly.`,
    type: Boolean,
    input: "checkbox",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  exampleOfWork: {
    label: "exampleOfWork",
    description: `A creative work that this work is an example/instance/realization/derivation of.`,
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
  version: {
    label: "version",
    description: `The version of the CreativeWork embodied by a specified resource.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  dateModified: {
    label: "dateModified",
    description: `The date on which the CreativeWork was most recently modified or when the item's
entry was modified within a DataFeed.`,
    type: Date,
    input: "datetime",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  keywords: {
    label: "keywords",
    description: `Keywords or tags used to describe this content. Multiple entries in a keywords
list are typically delimited by commas.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  genre: {
    label: "genre",
    description: `Genre of the creative work, broadcast channel or group.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  author: {
    label: "author",
    description: `The author of this content or rating. Please note that author is special in that
HTML 5 provides a special mechanism for indicating authorship via the rel tag.
That is equivalent to this and may be used interchangeably.`,
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
  encodings: {
    label: "encodings",
    description: `A media object that encodes this CreativeWork.`,
    resolveAs: {
      fieldName: "MediaObjectResolved",
      type: "MediaObject",
      resolver: (document, args, context) => {
        return context.MediaObject.findOne(
          { _id: document.MediaObject },
          {
            fields: context.MediaObject.getViewableFields(
              context.currentUser,
              context.MediaObject
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
  isBasedOnUrl: {
    label: "isBasedOnUrl",
    description: `A resource that was used in the creation of this resource. This term can be
repeated for multiple sources. For example,
http://example.com/great-multiplication-intro.html.`,
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  timeRequired: {
    label: "timeRequired",
    description: `Approximate or typical time it takes to work with or through this learning
resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.`,
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
  translator: {
    label: "translator",
    description: `Organization or person who adapts a creative work to different languages,
regional differences and technical requirements of a target market, or that
translates during some event.`,
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
  thumbnailUrl: {
    label: "thumbnailUrl",
    description: `A thumbnail image relevant to the Thing.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  hasPart: {
    label: "hasPart",
    description: `Indicates an item or CreativeWork that is part of this item, or CreativeWork (in
some sense).`,
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
  comment: {
    label: "comment",
    description: `Comments, typically from users.`,
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
  encodingFormat: {
    label: "encodingFormat",
    description: `Media type typically expressed using a MIME format (see IANA site and MDN
reference) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for
.mp3 etc.).

In cases where a CreativeWork has several media type representations, encoding 
can be used to indicate each MediaObject alongside particular encodingFormat 
information.

Unregistered or niche encoding and file formats can be indicated instead via the
most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
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
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  license: {
    label: "license",
    description: `A license document that applies to this content, typically indicated by URL.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  accessibilityControl: {
    label: "accessibilityControl",
    description: `Identifies input methods that are sufficient to fully control the described
resource (WebSchemas wiki lists possible values).`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  isBasedOn: {
    label: "isBasedOn",
    description: `A resource that was used in the creation of this resource. This term can be
repeated for multiple sources. For example,
http://example.com/great-multiplication-intro.html.`,
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
  creator: {
    label: "creator",
    description: `The creator/author of this CreativeWork. This is the same as the Author property
for CreativeWork.`,
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
  publishingPrinciples: {
    label: "publishingPrinciples",
    description: `The publishingPrinciples property indicates (typically via URL) a document
describing the editorial principles of an Organization (or individual e.g. a 
Person writing a blog) that relate to their activities as a publisher, e.g.
ethics or diversity policies. When applied to a CreativeWork (e.g. NewsArticle)
the principles are those of the party primarily responsible for the creation of
the CreativeWork.

While such policies are most typically expressed in natural language, sometimes
related information (e.g. indicating a funder) can be expressed using schema.org
terminology.`,
    type: String,
    input: "url",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  producer: {
    label: "producer",
    description: `The person or organization who produced the work (e.g. music album, movie,
tv/radio series etc.).`,
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
  mentions: {
    label: "mentions",
    description: `Indicates that the CreativeWork contains a reference to, but is not necessarily
about a concept.`,
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
  workExample: {
    label: "workExample",
    description: `Example/instance/realization/derivation of the concept of this creative work.
eg. The paperback edition, first edition, or eBook.`,
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
  dateCreated: {
    label: "dateCreated",
    description: `The date on which the CreativeWork was created or the item was added to a
DataFeed.`,
    type: Date,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  datePublished: {
    label: "datePublished",
    description: `Date of first broadcast/publication.`,
    type: Date,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  isAccessibleForFree: {
    label: "isAccessibleForFree",
    description: `A flag to signal that the item, event, or place is accessible for free.`,
    type: Boolean,
    input: "checkbox",
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  alternativeHeadline: {
    label: "alternativeHeadline",
    description: `A secondary title of the CreativeWork.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  headline: {
    label: "headline",
    description: `Headline of the article.`,
    type: String,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
  },
  citation: {
    label: "citation",
    description: `A citation or reference to another creative work, such as another publication,
web page, scholarly article, etc.`,
    type: String,
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
export default QAPage
