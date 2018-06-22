/**
 * Convert a normalized schemaorg schema into a Vulcan schema
 */

// those basic properties are common to any Vulcan schema,
// we add them systematically
const DEFAULT_PROPERTIES = {
  _id: {
    type: String,
    optional: true,
    viewableBy: ["guests"]
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ["guests"],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ["guests"],
    resolveAs: {
      fieldName: "user",
      type: "User",
      resolver: (movie, args, context) => {
        return context.Users.findOne(
          { _id: movie.userId },
          {
            fields: context.Users.getViewableFields(
              context.currentUser,
              context.Users
            )
          }
        );
      },
      addOriginalField: true
    }
  }
};

const getFieldKey = field => field["rdfs:label"];
const getPropertyType = schema => {
  const schemaType = schema["http://schema.org/rangeIncludes"];
  return String;
};
const convertProperty = schema => {
  const vulcanSchema = {
    type: getPropertyType(schema)
  };
};

const convertClass = schema => {
  const vulcanSchema = { ...DEFAULT_PROPERTIES };
  schema.fields.reduce((res, field) => {
    const fieldKey = getFieldKey(key);
    const convertedField = convertProperty(field);
    return { ...res, [fieldKey]: convertedField };
  });
};

const getSchemaLabel = schema => schema["rdfs:label"];
const generateCollection = (label, vulcanSchema) => {
  const vulcanCollection = {
    typeName: label,
    collectionName: label.toLower(),
    schema: vulcanSchema
  };
};
