import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { ShowFiles } from "./show";

dotenv.config();

const basePath = path.resolve(process.env.BASE_DIR || "");

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath, { recursive: true });
}

console.log(`base path is ${basePath}`);

console.log("input a command:");
const args = process.argv.slice(2);
const command = args[0];
const filename = args[1];
console.log(command);
//console.log(filename);

switch (command) {
  case "list":
    ShowFiles(basePath);
    break;
  case "read":
    break;
  case "create":
    break;
  case "delete":
    break;
  default:
    console.log("command not found");
}
