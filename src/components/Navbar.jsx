import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const categories = [
    {
      icon: "🧮",
      title: "Math & Numbers",
      description: "Percentages & averages",
      link: "/category/math",
    },
    {
      icon: "💰",
      title: "Money & Shopping",
      description: "Discounts & tips",
      link: "/category/money",
    },
    {
      icon: "📅",
      title: "Date & Time",
      description: "Dates, age & time",
      link: "/category/date",
    },
    {
      icon: "❤️",
      title: "Health",
      description: "BMI & health tools",
      link: "/category/health",
    },
    {
      icon: "🛁",
      title: "Craft & DIY",
      description: "Craft ratios & projects",
      link: "/craft-diy-calculators",
    },
  ];

  function closeMenus() {
    setMobileOpen(false);
    setCalculatorOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenus}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-200 transition group-hover:scale-105">
            C
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            Cal<span className="text-indigo-600">trixaa</span>
          </span>
        </Link>


        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-2 md:flex">

          <Link
            to="/"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            Home
          </Link>


          {/* CALCULATORS DROPDOWN */}
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
              <div className="absolute left-1/2 top-full mt-3 w-[360px] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">

                <div className="px-3 pb-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                    Browse Categories
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Choose a calculator category
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

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl transition group-hover:bg-white group-hover:shadow-sm">
                          {category.icon}
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-slate-900">
                            {category.title}
                          </p>

                          <p className="text-xs text-slate-500">
                            {category.description}
                          </p>
                        </div>

                        <span className="ml-auto text-indigo-500 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>

                      </Link>
                    );
                  })}

                </div>


                <div className="mt-2 border-t border-slate-100 pt-2">

                  <Link
                    to="/"
                    onClick={function () {
                      setCalculatorOpen(false);
                    }}
                    className="block rounded-2xl px-3 py-2 text-center text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
                  >
                    View All Calculators →
                  </Link>

                </div>

              </div>
            )}

          </div>


          {/* BLOG */}
          <Link
            to="/blog"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            Blog
          </Link>


          {/* ABOUT */}
          <Link
            to="/about"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            About
          </Link>


          {/* CONTACT */}
          <Link
            to="/contact"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            Contact
          </Link>

        </nav>


        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={function () {
            setMobileOpen(!mobileOpen);

            if (mobileOpen) {
              setCalculatorOpen(false);
            }
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700 shadow-sm md:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* MOBILE MENU */}
      {mobileOpen && (

        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">

          <div className="grid gap-1">

            <Link
              to="/"
              onClick={closeMenus}
              className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-indigo-50"
            >
              🏠 Home
            </Link>


            {/* MOBILE CALCULATORS */}
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
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50"
                    >

                      <span className="text-xl">
                        {category.icon}
                      </span>

                      <span>
                        {category.title}
                      </span>

                    </Link>
                  );
                })}

              </div>

            )}


            {/* MOBILE BLOG */}
            <Link
              to="/blog"
              onClick={closeMenus}
              className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-indigo-50"
            >
              📝 Blog
            </Link>


            <Link
              to="/about"
              onClick={closeMenus}
              className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-indigo-50"
            >
              ℹ️ About
            </Link>


            <Link
              to="/contact"
              onClick={closeMenus}
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