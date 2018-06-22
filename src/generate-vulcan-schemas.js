const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const fp = require("lodash/fp");
const R = require("ramda");

const SCHEMAS_PATH = path.resolve(__dirname, "../static/all-layers.jsonld");
const OUTDIR = path.resolve(__dirname, "../dist/");

const generateOutdir = () => mkdirp.sync(OUTDIR);

const getSchemas = R.compose(
  fs.readFileSync,
  JSON.parse
);

const getDomainsAsArray = schema => {
  const rawDomains = schema["http://schema.org/rangeIncludes"];
  return typeof rawDomains === "object" ? [rawDomains] : rawDomains;
};
const normalizeSchemas = schemas => {
  const schemasList = schemas["@graph"][0]["@graph"];
  return schemasList.reduce(
    normalizedSchemas,
    schema => {
      const res = { ...normalizeSchemas };
      const key = schema["@id"];
      // add the schema to the result if it does not exist
      res[key] = schema;
      // fill the related entities fields
      domains = getDomainsAsArray(schema);
      domains.forEach(domain => {
        res = R.set(
          R.lensPath(["domains", domain["@id"]]),
          domain,
          normalizedSchemas
        );
      });
    },
    {}
  );
};

const generateVulcanSchemas = normalizeSchemas;

const createFile = (outdir, filename, data) => {
  fs.writeFileSync(
    path.join(outdir, filename),
    JSON.stringify(data, undefined, 2),
    { encoding: "utf8", flag: "w" }
  );
};

const run = (schemasPath, outdir) => {
  R.compose(
    generateOutdir,
    getSchemas,
    generateVulcanSchemas,
    R.curry(createFile)(outdir)
  )(schemasPath);
};

run(SCHEMAS_PATH, OUTDIR);
