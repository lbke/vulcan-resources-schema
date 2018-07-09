const R = require("ramda");
const asArray = require("../utils/asArray");

const getTypesAsArray = R.pipe(
  R.prop("possibleTypes"),
  R.values
);
const hasTypes = schema =>
  R.has("possibleTypes")(schema) && !!getTypesAsArray(schema).length;

const isClass = R.propEq("@type", "rdfs:Class");

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
