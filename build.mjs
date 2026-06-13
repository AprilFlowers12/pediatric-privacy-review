import { copyFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "public");
const assets = [
  ["index.html", "index.html"],
  ["styles.css", "site-v3.css"],
  ["app.js", "site-v4.js"],
  ["_headers", "_headers"],
  ["logo.png", "logo.png"],
  ["favicon.png", "favicon.png"],
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all(
  assets.map(([source, destination]) =>
    copyFile(path.join(root, source), path.join(output, destination)),
  ),
);

console.log(`Prepared ${assets.length} files in ${output}`);
