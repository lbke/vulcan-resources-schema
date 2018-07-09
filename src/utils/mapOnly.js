const R = require("ramda");
// map only filtered items, but return the whole object
// other values are left untouched
const mapOnly = R.curry((filterFunc, mapFunc, array) =>
  R.map(R.ifElse(filterFunc, mapFunc, R.identity))(array)
);

module.exports = mapOnly;
