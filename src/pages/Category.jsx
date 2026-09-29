import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Category() {
  const { category } = useParams();

  const categoryData = {
    math: {
      icon: "🧮",
      title: "Math & Numbers Calculators",
      description:
        "Free online calculators for percentages, averages and everyday number calculations.",
      calculators: [
        {
          icon: "％",
          title: "Percentage Calculator",
          description:
            "Calculate percentages quickly and easily.",
          link: "/percentage-calculator",
        },
        {
          icon: "📊",
          title: "Average Calculator",
          description:
            "Calculate the average or mean of multiple numbers.",
          link: "/average-calculator",
        },
      ],
    },

    money: {
      icon: "💰",
      title: "Money & Shopping Calculators",
      description:
        "Calculate discounts, savings, tips and useful shopping calculations.",
      calculators: [
        {
          icon: "🏷️",
          title: "Discount Calculator",
          description:
            "Calculate sale prices, discounts and savings.",
          link: "/discount-calculator",
        },
        {
          icon: "🍽️",
          title: "Tip Calculator",
          description:
            "Calculate tips, total bills and per-person costs.",
          link: "/tip-calculator",
        },
      ],
    },

    date: {
      icon: "📅",
      title: "Date & Time Calculators",
      description:
        "Calculate age and find the difference between dates.",
      calculators: [
        {
          icon: "🎂",
          title: "Age Calculator",
          description:
            "Calculate your exact age in years, months and days.",
          link: "/age-calculator",
        },
        {
          icon: "📅",
          title: "Date Calculator",
          description:
            "Calculate days, weeks, months and years between dates.",
          link: "/date-calculator",
        },
      ],
    },

    health: {
      icon: "❤️",
      title: "Health Calculators",
      description:
        "Simple online health calculators for everyday calculations.",
      calculators: [
        {
          icon: "⚖️",
          title: "BMI Calculator",
          description:
            "Calculate your Body Mass Index using height and weight.",
          link: "/bmi-calculator",
        },
      ],
    },
  };

  const data = categoryData[category];

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-950">
            Category Not Found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white"
          >
            Back to Home
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      <SEO
        title={`${data.title} | Caltrixaa`}
        description={data.description}
      />

      <Navbar />

      <section className="border-b border-slate-100 bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-4xl shadow-lg">
            {data.icon}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {data.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {data.description}
          </p>

        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {data.calculators.map(function (calculator) {
            return (
              <Link
                key={calculator.link}
                to={calculator.link}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:scale-110">
                  {calculator.icon}
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-950">
                  {calculator.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {calculator.description}
                </p>

                <div className="mt-6 flex items-center font-semibold text-indigo-600">
                  Open Calculator
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </Link>
            );
          })}

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Category;