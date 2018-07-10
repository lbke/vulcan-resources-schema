const R = require("ramda");
// skip the values that do not respect a condition when reducing
const reduceOnly = R.curry((filterFunc, reduceFunc, initialValue, array) =>
  R.reduce(R.ifElse(filterFunc, reduceFunc, R.identity), initialValue)(array)
);

module.exports = reduceOnly;
