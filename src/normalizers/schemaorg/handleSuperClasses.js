const R = require("ramda");
const chalk = require("chalk");
const { hasSuperClass, getSuperClassesAsArray } = require("./common");
const warnMultipleSuperClasses = (schema, superClasses) => {
  if (superClasses.length !== 1) {
    console.log(
      chalk.yellow(
        `Schema ${schema["@id"]} has ${superClasses.length} superClasses`
      ),
      superClasses
    );
  }
};
const handleSuperClasses = normalizedGraph =>
  R.map(schema => {
    if (!hasSuperClass(schema)) return schema;
    const superClasses = getSuperClassesAsArray(schema);
    warnMultipleSuperClasses(schema, superClasses);
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
      fields: { ...fields, ...schema.fields },
      // get the parent superClass so we can iterate recursively if needed
      "rdfs:subClassOf": superSuperClasses
    };
  })(normalizedGraph);

module.exports = handleSuperClasses;
