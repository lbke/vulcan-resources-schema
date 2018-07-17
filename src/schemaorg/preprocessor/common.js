const R = require("ramda");
const asArray = require("../../utils/asArray");

const propAsArray = propName =>
  R.pipe(
    R.prop(propName),
    asArray
  );
const notEmpty = R.pipe(
  R.prop("length"),
  R.gt(0)
);
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
const getSuperPropertiesAsArray = propAsArray("rdfs:subPropertyOf");

const hasSuperClass = schema =>
  R.has("rdfs:subClassOf")(schema) && !!getSuperClassesAsArray(schema).length;

const hasSuperProperty = schema =>
  R.has("rdfs:subPropertyOf") && !!getSuperPropertiesAsArray(schema).length;

const getTypesAsArray = R.compose(
  asArray,
  R.prop("possibleTypes")
);
const hasTypes = schema =>
  R.has("possibleTypes")(schema) && !!getTypesAsArray(schema).length;

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
  asArray,
  getDomainsAsArray,
  getRangesAsArray,
  getSuperClassesAsArray,
  getTypesAsArray,
  hasSuperClass,
  hasSuperProperty,
  hasTypes,
  extractId,
  getGraph,
  getSuperPropertiesAsArray
};
