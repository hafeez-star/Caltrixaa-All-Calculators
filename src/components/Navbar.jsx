import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link to="/" className="flex items-center gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
            C
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Cal<span className="text-blue-600">trixaa</span>
          </span>

        </Link>


        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-md font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/age-calculator"
            className="text-md font-medium text-slate-600 transition hover:text-blue-600"
          >
            Calculators
          </Link>

          <Link
            to="/about"
            className="text-md font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>

        </nav>


        <Link
          to="/age-calculator"
          className="hidden rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 md:block"
        >
          Explore Tools
        </Link>


        <button
          className="rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>

    </header>
  );
}

export default Navbar;