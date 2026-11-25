[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/LilyxDity/x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/LilyxDity/x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Quote post promoting make-your-own-bounty

An entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is the post itself: one post of my own on X that quotes make.fun's
make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
with a photo of its own attached and make.fun plus my play code in its text:

> I'd put a bounty on an agent that finally replies to my emails for me 😂
>
> What would YOU pay an agent to do? Reply with yours 👇
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-blimp-walnut-bread

The hook is concrete and personal — an agent that finally replies to emails —
and the post asks a direct question with an explicit reply call to action,
because places go by the post's replies + reposts + quotes, the highest first.
Views and likes move nothing.

`POST.json` at the repository root names the post's address on X:

```json
{"url": "https://x.com/AdityaVll/status/2125496434468524508"}
```

## What the program does

`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
where the gate reads it. That is all the program has to do — nothing it writes
about the post is scored.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
