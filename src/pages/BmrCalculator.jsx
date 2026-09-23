import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BmrCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const a = Number(age);
    const w = Number(weight);
    const h = Number(height);

    if (!a || !w || !h || a <= 0 || w <= 0 || h <= 0) {
      setResult(null);
      return;
    }

    let bmr;

    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    setResult(Math.round(bmr));
  }

  function reset() {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setResult(null);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-4xl">🔥</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                BMR Calculator
              </h1>

              <p className="mt-3 text-slate-500">
                Estimate your Basal Metabolic Rate using the Mifflin-St Jeor
                equation.
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

              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Age
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="25"
                    className="w-full rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Weight (kg)
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                    className="w-full rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Height (cm)
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                    className="w-full rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={calculate}
                  className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Calculate BMR
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
                    Estimated BMR
                  </p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.toLocaleString()}
                  </p>

                  <p className="mt-1 text-slate-600">
                    calories per day at rest
                  </p>
                </div>
              )}
            </div>
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              What is BMR?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Basal Metabolic Rate is an estimate of the energy your body uses
              while at rest to maintain basic functions such as breathing and
              circulation.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              This calculator uses the Mifflin-St Jeor equation and provides an
              estimate rather than a medical measurement.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BmrCalculator;