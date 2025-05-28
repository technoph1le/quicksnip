import fs from "fs";
import path from "path";

export function copyFolderSync(from: string, to: string) {
  fs.mkdirSync(to, { recursive: true });

  for (const item of fs.readdirSync(from)) {
    const src = path.join(from, item);
    const dest = path.join(to, item);

    if (fs.lstatSync(src).isDirectory()) {
      copyFolderSync(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}
