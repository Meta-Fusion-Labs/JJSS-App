# JJSS — The Junior Journal for STEM Studies

> Youth-led open science: learners (ages 6–16) **replicate experiments, publish results, and build a transparent, decentralised body of knowledge**.

**Live:** https://jjss-app.vercel.app  
**Repo:** https://github.com/Meta-Fusion-Labs/JJSS-App

---

## ✨ What is JJSS?

JJSS is a UK-born education platform and movement. Kids and teens don’t just learn STEM—they **do real science**:
- Follow guided, age-appropriate **experiment modules**
- **Upload** data & write-ups
- **Publish** to a tamper-evident archive (hash anchored on chain, no PII on chain)
- **Discuss** in moderated subject rooms
- **Earn** badges/certificates for replication, rigor, and contribution

This repo hosts the **JJSS web app** (Next.js, TypeScript, Tailwind). MVP focus: modules, profile/progress, journal submission, educator moderation, and publication provenance.

---

## 🧱 Current Status (MVP)

- ✅ App scaffold (Next.js App Router) deployed on Vercel  
- ✅ Landing page + basic structure  
- ✅ Initial pitch/roadmap/whitepaper assets produced  
- ⏳ In progress: modules listing, journal submit flow, educator review queue, publication anchor

---

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Build/Dev**: Turbopack (dev), Vercel (deploy)
- **Data**: (Planned) Postgres via Prisma
- **Auth**: (MVP) email/passkeys w/ guardian link; (14+) optional wallet link later
- **Storage**: S3-compatible for uploads (planned)
- **Provenance**: hash anchoring (XRPL or EVM) — **no personal data on chain**
