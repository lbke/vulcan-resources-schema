const prettier = require("prettier");

module.exports = str =>
  prettier.format(str, {
    parser: "babylon",
    semi: false,
    trailingComma: "es5"
  });
