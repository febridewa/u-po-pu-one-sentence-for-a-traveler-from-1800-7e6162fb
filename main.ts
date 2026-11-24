// One Sentence for a Traveler from 1800 — u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
// Writes one original sentence to /output/entry.txt, explaining the modern
// internet to a time traveler from 1800 using only words and pictures from
// their own world: a post office, a library, a letter, ink, strangers' books.
// The sentence: a post office joined to a library, where a letter crosses
// the sea before the ink dries, and strangers' writings answer your questions.
// Deterministic: the same fixed string on every run.
// One sentence, 176 characters — inside the gate's 1–200 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine a post office joined to a library, where your letter reaches a friend across the sea before the ink dries, and the writings of strangers answer the questions you carry.";

// Guard the gate before writing: the entry must be 1–200 UTF-8 characters
// and not only whitespace, or the sealed scorer refuses it.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`Sentence must be 1–200 characters, got ${SENTENCE.length}`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("Sentence must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} chars to /output/entry.txt`);
