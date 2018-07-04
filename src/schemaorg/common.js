const R = require("ramda");
const asArray = require("../utils/asArray");

const getTypesAsArray = R.compose(
  asArray,
  R.prop("possibleTypes")
);
const hasTypes = schema =>
  R.has("possibleTypes")(schema) && !!getTypesAsArray(schema).length;

const isClass = R.propEq("@type", "rdfs:Class");
/* R.both(
  R.has("rdfs:subClassOf"),
  R.pipe(
    getSuperClassesAsArray,
    notEmpty
  )
);*/

const extractId = R.pipe(
  R.split("/"),
  R.takeLast
);

const getGraph = R.path(["@graph", 0, "@graph"]);

module.exports = {
  getTypesAsArray,
  hasTypes,
  isClass
};
