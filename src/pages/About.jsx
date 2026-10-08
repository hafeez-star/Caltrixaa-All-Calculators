import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function About() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Caltrixaa",
        url: "https://caltrixaa.vercel.app/about",
        description:
          "Learn about Caltrixaa, a free online calculator website providing simple tools for everyday calculations.",
        isPartOf: {
          "@type": "WebSite",
          name: "Caltrixaa",
          url: "https://caltrixaa.vercel.app/",
        },
      },
      {
        "@type": "Organization",
        name: "Caltrixaa",
        url: "https://caltrixaa.vercel.app/",
      },
    ],
  };

  return (
    <>
      <SEO
        title="About Caltrixaa - Free Online Calculators"
        description="Learn about Caltrixaa and our goal of providing simple, fast and free online calculators for everyday calculations."
        keywords="about Caltrixaa, free online calculators, online calculator website"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <div className="text-center">
              <div className="text-5xl">🧮</div>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                About Caltrixaa
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Caltrixaa provides free online calculators designed to make
                everyday calculations simple, quick and easy to understand.
              </p>
            </div>

            {/* Quick Answer */}
            <div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">
                What is Caltrixaa?
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                Caltrixaa is a free online calculator website offering
                practical tools for calculations such as age, BMI, dates,
                percentages, averages, discounts, tips, time, health and
                craft-related projects. The goal is to make common
                calculations easier without requiring complicated software.
              </p>
            </div>

            {/* Main Content */}
            <div className="mt-10 space-y-10">

              {/* What is Caltrixaa */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  What is Caltrixaa?
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa is an online collection of free calculators and
                  practical calculation tools. The website is built around a
                  simple idea: everyday calculations should not require
                  complicated spreadsheets, manual formulas or specialized
                  software.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Whether you need to calculate your age, work out a
                  percentage, compare dates, estimate a BMI value or calculate
                  the cost of a DIY project, Caltrixaa aims to provide a
                  straightforward tool for the task.
                </p>
              </section>

              {/* Our Calculators */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Our Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa covers several categories of everyday calculations.
                  Our tools are organized so visitors can quickly find a
                  calculator based on what they need.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-2xl">📅</div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Date & Time
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Tools for calculating age, dates, days between dates
                      and time conversions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-2xl">🔢</div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Math & Numbers
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Simple tools for percentages, averages and common
                      number calculations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-2xl">💰</div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Money & Shopping
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Calculate discounts, tips and other everyday
                      money-related values.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-2xl">⚖️</div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Health
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Calculation tools covering BMI, weight, BMR and
                      estimated calorie needs.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                    <div className="text-2xl">🧼</div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Craft & DIY
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Practical calculators for candle making, wax,
                      fragrance loads, wick sizing, bath bombs and soap
                      costing.
                    </p>

                    <Link
                      to="/craft-diy-calculators"
                      className="mt-4 inline-flex font-semibold text-indigo-600 transition hover:text-indigo-700"
                    >
                      Explore Craft & DIY Calculators →
                    </Link>
                  </div>

                </div>
              </section>

              {/* How the Tools Work */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  How Do Caltrixaa Calculators Work?
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Most Caltrixaa calculators are designed to take the values
                  you enter and apply the relevant mathematical formula or
                  calculation method to produce a result.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex gap-3">
                    <span className="font-bold text-indigo-600">1.</span>
                    <p className="leading-7 text-slate-600">
                      Enter the required information into the calculator.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-bold text-indigo-600">2.</span>
                    <p className="leading-7 text-slate-600">
                      Select or enter any required units or options.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-bold text-indigo-600">3.</span>
                    <p className="leading-7 text-slate-600">
                      The calculator processes the values and displays the
                      result.
                    </p>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Where useful, our calculator pages also explain the formula,
                  calculation method and examples so you can understand how
                  the result was obtained.
                </p>
              </section>

              {/* Simple and Accessible */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Simple and Accessible Tools
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We focus on keeping the calculators easy to use. The tools
                  are designed to work in a modern web browser and are
                  responsive so they can be used on desktop computers, tablets
                  and mobile devices.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  The aim is not to make calculations more complicated, but to
                  provide a clear interface that helps you get the information
                  you need quickly.
                </p>
              </section>

              {/* Guides and Learning */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  More Than Just Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Some calculations are easier to understand when the formula
                  and reasoning are explained. That is why Caltrixaa also
                  publishes practical guides covering common calculations and
                  related topics.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  You can visit the{" "}
                  <Link
                    to="/blog"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Caltrixaa Blog
                  </Link>{" "}
                  to find calculation guides, examples, explanations and
                  practical tips.
                </p>
              </section>

              {/* Accuracy and Responsibility */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Accuracy and Responsible Use
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We aim to provide useful and clearly explained calculations.
                  However, calculator results can depend on the information
                  entered and the calculation method used.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Health-related calculators such as BMI, BMR and calorie
                  calculators provide estimates and should not be treated as
                  medical diagnosis or personalized medical advice. For
                  important health decisions, consult a qualified healthcare
                  professional.
                </p>
              </section>

              {/* Our Goal */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Our Goal
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Our goal is to build a useful collection of free online
                  calculators that people can return to whenever they need a
                  quick calculation.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  We plan to continue improving existing tools, adding useful
                  calculators and making the overall website easier to
                  navigate.
                </p>
              </section>

              {/* Useful Links */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Explore Caltrixaa
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">

                  <Link
                    to="/"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    <div className="text-2xl">🧮</div>
                    <h3 className="mt-2 font-bold text-slate-900">
                      Calculators
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Browse our free calculation tools.
                    </p>
                  </Link>

                  <Link
                    to="/blog"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    <div className="text-2xl">📚</div>
                    <h3 className="mt-2 font-bold text-slate-900">
                      Blog
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Read calculation guides and useful explanations.
                    </p>
                  </Link>

                  <Link
                    to="/contact"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    <div className="text-2xl">✉️</div>
                    <h3 className="mt-2 font-bold text-slate-900">
                      Contact
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Get in touch with Caltrixaa.
                    </p>
                  </Link>

                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-6">

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Is Caltrixaa free to use?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Yes. Caltrixaa is designed to provide free online
                      calculators that can be used directly through a web
                      browser.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      What types of calculators does Caltrixaa provide?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Caltrixaa provides calculators covering areas such as
                      date and time, math, money and shopping, health, and
                      craft and DIY calculations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Can I use Caltrixaa on my phone?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Yes. The website is designed to be responsive and can
                      be used on smartphones, tablets and desktop devices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Are Caltrixaa health calculators medical advice?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      No. Health calculators provide general estimates based
                      on the information entered. They should not replace
                      professional medical advice or diagnosis.
                    </p>
                  </div>

                </div>
              </section>

            </div>

            {/* Final CTA */}
            <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-center sm:p-8">
              <h2 className="text-2xl font-bold text-white">
                Ready to Calculate?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Explore Caltrixaa's free calculators and find a simple tool
                for your next calculation.
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Explore Calculators →
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;