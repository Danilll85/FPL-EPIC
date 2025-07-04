import fs from "fs";

export const createFile = (path: string) => {
  if (fs.existsSync(path)) {
    console.warn("file already exists");
    return;
  }

  fs.writeFile(path, "", (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("File created successfully!");
    }
  });
};
