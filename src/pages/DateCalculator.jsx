import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(function () {
    document.title =
      "Date Calculator - Calculate Days Between Dates | Caltrixaa";

    const description =
      "Use Caltrixaa's free date calculator to calculate the difference between two dates in days, weeks, months and years.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  function calculateDateDifference() {
    setError("");
    setResult(null);

    if (!startDate || !endDate) {
      setError("Please select both dates.");
      return;
    }

    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");

    if (end < start) {
      setError("End date must be after the start date.");
      return;
    }

    const differenceMilliseconds = end - start;

    const totalDays = Math.floor(
      differenceMilliseconds / (1000 * 60 * 60 * 24)
    );

    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;

      const daysInPreviousMonth = new Date(
        end.getFullYear(),
        end.getMonth(),
        0
      ).getDate();

      days += daysInPreviousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({
      totalDays: totalDays,
      weeks: weeks,
      remainingDays: remainingDays,
      years: years,
      months: months,
      days: days,
    });
  }

  function resetCalculator() {
    setStartDate("");
    setEndDate("");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm">
              Free Date & Time Tool
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Date Calculator
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Calculate the exact difference between two dates in days, weeks,
              months, and years.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-950">
                Calculate Difference Between Dates
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Select a start date and an end date to calculate the
                difference.
              </p>
            </div>

            {/* Start Date */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={function (event) {
                  setStartDate(event.target.value);
                }}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* End Date */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                End Date
              </label>

              <input
                type="date"
                value={endDate}
                onChange={function (event) {
                  setEndDate(event.target.value);
                }}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={calculateDateDifference}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Calculate Difference
              </button>

              <button
                onClick={resetCalculator}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl">
                <p className="text-center text-sm text-indigo-100">
                  Difference between the selected dates
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">
                      {result.years}
                    </div>
                    <div className="mt-1 text-xs text-indigo-100">
                      Years
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">
                      {result.months}
                    </div>
                    <div className="mt-1 text-xs text-indigo-100">
                      Months
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">
                      {result.days}
                    </div>
                    <div className="mt-1 text-xs text-indigo-100">
                      Days
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">
                      {result.totalDays.toLocaleString()}
                    </div>
                    <div className="mt-1 text-xs text-indigo-100">
                      Total Days
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white/10 p-4 text-center">
                  <span className="font-semibold">
                    {result.weeks} weeks
                  </span>

                  <span className="mx-2 text-indigo-200">+</span>

                  <span className="font-semibold">
                    {result.remainingDays} days
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEO Content */}
        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-950">
            What Is a Date Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A date calculator helps you find the amount of time between two
            dates. Instead of manually counting calendar days, you can enter
            two dates and quickly see the difference.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            What Can You Calculate?
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
            <li>Number of days between two dates</li>
            <li>Number of weeks between dates</li>
            <li>Difference in years, months and days</li>
            <li>Total number of calendar days</li>
            <li>Time between important dates and events</li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            How to Use the Date Calculator
          </h2>

          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-600">
            <li>Select the start date.</li>
            <li>Select the end date.</li>
            <li>Click Calculate Difference.</li>
            <li>View the result in multiple date formats.</li>
          </ol>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                How many days are between two dates?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Enter both dates into the calculator and it will show the
                total number of days between them.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                Can this calculator calculate weeks?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. The result shows complete weeks as well as remaining
                days.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                Is the Date Calculator free?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Caltrixaa's Date Calculator is free to use.
              </p>
            </details>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default DateCalculator;