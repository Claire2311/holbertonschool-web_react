import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
  entry: "./js/dashboard_main",
  //   entry: {
  //     main: path.resolve(__dirname, "./js/dashboard_main"),
  //   },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "production",
};
