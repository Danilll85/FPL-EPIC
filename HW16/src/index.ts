import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { ShowFiles } from "./show";
import { fileReader } from "./read";
import { createFile } from "./create";
import { deleteFile } from "./delete";

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
const fullPath = path.join(basePath, filename);

switch (command) {
  case "list":
    ShowFiles(basePath);
    break;
  case "read":
    if (!filename) {
      console.log("Please provide a filename");
      break;
    }
    fileReader(fullPath);
    break;
  case "create":
    if (!filename) {
      console.log("Please provide a filename");
      break;
    }
    createFile(fullPath);
    break;
  case "delete":
    if (!filename) {
      console.log("Please provide a filename");
      break;
    }
    deleteFile(fullPath);
    break;
  default:
    console.log("command not found");
}
