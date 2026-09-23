import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TimeCalculator() {
  const [hours1, setHours1] = useState("");
  const [minutes1, setMinutes1] = useState("");
  const [hours2, setHours2] = useState("");
  const [minutes2, setMinutes2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  function calculateTime() {
    const h1 = Number(hours1) || 0;
    const m1 = Number(minutes1) || 0;
    const h2 = Number(hours2) || 0;
    const m2 = Number(minutes2) || 0;

    const total1 = h1 * 60 + m1;
    const total2 = h2 * 60 + m2;

    let totalMinutes;

    if (operation === "add") {
      totalMinutes = total1 + total2;
    } else {
      totalMinutes = Math.abs(total1 - total2);
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setResult({
      hours,
      minutes,
    });
  }

  function reset() {
    setHours1("");
    setMinutes1("");
    setHours2("");
    setMinutes2("");
    setResult(null);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-4xl">⏰</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Time Calculator
              </h1>

              <p className="mt-3 text-slate-500">
                Add or subtract hours and minutes easily.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h2 className="mb-4 font-bold text-slate-800">
                    First Time
                  </h2>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Hours
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={hours1}
                        onChange={(e) => setHours1(e.target.value)}
                        placeholder="0"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Minutes
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={minutes1}
                        onChange={(e) => setMinutes1(e.target.value)}
                        placeholder="0"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h2 className="mb-4 font-bold text-slate-800">
                    Second Time
                  </h2>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Hours
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={hours2}
                        onChange={(e) => setHours2(e.target.value)}
                        placeholder="0"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Minutes
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={minutes2}
                        onChange={(e) => setMinutes2(e.target.value)}
                        placeholder="0"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block font-semibold text-slate-700">
                  Operation
                </label>

                <select
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                >
                  <option value="add">Add Time</option>
                  <option value="subtract">Subtract Time</option>
                </select>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={calculateTime}
                  className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Calculate Time
                </button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>

              {result && (
                <div className="mt-6 rounded-2xl bg-indigo-50 p-6 text-center">
                  <p className="text-sm text-slate-500">Result</p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.hours}h {result.minutes}m
                  </p>
                </div>
              )}
            </div>
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Time Calculator
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Use this online time calculator to add or subtract hours and
              minutes. It is useful for work schedules, study sessions,
              project planning and everyday time calculations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default TimeCalculator;