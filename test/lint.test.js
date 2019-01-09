const lint = require("mocha-eslint");
const path = require("path");

const paths = [
  path.join(__dirname, "..", "src", "**", "*.js"),
  path.join(__dirname, "..", "test", "**", "*.js")
];

const options = {};

// Run the tests
lint(paths, options);
