const R = require("ramda");
/**
 * Map a function only to filtered values, return identity for the others,
 * and return a flag
 * @param {*} itemFunc
 * @param {*} filterFunc
 * @param {*} mappableVal
 */
const mapWithFlag = R.curry((mapFunc, filterFunc, mappableVal) => {
  // enhance the filter with a side-effect flag
  let exists = 0;
  const flagFilterFunc = item => {
    const isFiltered = filterFunc(item);
    if (isFiltered) {
      exists++;
    }
    return isFiltered;
  };
  const res = R.map(R.ifElse(flagFilterFunc, mapFunc, R.identity))(mappableVal);
  return { flag: !!exists, res };
});

module.exports = mapWithFlag;
