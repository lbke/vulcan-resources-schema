const R = require("ramda");
const { hasSuperClass, getSuperClassesAsArray } = require("./common");
const until = require("../../utils/until");
const mapWithFlag = require("../../utils/mapWithFlag");

const mergeSchemaSuperClasses = R.curry((normalizedGraph, schema) => {
  const superClasses = getSuperClassesAsArray(schema);
  //warnMultipleSuperClasses(schema, superClasses);
  const { fields, superSuperClasses } = R.reduce(
    ({ fields, superSuperClasses }, superClassDef) => {
      const superClass = normalizedGraph[superClassDef["@id"]];
      const superClassFields = R.prop("fields")(superClass);
      const superClassSuper = getSuperClassesAsArray(superClass);
      return {
        fields: R.merge(superClassFields, fields),
        superSuperClasses: [...superSuperClasses, ...superClassSuper]
      };
    },
    { fields: schema.fields, superSuperClasses: [] }
  )(superClasses);
  return {
    ...schema,
    fields: { ...schema.fields, ...fields },
    // get the parent superClass so we can iterate recursively if needed
    "rdfs:subClassOf": superSuperClasses
  };
});

const mergeSuperClasses = normalizedGraph =>
  mapWithFlag(mergeSchemaSuperClasses(normalizedGraph), hasSuperClass)(
    normalizedGraph
  );

/**
 * Recursively merge superclasses untile we are done
 * TODO: a bit suboptimal, we should only iterate on schemas that still have some superclasses
 */
const handleSuperClasses = normalizedGraph =>
  until(mergeSuperClasses, normalizedGraph);

module.exports = {
  default: handleSuperClasses,
  _mergeSuperClasses: mergeSuperClasses
};
