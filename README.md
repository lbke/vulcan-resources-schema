# UNDER PROGRESS

This package is meant to allow automatic generation of Vulcan schemas from trusted sources (Schema.org for the moment).

It is an experimental work under progress. Use with caution.

## Usage

The schemas are stored in the `/releases` folder. The `releases/schemas` contains all schemas with one schema per file + an `index.js` file to load them all.

Copy paste the schemas folder and import them all with `import * as schemas from './schemas'`. You can tweak the `index.js` file to load less schemas.

The `schemaorg-normalized.jsonld` file contains an automatically preprocessed version of the schemaorg schemas that is easier to manipulate. We rely on this file to build the Vulcan schemas.

The `schemaNames` files exports an array of all the schemas... names.

**Takes those schemas as inspiration sources only**, as they are not mature enough to work out-of-the-box (yet).

## Schema building process

The preprocessing step restructures the schemas to make them easier to explore and transform. The generation step actually creates the Vulcan schemas.

### Schema.org

- Each Schema.org class will result a Vulcan schema

- The superclass fields are nested in the subclass fields. Example: a Zoo is a Place, so it will both have its own fields (`animals`) and generic fields (`address`), which it inherits.

- Some properties are nested into objects, with the suffix `Object`. For example, many values help to identify an object, like the VAT number for a company, the ISBN for a book... all those fields are nested in the `identifierObject` Object field.

- When a field references another class, we use a resolver. For example, if your Restaurant have a Menu, then you only need to store a reference to this Menu (its unique id). The Menu can then be fetched on demand.

The resulting schemas are self-sufficient, excepts for reference to other classes. Therefore, they are a bit bloated, so don't hesitate to remove the props you don't need before using them.

## Contribution

- Issues and feature requests are always welcome, but we don't guarantee any support for the moment
- We promote bug-driven development. If you identify a bug, write a tests for it (that should fail), and fix until your test is passing.

## Next steps

- Generate arrays (`supersededBy` property)
- Handle the `inverseOf` property
