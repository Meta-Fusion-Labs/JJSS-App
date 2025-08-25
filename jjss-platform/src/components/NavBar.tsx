



export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-semibold">JJSS Dashboard</div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600">Signed out</span>
          <button className="rounded-md bg-blue-600 px-3 py-1.5 text-white text-sm">Sign in</button>
        </div>
      </div>
    </header>
  );
}
