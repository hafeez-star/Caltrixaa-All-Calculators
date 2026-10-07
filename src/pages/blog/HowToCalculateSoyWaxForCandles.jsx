import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculateSoyWaxForCandles() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Calculate Soy Wax for Candles",
    description:
      "Learn how to calculate soy wax for candle jars using container fill weight, fragrance load and batch size.",
    url:
      "https://caltrixaa.vercel.app/blog/how-to-calculate-soy-wax-for-candles",
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
        title="How to Calculate Soy Wax for Candles"
        description="Learn how to calculate soy wax for candles, jars and batches using fill weight, fragrance load and simple weight-based calculations."
        keywords="soy wax calculator, soy wax calculator for candles, soy candle calculator, how much soy wax do I need"
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
            <span>Soy Wax</span>
          </nav>

          <header className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Candle Making Guide
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              How to Calculate Soy Wax for Candles
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn how to estimate soy wax for candle jars and batches using
              container fill weight and fragrance calculations.
            </p>
          </header>

          <div className="rounded-2xl bg-green-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Quick Answer</h2>
            <p className="mt-3 leading-7">
              To calculate soy wax, first determine the target finished weight
              of your candle. Then account for the fragrance amount according
              to your formula. For repeatable batches, weigh both soy wax and
              fragrance rather than relying only on container volume.
            </p>
          </div>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Much Soy Wax Do I Need?
              </h2>
              <p className="mt-3 leading-7">
                The amount depends on your container's target fill weight,
                number of candles and fragrance formulation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Soy Wax for a Candle Jar?
              </h2>
              <p className="mt-3 leading-7">
                Start by determining how much finished candle material the jar
                should contain. Once the target weight is known, calculate the
                wax and fragrance according to your formulation.
              </p>

              <p className="mt-3 leading-7">
                For example, if your formulation requires 500 g of soy wax and
                uses a 6% fragrance load based on wax weight:
              </p>

              <div className="my-5 rounded-xl border bg-white p-5 font-semibold">
                500 g × 6% = 30 g fragrance
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Soy Wax for Multiple Candles?
              </h2>
              <p className="mt-3 leading-7">
                Multiply the wax requirement for one candle by the number of
                candles, then account for your production process and expected
                waste.
              </p>

              <p className="mt-3 leading-7">
                Example: if one candle requires 300 g wax, ten candles require:
              </p>

              <div className="my-5 rounded-xl border bg-white p-5 font-semibold">
                300 × 10 = 3,000 g soy wax
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Why Should Soy Wax Be Measured by Weight?
              </h2>
              <p className="mt-3 leading-7">
                Weight-based measurement is easier to reproduce across batches.
                Container volume alone does not tell you the exact mass of the
                finished candle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What About Soy Wax and Fragrance Load?
              </h2>
              <p className="mt-3 leading-7">
                Soy wax can have manufacturer-specific fragrance
                recommendations. Do not assume that every soy wax performs
                identically.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600"
              >
                Calculate Fragrance Load →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Soy Wax Calculation Mistakes
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Using container volume as the final wax weight.</li>
                <li>Forgetting fragrance when calculating total fill weight.</li>
                <li>Ignoring the specific wax manufacturer's guidance.</li>
                <li>Not accounting for production waste.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold">Key Takeaways</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Use weight for repeatable candle batches.</li>
                <li>Determine container fill weight first.</li>
                <li>Account for fragrance separately according to your formula.</li>
                <li>Check the specific soy wax manufacturer's guidance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-bold">How much soy wax do I need?</h3>
                  <p className="mt-2 leading-7">
                    It depends on your target candle fill weight and number of
                    candles.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    How do I calculate soy wax for a jar?
                  </h3>
                  <p className="mt-2 leading-7">
                    Determine the target fill weight and calculate your wax and
                    fragrance according to the formula.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Can I calculate soy wax for multiple candles?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes. Multiply the per-candle requirement by the number of
                    candles.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Should soy wax be measured by weight?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes. Weight provides better batch consistency.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Does every soy wax have the same fragrance limit?
                  </h3>
                  <p className="mt-2 leading-7">
                    No. Check the specifications for the wax you are using.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-green-600 p-7 text-white">
              <h2 className="text-2xl font-bold">Calculate Soy Wax</h2>
              <p className="mt-3">
                Use the Caltrixaa Soy Wax Calculator for quick candle batch
                calculations.
              </p>
              <Link
                to="/soy-wax-calculator"
                className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-green-700"
              >
                Open Soy Wax Calculator
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculateSoyWaxForCandles;