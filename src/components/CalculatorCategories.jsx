import { Link } from "react-router-dom";

function CalculatorCategories() {
  const categories = [
    {
      icon: "🧮",
      title: "Math & Numbers",
      description:
        "Calculate percentages, averages and other everyday number problems.",
      count: "2 Calculators",
      link: "/category/math",
    },
    {
      icon: "💰",
      title: "Money & Shopping",
      description:
        "Calculate discounts, tips, savings and useful shopping calculations.",
      count: "2 Calculators",
      link: "/category/money",
    },
    {
      icon: "📅",
      title: "Date & Time",
      description:
        "Calculate your age and find the difference between important dates.",
      count: "2 Calculators",
      link: "/category/date",
    },
    {
      icon: "❤️",
      title: "Health",
      description:
        "Use simple health-related calculators such as BMI quickly online.",
      count: "1 Calculator",
      link: "/category/health",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map(function (category) {
            return (
              <Link
                key={category.title}
                to={category.link}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:scale-110">
                  {category.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-600">
                    {category.count}
                  </span>

                  <span className="text-lg font-bold text-indigo-600 transition group-hover:translate-x-1">
                    →
                  </span>
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