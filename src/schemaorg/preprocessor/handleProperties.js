/**
 * Fill the possible types recursively
 */

const R = require("ramda");
const { hasTypes, getTypesAsArray } = require("./common");
const mapOnly = require("../../utils/mapOnly");

const isClass = R.propEq("@type", "rdfs:Class");
// fill the possibleTypes with their definition
const handleProperties = normalizedGraph => {
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

module.exports = {
  default: handleProperties
};
