import { mkdir, writeFile, copyFile, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { pages } from "../site/pages.mjs";
import { renderPage } from "../site/templates.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.resolve(rootDir, "generated");

// remove everything in the output directory
await mkdir(outputDir, { recursive: true });
const files = await readdir(outputDir);
for (const file of files) {
  await rm(path.join(outputDir, file), { recursive: true });
}

for (const page of pages) {
  const outputFile = path.join(outputDir, page.outputPath);
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, renderPage(page), "utf8");
}

// move styles
const stylePath = path.join(rootDir, "styles", "styles.css");
const outputStylePath = path.join(outputDir, "styles", "styles.css");
await mkdir(path.dirname(outputStylePath), { recursive: true });
await copyFile(stylePath, outputStylePath);

// move images
const imagePath = path.join(rootDir, "images");
const imageOutputPath = path.join(outputDir, "images");
await mkdir(imageOutputPath, { recursive: true });
const imageFiles = await readdir(imagePath);
for (const file of imageFiles) {
  await copyFile(path.join(imagePath, file), path.join(imageOutputPath, file));
}

console.log(`Built ${pages.length} pages.`);
