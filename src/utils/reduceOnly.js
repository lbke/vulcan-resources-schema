const R = require("ramda");
// skip the values that do not respect a condition when reducing
const reduceOnly = R.curry((filterFunc, reduceFunc, initialValue, array) =>
  R.reduce((res, val, arr) => {
    if (!filterFunc(val)) return res;
    return reduceFunc(res, val, arr);
  }, initialValue)(array)
);

module.exports = reduceOnly;
