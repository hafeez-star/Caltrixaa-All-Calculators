import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PercentageCalculator() {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(function () {
    document.title =
      "Percentage Calculator - Calculate Percentages Online | Caltrixaa";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Free percentage calculator to calculate percentages quickly and easily online.";
  }, []);

  function calculate() {
    setError("");
    setResult(null);

    if (percentage === "" || number === "") {
      setError("Please enter both values.");
      return;
    }

    const p = Number(percentage);
    const n = Number(number);

    if (Number.isNaN(p) || Number.isNaN(n)) {
      setError("Please enter valid numbers.");
      return;
    }

    const answer = (p / 100) * n;

    setResult(answer);
  }

  function reset() {
    setPercentage("");
    setNumber("");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <span className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            Free Math Calculator
          </span>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Percentage Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Calculate percentages quickly and easily with our free online
            percentage calculator.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-2xl font-bold">
              Calculate Percentage
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find a percentage of any number.
            </p>

            <div className="mt-7">
              <label className="mb-2 block text-sm font-semibold">
                Percentage (%)
              </label>

              <input
                type="number"
                value={percentage}
                onChange={function (e) {
                  setPercentage(e.target.value);
                }}
                placeholder="Example: 20"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Number
              </label>

              <input
                type="number"
                value={number}
                onChange={function (e) {
                  setNumber(e.target.value);
                }}
                placeholder="Example: 500"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

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
                Calculate
              </button>

              <button
                onClick={reset}
                className="rounded-2xl border border-slate-300 px-5 py-3.5 font-semibold hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            {result !== null && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-7 text-center text-white">
                <p className="text-sm text-indigo-100">
                  Result
                </p>

                <div className="mt-2 text-5xl font-bold">
                  {result.toLocaleString()}
                </div>

                <p className="mt-3 text-indigo-100">
                  {percentage}% of {number}
                </p>
              </div>
            )}
          </div>
        </div>

        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold">
            What Is a Percentage Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A percentage calculator helps you quickly calculate a percentage
            of a given number. It is useful for discounts, marks, finance,
            statistics and everyday calculations.
          </p>

          <h2 className="mt-10 text-3xl font-bold">
            Percentage Formula
          </h2>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Percentage Value = (Percentage ÷ 100) × Number
          </div>

          <h2 className="mt-10 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            <details className="rounded-2xl border bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                How do I calculate a percentage?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Divide the percentage by 100 and multiply it by the number.
              </p>
            </details>

            <details className="rounded-2xl border bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                Is this calculator free?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes, Caltrixaa's percentage calculator is free to use.
              </p>
            </details>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default PercentageCalculator;