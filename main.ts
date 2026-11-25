import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Marathon R5 — one line, punchline last.
// Scene: a washing machine at home. Number: 11 socks. Named object: the washing machine.
// The joke turns on the machine blaming its owner for the socks it ate.
const joke =
  "My washing machine has eaten 11 socks this year and still beeps at me like I'm the one who lost them.";

// Gate: a one-liner, one line only, at most 280 characters.
if (joke.length > 280) throw new Error(`joke is ${joke.length} chars, over the 280 limit`);
if (joke.includes("\n")) throw new Error("joke must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
