import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const location = useLocation();

  const calculators = [
    {
      name: "Age Calculator",
      path: "/age-calculator",
    },
    {
      name: "BMI Calculator",
      path: "/bmi-calculator",
    },
    {
      name: "Date Calculator",
      path: "/date-calculator",
    },
    {
      name: "Percentage Calculator",
      path: "/percentage-calculator",
    },
    {
      name: "Discount Calculator",
      path: "/discount-calculator",
    },
    {
      name: "Tip Calculator",
      path: "/tip-calculator",
    },
    {
      name: "Average Calculator",
      path: "/average-calculator",
    },
    {
      name: "Days Between Dates",
      path: "/days-between-dates",
    },
    {
      name: "Time Calculator",
      path: "/time-calculator",
    },
    {
      name: "Hours to Minutes",
      path: "/hours-to-minutes",
    },
    {
      name: "Minutes to Hours",
      path: "/minutes-to-hours",
    },
    {
      name: "Weight Calculator",
      path: "/weight-calculator",
    },
    {
      name: "Ideal Weight Calculator",
      path: "/ideal-weight-calculator",
    },
    {
      name: "BMR Calculator",
      path: "/bmr-calculator",
    },
    {
      name: "Calorie Calculator",
      path: "/calorie-calculator",
    },
  ];

  function closeMobileMenu() {
    setMobileOpen(false);
    setCalculatorOpen(false);
  }

  function isCalculatorPage() {
    return calculators.some(function (calculator) {
      return location.pathname === calculator.path;
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-2xl font-extrabold tracking-tight text-indigo-600"
          >
            Caltrixaa
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className={`font-medium transition ${
                location.pathname === "/"
                  ? "text-indigo-600"
                  : "text-slate-700 hover:text-indigo-600"
              }`}
            >
              Home
            </Link>

            {/* Desktop Calculators Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 font-medium transition ${
                  isCalculatorPage()
                    ? "text-indigo-600"
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                Calculators
                <span className="text-xs transition group-hover:rotate-180">
                  ▼
                </span>
              </button>

              {/* Dropdown */}
              <div className="invisible absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                <div className="max-h-[70vh] overflow-y-auto">

                  {calculators.map(function (calculator) {
                    return (
                      <Link
                        key={calculator.path}
                        to={calculator.path}
                        className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                          location.pathname === calculator.path
                            ? "bg-indigo-50 text-indigo-600"
                            : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                        }`}
                      >
                        {calculator.name}
                      </Link>
                    );
                  })}

                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`font-medium transition ${
                location.pathname === "/about"
                  ? "text-indigo-600"
                  : "text-slate-700 hover:text-indigo-600"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition ${
                location.pathname === "/contact"
                  ? "text-indigo-600"
                  : "text-slate-700 hover:text-indigo-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={function () {
              setMobileOpen(!mobileOpen);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">

            {/* Home */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block rounded-xl px-4 py-3 font-medium ${
                location.pathname === "/"
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile Calculators */}
            <div className="mt-1">

              <button
                type="button"
                onClick={function () {
                  setCalculatorOpen(!calculatorOpen);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium ${
                  isCalculatorPage()
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>Calculators</span>

                <span
                  className={`text-xs transition ${
                    calculatorOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Mobile Calculator List */}
              {calculatorOpen && (
                <div className="mt-1 ml-3 max-h-80 overflow-y-auto rounded-xl border border-slate-100 bg-slate-50 p-2">

                  {calculators.map(function (calculator) {
                    return (
                      <Link
                        key={calculator.path}
                        to={calculator.path}
                        onClick={closeMobileMenu}
                        className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                          location.pathname === calculator.path
                            ? "bg-indigo-100 text-indigo-600"
                            : "text-slate-700 hover:bg-white hover:text-indigo-600"
                        }`}
                      >
                        {calculator.name}
                      </Link>
                    );
                  })}

                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`mt-1 block rounded-xl px-4 py-3 font-medium ${
                location.pathname === "/about"
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`mt-1 block rounded-xl px-4 py-3 font-medium ${
                location.pathname === "/contact"
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>

            {/* Legal Links */}
            <div className="mt-3 border-t border-slate-100 pt-3">

              <Link
                to="/privacy-policy"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/disclaimer"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
              >
                Disclaimer
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;