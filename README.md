# JJSS — The Junior Journal for STEM Studies

> Youth-led open science: learners (ages 6–16) **replicate experiments, publish results, and build a transparent, decentralised body of knowledge**.

**Live:** https://jjss-app.vercel.app  
**Repo:** https://github.com/Meta-Fusion-Labs/JJSS-App

---

## ✨ What is JJSS?

JJSS is a UK-born education platform and movement. Kids and teens don’t just learn STEM — they **do real science**:

- Follow guided, age-appropriate **experiment modules**
- **Upload** data & write-ups
- **Publish** to a tamper-evident archive (hash anchored on chain, no PII on chain)
- **Discuss** in moderated subject rooms
- **Earn** badges/certificates for replication, rigor, and contribution

This repo hosts the **JJSS web app** (Next.js, TypeScript, Tailwind).  
MVP focus: modules, profile/progress, journal submission, educator moderation, and publication provenance.

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

---

## 🔐 Safeguarding & Privacy (Principles)

- Public identity is **nickname + age band + coarse region** (no real names by default)  
- Guardian link required **<13** (recommended <16)  
- **Co-sign** required to publish or access restricted experiments  
- **No PII on chain**; on-chain is hash + timestamp only  
- Revocable **verifiable credentials / Open Badges** for certificates  

---

## 🧪 Roadmap (MVP → Pilot)

### M1: Core app
- Public pages (Home, About, News)  
- Dashboard shell (sidebar/topbar)  
- Modules list/detail  
- Profile + progress  

### M2: Journal & Review
- Submit paper (template + zod validation)  
- Educator moderation (review queue + rubric)  
- Publication record (versioning)  

### M3: Provenance & Badges
- Hash artifacts → anchor on chain (XRPL/EVM utility)  
- Public verify page (hash ↔ tx)  
- Open Badge/VC issue + QR verify  

### M4: Guardian/Student UX
- Guardian dashboard + co-sign flow  
- PII scanner + image face-blur  
- Achievements + replication counter  

---

## 🧩 Contributing

PRs and issues are welcome. Please:  
- Keep components small and typed (TS)  
- Use Tailwind for styling; avoid inline styles  
- Follow ESLint/Prettier (`npm run lint`)  

**Good first issues (once opened):**  
- Add About + News page content  
- Build `PaperEditor` with a guided form  
- Implement `hashing.ts` usage in `/api/publish`  
- Add a basic `ReviewForm` with rubric fields  

---

## 📄 Licenses & Docs

- App code: **MIT (proposed)**  
- Content (curriculum/whitepaper): **CC BY-NC 4.0 (proposed)**  
- Whitepaper/Roadmap/Exec Summary: see `/docs` (to be added)  

---

## 🙌 Credits

- Project lead: **Scott Pratt (Meta Fusion Labs)**  
- Brand & vision: **JJSS — The Junior Journal for STEM Studies**  

---

## ❓ FAQ

**Is this crypto for kids?**  
No. For under-14s JJSS is a **secure web-2 app** with guardian co-sign. We use blockchain only for tamper-evident timestamps of published, non-PII artifacts.  
A 14+ “Web3 101” module is optional for families who want it.  

**Can schools run pilots?**  
Yes — pilot partners (schools, libraries, museums) are welcome. Open an issue or contact us.
