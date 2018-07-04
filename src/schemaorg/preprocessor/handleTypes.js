/**
 * Fill the possible types recursively
 */

const R = require("ramda");
const { hasTypes, getTypesAsArray } = require("./common");
const mapOnly = require("../../utils/mapOnly");

const isClass = R.propEq("@type", "rdfs:Class");
// fill the possibleTypes with their definition
const handleTypes = normalizedGraph => {
  return mapOnly(hasTypes, schema => {
    // fill the schemas possibleTypes
    const newPossibleTypes = R.map(possibleType => {
      // get the possibleType definition
      const possibleTypeDef = normalizedGraph[possibleType["@id"]];
      if (isClass(possibleTypeDef)) {
        // if the type is a class, only keep its id and type
        return { ...possibleType, "@type": "rdfs:Class" };
      } else {
        // else we merge the field
        return { ...possibleType, ...possibleTypeDef };
      }
    })(schema.possibleTypes);
    return { ...schema, possibleTypes: newPossibleTypes };
  })(normalizedGraph);
};

/*
const mergeSchemaTypes = R.curry((normalizedGraph, schema) => {
  // types of the schema
  const types = R.prop("possibleTypes")(schema);
  const { types, superTypes } = R.reduce(
    // merge types and remember parrent types
    ({ types, superTypes }, typeId) => {
      const type = normalizedGraph[typeId["@id"]];
      // get the type own super type
      const superType = R.prop("possibleTypes")(type);
      const superClassFields = R.prop("fields")(superClass);
      const superClassSuper = getSuperClassesAsArray(superClass);
      return {
        fields: R.merge(superClassFields, fields),
        superSuperClasses: [...superSuperClasses, ...superClassSuper]
      };
    },
    { fields: schema.fields, superTypes: [] }
  )(superClasses);
  return {
    ...schema,
    fields: { ...fields, ...schema.fields },
    // get the parent superClass so we can iterate recursively if needed
    "rdfs:subClassOf": superSuperClasses
  };
});

const mergeTypes = normalizedGraph =>
  mapWithFlag(mergeSchemaTypes(normalizedGraph), hasTypes)(normalizedGraph);


const mergeSchemaTypes = (normalizedGraph, schema) => {
  types = schema.possibleType 
  fillWithDef

  return ;

const handleTypes = normalizedGraph => until(mergeTypes, normalizedGraph);
*/

module.exports = {
  default: handleTypes
};
