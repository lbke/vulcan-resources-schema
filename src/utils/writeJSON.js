const R = require("ramda");
const fs = require("fs");
const path = require("path");

const OUTDIR = path.resolve(__dirname, "../../build/");
/**
 * Generate the file
 * @param {*} outdir
 * @param {*} filename
 * @param {*} data
 */
module.exports = (outdir = OUTDIR, filename) => data => {
  fs.writeFileSync(
    path.join(outdir, filename),
    JSON.stringify(data, undefined, 2),
    { encoding: "utf8", flag: "w" }
  );
};
