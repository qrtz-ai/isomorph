# ◆ Isomorph

Cross-domain problem solving through structural isomorphism.

> "Domains are just skins on the same problem."

## What it does

Give it a problem from any domain. Isomorph will:

1. **Abstract** — Strip the domain away, reveal the structural shape
2. **Search** — Find isomorphic problems across all fields of knowledge
3. **Map** — Translate solutions from other domains back to yours
4. **Synthesize** — Give you a concrete answer informed by cross-domain insight

## Stack

- Next.js 15 + TypeScript
- Vercel AI SDK + Anthropic Claude
- Tailwind CSS

## Setup

```bash
npm install
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local
npm run dev
```

## The Idea

Most problems we solve are isomorphic to problems in other domains. A bug in your code is the same structural problem as a wrong note in a jazz solo. Training a neural network has the same shape as training a muscle. The insight is the mapping — once you see it, the solution is obvious.

This is a prototype to test whether making that mapping *explicit* actually produces better solutions.
