import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function HowToChooseCandleWickSize() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Choose the Right Candle Wick Size",
        description:
          "Learn how to choose candle wick size based on container diameter, wax type and fragrance load, with practical testing tips.",
        url:
          "https://caltrixaa.vercel.app/blog/how-to-choose-candle-wick-size",
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
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I choose a candle wick size?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Start with the candle container diameter, then consider the wax, fragrance load and wick family. Test the selected wick in the actual candle before final production.",
            },
          },
          {
            "@type": "Question",
            name: "Does candle diameter affect wick size?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Wider candles generally require a wick system capable of creating a sufficiently large melt pool, but the correct size depends on the complete candle formula.",
            },
          },
          {
            "@type": "Question",
            name: "Can I choose a wick based only on wax?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. Wax is important, but container diameter, fragrance, dye, wick type and other formulation factors can also affect candle performance.",
            },
          },
          {
            "@type": "Question",
            name: "Should every wick size be burn tested?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. A calculator can provide a starting point, but final wick selection should be verified through controlled burn testing.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use the same wick for every candle?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. Different waxes, containers, fragrances and wick families can perform differently.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="How to Choose the Right Candle Wick Size"
        description="Learn how to choose candle wick size using container diameter, wax type and fragrance load, plus practical wick testing tips."
        keywords="wick size calculator, candle wick size calculator, how to choose candle wick size, candle wick guide"
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
            <span>Wick Size</span>
          </nav>

          <header className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Candle Making Guide
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              How to Choose the Right Candle Wick Size
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn how container diameter, wax and fragrance affect wick
              selection and how to test a wick before producing candles.
            </p>
          </header>

          <div className="rounded-2xl bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Quick Answer</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Choose a candle wick by starting with the container diameter and
              then considering wax type, fragrance load and wick family. A wick
              calculator can help narrow the options, but the final choice
              should always be tested in the actual candle.
            </p>
          </div>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Why Is Candle Wick Size Important?
              </h2>
              <p className="mt-3 leading-7">
                The wick controls how efficiently the candle burns. A wick that
                is too small may struggle to create an appropriate melt pool,
                while an unsuitable larger wick can produce excessive heat or
                other unwanted burn characteristics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Factors Affect Wick Size?
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Container diameter</li>
                <li>Wax type</li>
                <li>Fragrance load</li>
                <li>Colorants and additives</li>
                <li>Wick material and construction</li>
                <li>Candle height and overall design</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Choose a Wick for a Candle Jar?
              </h2>
              <p className="mt-3 leading-7">
                Measure the inside diameter of the jar first. Use that
                measurement with the wax and wick manufacturer's guidance to
                select a starting wick. Then test the candle using the actual
                wax, fragrance and container combination.
              </p>

              <Link
                to="/wick-size-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:underline"
              >
                Try the Wick Size Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Why Should You Burn Test a Candle?
              </h2>
              <p className="mt-3 leading-7">
                Wick selection is not determined by one measurement alone.
                Burn testing shows how the complete formulation behaves in the
                real container.
              </p>
              <p className="mt-3 leading-7">
                Test candles should be observed consistently and documented so
                different wick options can be compared.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Wick Selection Mistakes
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Choosing a wick using diameter alone.</li>
                <li>Changing wax and wick simultaneously during testing.</li>
                <li>Ignoring fragrance load.</li>
                <li>Skipping burn tests.</li>
                <li>Assuming one wick works for every container.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Key Takeaways
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Start with the inside container diameter.</li>
                <li>Consider the entire candle formula.</li>
                <li>Use calculators as a starting point.</li>
                <li>Always test the final wick choice.</li>
                <li>Keep records of successful candle tests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-bold">How do I choose a candle wick size?</h3>
                  <p className="mt-2 leading-7">
                    Start with container diameter and then consider wax,
                    fragrance and wick type.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Does candle diameter affect wick size?</h3>
                  <p className="mt-2 leading-7">
                    Yes. Diameter is one of the most important starting
                    measurements.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Can I choose a wick based only on wax?</h3>
                  <p className="mt-2 leading-7">
                    No. Other formulation factors also affect performance.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Should I burn test every wick?</h3>
                  <p className="mt-2 leading-7">
                    Final wick selections should be verified through testing.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Can one wick work for every candle?</h3>
                  <p className="mt-2 leading-7">
                    No. Different candle systems can require different wick
                    choices.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-indigo-600 p-7 text-white">
              <h2 className="text-2xl font-bold">
                Find a Starting Wick Size
              </h2>
              <p className="mt-3">
                Use the Caltrixaa Wick Size Calculator before starting your
                candle testing.
              </p>
              <Link
                to="/wick-size-calculator"
                className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-indigo-700"
              >
                Open Wick Calculator
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToChooseCandleWickSize;