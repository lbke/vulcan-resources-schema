const jsonld = require("jsonld");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const SCHEMAS_PATH = path.resolve(__dirname, "../static/all-layers.jsonld");
const OUTDIR = path.resolve(__dirname, "../dist/");
mkdirp.sync(OUTDIR);

const file = fs.readFileSync(SCHEMAS_PATH);
const schemas = JSON.parse(file);

const compacted = jsonld.compact(schemas);

fs.writeFileSync(
  path.join(OUTDIR, "compacted.jsonld"),
  JSON.stringify(compacted, undefined, 2),
  { encoding: "utf8", flag: "w" }
);
