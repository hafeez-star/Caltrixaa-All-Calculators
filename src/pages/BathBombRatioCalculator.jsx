import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function BathBombRatioCalculator() {
  const [batchWeight, setBatchWeight] = useState("");
  const [fragranceOil, setFragranceOil] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateRatio() {
    setError("");
    setResult(null);

    if (!batchWeight) {
      setError("Please enter your total batch weight.");
      return;
    }

    const total = Number(batchWeight);
    const fragrance = Number(fragranceOil || 0);

    if (total <= 0) {
      setError("Please enter a batch weight greater than 0.");
      return;
    }

    if (fragrance < 0 || fragrance >= total) {
      setError("Please enter a valid fragrance oil amount.");
      return;
    }

    /*
      1:2 ratio
      Citric Acid = 1 part
      Baking Soda = 2 parts
      Total dry base = 3 parts
    */

    const baseWeight = total - fragrance;

    const citricAcid = baseWeight / 3;
    const bakingSoda = citricAcid * 2;

    setResult({
      citricAcid: citricAcid,
      bakingSoda: bakingSoda,
      fragranceOil: fragrance,
      total: total,
      citricOunces: citricAcid * 0.035274,
      bakingOunces: bakingSoda * 0.035274,
      fragranceOunces: fragrance * 0.035274,
      totalOunces: total * 0.035274,
    });
  }

  function resetCalculator() {
    setBatchWeight("");
    setFragranceOil("");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Bath Bomb Ratio Calculator - Perfect 1:2 Ratio in Grams | Caltrixaa"
        description="Use this bath bomb ratio calculator to calculate a 1:2 citric acid to baking soda recipe in grams and ounces for your next DIY bath bomb batch."
        keywords="bath bomb ratio calculator, bath bomb calculator grams, bath bomb ingredients calculator, bath bomb recipe calculator, 1:2 bath bomb ratio calculator, bath bomb batch calculator, diy bath bomb calculator, bath bomb recipe in grams calculator"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "Bath Bomb Ratio Calculator",
              url: "https://caltrixaa.vercel.app/bath-bomb-ratio-calculator",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "All",
              description:
                "Calculate a 1:2 citric acid to baking soda bath bomb ratio in grams and ounces.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much baking soda do I need for a bath bomb?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "For a simple 1:2 bath bomb ratio, use two parts baking soda for every one part citric acid. For example, 100 grams of citric acid uses 200 grams of baking soda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the 1:2 bath bomb ratio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "The 1:2 ratio means one part citric acid is combined with two parts baking soda. The ratio is useful for scaling a basic bath bomb dry base.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I calculate a bath bomb recipe in grams?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. Enter the total batch weight and the calculator works out the citric acid and baking soda amounts in grams and ounces.",
                  },
                },
              ],
            },
          ],
        }}
      />

      <Navbar />

      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            🛁 Craft & DIY Calculator
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Bath Bomb Ratio Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Calculate a simple 1:2 citric acid to baking soda bath bomb ratio
            in grams and ounces for your DIY bath bomb recipe.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-950">
                1:2 Bath Bomb Recipe Calculator
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your total batch weight. You can optionally include
                fragrance oil in the batch.
              </p>
            </div>

            {/* Batch Weight */}
            <div>
              <label
                htmlFor="batchWeight"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Total Batch Weight (grams)
              </label>

              <input
                id="batchWeight"
                type="number"
                min="1"
                value={batchWeight}
                onChange={function (event) {
                  setBatchWeight(event.target.value);
                }}
                placeholder="Example: 300"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Fragrance */}
            <div className="mt-5">
              <label
                htmlFor="fragranceOil"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Fragrance Oil (grams) — Optional
              </label>

              <input
                id="fragranceOil"
                type="number"
                min="0"
                value={fragranceOil}
                onChange={function (event) {
                  setFragranceOil(event.target.value);
                }}
                placeholder="Example: 10"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Leave this empty if you only want the basic 1:2 dry ingredient
                ratio.
              </p>
            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={calculateRatio}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Calculate Bath Bomb Ratio
              </button>

              <button
                onClick={resetCalculator}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            {/* RESULTS */}
            {result && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl sm:p-7">
                <div className="mb-5">
                  <p className="text-sm font-medium text-indigo-100">
                    Your bath bomb recipe
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    1:2 Citric Acid to Baking Soda
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <p className="text-sm text-indigo-100">
                      Citric Acid
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      {result.citricAcid.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-sm text-indigo-100">
                      {result.citricOunces.toFixed(2)} oz
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <p className="text-sm text-indigo-100">
                      Baking Soda
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      {result.bakingSoda.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-sm text-indigo-100">
                      {result.bakingOunces.toFixed(2)} oz
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <p className="text-sm text-indigo-100">
                      Fragrance Oil
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {result.fragranceOil.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-sm text-indigo-100">
                      {result.fragranceOunces.toFixed(2)} oz
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <p className="text-sm text-indigo-100">
                      Total Batch
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {result.total.toFixed(2)} g
                    </p>

                    <p className="mt-1 text-sm text-indigo-100">
                      {result.totalOunces.toFixed(2)} oz
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white/10 p-4 text-center">
                  <p className="text-sm text-indigo-100">
                    Basic ratio
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    1 part Citric Acid : 2 parts Baking Soda
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEO CONTENT */}
        <article className="mx-auto mt-16 max-w-4xl">
          <div className="leading-8 text-slate-600">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              What Is a Bath Bomb Ratio Calculator?
            </h2>

            <p className="mt-5">
              A bath bomb ratio calculator helps you work out the amount of
              citric acid and baking soda needed for a batch size. Instead of
              calculating each ingredient by hand, you can enter the total
              batch weight and get the ingredient amounts in grams and ounces.
              This makes it easier to scale a DIY bath bomb recipe for a small
              test batch or a larger project.
            </p>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              1:2 Bath Bomb Ratio in Grams
            </h2>

            <p className="mt-5">
              This calculator uses a simple 1:2 ratio: one part citric acid
              to two parts baking soda. Because the dry base contains three
              total parts, one third of the base is citric acid and two thirds
              is baking soda.
            </p>

            <div className="mt-6 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 text-center">
              <p className="text-lg font-bold text-indigo-700">
                1 part Citric Acid : 2 parts Baking Soda
              </p>

              <p className="mt-2 text-sm text-indigo-600">
                Example: 100 g citric acid + 200 g baking soda = 300 g dry base
              </p>
            </div>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              How Much Baking Soda for a Bath Bomb?
            </h2>

            <p className="mt-5">
              With a 1:2 ratio, use twice as much baking soda as citric acid.
              For example, if your recipe contains 50 grams of citric acid,
              the corresponding amount of baking soda is 100 grams. If you
              want a 600 gram dry base, the calculator can scale the same
              ratio without requiring manual calculations.
            </p>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              How to Calculate a Bath Bomb Recipe in Grams
            </h2>

            <p className="mt-5">
              Start with the total batch weight you want to make. The dry
              portion of a 1:2 recipe contains three equal parts in total.
              Divide the dry base by three to find the citric acid amount,
              then multiply that amount by two to find the baking soda amount.
              Other ingredients such as fragrance oil, colorants, binders or
              additives may be used separately depending on the recipe and
              formulation.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-slate-950">
              Tips for Scaling a DIY Bath Bomb Recipe
            </h3>

            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>
                Weigh ingredients with a digital scale for more consistent
                batches.
              </li>

              <li>
                Keep your ingredient ratio consistent when changing batch
                size.
              </li>

              <li>
                Add fragrance and other optional ingredients according to the
                formulation you are using.
              </li>

              <li>
                Test a small batch before making a large quantity.
              </li>

              <li>
                Store dry ingredients in a suitable dry environment and avoid
                adding moisture too early.
              </li>
            </ul>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  How much baking soda do I need for a bath bomb?
                </summary>

                <p className="mt-3">
                  With a 1:2 ratio, use two parts baking soda for every one
                  part citric acid. For example, 100 grams of citric acid
                  corresponds to 200 grams of baking soda.
                </p>
              </details>

              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  What is the 1:2 bath bomb ratio?
                </summary>

                <p className="mt-3">
                  It means one part citric acid is combined with two parts
                  baking soda. The ratio can be scaled up or down while
                  maintaining the same proportions.
                </p>
              </details>

              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Can I calculate a bath bomb recipe in grams?
                </summary>

                <p className="mt-3">
                  Yes. Enter the desired total batch weight and the calculator
                  will show the calculated ingredient amounts in grams and
                  ounces.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Does this calculator include epsom salt bath benefits?
                </summary>

                <p className="mt-3">
                  Yes, you can add 10-20g epsom salt separately. While the core 1:2 ratio is for citric and baking soda, many users add epsom salt for extra epsom salt bath benefits.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Can I use this as a bath bomb ingredients calculator?
                </summary>

                <p className="mt-3">
                  Yes, this works as a bath bomb ingredients calculator, bath bomb ratio calculator uk, and bath bomb calculator grams — just enter your total batch weight.
                </p>
              </details>
            </div>

            <p className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-500">
              Note: A 1:2 ratio is a simple starting ratio for the dry base.
              Finished bath bomb formulations can contain additional
              ingredients and may require testing and adjustment for the
              specific recipe, ingredients and desired result.
            </p>
          </div>
          <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              More Craft & DIY Calculators
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Making candles, wax melts or other DIY products? Try these related
              calculators to make your measurements easier.
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
                  Calculate fragrance oil amounts for candles, wax melts and different
                  types of wax.
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">
                  Calculate fragrance load →
                </span>
              </Link>

              <Link
                to="/candle-wax-calculator"
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="text-3xl">🕯️</div>

                <h3 className="mt-3 font-bold text-slate-900">
                  Candle Wax Calculator
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Calculate how much candle wax you need for a jar or container size.
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">
                  Calculate candle wax →
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

export default BathBombRatioCalculator;