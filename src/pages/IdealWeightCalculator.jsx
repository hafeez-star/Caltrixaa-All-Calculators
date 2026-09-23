import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function IdealWeightCalculator() {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  function calculate() {
    const heightCm = Number(height);

    if (!heightCm || heightCm < 100) {
      setResult(null);
      return;
    }

    const heightInches = heightCm / 2.54;
    const inchesOverFiveFeet = heightInches - 60;

    let idealWeight;

    if (gender === "male") {
      idealWeight = 50 + 2.3 * inchesOverFiveFeet;
    } else {
      idealWeight = 45.5 + 2.3 * inchesOverFiveFeet;
    }

    if (idealWeight < 0) {
      idealWeight = 0;
    }

    setResult(idealWeight);
  }

  function reset() {
    setHeight("");
    setGender("male");
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
                Ideal Weight Calculator
              </h1>

              <p className="mt-3 text-slate-500">
                Estimate an ideal weight range based on height and sex.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Sex
                </label>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-semibold text-slate-700">
                  Height (cm)
                </label>

                <input
                  type="number"
                  min="100"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Example: 175"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

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
                  <p className="text-sm text-slate-500">
                    Estimated Ideal Weight
                  </p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.toFixed(1)} kg
                  </p>
                </div>
              )}
            </div>
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              About Ideal Weight
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Ideal weight formulas provide estimates rather than a medical
              diagnosis. Healthy weight can vary based on body composition,
              age, activity level and other factors.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default IdealWeightCalculator;