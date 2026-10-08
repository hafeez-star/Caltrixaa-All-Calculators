import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";



function AverageCalculator() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

 

  function calculate() {
    setError("");
    setResult(null);

    if (!numbers.trim()) {
      setError("Please enter some numbers.");
      return;
    }

    const values = numbers
      .split(",")
      .map(function (item) {
        return Number(item.trim());
      });

    if (values.some(function (value) {
      return Number.isNaN(value);
    })) {
      setError("Please enter numbers separated by commas.");
      return;
    }

    const total = values.reduce(function (sum, value) {
      return sum + value;
    }, 0);

    const average = total / values.length;

    setResult({
      total: total,
      count: values.length,
      average: average,
    });
  }

  function reset() {
    setNumbers("");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
    <SEO
  title="Average Calculator Online - Calculate Average & Mean | Caltrixaa"
  description="Calculate the average or mean of numbers with this free online average calculator. Enter your numbers and get the result instantly."
  keywords="average calculator, average calculator online, calculate average, mean calculator, average of numbers"
  schema={{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Average Calculator",
    url: "https://caltrixaa.vercel.app/average-calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  }}
/>
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <span className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            Free Math Calculator
          </span>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Average Calculator Online
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Calculate the average or mean of multiple numbers quickly and
            easily.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-2xl font-bold">
              Calculate Average
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Enter numbers separated by commas.
            </p>

            <textarea
              rows="5"
              value={numbers}
              onChange={function (e) {
                setNumbers(e.target.value);
              }}
              placeholder="Example: 10, 20, 30, 40, 50"
              className="mt-6 w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            {error && (
              <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={calculate}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white hover:bg-indigo-700"
              >
                Calculate Average
              </button>

              <button
                onClick={reset}
                className="rounded-2xl border border-slate-300 px-5 py-3.5 font-semibold hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            {result && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-7 text-center text-white">
                <p className="text-sm text-indigo-100">
                  Average
                </p>

                <p className="mt-2 text-5xl font-bold">
                  {result.average.toFixed(2)}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-indigo-100">
                      Total
                    </p>
                    <p className="mt-1 font-bold">
                      {result.total}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-indigo-100">
                      Numbers
                    </p>
                    <p className="mt-1 font-bold">
                      {result.count}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

<div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
  <h2 className="text-xl font-bold text-slate-900">
    Learn More About Averages
  </h2>

  <p className="mt-2 leading-7 text-slate-600">
    Learn how to calculate an average and how to find the average of
    multiple numbers using a simple mathematical formula.
  </p>

  <div className="mt-4 flex flex-wrap gap-3">
    <Link
      to="/blog/how-to-calculate-an-average"
      className="inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      How to Calculate an Average →
    </Link>

    <Link
      to="/blog/how-to-calculate-average-of-numbers"
      className="inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      Average of Numbers Guide →
    </Link>
  </div>
</div>

        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold">
            What Is an Average?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            The average, also called the arithmetic mean, is calculated by
            adding all numbers together and dividing the total by the number
            of values.
          </p>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Average = Sum of Values ÷ Number of Values
          </div>

          <h2 className="mt-10 text-3xl font-bold">
            Example
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            For 10, 20 and 30, the total is 60. There are 3 numbers, so the
            average is 60 ÷ 3 = 20.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default AverageCalculator;