const R = require("ramda");

const asArray = value => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};
const getDomainsAsArray = R.compose(
  asArray,
  R.prop("domainIncludes")
);
const getRangesAsArray = R.compose(
  asArray,
  R.prop("rangeIncludes")
);
const getSuperClassesAsArray = R.pipe(
  R.prop("rdfs:subClassOf"),
  asArray
);
const hasSuperClass = R.has("rdfs:subClassOf");

const extractId = R.pipe(
  R.split("/"),
  R.takeLast
);

const getGraph = R.path(["@graph", 0, "@graph"]);

module.exports = {
  asArray,
  getDomainsAsArray,
  getRangesAsArray,
  getSuperClassesAsArray,
  hasSuperClass,
  extractId,
  getGraph
};
