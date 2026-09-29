import { Link } from "react-router-dom";

function CalculatorCategories() {
  const categories = [
    {
      icon: "🧮",
      title: "Math & Numbers",
      description:
        "Calculate percentages, averages and other everyday number problems.",
      link: "/category/math",
      calculators: [
        "Percentage Calculator",
        "Average Calculator",
      ],
    },

    {
      icon: "💰",
      title: "Money & Shopping",
      description:
        "Calculate discounts, tips, savings and useful shopping calculations.",
      link: "/category/money",
      calculators: [
        "Discount Calculator",
        "Tip Calculator",
      ],
    },

    {
      icon: "📅",
      title: "Date & Time",
      description:
        "Calculate age, date differences, time and common time conversions.",
      link: "/category/date",
      calculators: [
        "Age Calculator",
        "Date Calculator",
        "Days Between Dates",
        "Time Calculator",
        "Hours to Minutes",
        "Minutes to Hours",
      ],
    },

    {
      icon: "❤️",
      title: "Health",
      description:
        "Use simple health and body-related calculators for everyday calculations.",
      link: "/category/health",
      calculators: [
        "BMI Calculator",
        "Weight Calculator",
        "Ideal Weight Calculator",
        "BMR Calculator",
        "Calorie Calculator",
      ],
    },

    {
      icon: "🛁",
      title: "Craft & DIY",
      description:
        "Useful calculators for craft projects, DIY recipes, ratios and measurements.",
      link: "/craft-diy-calculators",
      calculators: [
        "Bath Bomb Ratio Calculator",
      ],
    },
  ];

  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm">
            Explore Calculator Categories
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Find the Right Calculator
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Choose a category to quickly find the calculator you need.
            All Caltrixaa calculators are free and easy to use.
          </p>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map(function (category) {

            return (
              <Link
                key={category.title}
                to={category.link}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >

                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-100 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-indigo-100">
                  {category.icon}
                </div>

                <h3 className="relative mt-5 text-xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <div className="relative mt-5 flex items-center justify-between">

                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {category.calculators.length}{" "}
                    {category.calculators.length === 1
                      ? "Calculator"
                      : "Calculators"}
                  </span>

                  <span className="text-lg font-bold text-indigo-600 transition duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <div className="relative mt-5 border-t border-slate-100 pt-4">

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Includes
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {category.calculators.join(" • ")}
                  </p>

                </div>

              </Link>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default CalculatorCategories;