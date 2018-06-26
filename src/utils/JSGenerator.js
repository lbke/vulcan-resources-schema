const R = require("ramda");
const prefix = R.curry((prefix, suffix) => `${prefix} ${suffix}`);
const moduleExport = prefix(`module.export =`);
const es6ExportDefault = prefix(`export default`);

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
const toField = (key, value) => ({ key, value });
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
  obj,
  arr,
  es6ExportDefault,
  objField,
  str,
  dblQuote,
  braces,
  brackets,
  toField
};
