// Make the AI Judge Laugh: Office Jokes — make.fun bounty
// One office joke, a single line under 200 characters.
// Writes the joke to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My calendar blocked 'focus time', so my manager booked a meeting called 'Focus Time Sync'.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT || "/output/entry.txt";

// The turn: the calendar block meant to protect focus time is itself
// invaded by a meeting named after it — the defence becomes the intrusion.
function validateJoke(joke: string): void {
  if (joke.length < 1 || joke.length > 199) {
    throw new Error(`Joke must be 1-199 characters, got ${joke.length}.`);
  }

  if (joke.includes("\n")) {
    throw new Error("Joke must be a single line.");
  }

  if (joke.trim().length === 0) {
    throw new Error("Joke must not be only whitespace.");
  }
}

validateJoke(JOKE);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");

console.log(`Wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
