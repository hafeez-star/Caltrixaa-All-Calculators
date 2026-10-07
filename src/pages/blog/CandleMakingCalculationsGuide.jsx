import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function CandleMakingCalculationsGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Candle Making Calculations: Wax, Fragrance and Wick",
    description:
      "A practical guide to candle making calculations including wax weight, fragrance load, container size and wick selection.",
    url:
      "https://caltrixaa.vercel.app/blog/candle-making-calculations-guide",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    author: {
      "@type": "Organization",
      name: "Caltrixaa",
    },
    publisher: {
      "@type": "Organization",
      name: "Caltrixaa",
    },
  };

  return (
    <>
      <SEO
        title="Candle Making Calculations: Wax, Fragrance & Wick"
        description="Learn the key candle making calculations for wax weight, fragrance load, candle containers and wick selection."
        keywords="candle making calculator, candle making calculations, candle calculator, candle wax calculator, candle fragrance calculator"
        schema={schema}
      />

      <Navbar />

      <main className="bg-slate-50">
        <article className="mx-auto max-w-4xl px-4 py-10">
          <nav className="mb-6 text-sm text-slate-500">
            <Link to="/">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog">Blog</Link>
            <span className="mx-2">/</span>
            <span>Candle Making Calculations</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Candle Making Calculations: Wax, Fragrance and Wick
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn the main calculations used when making container candles,
              from wax and fragrance quantities to wick selection.
            </p>
          </header>

          <div className="rounded-2xl bg-yellow-50 p-6">
            <h2 className="text-xl font-bold">Quick Answer</h2>
            <p className="mt-3 leading-7">
              Candle making involves several separate calculations: determining
              candle fill weight, calculating wax and fragrance, and selecting
              a suitable wick. The exact numbers depend on your container,
              wax, fragrance and formulation, so calculators should be used as
              starting points followed by testing.
            </p>
          </div>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Calculations Are Used in Candle Making?
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Candle fill weight</li>
                <li>Wax quantity</li>
                <li>Fragrance quantity</li>
                <li>Fragrance load</li>
                <li>Wick selection</li>
                <li>Batch quantity</li>
                <li>Production cost</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Candle Wax?
              </h2>

              <p className="mt-3 leading-7">
                Determine the intended finished fill weight of the container.
                Then calculate wax and fragrance according to your formulation.
              </p>

              <Link
                to="/candle-wax-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600"
              >
                Candle Wax Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Candle Fragrance?
              </h2>

              <p className="mt-3 leading-7">
                If fragrance load is based on wax weight, multiply wax weight by
                the selected percentage.
              </p>

              <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
                Fragrance = Wax Weight × Fragrance Load
              </div>

              <Link
                to="/fragrance-load-calculator"
                className="font-semibold text-indigo-600"
              >
                Fragrance Load Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Choose a Candle Wick?
              </h2>

              <p className="mt-3 leading-7">
                Start with container diameter and consider wax, fragrance and
                wick construction. Final selection should be verified through
                burn testing.
              </p>

              <Link
                to="/candle-wick-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600"
              >
                Candle Wick Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate a Candle Batch?
              </h2>

              <p className="mt-3 leading-7">
                Once you know the material requirement for one candle, multiply
                it by the number of candles in your batch. Keep a small process
                allowance if your production method regularly leaves material
                behind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Why Are Candle Calculations Important?
              </h2>

              <p className="mt-3 leading-7">
                Calculations make batches easier to reproduce and reduce
                unnecessary material waste. They are especially useful when
                making multiple candles with the same formula.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Candle Making Calculation Mistakes
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Guessing wax quantity.</li>
                <li>Confusing fragrance percentage with finished weight.</li>
                <li>Choosing a wick without testing.</li>
                <li>Ignoring supplier recommendations.</li>
                <li>Not recording successful formulas.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold">Key Takeaways</h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Calculate wax from the intended candle fill weight.</li>
                <li>Calculate fragrance according to your load method.</li>
                <li>Choose wick using the complete candle formulation.</li>
                <li>Test candles before final production.</li>
                <li>Record successful batch calculations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-bold">
                    What calculations are needed for candle making?
                  </h3>
                  <p className="mt-2">
                    Common calculations include wax, fragrance, fill weight,
                    batch size and wick selection.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    How do I calculate candle wax?
                  </h3>
                  <p className="mt-2">
                    Start with the intended fill weight and calculate the
                    formulation from there.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    How do I calculate candle fragrance?
                  </h3>
                  <p className="mt-2">
                    Apply the selected fragrance-load percentage according to
                    your formula.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    How do I choose a candle wick?
                  </h3>
                  <p className="mt-2">
                    Start with container diameter and consider the wax,
                    fragrance and wick type.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Should candle calculations be tested?
                  </h3>
                  <p className="mt-2">
                    Yes. Calculations provide starting values, while physical
                    testing verifies the final candle.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-yellow-500 p-7 text-white">
              <h2 className="text-2xl font-bold">
                Use the Candle Making Calculator
              </h2>

              <p className="mt-3">
                Calculate common candle-making quantities with Caltrixaa.
              </p>

              <Link
                to="/candle-making-calculator"
                className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-yellow-700"
              >
                Open Candle Making Calculator
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default CandleMakingCalculationsGuide;