import { exit } from "process";

import { parseAllSnippets } from "./snippetParser";

const { errored } = parseAllSnippets();

if (errored) {
  exit(1);
}
