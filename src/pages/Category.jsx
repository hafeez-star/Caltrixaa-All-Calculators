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
      keywords:
        "math calculators, percentage calculator, average calculator, number calculators",
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
      keywords:
        "money calculators, discount calculator, tip calculator, shopping calculator",
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
        "Calculate age, date differences, time and common time conversions.",
      keywords:
        "date calculators, time calculators, age calculator, days between dates",
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
            "Calculate dates, days, months and years between dates.",
          link: "/date-calculator",
        },
        {
          icon: "🗓️",
          title: "Days Between Dates",
          description:
            "Find the exact number of days between two dates.",
          link: "/days-between-dates",
        },
        {
          icon: "⏱️",
          title: "Time Calculator",
          description:
            "Add and subtract hours and minutes quickly.",
          link: "/time-calculator",
        },
        {
          icon: "⏰",
          title: "Hours to Minutes",
          description:
            "Convert hours into minutes instantly.",
          link: "/hours-to-minutes",
        },
        {
          icon: "⌛",
          title: "Minutes to Hours",
          description:
            "Convert minutes into hours and remaining minutes.",
          link: "/minutes-to-hours",
        },
      ],
    },

    health: {
      icon: "❤️",
      title: "Health Calculators",
      description:
        "Simple online health and body-related calculators for everyday use.",
      keywords:
        "health calculators, BMI calculator, BMR calculator, calorie calculator, ideal weight calculator",
      calculators: [
        {
          icon: "⚖️",
          title: "BMI Calculator",
          description:
            "Calculate your Body Mass Index using height and weight.",
          link: "/bmi-calculator",
        },
        {
          icon: "⚖️",
          title: "Weight Calculator",
          description:
            "Convert kilograms to pounds quickly and easily.",
          link: "/weight-calculator",
        },
        {
          icon: "📏",
          title: "Ideal Weight Calculator",
          description:
            "Estimate ideal weight using your height.",
          link: "/ideal-weight-calculator",
        },
        {
          icon: "🔥",
          title: "BMR Calculator",
          description:
            "Estimate your basal metabolic rate.",
          link: "/bmr-calculator",
        },
        {
          icon: "🍎",
          title: "Calorie Calculator",
          description:
            "Estimate daily calorie needs based on your information.",
          link: "/calorie-calculator",
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

          <div className="text-6xl">🔎</div>

          <h1 className="mt-6 text-4xl font-bold text-slate-950">
            Category Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The calculator category you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
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
        title={`${data.title} - Free Online Tools | Caltrixaa`}
        description={data.description}
        keywords={data.keywords}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: data.title,
          url: `https://caltrixaa.vercel.app/category/${category}`,
          description: data.description,
        }}
      />

      <Navbar />


      {/* HERO */}
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


      {/* CALCULATORS */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8">

          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Caltrixaa Tools
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            {data.calculators.length}{" "}
            {data.calculators.length === 1
              ? "Calculator"
              : "Calculators"}{" "}
            Available
          </h2>

        </div>


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {data.calculators.map(function (calculator) {

            return (
              <Link
                key={calculator.link}
                to={calculator.link}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:scale-110 group-hover:bg-indigo-100">
                  {calculator.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {calculator.title}
                </h3>

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


        {/* SEO TEXT */}
        <article className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-slate-950">
            Free {data.title}
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Caltrixaa provides free online tools designed to make everyday
            calculations easier. Choose a calculator above to enter your
            information and get a quick result without installing software.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our calculators are designed to work across phones, tablets,
            laptops and desktop computers with simple interfaces and clear
            results.
          </p>

        </article>

      </main>

      <Footer />

    </div>
  );
}

export default Category;