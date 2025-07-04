import fs from "fs/promises";
import path from "path";

export const fileReader = async (filePath: string): Promise<string> => {
  try {
    await fs.access(filePath);

    const fileExtension = path.extname(filePath).toLowerCase();

    const supportedFormats = [".txt", ".json", ".md"];
    if (!supportedFormats.includes(fileExtension)) {
      console.log(`Unsupported file format: ${fileExtension}`);
      console.log(`Supported formats: ${supportedFormats.join(", ")}`);
      return "";
    }

    const content = await fs.readFile(filePath, "utf8");

    console.log(`\n--- Reading file: ${path.basename(filePath)} ---`);
    console.log("--- Content ---");

    switch (fileExtension) {
      case ".json":
        try {
          const jsonData = JSON.parse(content);
          console.log(JSON.stringify(jsonData, null, 2));
        } catch (jsonError) {
          console.log("Invalid JSON format, displaying as text:");
          console.log(content);
        }
        break;

      case ".txt":
      case ".md":
        console.log(content);
        break;
    }

    console.log("--- End of file ---\n");

    return content;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("ENOENT")) {
        console.log(`File not found: ${filePath}`);
      } else if (error.message.includes("EACCES")) {
        console.log(`Permission denied: ${filePath}`);
      } else {
        console.log(`Error reading file: ${error.message}`);
      }
    } else {
      console.log(`Unknown error occurred while reading file: ${filePath}`);
    }

    return "";
  }
};
