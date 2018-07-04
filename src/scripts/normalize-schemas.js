const Schemaorg = require("../schemaorg/preprocessor/index").default;
const path = require("path");
const SCHEMAS_PATH = path.resolve("../../resources/all-layers.jsonld");

Schemaorg();
