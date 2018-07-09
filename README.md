# UNDER PROGRESS

This package is meant to allow automatic generation of Vulcan schemas from trusted sources (Schema.org for the moment).

It is an experimental work under progress. Use with caution.

# Usage

The schemas are stored in the `/releases` folder. The `releases/schemas` contains all schemas with one schema per file + an `index.js` file to load them all.

Copy paste the schemas folder and import them all with `import * as schemas from './schemas'`. You can tweak the `index.js` file to load less schemas.

The `schemaorg-normalized.jsonld` file contains a automatically preprocessed version of the schemaorg schemas that is easier to manipulate. We rely on this file to build the Vulcan schemas.

The `schemaNames` files exports an array of all the schemas... names.

## Contribution

- Issues and feature requests are always welcome, but we don't guarantee any support for the moment
- We promote bug-driven development. If you identify a bug, write a tests for it (that should fail), and fix until your test is passing.

## Next steps

- Take the `subPropertyOf` property into account to generate nested object properties.
