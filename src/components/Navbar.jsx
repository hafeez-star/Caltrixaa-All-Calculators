import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const categories = [
    {
      icon: "🧮",
      title: "Math & Numbers",
      link: "/category/math",
    },
    {
      icon: "💰",
      title: "Money & Shopping",
      link: "/category/money",
    },
    {
      icon: "📅",
      title: "Date & Time",
      link: "/category/date",
    },
    {
      icon: "❤️",
      title: "Health",
      link: "/category/health",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={function () {
            setMobileOpen(false);
          }}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-200 transition group-hover:scale-105">
            C
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            Cal<span className="text-indigo-600">trixaa</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">

          <Link
            to="/"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            Home
          </Link>

          {/* Calculators Dropdown */}
          <div className="relative">

            <button
              type="button"
              onClick={function () {
                setCalculatorOpen(!calculatorOpen);
              }}
              className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              Calculators

              <span
                className={`text-xs transition ${
                  calculatorOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {calculatorOpen && (
              <div className="absolute left-0 top-full mt-3 w-80 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">

                <div className="px-3 pb-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Browse Categories
                  </p>
                </div>

                <div className="grid gap-1">

                  {categories.map(function (category) {
                    return (
                      <Link
                        key={category.link}
                        to={category.link}
                        onClick={function () {
                          setCalculatorOpen(false);
                        }}
                        className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-indigo-50"
                      >

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xl transition group-hover:bg-white group-hover:shadow-sm">
                          {category.icon}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            {category.title}
                          </p>

                          <p className="text-xs text-slate-500">
                            Explore calculators
                          </p>
                        </div>

                        <span className="ml-auto text-indigo-500 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>

                      </Link>
                    );
                  })}

                </div>

              </div>
            )}

          </div>

          <Link
            to="/about"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            Contact
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={function () {
            setMobileOpen(!mobileOpen);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700 md:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden">

          <div className="grid gap-1">

            <Link
              to="/"
              onClick={function () {
                setMobileOpen(false);
              }}
              className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-indigo-50"
            >
              🏠 Home
            </Link>

            <button
              type="button"
              onClick={function () {
                setCalculatorOpen(!calculatorOpen);
              }}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-indigo-50"
            >
              <span>🧮 Calculators</span>

              <span
                className={`transition ${
                  calculatorOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {calculatorOpen && (
              <div className="ml-3 grid gap-1 border-l-2 border-indigo-100 pl-3">

                {categories.map(function (category) {
                  return (
                    <Link
                      key={category.link}
                      to={category.link}
                      onClick={function () {
                        setMobileOpen(false);
                        setCalculatorOpen(false);
                      }}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50"
                    >
                      <span className="text-xl">
                        {category.icon}
                      </span>

                      {category.title}
                    </Link>
                  );
                })}

              </div>
            )}

            <Link
              to="/about"
              onClick={function () {
                setMobileOpen(false);
              }}
              className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-indigo-50"
            >
              ℹ️ About
            </Link>

            <Link
              to="/contact"
              onClick={function () {
                setMobileOpen(false);
              }}
              className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-indigo-50"
            >
              ✉️ Contact
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;