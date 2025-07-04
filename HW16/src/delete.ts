import fs from "fs";

export const deleteFile = (path: string) => {
  if (!fs.existsSync(path)) {
    console.warn("file don't exists");
    return;
  }

  fs.unlink(path, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully");
    }
  });
};
