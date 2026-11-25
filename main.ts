// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
// (post-x-promote-make-your-own-bounty-01). Node 22, standard library only.
//
// The entry is the X post itself: one post of your own on X that quotes
// make.fun's make-your-own-bounty post, with a photo of its own attached and
// make.fun (or @makefunai) plus your play code in its text. This program does
// exactly one thing: it copies POST.json from the repository root to
// /output/POST.json, where the gate reads the post's address. Nothing this
// program writes about the post is scored — the house reads the post's
// replies, reposts and quotes from X.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let raw: string;
try {
  raw = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate refuses a POST.json that does not parse, so fail loudly here
// instead of handing it a broken file.
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be an object with a string "url" field.');
  process.exit(1);
}

// The gate refuses a placeholder or a make.fun address, so catch a wrong
// shape here instead of handing it a file that can never pass.
const url = (parsed as { url: string }).url;
if (!/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json "url" is not a post address: ${url}`);
  console.error('Expected https://x.com/<handle>/status/<id> (or the same on twitter.com).');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, raw);
console.log(`Wrote ${target}`);
