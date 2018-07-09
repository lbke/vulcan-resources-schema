export const JobPosting = {
  label: "JobPosting",
  description: `A listing that describes a job opening in a certain organization.`,
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
  jobLocation: {
    label: "jobLocation",
    description: `A (typically single) geographic location associated with the job position.`,
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
  benefits: {
    label: "benefits",
    description: `Description of benefits associated with the job.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  qualifications: {
    label: "qualifications",
    description: `Specific qualifications required for this role.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  incentiveCompensation: {
    label: "incentiveCompensation",
    description: `Description of bonus and commission compensation aspects of the job.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  workHours: {
    label: "workHours",
    description: `The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  salaryCurrency: {
    label: "salaryCurrency",
    description: `The currency (coded using ISO 4217 ) used for the main salary information in
this job posting or for this employee.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  jobBenefits: {
    label: "jobBenefits",
    description: `Description of benefits associated with the job.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  datePosted: {
    label: "datePosted",
    description: `Publication date for the job posting.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Date,
  },
  skills: {
    label: "skills",
    description: `Skills required to fulfill this role.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  incentives: {
    label: "incentives",
    description: `Description of bonus and commission compensation aspects of the job.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  educationRequirements: {
    label: "educationRequirements",
    description: `Educational background needed for the position.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  responsibilities: {
    label: "responsibilities",
    description: `Responsibilities associated with this role.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  baseSalary: {
    label: "baseSalary",
    description: `The base salary of the job or of an employee in an EmployeeRole.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: Number,
    input: "number",
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
  hiringOrganization: {
    label: "hiringOrganization",
    description: `Organization offering the job position.`,
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
  specialCommitments: {
    label: "specialCommitments",
    description: `Any special commitments associated with this job posting. Valid entries include
VeteranCommit, MilitarySpouseCommit, etc.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  occupationalCategory: {
    label: "occupationalCategory",
    description: `Category or categories describing the job. Use BLS O*NET-SOC taxonomy:
http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and
formal code, with the property repeated for each applicable value.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  experienceRequirements: {
    label: "experienceRequirements",
    description: `Description of skills and experience needed for the position.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  employmentType: {
    label: "employmentType",
    description: `Type of employment (e.g. full-time, part-time, contract, temporary, seasonal,
internship).`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  title: {
    label: "title",
    description: `The title of the job.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
  industry: {
    label: "industry",
    description: `The industry associated with the job position.`,
    viewableBy: ["guests"],
    editableBy: ["members"],
    insertableBy: ["members"],
    type: String,
  },
}
export default JobPosting
