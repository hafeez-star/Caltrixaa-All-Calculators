import { Link } from "react-router-dom";

function CalculatorCategories() {
  
  // Sab data isi ke andar
  const categories = [
    { 
      icon: "🧮", 
      title: "Math & Numbers", 
      description: "Calculate percentages, averages and other everyday number problems.", 
      link: "/category/math",
      calculators: ["percentage", "average"] // jitne hain utne naam likh do
    },
    { 
      icon: "💰", 
      title: "Money & Shopping", 
      description: "Calculate discounts, tips, savings and useful shopping calculations.", 
      link: "/category/money",
      calculators: ["discount", "tip"]
    },
    { 
      icon: "📅", 
      title: "Date & Time", 
      description: "Calculate your age and find the difference between important dates.", 
      link: "/category/date",
      calculators: ["age", "date"]
    },
    { 
      icon: "❤️", 
      title: "Health", 
      description: "Use simple health-related calculators such as BMI quickly online.", 
      link: "/category/health",
      calculators: ["bmi", "weight", "ideal weight", "BMR", "calories"]
    },
    { 
      icon: "🛁", 
      title: "Craft & DIY Calculators", 
      description: "Useful calculators for craft projects, DIY recipes, ratios and measurements.", 
      link: "/category/craft-diy",
      calculators: ["bath bomb ratio"]
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm">
            Explore Calculator Categories
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Find the Right Calculator
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Choose a category to quickly find the calculator you need. All Caltrixaa calculators are free and easy to use.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(function (category) {
            const count = category.calculators.length;
            return (
              <Link
                key={category.title}
                to={category.link}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-50 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
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
                    {count === 0 ? "Coming Soon" : `${count} Calculator${count > 1 ? "s" : ""}`}
                  </span>
                  <span className="text-lg font-bold text-indigo-600 transition duration-300 group-hover:translate-x-1">
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