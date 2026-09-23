import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-extrabold text-indigo-600"
            >
              Caltrixaa
            </Link>

            <p className="mt-3 max-w-md leading-6 text-slate-500">
              Free online calculators and useful everyday tools designed to
              make calculations simple, fast and accessible.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-bold text-slate-900">
              Calculators
            </h3>

            <div className="mt-4 space-y-3 text-sm">

              <Link
                to="/age-calculator"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Age Calculator
              </Link>

              <Link
                to="/bmi-calculator"
                className="block text-slate-500 hover:text-indigo-600"
              >
                BMI Calculator
              </Link>

              <Link
                to="/percentage-calculator"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Percentage Calculator
              </Link>

              <Link
                to="/date-calculator"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Date Calculator
              </Link>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-slate-900">
              Information
            </h3>

            <div className="mt-4 space-y-3 text-sm">

              <Link
                to="/about"
                className="block text-slate-500 hover:text-indigo-600"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Contact
              </Link>

              <Link
                to="/privacy-policy"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/disclaimer"
                className="block text-slate-500 hover:text-indigo-600"
              >
                Disclaimer
              </Link>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Caltrixaa. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;