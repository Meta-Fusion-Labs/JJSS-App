import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/science", label: "Science" },
  { href: "/technology", label: "Technology" },
  { href: "/engineering", label: "Engineering" },
  { href: "/mathematics", label: "Mathematics" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--panel)]/90 backdrop-blur border-b border-white/5">
      <div className="px-4 h-14 flex items-center justify-between">
        
        {/* Logo + brand text */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo image (replace with your /public/jjss-logo.svg or png) */}
          <Image
            src="/jjss-logo.svg"
            alt="JJSS Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold tracking-wide">
            <span className="text-[var(--accent)]">The Junior Journal</span> For STEM Studies
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-[var(--accent)]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Search + Sign in */}
        <div className="flex items-center gap-3">
          <input
            placeholder="Search…"
            className="hidden sm:block bg-[#0b0e12] border border-white/10 rounded px-3 py-1.5 text-sm"
          />
          <button className="bg-[var(--accent)]/90 hover:bg-[var(--accent)] text-white text-sm px-3 py-1.5 rounded">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
