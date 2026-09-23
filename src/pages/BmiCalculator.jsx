import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BmiCalculator() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(function () {
    document.title = "BMI Calculator - Calculate Your BMI | Caltrixaa";

    const description =
      "Use Caltrixaa's free BMI calculator to calculate your Body Mass Index and understand your BMI category.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  function calculateBMI() {
    setError("");
    setResult(null);

    if (!height || !weight) {
      setError("Please enter both height and weight.");
      return;
    }

    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (heightValue <= 0 || weightValue <= 0) {
      setError("Height and weight must be greater than zero.");
      return;
    }

    let bmi;

    if (unit === "metric") {
      const heightInMeters = heightValue / 100;
      bmi = weightValue / (heightInMeters * heightInMeters);
    } else {
      bmi = (weightValue / (heightValue * heightValue)) * 703;
    }

    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    setResult({
      bmi: bmi.toFixed(1),
      category: category,
    });
  }

  function resetCalculator() {
    setHeight("");
    setWeight("");
    setResult(null);
    setError("");
  }

  function changeUnit(newUnit) {
    setUnit(newUnit);
    setHeight("");
    setWeight("");
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
              Free Health Calculator
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              BMI Calculator
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Calculate your Body Mass Index using your height and weight.
              Simple, fast, and free.
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
                Calculate Your BMI
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Choose your measurement system and enter your height and
                weight.
              </p>
            </div>

            {/* Unit Buttons */}
            <div className="mb-7 grid grid-cols-2 gap-3">
              <button
                onClick={function () {
                  changeUnit("metric");
                }}
                className={`rounded-2xl px-4 py-3 font-semibold transition ${
                  unit === "metric"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Metric
              </button>

              <button
                onClick={function () {
                  changeUnit("imperial");
                }}
                className={`rounded-2xl px-4 py-3 font-semibold transition ${
                  unit === "imperial"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Imperial
              </button>
            </div>

            {/* Height */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Height ({unit === "metric" ? "cm" : "inches"})
              </label>

              <input
                type="number"
                min="0"
                value={height}
                onChange={function (event) {
                  setHeight(event.target.value);
                }}
                placeholder={
                  unit === "metric" ? "Example: 175" : "Example: 69"
                }
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Weight */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Weight ({unit === "metric" ? "kg" : "lbs"})
              </label>

              <input
                type="number"
                min="0"
                value={weight}
                onChange={function (event) {
                  setWeight(event.target.value);
                }}
                placeholder={
                  unit === "metric" ? "Example: 70" : "Example: 154"
                }
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
                onClick={calculateBMI}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Calculate BMI
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
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-center text-white shadow-xl">
                <p className="text-sm text-indigo-100">
                  Your BMI is
                </p>

                <div className="mt-2 text-5xl font-bold">
                  {result.bmi}
                </div>

                <div className="mt-4 inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
                  {result.category}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="font-semibold">18.5 - 24.9</div>
                    <div className="mt-1 text-indigo-100">
                      Normal range
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="font-semibold">25+</div>
                    <div className="mt-1 text-indigo-100">
                      Above normal range
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEO Content */}
        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-950">
            What Is BMI?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            BMI, or Body Mass Index, is a commonly used calculation based on
            a person's height and weight. It can provide a general indication
            of whether a person's weight falls within a particular range for
            their height.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            How Is BMI Calculated?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            For metric measurements, BMI is calculated by dividing weight in
            kilograms by height in meters squared.
          </p>

          <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            BMI = Weight (kg) ÷ Height² (m)
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            For example, if someone weighs 70 kg and is 1.75 meters tall,
            their BMI is approximately 22.9.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            BMI Categories
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-2 bg-slate-50 px-5 py-4 font-semibold">
              <span>BMI</span>
              <span>Category</span>
            </div>

            <div className="grid grid-cols-2 border-t px-5 py-4">
              <span>Below 18.5</span>
              <span>Underweight</span>
            </div>

            <div className="grid grid-cols-2 border-t px-5 py-4">
              <span>18.5 - 24.9</span>
              <span>Normal weight</span>
            </div>

            <div className="grid grid-cols-2 border-t px-5 py-4">
              <span>25 - 29.9</span>
              <span>Overweight</span>
            </div>

            <div className="grid grid-cols-2 border-t px-5 py-4">
              <span>30 or higher</span>
              <span>Obesity</span>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            BMI is a general screening measure and does not directly measure
            body fat or account for every aspect of an individual's health.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                What does BMI mean?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                BMI stands for Body Mass Index. It is a calculation based on
                height and weight.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                Is this BMI calculator free?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. The Caltrixaa BMI calculator is free to use.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                Can I use pounds and inches?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Select the Imperial option to enter your height in inches
                and weight in pounds.
              </p>
            </details>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default BmiCalculator;