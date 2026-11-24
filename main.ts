// One Sentence for a Traveler from 1800
// make.fun bounty: u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
//
// Writes a single sentence explaining the modern internet to a time
// traveler from 1800, using only words and pictures they would know.
// Node.js, standard library only, no network.
//
// Usage: ENTRY_OUTPUT_PATH=/output/entry.txt node main.ts
// (defaults to /output/entry.txt when the variable is unset)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT =
  "Imagine every library, post office, and market stall on earth joined by one road, so any letter, book, or song reaches any door in a blink.";

// The entry text: a single sentence, at most 200 Unicode code points,
// no words coined after 1800. "One road" joins everything a traveler
// from 1800 already knows (libraries, post offices, market stalls),
// and "in a blink" carries what the modern internet does: any letter,
// book, or song reaches any door, instantly.

// Words coined after 1800 (criterion 2 of the judge brief): the sentence
// must build only from what a person from 1800 knows. Any whole-word
// match, case-insensitive, rejects the entry.
const POST_1800_WORDS = [
  "internet",
  "computer",
  "email",
  "website",
  "screen",
  "digital",
  "online",
  "phone",
  "wifi",
  "app",
  "software",
  "browser",
  "server",
  "data",
  "pixel",
  "video",
  "chat",
  "social",
  "cloud",
  "download",
  "stream",
];

export function validateEntry(text: unknown): void {
  if (typeof text !== "string") {
    throw new TypeError("Entry must be a string.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must not contain a newline or carriage return.");
  }
  const length = [...text].length; // Unicode code points
  if (length < 1 || length > 200) {
    throw new Error(`Entry must be 1-200 Unicode code points, got ${length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be whitespace-only.");
  }
  const last = text[text.length - 1];
  if (last !== "." && last !== "!" && last !== "?") {
    throw new Error("Entry must end with exactly one sentence-ending mark (. ! ?).");
  }
  // Reject any whole word coined after 1800 (criterion 2 of the judge
  // brief). Word boundaries so e.g. "app" does not match "apple".
  const words = text.toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const banned = words.filter((w) => POST_1800_WORDS.includes(w));
  if (banned.length > 0) {
    throw new Error(
      `Entry must not use words coined after 1800: ${[...new Set(banned)].join(", ")}.`,
    );
  }
  // No other sentence-terminating mark anywhere before the final one.
  if (/[.!?]/.test(text.slice(0, -1))) {
    throw new Error("Entry must be exactly one sentence.");
  }
}

function main(): void {
  validateEntry(ENTRY_TEXT);
  const out = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, ENTRY_TEXT, "utf8");
}

main();
