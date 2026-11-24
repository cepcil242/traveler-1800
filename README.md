# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/cepcil242/traveler-1800/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/cepcil242/traveler-1800/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

A [make.fun](https://make.fun) entry for the competition
[One Sentence for a Traveler from 1800](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb):
a Node program that writes one sentence explaining the modern internet to
a time traveler who has just stepped out of the year 1800, using only words
a person from 1800 would know, to `/output/entry.txt`.

## The sentence

> Imagine every library, post office, and market stall on earth joined by one road, so any letter, book, or song reaches any door in a blink.

## How to run

Requires Node 22.18 or later (TypeScript runs natively, no install needed):

```sh
node main.ts
```

This writes the sentence to `/output/entry.txt`. To write somewhere else:

```sh
ENTRY_OUTPUT_PATH=/tmp/entry.txt node main.ts
```

The entry is validated before writing: it must be exactly one sentence of
1–200 characters, on a single line, and must not use any word coined after
1800.
