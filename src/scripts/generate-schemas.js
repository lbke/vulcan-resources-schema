const Schemaorg = require("../normalizers/shemaorg").default;
const path = require("path");
const SCHEMAS_PATH = path.resolve("../../resources/all-layers.jsonld");

Schemaorg();
