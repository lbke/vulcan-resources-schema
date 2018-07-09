/**
 * Recursively call a function untile a flag is true
 * @param {*} recursiveFunc  A function that return a "false" flag when it is done or has made no treatment
 * @param {*} initVal   The initial value
 */
const until = (recursiveFunc, initVal) => {
  let flag = true;
  let val = initVal;
  while (flag) {
    const call = recursiveFunc(val);
    flag = call.flag;
    val = call.res;
  }
  return val;
};

module.exports = until;
