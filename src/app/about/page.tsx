// src/app/about/page.tsx
import Link from "next/link";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "About JJSS – The Junior Journal for STEM Studies",
  description:
    "Youth-led open science: learners (ages 6–16) replicate experiments, publish results, and build a transparent, decentralised body of knowledge.",
};

export default function AboutPage() {
  return (
    <>
        <NavBar />
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          About <span className="text-[var(--accent)]">JJSS</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          JJSS (The Junior Journal for STEM Studies) is a UK-born education platform and
          movement. Kids and teens don’t just learn STEM — they <strong>do real science</strong>.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-12 rounded-xl border bg-gray-100 p-6 shadow-sm text-slate-900">
        <h2 className="text-xl font-semibold">Mission</h2>
        <p className="mt-3 text-slate-900">
          <em>
            “Empowering young people to take their place in the history of science, rebuilding
            the foundations of STEM for a new generation to understand our past, and advance
            humanity’s quest for knowledge.”
          </em>
        </p>
      </section>

      {/* What is JJSS */}
      <section className="mb-12 grid gap-6 md:grid-cols-2 text-slate-900">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">What learners do</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700">
            <li>Follow guided, age-appropriate <strong>experiment modules</strong>.</li>
            <li><strong>Upload</strong> data &amp; write-ups with evidence (photos, notes, code).</li>
            <li><strong>Publish</strong> to a tamper-evident archive (hash anchored on-chain; no PII (Personally Identifiable Information) on-chain).</li>
            <li><strong>Discuss</strong> in moderated subject rooms.</li>
            <li><strong>Earn</strong> badges/certificates for replication, rigor, and contribution.</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-900">
          <h3 className="text-lg font-semibold">Why it matters</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700">
            <li>Makes learning <strong>hands-on</strong>, collaborative, and inspiring.</li>
            <li>Connects abstract lessons to the <strong>wonder of discovery</strong>.</li>
            <li>Builds practical skills in <strong>measurement, coding, analysis, teamwork</strong>.</li>
            <li>Creates a <strong>youth-driven open research archive</strong>.</li>
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold">Roadmap (MVP → Pilot)</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-900">
            <h4 className="font-semibold">M1: Core App</h4>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Public pages (Home, About, News)</li>
              <li>Dashboard shell (sidebar/topbar)</li>
              <li>Modules list &amp; detail</li>
              <li>Profile &amp; progress</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-900">
            <h4 className="font-semibold">M2: Journal &amp; Review</h4>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Submit paper (template + validation)</li>
              <li>Educator moderation (review queue &amp; rubric)</li>
              <li>Publication record (versioning)</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-900">
            <h4 className="font-semibold">M3: Provenance &amp; Badges</h4>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Hash artifacts → anchor on chain (XRPL/EVM utility)</li>
              <li>Public verify page (hash ↔ tx)</li>
              <li>Open Badge / Verifiable Credential issue + QR verify</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-900">
            <h4 className="font-semibold">M4: Guardian/Student UX</h4>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Guardian dashboard + co-sign flow</li>
              <li>PII scanner + image face-blur</li>
              <li>Achievements + replication counter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="mb-12 rounded-xl border bg-white p-6 shadow-sm text-slate-900">
        <h2 className="text-xl font-semibold">Safeguarding &amp; Privacy</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Public identity = <strong>nickname + age band + coarse region</strong> (no real names by default).</li>
          <li>Guardian link required <strong>&lt;13</strong> (recommended &lt;16); co-sign to publish or access restricted experiments.</li>
          <li><strong>No PII on-chain</strong>; on-chain records store hash + timestamp only.</li>
          <li>Revocable <strong>Open Badges / Verifiable Credentials</strong> for certificates.</li>
          <li>Age-appropriate design, moderation, and safety checks across the platform.</li>
        </ul>
      </section>

      {/* Curriculum snapshot */}
      <section className="mb-12 rounded-xl border bg-white p-6 shadow-sm text-slate-900">
        <h2 className="text-xl font-semibold">Curriculum Snapshot</h2>
        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">Level 1 aimed at Ages 6–8 </h4>
            <p className="text-slate-700">
              Counting systems, place value, simple machines, sundials.
            </p>
            <h4 className="mt-4 font-semibold">Level 2 aimed at Ages 9–11</h4>
            <p className="text-slate-700">
              Geometry basics, surveying, water clocks, early astronomy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Level 3 aimed at Ages 12–13</h4>
            <p className="text-slate-700">
              Galileo’s motion experiments, Newton’s laws, Snell’s law, early chemistry.
            </p>
            <h4 className="mt-4 font-semibold">Level 4 aimed at Ages 14–16</h4>
            <p className="text-slate-700">
              Mendelian genetics, Darwin’s studies, relativity, quantum mechanics, coding &amp; AI.
            </p>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="mb-4 rounded-xl border bg-white p-6 shadow-sm text-slate-900">
        <h2 className="text-xl font-semibold">Get Involved</h2>
        <p className="mt-3 text-slate-700">
          We welcome pilot partners across the UK, schools, libraries, museums, and youth clubs,
          as well as parents, educators, and scientists who want to mentor or help build modules.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/news"
            className="inline-flex items-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent)]/90"
          >
            See Updates
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            Explore the Dashboard
          </Link>
          <a
            href="https://github.com/Meta-Fusion-Labs/JJSS-App"
            target="_blank"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            View the Repo
          </a>
        </div>
      </section>

      <p className="mt-8 text-center text-sm text-slate-500">
        JJSS - The Junior Journal for STEM Studies
      </p>
    </main>
    </>
  );
}
