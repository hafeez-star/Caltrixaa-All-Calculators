import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WeightCalculator() {
  const [kg, setKg] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    if (!kg || Number(kg) <= 0) {
      setResult(null);
      return;
    }

    const pounds = Number(kg) * 2.2046226218;

    setResult(pounds);
  }

  function reset() {
    setKg("");
    setResult(null);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-4xl">⚖️</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Weight Calculator
              </h1>

              <p className="mt-3 text-slate-500">
                Convert kilograms to pounds quickly and easily.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <label className="mb-2 block font-semibold text-slate-700">
                Weight in Kilograms
              </label>

              <input
                type="number"
                min="0"
                step="any"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
                placeholder="Example: 70"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
              />

              <div className="mt-5 flex gap-3">
                <button
                  onClick={calculate}
                  className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Calculate
                </button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700"
                >
                  Reset
                </button>
              </div>

              {result !== null && (
                <div className="mt-6 rounded-2xl bg-indigo-50 p-6 text-center">
                  <p className="text-sm text-slate-500">Weight in Pounds</p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.toFixed(2)} lb
                  </p>
                </div>
              )}
            </div>
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Kilograms to Pounds
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              One kilogram is approximately equal to 2.20462 pounds. Enter
              your weight in kilograms to get the equivalent weight in pounds.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default WeightCalculator;