import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One short text, written to intrigue the reader who reads it.
// A single concrete mystery, told slowly, with nothing explained:
// a light dark for thirty years, on once in the night, and a name
// no one remembers painting. Shown, not instructed; no stock phrase.
// The file holds exactly this text, with no trailing newline added.
const text =
  "For thirty years the lighthouse at the end of the lane has been dark. " +
  "Last night, at half past two, its light came on once — long enough for " +
  "someone standing below to read a name, painted fresh, on a door no one " +
  "in the village remembers painting.";

// The gate allows 1 to 280 characters, counted as Unicode code points.
const length = Array.from(text).length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  throw new Error(`entry text is ${length} characters, outside 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
chmodSync("/output/entry.txt", 0o644);
