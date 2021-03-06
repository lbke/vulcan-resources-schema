const mkdirp = require("mkdirp");
const path = require("path");
const OUTDIR = path.resolve(__dirname, "../../build/schemas");

module.exports = dir => mkdirp.sync(dir || OUTDIR);
