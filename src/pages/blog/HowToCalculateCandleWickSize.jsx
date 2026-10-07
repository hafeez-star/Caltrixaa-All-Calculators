import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculateCandleWickSize() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Calculate Candle Wick Size",
    description:
      "Learn how to estimate candle wick size using container diameter, wax type and candle formulation.",
    url:
      "https://caltrixaa.vercel.app/blog/how-to-calculate-candle-wick-size",
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
        title="How to Calculate Candle Wick Size"
        description="Learn how to estimate candle wick size from container diameter, wax type and fragrance load, then verify the result with burn testing."
        keywords="candle wick calculator, candle wick size calculator, how to calculate candle wick size, wick calculator"
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
            <span>Candle Wick</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              How to Calculate Candle Wick Size
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A practical guide to estimating candle wick size and understanding
              why the final wick must be tested with the actual wax and
              container.
            </p>
          </header>

          <div className="rounded-2xl bg-amber-50 p-6">
            <h2 className="text-xl font-bold">Quick Answer</h2>
            <p className="mt-3 leading-7">
              Candle wick selection usually starts with the inside diameter of
              the container. Wax type, fragrance, wick construction and other
              formulation details then affect the choice. A wick calculator can
              provide a starting point, but burn testing is needed to verify
              the final selection.
            </p>
          </div>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is a Candle Wick Calculator?
              </h2>
              <p className="mt-3 leading-7">
                A candle wick calculator helps estimate a suitable starting
                wick based on measurements and candle characteristics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Measurement Is Most Important?
              </h2>
              <p className="mt-3 leading-7">
                For a single-wick container candle, the inside diameter is an
                important starting measurement. Measure the container where the
                wax will actually sit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Why Does Wax Type Matter?
              </h2>
              <p className="mt-3 leading-7">
                Different wax systems can behave differently during burning.
                Therefore, the same wick size may not produce identical results
                in every wax.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Does Fragrance Affect Wick Selection?
              </h2>
              <p className="mt-3 leading-7">
                Fragrance changes the candle formulation and can affect burn
                behavior. That is why a wick that works in an unscented test
                may not behave exactly the same way in a scented candle.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600"
              >
                Fragrance Load Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Should You Test a Candle Wick?
              </h2>
              <p className="mt-3 leading-7">
                Make a test candle using the actual container, wax, fragrance
                and wick. Record observations consistently and compare several
                suitable wick options when necessary.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Candle Wick Calculation Mistakes
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Using only container height.</li>
                <li>Ignoring container diameter.</li>
                <li>Assuming one wick works with every wax.</li>
                <li>Skipping burn testing.</li>
                <li>Changing several variables during one test.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold">Key Takeaways</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Start with inside container diameter.</li>
                <li>Consider wax and fragrance.</li>
                <li>Use a calculator as a starting point.</li>
                <li>Verify the wick with testing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-bold">
                    How do I calculate candle wick size?
                  </h3>
                  <p className="mt-2">
                    Start with container diameter and then consider wax,
                    fragrance and wick type.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Does container diameter affect wick size?
                  </h3>
                  <p className="mt-2">
                    Yes. Diameter is an important starting measurement.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Does wax type affect wick selection?
                  </h3>
                  <p className="mt-2">
                    Yes. Different waxes can require different wick choices.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Should I burn test the wick?
                  </h3>
                  <p className="mt-2">
                    Yes. The final selection should be verified in the actual
                    candle.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    Can one wick work for all candle jars?
                  </h3>
                  <p className="mt-2">
                    No. Candle formulation and container dimensions vary.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-amber-500 p-7 text-white">
              <h2 className="text-2xl font-bold">
                Calculate Your Starting Wick Size
              </h2>

              <Link
                to="/candle-wick-calculator"
                className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-amber-700"
              >
                Open Candle Wick Calculator
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculateCandleWickSize;