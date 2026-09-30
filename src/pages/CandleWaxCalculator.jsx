import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";





function CandleWaxCalculator() {
  const [containerVolume, setContainerVolume] = useState("");
  const [fragranceLoad, setFragranceLoad] = useState("10");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateWax() {
    setError("");
    setResult(null);

    if (!containerVolume || !fragranceLoad) {
      setError("Please enter the container size and fragrance load.");
      return;
    }

    const volume = Number(containerVolume);
    const load = Number(fragranceLoad);

    if (volume <= 0 || load < 0 || load > 30) {
      setError("Please enter valid values.");
      return;
    }

    /*
      Approximate total candle fill weight.
      Wax density varies by wax type, so 0.86 g/ml
      is used as a practical starting estimate.
    */

    const totalBatch = volume * 0.86;

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
    });
  }

  function resetCalculator() {
    setContainerVolume("");
    setFragranceLoad("10");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      <SEO
        title="Candle Wax Calculator (Jar / Container Size) | Caltrixaa"
        description="Use this candle wax calculator to estimate wax and fragrance in grams for jar or container candles. Enter your container size and fragrance load."
        keywords="candle wax calculator jar container size, candle wax calculator jar container size in grams, free candle wax calculator, candle wax and fragrance calculator, candle fragrance calculator in grams, soy wax calculator, candle calculator"
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

      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white">

        <div className="mx-auto max-w-6xl px-4 py-14 text-center">

          <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            Craft & DIY Calculator
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Candle Wax Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Estimate the amount of wax and fragrance oil needed for a candle
            jar or container using its size in milliliters.
          </p>

        </div>

      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

            <h2 className="text-2xl font-bold text-slate-950">
              Candle Wax Calculator by Jar Size
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your container size and fragrance load to estimate the
              wax and fragrance oil needed for your candle.
            </p>

            <div className="mt-7">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Container Size (ml)
              </label>

              <input
                type="number"
                min="0"
                value={containerVolume}
                onChange={function (event) {
                  setContainerVolume(event.target.value);
                }}
                placeholder="Example: 300"
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
                This calculator uses an approximate fill-weight conversion.
              </p>

            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={calculateWax}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Calculate Wax
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
                  Estimated candle ingredients
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">

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

                  <div className="rounded-2xl bg-white/10 p-4 text-center">

                    <p className="text-sm text-indigo-100">
                      Total
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.totalBatch.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-xs text-indigo-100">
                      {result.totalOunces.toFixed(2)} oz
                    </p>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

        <article className="mx-auto mt-16 max-w-4xl">

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            What Is a Candle Wax Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A candle wax calculator helps estimate how much wax is needed to
            fill a jar or container. It can also estimate the amount of
            fragrance oil required when a fragrance load percentage is used.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            How to Calculate Candle Wax for a Jar
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Enter the approximate volume of your candle container in
            milliliters. The calculator converts the container volume into an
            estimated total candle fill weight and then separates the wax and
            fragrance according to the selected fragrance load.
          </p>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Estimated Fill Weight = Container Volume × 0.86
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            The 0.86 value is an estimate rather than a universal density.
            Different waxes can have different densities, so weighing your
            actual container fill during testing can give a more accurate
            production measurement.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950">
            Candle Wax and Fragrance Calculator
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            When fragrance oil is included, the total batch weight contains
            both wax and fragrance. For example, at a 10% fragrance load, the
            calculator estimates the wax portion and then adds the fragrance
            amount to reach the estimated total fill weight.
          </p>

          <h3 className="mt-8 text-2xl font-bold text-slate-950">
            Soy Wax Calculator
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            You can use this calculator as a starting point for soy wax and
            other candle waxes, but actual wax density can vary between
            products. Always test with your specific wax and container before
            making a larger batch.
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
                The amount depends on the size of the container and the density
                of the wax. Enter the container volume in the calculator to
                get an estimated amount.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Can I calculate candle wax in grams?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. The calculator gives estimated wax, fragrance and total
                batch weights in grams and ounces.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is the candle wax calculation exact?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                It is an estimate because wax density differs between products.
                For production, test your actual wax and container and use
                measured fill weights.
              </p>
            </details>

          </div>
<section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
  <h2 className="text-2xl font-bold text-slate-950">
    More Craft & DIY Calculators
  </h2>

  <p className="mt-3 leading-7 text-slate-600">
    Use these related calculators for bath bombs, candles, wax melts and
    other DIY projects.
  </p>

  <div className="mt-6 grid gap-4 sm:grid-cols-2">

    <Link
      to="/fragrance-load-calculator"
      className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
    >
      <div className="text-3xl">🕯️</div>

      <h3 className="mt-3 font-bold text-slate-900">
        Fragrance Load Calculator
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Calculate fragrance oil amounts for candles and wax melts.
      </p>

      <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">
        Calculate fragrance load →
      </span>
    </Link>

    <Link
      to="/bath-bomb-ratio-calculator"
      className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
    >
      <div className="text-3xl">🛁</div>

      <h3 className="mt-3 font-bold text-slate-900">
        Bath Bomb Ratio Calculator
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Calculate bath bomb ingredients using a simple 1:2 ratio.
      </p>

      <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">
        Calculate bath bomb ratio →
      </span>
    </Link>

  </div>
</section>
        </article>

      </main>

      <Footer />

    </div>
  );
}

export default CandleWaxCalculator;