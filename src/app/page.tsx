import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-16 text-center space-y-10">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/jjss-logo.svg"
          alt="JJSS Logo"
          width={320}
          height={320}
          priority
          className="w-32 sm:w-40 md:w-52 lg:w-64 h-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold">
          JJSS: The Junior Journal for STEM Studies
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
          A youth-led open science platform where learners replicate experiments,
          publish results, and build a transparent body of knowledge.
        </p>
        <p className="text-slate-500 text-base">Coming soon…</p>
      </div>

      <div className="mx-auto grid gap-4 sm:grid-cols-2 max-w-3xl">
        <Link
          href="/about"
          className="rounded-xl border p-5 hover:shadow transition"
        >
          <h2 className="font-semibold text-xl">About Us →</h2>
          <p className="text-slate-600">Mission, vision, safeguarding & roadmap.</p>
        </Link>
        <Link
          href="/news"
          className="rounded-xl border p-5 hover:shadow transition"
        >
          <h2 className="font-semibold text-xl">News →</h2>
          <p className="text-slate-600">JJSS updates and science highlights.</p>
        </Link>
      </div>
    </main>
    </>
  );
}
