const path = require("path");
// import path from "path";

module.exports = {
  entry: "./js/dashboard_main",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "production",
};
