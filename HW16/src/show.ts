import fs from "fs/promises";
import path from "path";

export const ShowFiles = async (folderPath: string) => {
  try {
    const delimiter = "\\";
    const mainFolder = findParentFolderName(folderPath, delimiter);
    console.log(mainFolder);

    const files = await fs.readdir(folderPath, {
      withFileTypes: true,
      recursive: true,
    });

    for (const file of files) {
      if (file.isFile()) {
        const parentFolder = findParentFolderName(file.parentPath, delimiter);
        console.log(`file parent folder: ${parentFolder}`);

        if (parentFolder == mainFolder) {
          const fullPath = path.join(folderPath, file.name);
          const stats = await fs.stat(fullPath);

          console.log(`📄 File: ${file.name}`);
          console.log(`Type: ${file.name.split(".").pop() || "None"}`);
          console.log(`Size: ${stats.size} bytes`);
          console.log(`Modified: ${stats.mtime.toLocaleString()}`);
        } else {
          const fullPath = path.join(folderPath, parentFolder, file.name);
          const stats = await fs.stat(fullPath);

          console.log(`📄 File: ${file.name}`);
          console.log(`Type: ${file.name.split(".").pop() || "None"}`);
          console.log(`Size: ${stats.size} bytes`);
          console.log(`Modified: ${stats.mtime.toLocaleString()}`);
        }
      } else {
        console.log(`📁 Folder: ${file.name}/`);
      }
      console.log("------------------");
    }
  } catch (e) {
    console.error(`Error: ${e}`);
  }
};

const findParentFolderName = (path: string, delimiter: string) => {
  const arr = path.split(delimiter);

  return arr[arr.length - 1];
};
