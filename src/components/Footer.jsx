import { Link } from "react-router-dom";

function Footer() {
  const calculatorLinks = [
    {
      title: "Age Calculator",
      link: "/age-calculator",
    },
    {
      title: "BMI Calculator",
      link: "/bmi-calculator",
    },
    {
      title: "Percentage Calculator",
      link: "/percentage-calculator",
    },
    {
      title: "Discount Calculator",
      link: "/discount-calculator",
    },
    {
      title: "Date Calculator",
      link: "/date-calculator",
    },
    {
      title: "Average Calculator",
      link: "/average-calculator",
    },
    {
      title: "Tip Calculator",
      link: "/tip-calculator",
    },
    {
      title: "Bath Bomb Ratio",
      link: "/bath-bomb-ratio-calculator",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold text-indigo-600"
            >

              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg text-white">
                C
              </span>

              Caltrixaa

            </Link>

            <p className="mt-4 max-w-md leading-7 text-slate-500">
              Free online calculators and useful everyday tools designed
              to make everyday calculations simple, fast and accessible.
            </p>


            <Link
              to="/"
              className="mt-5 inline-flex rounded-xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-100"
            >
              Explore All Calculators →
            </Link>

          </div>


          {/* CALCULATORS */}
          <div>

            <h3 className="font-bold text-slate-900">
              Popular Calculators
            </h3>

            <div className="mt-4 grid gap-3 text-sm">

              {calculatorLinks.map(function (calculator) {

                return (
                  <Link
                    key={calculator.link}
                    to={calculator.link}
                    className="text-slate-500 transition hover:text-indigo-600"
                  >
                    {calculator.title}
                  </Link>
                );

              })}

            </div>

          </div>


          {/* INFORMATION */}
          <div>

            <h3 className="font-bold text-slate-900">
              Information
            </h3>

            <div className="mt-4 grid gap-3 text-sm">

              <Link
                to="/about"
                className="text-slate-500 transition hover:text-indigo-600"
              >
                About Caltrixaa
              </Link>

              <Link
                to="/contact"
                className="text-slate-500 transition hover:text-indigo-600"
              >
                Contact
              </Link>

              <Link
                to="/privacy-policy"
                className="text-slate-500 transition hover:text-indigo-600"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-slate-500 transition hover:text-indigo-600"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/disclaimer"
                className="text-slate-500 transition hover:text-indigo-600"
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>


        {/* CATEGORY LINKS */}
        <div className="mt-10 border-t border-slate-200 pt-8">

          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Calculator Categories
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">

            <Link
              to="/category/math"
              className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              🧮 Math & Numbers
            </Link>

            <Link
              to="/category/money"
              className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              💰 Money & Shopping
            </Link>

            <Link
              to="/category/date"
              className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              📅 Date & Time
            </Link>

            <Link
              to="/category/health"
              className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              ❤️ Health
            </Link>

            <Link
              to="/craft-diy-calculators"
              className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              🛁 Craft & DIY
            </Link>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} Caltrixaa. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;