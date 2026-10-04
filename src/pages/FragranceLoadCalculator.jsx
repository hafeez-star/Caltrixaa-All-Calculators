import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import RelatedCraftTools from "../components/RelatedCraftTools";


function FragranceLoadCalculator() {
  const [waxWeight, setWaxWeight] = useState("");
  const [fragranceLoad, setFragranceLoad] = useState("10");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateFragrance() {
    setError("");
    setResult(null);

    if (!waxWeight || !fragranceLoad) {
      setError("Please enter the wax weight and fragrance load.");
      return;
    }

    const wax = Number(waxWeight);
    const load = Number(fragranceLoad);

    if (wax <= 0 || load < 0 || load > 30) {
      setError("Please enter valid values.");
      return;
    }

    const fragranceOil = (wax * load) / 100;
    const totalBatch = wax + fragranceOil;

    setResult({
      wax: wax,
      fragranceOil: fragranceOil,
      totalBatch: totalBatch,
      load: load,
    });
  }

  function resetCalculator() {
    setWaxWeight("");
    setFragranceLoad("10");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      <SEO
        title="Fragrance Load Calculator - Candle & Wax Melt Calculator | Caltrixaa"
        description="Use this fragrance load calculator to calculate fragrance oil for candles, soy wax and wax melts. Find the right fragrance amount in grams."
        keywords="fragrance load calculator, fragrance load calculator for candles, fragrance load calculator soy wax, fragrance load calculator free, fragrance load calculator for wax melts, free candle fragrance load calculator, wax fragrance load calculator, candle fragrance load calculator, free fragrance load calculator, wax melt fragrance load calculator, fragrance oil load calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Fragrance Load Calculator",
          url: "https://caltrixaa.vercel.app/fragrance-load-calculator",
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

          <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            Craft & DIY Calculator
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Fragrance Load Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Calculate how much fragrance oil you need for candles, soy wax
            and wax melts based on your chosen fragrance load.
          </p>

        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

            <h2 className="text-2xl font-bold text-slate-950">
              Candle Fragrance Load Calculator
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your wax weight and fragrance load percentage to calculate
              the amount of fragrance oil needed.
            </p>

            <div className="mt-7">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Wax Weight (grams)
              </label>

              <input
                type="number"
                min="0"
                value={waxWeight}
                onChange={function (event) {
                  setWaxWeight(event.target.value);
                }}
                placeholder="Example: 500"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Fragrance Load (%)
              </label>

              <input
                type="number"
                min="0"
                max="30"
                value={fragranceLoad}
                onChange={function (event) {
                  setFragranceLoad(event.target.value);
                }}
                placeholder="Example: 10"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter the fragrance percentage recommended for your wax.
              </p>

            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={calculateFragrance}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Calculate Fragrance
              </button>

              <button
                onClick={resetCalculator}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>

            </div>

            {result && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl">

                <p className="text-sm text-indigo-100">
                  Recommended batch amounts
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Wax
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.wax.toFixed(2)} g
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Fragrance Oil
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.fragranceOil.toFixed(2)} g
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Total Batch
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.totalBatch.toFixed(2)} g
                    </p>
                  </div>

                </div>

                <p className="mt-5 text-center text-sm text-indigo-100">
                  Fragrance load: {result.load}%
                </p>

              </div>
            )}

          </div>

        </div>

        {/* SEO CONTENT */}

        <article className="mx-auto mt-16 max-w-4xl">

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            What Is a Fragrance Load Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A fragrance load calculator helps candle makers work out how much
            fragrance oil to add to a batch of wax. Instead of calculating the
            percentage manually, you can enter the wax weight and fragrance
            load to get the fragrance amount in grams.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            How to Calculate Fragrance Load
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            The basic calculation uses the wax weight and the selected
            fragrance percentage.
          </p>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Fragrance Oil = Wax Weight × Fragrance Load ÷ 100
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            For example, if you have 500 grams of wax and use a 10% fragrance
            load, the calculation gives 50 grams of fragrance oil.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Fragrance Load for Candles and Wax Melts
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Fragrance load can vary depending on the type of wax, fragrance
            oil and the manufacturer's recommendations. Soy wax, paraffin,
            coconut wax, beeswax and wax melt products can have different
            recommended limits. Always check the technical information
            provided for your specific wax and fragrance oil before making a
            batch.
          </p>

          <h3 className="mt-8 text-2xl font-bold text-slate-950">
            How Much Fragrance Oil Should I Use?
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            There is no single percentage that works for every wax. Use the
            maximum fragrance load recommended by your wax supplier rather
            than automatically choosing a higher percentage. This calculator
            is designed to make the arithmetic easier.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is fragrance load?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Fragrance load is the amount of fragrance oil used in relation
                to the amount of wax. It is commonly expressed as a percentage.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                How much fragrance oil do I need for 500g of wax?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                At a 10% fragrance load, 500 grams of wax would require 50 grams
                of fragrance oil. Change the percentage in the calculator to
                calculate a different load.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Can I use this for wax melts?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. You can use the calculator for wax melts as well, but
                always follow the fragrance and wax supplier's recommended
                usage limits.
              </p>
            </details>

          </div>
<RelatedCraftTools />
        </article>

      </main>

      <Footer />

    </div>
  );
}

export default FragranceLoadCalculator;