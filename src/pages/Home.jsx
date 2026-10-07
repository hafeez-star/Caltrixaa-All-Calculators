import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import CalculatorCategories from "../components/CalculatorCategories";

function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://caltrixaa.vercel.app/#website-app",
        name: "Caltrixaa",
        url: "https://caltrixaa.vercel.app/",
        description:
          "Free online calculators and practical tools for everyday calculations.",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://caltrixaa.vercel.app/#website",
        name: "Caltrixaa",
        url: "https://caltrixaa.vercel.app/",
      },
      {
        "@type": "Organization",
        "@id": "https://caltrixaa.vercel.app/#organization",
        name: "Caltrixaa",
        url: "https://caltrixaa.vercel.app/",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO */}
      <SEO
        title="Free Online Calculators & Tools | Caltrixaa"
        description="Use free online calculators for age, BMI, percentage, dates, discounts, tips, averages, weight, calories, time and more."
        keywords="free online calculators, online calculators, age calculator, BMI calculator, percentage calculator, date calculator, discount calculator, tip calculator"
        schema={homeSchema}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-100">
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Free Online Calculators & Tools
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Free online calculators for
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  everyday calculations
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Calculate your age, BMI, percentages, dates, discounts,
                tips, averages, weight, calories and more with simple,
                fast and free online tools.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#calculators"
                  className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  Explore Calculators
                </a>

                <a
                  href="#categories"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                >
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR CATEGORIES */}
        <section id="calculators">
          <div id="categories">
            <CalculatorCategories />
          </div>
        </section>

        {/* QUICK ANSWER / AEO */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Quick Answer
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              What can you calculate online with Caltrixaa?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Caltrixaa offers free online calculators for common everyday
              calculations, including age, BMI, percentages, dates,
              discounts, tips, averages, weight, calories and time.
              Craft and DIY tools are also available for calculations such
              as candle wax, fragrance load, wick sizing and bath bomb
              ratios.
            </p>
          </div>
        </section>

        {/* MAIN SEO CONTENT */}
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Caltrixaa Calculators
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Free Online Calculators for Everyday Use
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Caltrixaa is a collection of free online calculators designed
                to make everyday calculations quicker and easier. Instead of
                working through formulas manually, you can enter your values
                and get a clear result directly in your browser.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The calculators are organized into useful categories so you
                can quickly find the tool you need. Each calculator focuses
                on a specific calculation and is designed to work across
                desktop and mobile devices.
              </p>
            </div>

            {/* DATE & TIME */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Date, Time and Age Calculators
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Date and time calculations can become complicated when you
                need to account for months, days or different time units.
                Caltrixaa provides tools for common date and time calculations.
              </p>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>
                  <a
                    href="/age-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Age Calculator
                  </a>{" "}
                  — calculate your exact age from your date of birth.
                </li>

                <li>
                  <a
                    href="/date-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Date Calculator
                  </a>{" "}
                  — work with dates and date differences.
                </li>

                <li>
                  <a
                    href="/days-between-dates"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Days Between Dates
                  </a>{" "}
                  — find the number of days between two dates.
                </li>

                <li>
                  <a
                    href="/time-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Time Calculator
                  </a>{" "}
                  — calculate and work with time values.
                </li>
              </ul>
            </div>

            {/* MATH */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Math and Percentage Calculators
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Simple math calculations are useful for school, work,
                shopping, budgeting and everyday decisions. Caltrixaa
                includes tools for percentages and averages.
              </p>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>
                  <a
                    href="/percentage-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Percentage Calculator
                  </a>{" "}
                  — calculate percentages and percentage changes.
                </li>

                <li>
                  <a
                    href="/average-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Average Calculator
                  </a>{" "}
                  — calculate the average of a set of numbers.
                </li>
              </ul>
            </div>

            {/* MONEY */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Money and Shopping Calculators
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Money calculations are often needed when shopping, dining
                out or comparing prices. These calculators help you quickly
                work out discounts and tips.
              </p>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>
                  <a
                    href="/discount-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Discount Calculator
                  </a>{" "}
                  — calculate sale prices and discount amounts.
                </li>

                <li>
                  <a
                    href="/tip-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Tip Calculator
                  </a>{" "}
                  — calculate a tip amount and total bill.
                </li>
              </ul>
            </div>

            {/* HEALTH */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Health and Fitness Calculators
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Caltrixaa also provides general-purpose health and fitness
                calculators for measurements such as BMI, weight, BMR and
                calories. These tools provide estimates and should not be
                treated as medical diagnosis or professional medical advice.
              </p>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>
                  <a
                    href="/bmi-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    BMI Calculator
                  </a>{" "}
                  — calculate Body Mass Index from height and weight.
                </li>

                <li>
                  <a
                    href="/weight-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Weight Calculator
                  </a>{" "}
                  — work with common weight calculations.
                </li>

                <li>
                  <a
                    href="/bmr-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    BMR Calculator
                  </a>{" "}
                  — estimate basal metabolic rate.
                </li>

                <li>
                  <a
                    href="/calorie-calculator"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Calorie Calculator
                  </a>{" "}
                  — estimate daily calorie needs.
                </li>
              </ul>
            </div>

            {/* CRAFT */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Craft & DIY Calculators
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Caltrixaa also includes specialized calculators for craft
                and DIY projects. These tools can help makers work with
                ingredients, ratios, measurements and production costs.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Candle makers can find tools for wax weight, fragrance load,
                wick sizing and candle-making calculations. Other DIY tools
                cover bath bomb ratios and soap cost and profit calculations.
              </p>

              <div className="mt-6">
                <a
                  href="/craft-diy-calculators"
                  className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                >
                  Explore Craft & DIY Calculators →
                </a>
              </div>
            </div>

            {/* HOW TO USE */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                How Do Online Calculators Work?
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Most calculators follow a simple process: enter the required
                values, apply the relevant mathematical formula and display
                the result. A good calculator also explains what the result
                means and, where useful, provides the formula or calculation
                method.
              </p>

              <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-600">
                <li>Choose the calculator that matches your task.</li>
                <li>Enter the required values.</li>
                <li>Check the units and information you entered.</li>
                <li>Calculate your result.</li>
                <li>Use the explanation or formula to understand the result.</li>
              </ol>
            </div>

            {/* WHY CALTRIXAA */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Why Use Caltrixaa?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    Free to Use
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Access the available calculators online without installing
                    desktop software.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    Simple Interfaces
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Enter your values and get results through straightforward
                    calculator interfaces.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    Mobile Friendly
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The website is designed to work across mobile phones,
                    tablets and desktop screens.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    Useful Explanations
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Calculator pages can include formulas, examples,
                    explanations and frequently asked questions.
                  </p>
                </div>
              </div>
            </div>

            {/* KEY TAKEAWAYS */}
            <div className="mt-12 rounded-2xl bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Key Takeaways
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                <li>Caltrixaa provides free online calculators.</li>
                <li>
                  Tools cover everyday math, dates, time, money and general
                  health calculations.
                </li>
                <li>
                  Craft and DIY calculators are available for specialized
                  maker calculations.
                </li>
                <li>
                  Calculator results should be checked when the calculation
                  has important financial, health or safety implications.
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Are Caltrixaa calculators free?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Yes. Caltrixaa provides free online calculators that can
                    be used directly in a web browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    What types of calculators are available?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Available tools cover areas such as age, BMI, percentages,
                    dates, time, discounts, tips, averages, weight, calories
                    and Craft & DIY calculations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Can I use Caltrixaa calculators on my phone?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Yes. The website is designed with responsive layouts so
                    calculators can be used on mobile and desktop screens.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Do calculators show how the result is calculated?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Many calculator pages can include formulas, examples and
                    explanations so you can understand the calculation rather
                    than only seeing the final number.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Are calculator results always accurate?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Results depend on the values and formulas used. Always
                    check your inputs, units and the relevant assumptions.
                    For important health, financial or safety decisions,
                    consider using appropriate professional guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-center sm:p-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Find the calculator you need
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Browse the available categories and choose a calculator for
                your next calculation.
              </p>

              <a
                href="#calculators"
                className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-blue-50"
              >
                Explore Calculators
              </a>
            </div>
          </article>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="border-t border-slate-100 bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              About Caltrixaa
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Simple tools. Clear results.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Caltrixaa provides practical online calculators and tools
              designed to make everyday calculations easier for students,
              shoppers, families, creators, makers and everyday users.
            </p>

            <a
              href="/about"
              className="mt-6 inline-flex font-bold text-blue-600 hover:underline"
            >
              Learn more about Caltrixaa →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;