import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "public");
const assets = ["index.html", "styles.css", "app.js", "_headers"];

await mkdir(output, { recursive: true });
await Promise.all(
  assets.map((asset) => copyFile(path.join(root, asset), path.join(output, asset))),
);

console.log(`Prepared ${assets.length} files in ${output}`);
