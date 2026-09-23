import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DaysBetweenDates() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);

  function calculateDays() {
    if (!startDate || !endDate) {
      setResult(null);
      return;
    }

    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");

    const difference = Math.abs(end - start);
    const days = Math.round(difference / (1000 * 60 * 60 * 24));

    setResult(days);
  }

  function reset() {
    setStartDate("");
    setEndDate("");
    setResult(null);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-4xl">📆</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Days Between Dates Calculator
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                Calculate the exact number of days between two dates quickly
                and easily.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl space-y-5">
              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Start Date
                </label>

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  End Date
                </label>

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={calculateDays}
                  className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Calculate Days
                </button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>

              {result !== null && (
                <div className="rounded-2xl bg-indigo-50 p-6 text-center">
                  <p className="text-sm font-medium text-slate-500">
                    Difference Between Dates
                  </p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.toLocaleString()}
                  </p>

                  <p className="mt-1 text-slate-600">
                    {result === 1 ? "day" : "days"}
                  </p>
                </div>
              )}
            </div>
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Days Between Dates Calculator
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              This calculator helps you find the number of days between two
              calendar dates. It can be useful for planning trips, deadlines,
              events, projects and important dates.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-slate-900">
              How to Calculate Days Between Dates
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Enter a start date and an end date. Caltrixaa calculates the
              difference between the two dates and displays the total number
              of days.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default DaysBetweenDates;