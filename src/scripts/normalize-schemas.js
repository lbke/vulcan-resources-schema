const Schemaorg = require("../normalizers/schemaorg/index").default;
const path = require("path");
const SCHEMAS_PATH = path.resolve("../../resources/all-layers.jsonld");

Schemaorg();
