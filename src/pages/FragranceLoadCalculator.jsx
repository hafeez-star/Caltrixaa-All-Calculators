
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

    if (waxWeight === "" || fragranceLoad === "") {
      setError("Please enter the wax weight and fragrance load.");
      return;
    }

    const wax = Number(waxWeight);
    const load = Number(fragranceLoad);

    if (
      !Number.isFinite(wax) ||
      !Number.isFinite(load) ||
      wax <= 0 ||
      load < 0 ||
      load > 30
    ) {
      setError("Please enter valid values. Wax weight must be positive and fragrance load must be between 0 and 30%.");
      return;
    }

    // Fragrance load is calculated as a percentage of wax weight.
    const fragranceOil = (wax * load) / 100;
    const totalBatch = wax + fragranceOil;

    // Convert grams into ounces.
    const waxOunces = wax / 28.3495;
    const fragranceOunces = fragranceOil / 28.3495;
    const totalOunces = totalBatch / 28.3495;

    setResult({
      wax: wax,
      fragranceOil: fragranceOil,
      totalBatch: totalBatch,
      waxOunces: waxOunces,
      fragranceOunces: fragranceOunces,
      totalOunces: totalOunces,
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
        title="Fragrance Load Calculator – Candle & Wax Melt | Caltrixaa"
        description="Use this free fragrance load calculator to calculate fragrance oil for candles, soy wax and wax melts. Get accurate percentage-based estimates in grams and ounces."
        keywords="fragrance load calculator, fragrance oil calculator, fragrance load chart, fragrance load calculator for candles, candle fragrance calculator, soy wax fragrance load calculator, fragrance load calculator for wax melts, wax fragrance calculator"
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

      {/* Hero Section */}

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
            and wax melts. Enter your wax weight and fragrance percentage
            to get ingredient amounts in grams and ounces.
          </p>

        </div>

      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Calculator */}

        <div className="mx-auto max-w-2xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

            <h2 className="text-2xl font-bold text-slate-950">
              Candle Fragrance Oil Calculator
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your wax weight and fragrance load percentage to
              calculate the fragrance oil needed for your batch.
            </p>

            {/* Wax Weight */}

            <div className="mt-7">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Wax Weight (grams)
              </label>

              <input
                type="number"
                min="0"
                step="any"
                value={waxWeight}
                onChange={function (event) {
                  setWaxWeight(event.target.value);
                }}
                placeholder="Example: 500"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter the weight of your wax before adding fragrance oil.
              </p>

            </div>

            {/* Fragrance Load */}

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Fragrance Load (%)
              </label>

              <input
                type="number"
                min="0"
                max="30"
                step="any"
                value={fragranceLoad}
                onChange={function (event) {
                  setFragranceLoad(event.target.value);
                }}
                placeholder="Example: 10"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter the fragrance percentage recommended by your wax supplier.
                Maximum calculator input is 30%.
              </p>

            </div>

            {/* Error */}

            {error && (
              <div
                role="alert"
                className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* Buttons */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={calculateFragrance}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Calculate Fragrance
              </button>

              <button
                type="button"
                onClick={resetCalculator}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>

            </div>

            {/* Results */}

            {result && (

              <div
                aria-live="polite"
                className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl"
              >

                <p className="text-sm text-indigo-100">
                  Your Estimated Batch Amounts
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Fragrance Load Results
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">

                  {/* Wax */}

                  <div className="rounded-2xl bg-white/10 p-4 text-center">

                    <p className="text-sm text-indigo-100">
                      Wax
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.wax.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-xs text-indigo-100">
                      {result.waxOunces.toFixed(2)} oz
                    </p>

                  </div>

                  {/* Fragrance Oil */}

                  <div className="rounded-2xl bg-white/10 p-4 text-center">

                    <p className="text-sm text-indigo-100">
                      Fragrance Oil
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.fragranceOil.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-xs text-indigo-100">
                      {result.fragranceOunces.toFixed(2)} oz
                    </p>

                  </div>

                  {/* Total */}

                  <div className="rounded-2xl bg-white/10 p-4 text-center">

                    <p className="text-sm text-indigo-100">
                      Total Batch
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.totalBatch.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-xs text-indigo-100">
                      {result.totalOunces.toFixed(2)} oz
                    </p>

                  </div>

                </div>

                <div className="mt-5 rounded-2xl bg-white/10 p-4">

                  <p className="text-sm font-semibold">
                    Calculation Details
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-indigo-100">

                    <div className="flex justify-between gap-3">
                      <span>Wax weight</span>
                      <span>{result.wax.toFixed(2)} g</span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span>Fragrance load</span>
                      <span>{result.load}%</span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span>Fragrance oil</span>
                      <span>{result.fragranceOil.toFixed(2)} g</span>
                    </div>

                  </div>

                </div>

                <p className="mt-4 text-xs leading-5 text-indigo-100">
                  Always check the recommended fragrance limit for your
                  specific wax and fragrance oil before making a batch.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* SEO Article */}

        <article className="mx-auto mt-16 max-w-4xl">

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            What Is a Fragrance Load Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A fragrance load calculator helps candle makers work out how
            much fragrance oil to add to a batch of wax. Instead of
            calculating percentages manually, enter your wax weight and
            chosen fragrance load to get the required fragrance amount
            in grams or ounces. It is useful for planning candle and
            wax melt batches.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            How to Calculate Fragrance Load
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Fragrance load is normally calculated as a percentage of the
            wax weight. Multiply your wax weight by the fragrance
            percentage and divide the result by 100.
          </p>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Fragrance Oil = Wax Weight × Fragrance Load ÷ 100
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            For example, if you have 500 grams of wax and use a 10%
            fragrance load, you need 50 grams of fragrance oil. The
            finished batch will weigh 550 grams.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Fragrance Load Chart for Candles
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A fragrance load chart makes it easier to compare different
            fragrance percentages. The following examples show how much
            fragrance oil is needed for 500 grams of wax at different
            fragrance loads.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">

            <table className="w-full min-w-[400px] text-left text-sm">

              <thead className="bg-slate-50 text-slate-700">

                <tr>
                  <th className="p-4 font-semibold">Fragrance Load</th>
                  <th className="p-4 font-semibold">Wax Weight</th>
                  <th className="p-4 font-semibold">Fragrance Oil</th>
                  <th className="p-4 font-semibold">Total Batch</th>
                </tr>

              </thead>

              <tbody className="divide-y divide-slate-200 text-slate-600">

                <tr>
                  <td className="p-4">5%</td>
                  <td className="p-4">500 g</td>
                  <td className="p-4">25 g</td>
                  <td className="p-4">525 g</td>
                </tr>

                <tr>
                  <td className="p-4">6%</td>
                  <td className="p-4">500 g</td>
                  <td className="p-4">30 g</td>
                  <td className="p-4">530 g</td>
                </tr>

                <tr>
                  <td className="p-4">8%</td>
                  <td className="p-4">500 g</td>
                  <td className="p-4">40 g</td>
                  <td className="p-4">540 g</td>
                </tr>

                <tr>
                  <td className="p-4">10%</td>
                  <td className="p-4">500 g</td>
                  <td className="p-4">50 g</td>
                  <td className="p-4">550 g</td>
                </tr>

                <tr>
                  <td className="p-4">12%</td>
                  <td className="p-4">500 g</td>
                  <td className="p-4">60 g</td>
                  <td className="p-4">560 g</td>
                </tr>

              </tbody>

            </table>

          </div>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            These are mathematical examples, not recommended fragrance
            limits. Always follow the specifications of your wax and
            fragrance supplier.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Fragrance Load for Candles and Wax Melts
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Fragrance load can vary depending on the type of wax,
            fragrance oil and product formulation. Soy wax, paraffin,
            coconut wax, beeswax and wax melt products may have different
            recommended limits. Always check the technical information
            provided for your specific wax and fragrance oil before
            making a batch.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            How Much Fragrance Oil Should I Use?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            There is no single fragrance percentage that works for
            every wax. For example, a 10% fragrance load means using
            10 grams of fragrance oil for every 100 grams of wax.
            However, the maximum permitted amount depends on the
            product specifications and supplier recommendations.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Fragrance Load vs Total Batch Weight
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Fragrance load is commonly calculated using wax weight as
            the base. This is different from calculating fragrance as
            a percentage of the finished mixture. For example, 500
            grams of wax with a 10% fragrance load requires 50 grams
            of fragrance oil, making the total batch 550 grams.
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
                Fragrance load is the amount of fragrance oil used
                compared with the weight of wax. It is commonly
                expressed as a percentage of wax weight.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                How much fragrance oil do I need for 500g of wax?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                At a 10% fragrance load, 500 grams of wax requires
                50 grams of fragrance oil. At 8%, it requires 40
                grams. Use the calculator above to work out other
                percentages.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                How do I calculate a 10% fragrance load?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Multiply your wax weight by 10 and divide by 100.
                For 100 grams of wax, this gives 10 grams of
                fragrance oil.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                Can I use this fragrance calculator for wax melts?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. You can use this calculator for wax melts by
                entering the wax weight and desired percentage.
                Always follow the wax and fragrance supplier's
                recommended usage limits.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                Is a higher fragrance load always better?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                No. Using more fragrance oil does not always improve
                candle performance. Excess fragrance may affect
                burning and product quality. Follow the supplier's
                recommended maximum load.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                Does fragrance load use wax weight or total batch weight?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                This calculator uses wax weight as the base. A 10%
                fragrance load means 10 grams of fragrance oil for
                every 100 grams of wax.
              </p>

            </details>

          </div>

          {/* Related Blog */}

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">

            <h2 className="text-xl font-bold text-slate-900">
              What Is Fragrance Load?
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Learn what fragrance load means, how to calculate
              fragrance oil and how it affects candle and wax projects.
            </p>

            <Link
              to="/blog/what-is-fragrance-load"
              className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Read the Fragrance Load Guide →
            </Link>

          </div>

        </article>

        {/* Related Tools */}

        <RelatedCraftTools />

      </main>

      <Footer />

    </div>
  );
}

export default FragranceLoadCalculator;
