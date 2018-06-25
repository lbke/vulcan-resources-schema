const R = require("ramda");
const fs = require("fs");
/**
 * Open the schemas file and parse it
 */
module.exports = R.compose(
  JSON.parse,
  fs.readFileSync
);
