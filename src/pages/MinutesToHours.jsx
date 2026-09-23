import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MinutesToHours() {
  const [minutes, setMinutes] = useState("");
  const [result, setResult] = useState(null);

  function convert() {
    if (minutes === "") {
      setResult(null);
      return;
    }

    const totalMinutes = Number(minutes);
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    setResult({
      hours,
      minutes: remainingMinutes,
    });
  }

  function reset() {
    setMinutes("");
    setResult(null);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-4xl">⌛</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Minutes to Hours Converter
              </h1>

              <p className="mt-3 text-slate-500">
                Convert minutes into hours and remaining minutes.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <label className="mb-2 block font-semibold text-slate-700">
                Enter Minutes
              </label>

              <input
                type="number"
                min="0"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="Example: 150"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
              />

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={convert}
                  className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Convert
                </button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>

              {result !== null && (
                <div className="mt-6 rounded-2xl bg-indigo-50 p-6 text-center">
                  <p className="text-sm text-slate-500">Result</p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.hours}h {result.minutes}m
                  </p>

                  <p className="mt-2 text-slate-600">
                    {result.hours} hours and {result.minutes} minutes
                  </p>
                </div>
              )}
            </div>
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Minutes to Hours Formula
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              There are 60 minutes in one hour. Divide the total number of
              minutes by 60 to calculate hours.
            </p>

            <div className="mt-4 rounded-xl bg-slate-50 p-4 font-semibold">
              Hours = Minutes ÷ 60
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MinutesToHours;