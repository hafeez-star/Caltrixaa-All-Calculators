import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function FragranceLoadCalculatorGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "What Is Fragrance Load for Candles and Wax Melts?",
        description:
          "Learn what fragrance load means, how to calculate fragrance oil and why wax type matters for candles and wax melts.",
        url: "https://caltrixaa.vercel.app/blog/what-is-fragrance-load",
        datePublished: "2026-10-05",
        dateModified: "2026-10-06",
        author: {
          "@type": "Organization",
          name: "Caltrixaa",
        },
        publisher: {
          "@type": "Organization",
          name: "Caltrixaa",
          url: "https://caltrixaa.vercel.app/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does fragrance load mean?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Fragrance load is the percentage of fragrance oil used in a wax formulation. The exact recommended amount depends on the wax and fragrance supplier's specifications.",
            },
          },
          {
            "@type": "Question",
            name: "How do you calculate fragrance load?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "When fragrance load is based on wax weight, divide fragrance weight by wax weight and multiply by 100.",
            },
          },
          {
            "@type": "Question",
            name: "What is a 10% fragrance load?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "A 10% fragrance load means fragrance represents 10% of the wax weight when that calculation method is being used.",
            },
          },
          {
            "@type": "Question",
            name: "Is a higher fragrance load always better?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. Using more fragrance does not automatically create a better candle. Wax compatibility, fragrance characteristics and supplier limits all matter.",
            },
          },
          {
            "@type": "Question",
            name: "Can fragrance load be used for wax melts?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Fragrance load is also used when formulating wax melts, but the appropriate percentage depends on the wax and fragrance system.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="What Is Fragrance Load for Candles? Complete Guide"
        description="Learn what fragrance load means for candles and wax melts, how to calculate fragrance oil, and why wax type and supplier limits matter."
        keywords="fragrance load calculator, fragrance load calculator for candles, fragrance load calculator soy wax, wax melt fragrance load calculator, candle fragrance load"
        schema={schema}
      />

      <Navbar />

      <main className="bg-slate-50">
        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>Fragrance Load</span>
          </nav>

          <header className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-rose-600">
              Candle Making Guide
            </p>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              What Is Fragrance Load for Candles and Wax Melts?
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Understand fragrance load, learn the basic calculation and see
              how wax type and supplier recommendations affect fragrance oil
              usage.
            </p>
          </header>

          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Quick Answer</h2>

            <p className="mt-3 leading-7 text-slate-700">
              Fragrance load is the percentage of fragrance oil used in a wax
              formula. If the calculation is based on wax weight, divide the
              fragrance weight by the wax weight and multiply by 100. The
              maximum recommended load varies by wax, fragrance and supplier
              guidance.
            </p>
          </div>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Does Fragrance Load Mean?
              </h2>

              <p className="mt-3 leading-7">
                Fragrance load describes how much fragrance oil is included in
                a candle or wax formulation. It is normally expressed as a
                percentage.
              </p>

              <p className="mt-3 leading-7">
                For candle makers, understanding this number helps with
                consistent batch calculations and fragrance testing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Fragrance Load?
              </h2>

              <p className="mt-3 leading-7">
                If fragrance load is calculated against wax weight, use:
              </p>

              <div className="my-5 rounded-xl bg-slate-900 p-5 text-center text-lg font-semibold text-white">
                Fragrance Load = Fragrance Weight ÷ Wax Weight × 100
              </div>

              <p className="leading-7">
                For example, 30 g of fragrance used with 500 g of wax gives:
              </p>

              <div className="my-5 rounded-xl border bg-white p-5 font-semibold">
                30 ÷ 500 × 100 = 6%
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Much Fragrance Oil Should You Use?
              </h2>

              <p className="mt-3 leading-7">
                There is no single percentage that is ideal for every candle.
                The correct amount depends on the wax, fragrance oil,
                formulation and supplier recommendations.
              </p>

              <p className="mt-3 leading-7">
                A higher fragrance load can change candle performance, texture
                and burn characteristics. More fragrance does not necessarily
                mean a stronger or better candle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is Fragrance Load for Soy Wax?
              </h2>

              <p className="mt-3 leading-7">
                Soy wax formulas can have their own recommended fragrance
                ranges. However, you should not assume that a percentage used
                successfully with one soy wax will work identically with
                another.
              </p>

              <p className="mt-3 leading-7">
                Check the technical information provided for the specific wax
                and fragrance you are using.
              </p>

              <Link
                to="/soy-wax-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:underline"
              >
                Explore the Soy Wax Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What About Fragrance Load for Wax Melts?
              </h2>

              <p className="mt-3 leading-7">
                Wax melts also use fragrance load calculations. The same basic
                percentage concept can be applied, but the appropriate amount
                depends on the wax and fragrance system.
              </p>

              <p className="mt-3 leading-7">
                Always check the supplier's usage recommendations rather than
                automatically copying a percentage from a different wax.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is a 10% Fragrance Load?
              </h2>

              <p className="mt-3 leading-7">
                When fragrance load is calculated against wax weight, a 10%
                load means 10 g of fragrance for every 100 g of wax.
              </p>

              <p className="mt-3 leading-7">
                For example, with 500 g of wax:
              </p>

              <div className="my-5 rounded-xl border bg-white p-5 font-semibold">
                500 × 0.10 = 50 g fragrance
              </div>

              <p className="leading-7">
                Whether 10% is appropriate is a separate question. The wax and
                fragrance supplier's limits should always be checked.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Fragrance Load Mistakes
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Assuming every wax supports the same fragrance percentage.</li>
                <li>Confusing fragrance percentage with total finished weight.</li>
                <li>Increasing fragrance automatically to get more scent.</li>
                <li>Ignoring supplier documentation.</li>
                <li>Changing wax and fragrance at the same time during testing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Can a Fragrance Load Calculator Help?
              </h2>

              <p className="mt-3 leading-7">
                A calculator reduces repetitive percentage calculations and
                makes it easier to work with different wax weights and
                fragrance-load percentages.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-4 inline-block rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Open Fragrance Load Calculator
              </Link>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Key Takeaways
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Fragrance load is normally expressed as a percentage.</li>
                <li>The calculation method must be understood before calculating.</li>
                <li>Wax and fragrance compatibility matters.</li>
                <li>Higher fragrance load is not automatically better.</li>
                <li>Supplier recommendations should guide the final formula.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-bold text-slate-900">
                    What does fragrance load mean?
                  </h3>
                  <p className="mt-2 leading-7">
                    It describes the percentage of fragrance oil used in a wax
                    formulation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    How do you calculate fragrance load?
                  </h3>
                  <p className="mt-2 leading-7">
                    Divide fragrance weight by wax weight and multiply by 100
                    when using the wax-weight method.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    What is a 10% fragrance load?
                  </h3>
                  <p className="mt-2 leading-7">
                    Under the wax-weight method, it means 10 g fragrance per
                    100 g wax.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Is a higher fragrance load always better?
                  </h3>
                  <p className="mt-2 leading-7">
                    No. The suitable amount depends on the wax, fragrance and
                    supplier recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Can fragrance load be used for wax melts?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes, but the appropriate percentage depends on the wax and
                    fragrance system.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-rose-600 p-7 text-white">
              <h2 className="text-2xl font-bold">
                Calculate Your Fragrance Load
              </h2>

              <p className="mt-3 leading-7 text-rose-50">
                Quickly calculate fragrance amounts for your wax using the
                Caltrixaa Fragrance Load Calculator.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-rose-700 hover:bg-rose-50"
              >
                Calculate Fragrance Load
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default FragranceLoadCalculatorGuide;