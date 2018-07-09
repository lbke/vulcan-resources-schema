const R = require("ramda");
const prefix = R.curry((prefix, suffix) => `${prefix} ${suffix}`);
const moduleExport = prefix(`module.export =`);
const es6ExportDefault = prefix(`export default`);
const es6Export = prefix("export");
const declareConst = R.curry((name, value) => `const ${name} = ${value}`);

const wrap = (charBegin, charEnd) => child =>
  `${charBegin}${child}${charEnd || charBegin}`;
const braces = wrap("{", "}");
const brackets = wrap("[", "]");
const paren = wrap("(", ")");
const dblQuote = wrap('"');
const str = dblQuote; // alias

const arrowFunc = R.curry(
  (args, content) => paren(args) + "=>" + braces(content)
);

const commaSeparated = R.join(", ");

// helper to create a field
const toField = R.curry((key, value) => ({ key, value }));
// wrap the value between quotes before conversion
const toFieldStr = R.curry((key, value) => ({ key, value: str(value) }));
const objField = ({ key, value }) => prefix(dblQuote(key) + ":")(value);

const obj = R.compose(
  braces,
  commaSeparated,
  R.map(objField)
);

const arr = R.compose(
  brackets,
  commaSeparated
);

module.exports = {
  arr,
  arrowFunc,
  braces,
  brackets,
  commaSeparated,
  declareConst,
  dblQuote,
  es6Export,
  es6ExportDefault,
  objField,
  obj,
  str,
  toField,
  toFieldStr
};
