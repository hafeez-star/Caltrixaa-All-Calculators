
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import RelatedCraftTools from "../components/RelatedCraftTools";

function CandleWaxCalculator() {
  const [containerVolume, setContainerVolume] = useState("");
  const [fragranceLoad, setFragranceLoad] = useState("10");
  const [waxDensity, setWaxDensity] = useState("0.86");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateWax() {
    setError("");
    setResult(null);

    if (
      containerVolume === "" ||
      fragranceLoad === "" ||
      waxDensity === ""
    ) {
      setError("Please enter all required values.");
      return;
    }

    const volume = Number(containerVolume);
    const load = Number(fragranceLoad);
    const density = Number(waxDensity);

    if (
      !Number.isFinite(volume) ||
      !Number.isFinite(load) ||
      !Number.isFinite(density) ||
      volume <= 0 ||
      load < 0 ||
      load > 30 ||
      density <= 0 ||
      density > 2
    ) {
      setError("Please enter valid values.");
      return;
    }

    /*
      Estimate total candle fill weight.

      Total fill weight = Container volume × Estimated density

      Fragrance load is calculated as a percentage
      of wax weight, not total candle weight.
    */

    const totalBatch = volume * density;

    const wax = totalBatch / (1 + load / 100);

    const fragrance = wax * (load / 100);

    const waxOunces = wax / 28.3495;
    const fragranceOunces = fragrance / 28.3495;
    const totalOunces = totalBatch / 28.3495;

    setResult({
      wax: wax,
      fragrance: fragrance,
      totalBatch: totalBatch,
      waxOunces: waxOunces,
      fragranceOunces: fragranceOunces,
      totalOunces: totalOunces,
      density: density,
      load: load,
      volume: volume,
    });
  }

  function resetCalculator() {
    setContainerVolume("");
    setFragranceLoad("10");
    setWaxDensity("0.86");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      <SEO
        title="Candle Wax Calculator – Jar Size, Grams & Fragrance | Caltrixaa"
        description="Calculate how much candle wax and fragrance oil you need for your jar or container. Estimate wax and fragrance amounts in grams and ounces using container volume and fragrance load."
        keywords="candle wax calculator, candle wax calculator jar container size, candle wax calculator in grams, free candle wax calculator, candle wax and fragrance calculator, candle fragrance calculator, fragrance oil calculator, soy wax calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Candle Wax Calculator",
          url: "https://caltrixaa.vercel.app/candle-wax-calculator",
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
            Candle Wax Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Calculate how much wax and fragrance oil you need for a candle
            jar or container. Get estimated ingredient weights in grams
            and ounces using your container size and fragrance load.
          </p>

        </div>

      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Calculator */}

        <div className="mx-auto max-w-2xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

            <h2 className="text-2xl font-bold text-slate-950">
              Candle Wax Calculator by Jar Size
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your container size, fragrance load and estimated
              fill density to calculate the wax and fragrance oil
              required for your candle.
            </p>

            {/* Container Size */}

            <div className="mt-7">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Container Size (ml)
              </label>

              <input
                type="number"
                min="0"
                step="any"
                value={containerVolume}
                onChange={function (event) {
                  setContainerVolume(event.target.value);
                }}
                placeholder="Example: 300"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter the usable volume of your candle container in milliliters.
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
                Fragrance load is calculated as a percentage of wax weight.
                Maximum calculator input is 30%.
              </p>

            </div>

            {/* Wax Density */}

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Estimated Candle Fill Density (g/ml)
              </label>

              <input
                type="number"
                min="0.01"
                max="2"
                step="0.01"
                value={waxDensity}
                onChange={function (event) {
                  setWaxDensity(event.target.value);
                }}
                placeholder="Example: 0.86"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Default estimate is 0.86 g/ml. Actual fill density varies
                by wax and fragrance. Use a measured value when available.
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
                onClick={calculateWax}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Calculate Wax
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
                  Estimated Candle Ingredients
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Your Candle Wax Calculation
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

                  {/* Fragrance */}

                  <div className="rounded-2xl bg-white/10 p-4 text-center">

                    <p className="text-sm text-indigo-100">
                      Fragrance Oil
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.fragrance.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-xs text-indigo-100">
                      {result.fragranceOunces.toFixed(2)} oz
                    </p>

                  </div>

                  {/* Total */}

                  <div className="rounded-2xl bg-white/10 p-4 text-center">

                    <p className="text-sm text-indigo-100">
                      Total Fill Weight
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

                  <p className="text-sm font-semibold text-white">
                    Calculation Details
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-indigo-100">

                    <div className="flex justify-between gap-3">
                      <span>Container volume</span>
                      <span>{result.volume} ml</span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span>Fragrance load</span>
                      <span>{result.load}%</span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span>Estimated density</span>
                      <span>{result.density} g/ml</span>
                    </div>

                  </div>

                </div>

                <p className="mt-4 text-xs leading-5 text-indigo-100">
                  These are estimated ingredient amounts. Actual results
                  depend on the wax, fragrance and usable container fill.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* SEO Article */}

        <article className="mx-auto mt-16 max-w-4xl">

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            What Is a Candle Wax Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A candle wax calculator helps candle makers estimate how much
            wax is needed to fill a jar or container. It can also calculate
            the amount of fragrance oil required for a selected fragrance
            load. Instead of guessing ingredient quantities, you can use
            container volume and an estimated fill density to plan your
            candle-making batches.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            How to Calculate Candle Wax for a Jar
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            First, measure the usable volume of your candle container in
            milliliters. Next, enter an estimated fill density for your
            wax. The calculator estimates the total fill weight and
            separates the wax and fragrance oil according to your
            selected fragrance load.
          </p>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Estimated Total Fill Weight = Container Volume × Fill Density
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            For example, a 300 ml container using an estimated fill density
            of 0.86 g/ml has an estimated total fill weight of 258 grams.
            This is a starting estimate, not a guaranteed measurement for
            every wax type.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Candle Wax and Fragrance Calculator
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Fragrance load is commonly expressed as a percentage of wax
            weight. For example, a 10% fragrance load means using 10 grams
            of fragrance oil for every 100 grams of wax. The total candle
            mixture contains both the wax and the fragrance oil.
          </p>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5">

            <h3 className="font-bold text-indigo-800">
              Fragrance Load Formula
            </h3>

            <p className="mt-3 leading-7 text-indigo-700">
              Fragrance Oil = Wax Weight × (Fragrance Load ÷ 100)
            </p>

            <p className="mt-3 text-sm leading-6 text-indigo-700">
              Example: 200 grams of wax at a 10% fragrance load requires
              20 grams of fragrance oil.
            </p>

          </div>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            How Much Wax Do You Need for Different Jar Sizes?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            The amount of wax required depends on the usable volume of
            your container and the density of the wax mixture. A larger
            jar generally needs more candle mixture than a smaller one.
            Use the calculator above to estimate the ingredients for
            your own container.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">

            <table className="w-full min-w-[400px] text-left text-sm">

              <thead className="bg-slate-50 text-slate-700">

                <tr>
                  <th className="p-4 font-semibold">Container Volume</th>
                  <th className="p-4 font-semibold">Estimated Total Fill</th>
                </tr>

              </thead>

              <tbody className="divide-y divide-slate-200 text-slate-600">

                <tr>
                  <td className="p-4">100 ml</td>
                  <td className="p-4">86 g</td>
                </tr>

                <tr>
                  <td className="p-4">200 ml</td>
                  <td className="p-4">172 g</td>
                </tr>

                <tr>
                  <td className="p-4">300 ml</td>
                  <td className="p-4">258 g</td>
                </tr>

                <tr>
                  <td className="p-4">400 ml</td>
                  <td className="p-4">344 g</td>
                </tr>

                <tr>
                  <td className="p-4">500 ml</td>
                  <td className="p-4">430 g</td>
                </tr>

              </tbody>

            </table>

          </div>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            These examples use an estimated density of 0.86 g/ml and
            represent total fill weight, not wax-only weight.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Soy Wax Calculator
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            You can use this calculator as a starting point for soy wax
            and other candle waxes. However, different wax products can
            have different densities and pouring characteristics. For
            accurate production quantities, measure the actual fill
            weight of your specific wax and container.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Why Is Wax Density Important?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Container volume is measured in milliliters, while wax and
            fragrance are normally measured by weight in grams or ounces.
            Density helps convert a volume measurement into an estimated
            weight. Since wax products differ, a measured value from
            your own candle-making tests can improve the estimate.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                How much wax do I need for a candle jar?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                It depends on the usable volume of your container and
                the density of your wax. Enter your container size and
                estimated density in the calculator to get an estimated
                total fill weight.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                Can I calculate candle wax in grams?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. This calculator displays estimated wax, fragrance
                oil and total fill weight in grams and ounces.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                How much fragrance oil should I add to candle wax?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Fragrance oil is calculated using the fragrance load
                percentage and wax weight. For example, a 10% load
                requires 10 grams of fragrance oil for every 100 grams
                of wax. Always follow the wax manufacturer's and
                fragrance supplier's recommended limits.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                Is the candle wax calculation exact?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                No. It is an estimate because wax density and usable
                container fill can vary. Measure your own wax and
                container to get more accurate production quantities.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                Can I use this as a soy wax calculator?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. You can use it for soy wax as a starting estimate.
                Adjust the density using a measured value for your
                particular soy wax product whenever possible.
              </p>

            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <summary className="cursor-pointer font-semibold text-slate-900">
                What is a 10% fragrance load?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                A 10% fragrance load means adding 10 grams of fragrance
                oil for every 100 grams of wax. It is calculated from
                wax weight rather than total candle mixture weight.
              </p>

            </details>

          </div>

          {/* Related Blog */}

          <div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">

            <h2 className="text-xl font-bold text-slate-900">
              How Do You Calculate Candle Wax and Fragrance?
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Learn how to calculate candle wax and fragrance amounts
              for jars, containers and candle batches with practical
              examples.
            </p>

            <Link
              to="/blog/candle-wax-fragrance-calculation"
              className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Read the Candle Wax Guide →
            </Link>

          </div>

        </article>

      </main>

      <RelatedCraftTools />

      <Footer />

    </div>
  );
}

export default CandleWaxCalculator;