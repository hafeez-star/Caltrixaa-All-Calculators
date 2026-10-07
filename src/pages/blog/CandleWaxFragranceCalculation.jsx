import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function CandleWaxFragranceCalculation() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Calculate Candle Wax and Fragrance Oil",
        description:
          "Learn how to calculate candle wax and fragrance oil by container size, wax weight and fragrance load with practical examples.",
        url:
          "https://caltrixaa.vercel.app/blog/candle-wax-fragrance-calculation",
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
            name: "How do you calculate candle wax?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Estimate the finished candle fill weight for the container, then account for the fragrance and wax relationship used by your formula.",
            },
          },
          {
            "@type": "Question",
            name: "How do you calculate fragrance oil for candles?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Multiply the appropriate fragrance-load percentage by the wax weight when your chosen formulation defines fragrance load relative to wax.",
            },
          },
          {
            "@type": "Question",
            name: "How much fragrance oil do I need for 500 g of wax?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "At a 6% fragrance load calculated against wax weight, 500 g of wax would require 30 g of fragrance oil.",
            },
          },
          {
            "@type": "Question",
            name: "What is fragrance load in candle making?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Fragrance load is the percentage of fragrance used in a candle formula. The exact safe amount depends on the wax, fragrance oil and supplier guidance.",
            },
          },
          {
            "@type": "Question",
            name: "Can I calculate candle wax for a jar?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. A candle wax calculator can help estimate the required wax and fragrance amounts for a jar or container based on its target fill weight and formula.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="How to Calculate Candle Wax and Fragrance Oil"
        description="Learn how to calculate candle wax and fragrance oil for jars and containers using wax weight, fragrance load and practical gram examples."
        keywords="candle wax calculator, candle wax calculator jar, candle fragrance calculator, candle wax and fragrance calculator, fragrance oil calculator"
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
            <span>Candle Wax & Fragrance</span>
          </nav>

          <header className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-600">
              Candle Making Guide
            </p>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              How to Calculate Candle Wax and Fragrance Oil
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn how to estimate candle wax and fragrance oil for jars,
              containers and small candle batches using simple weight-based
              calculations.
            </p>
          </header>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Quick Answer</h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate candle fragrance, first determine the wax weight
              required for your candle. Then apply your chosen fragrance-load
              percentage. For example, at a 6% fragrance load, 500 g of wax
              would require 30 g of fragrance oil when the load is calculated
              against wax weight.
            </p>
          </div>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Why Is Candle Wax Calculation Important?
              </h2>

              <p className="mt-3 leading-7">
                The amount of wax needed depends on the container, target fill
                weight and the way the candle formula is designed. Guessing can
                result in wasted wax, inconsistent candle sizes or an incorrect
                fragrance amount.
              </p>

              <p className="mt-3 leading-7">
                Weight-based calculations make candle making more repeatable,
                especially when producing multiple jars.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Candle Wax?
              </h2>

              <p className="mt-3 leading-7">
                Start by determining the target finished fill weight of the
                container. A practical way to do this is to weigh the amount of
                finished candle material your container is intended to hold.
              </p>

              <p className="mt-3 leading-7">
                Once you know the target fill weight, your wax and fragrance
                quantities can be calculated according to your formula.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Fragrance Oil for Candles?
              </h2>

              <p className="mt-3 leading-7">
                When fragrance load is expressed as a percentage of wax weight,
                use:
              </p>

              <div className="my-5 rounded-xl bg-slate-900 p-5 text-center text-lg font-semibold text-white">
                Fragrance Oil = Wax Weight × Fragrance Load
              </div>

              <p className="leading-7">
                Example:
              </p>

              <div className="my-5 rounded-xl border bg-white p-5">
                <p className="font-semibold">500 g × 6% = 30 g fragrance oil</p>
              </div>

              <p className="leading-7">
                Always check the wax manufacturer's and fragrance supplier's
                recommended usage limits before making a candle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is Fragrance Load?
              </h2>

              <p className="mt-3 leading-7">
                Fragrance load describes the amount of fragrance used in a
                candle formula. It is commonly expressed as a percentage.
              </p>

              <p className="mt-3 leading-7">
                Importantly, different waxes and fragrance oils can have
                different recommended maximum loads. A higher percentage is not
                automatically better.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:underline"
              >
                Try the Fragrance Load Calculator →
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Wax and Fragrance Together?
              </h2>

              <p className="mt-3 leading-7">
                This depends on how your formula defines the fragrance load.
                If the fragrance percentage is based on wax weight, calculate
                fragrance from the wax amount.
              </p>

              <p className="mt-3 leading-7">
                For example, with 500 g of wax and a 6% load:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Wax = 500 g</li>
                <li>Fragrance = 30 g</li>
                <li>Total mixture = 530 g</li>
              </ul>

              <p className="mt-3 leading-7">
                This distinction matters because some candle makers use the
                term fragrance load differently. Always follow the calculation
                method specified by the formulation or supplier.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Much Wax Do I Need for a Candle Jar?
              </h2>

              <p className="mt-3 leading-7">
                The answer depends on the jar's intended fill weight rather
                than simply its external dimensions. Different containers can
                have different internal volumes and fill levels.
              </p>

              <p className="mt-3 leading-7">
                Use the{" "}
                <Link
                  to="/candle-wax-calculator"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Candle Wax Calculator
                </Link>{" "}
                to simplify the calculation for container candles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Candle Calculation Mistakes
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Confusing container volume with finished candle weight.</li>
                <li>Using fragrance percentage without checking its basis.</li>
                <li>Ignoring supplier recommendations.</li>
                <li>Assuming every wax has the same fragrance capacity.</li>
                <li>Rounding measurements too aggressively.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Tips for More Consistent Candle Batches
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Use a digital scale rather than relying on volume.</li>
                <li>Record wax, fragrance and container weights.</li>
                <li>Keep the same formula when comparing test burns.</li>
                <li>Record the wax and fragrance batch information.</li>
                <li>Follow supplier recommendations for fragrance usage.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Key Takeaways
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Determine the target candle fill weight first.</li>
                <li>Calculate fragrance according to your chosen load method.</li>
                <li>A 6% load on 500 g wax equals 30 g fragrance.</li>
                <li>Different waxes can have different recommended fragrance limits.</li>
                <li>Use weight-based measurements for repeatable batches.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-bold text-slate-900">
                    How do you calculate candle wax?
                  </h3>
                  <p className="mt-2 leading-7">
                    Determine the target fill weight of the container and then
                    calculate the wax and fragrance according to your formula.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    How do you calculate fragrance oil for candles?
                  </h3>
                  <p className="mt-2 leading-7">
                    When the load is based on wax weight, multiply wax weight
                    by the fragrance-load percentage.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    How much fragrance oil do I need for 500 g wax?
                  </h3>
                  <p className="mt-2 leading-7">
                    At 6%, the calculation is 500 g × 0.06 = 30 g.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    What is fragrance load?
                  </h3>
                  <p className="mt-2 leading-7">
                    It is the percentage of fragrance used in a candle formula.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Can I calculate candle wax for a jar?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes. Use the target fill weight and your formula to estimate
                    the required wax and fragrance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-amber-500 p-7 text-white">
              <h2 className="text-2xl font-bold">
                Calculate Your Candle Wax and Fragrance
              </h2>

              <p className="mt-3 leading-7 text-amber-50">
                Use Caltrixaa's candle tools to calculate wax, fragrance load
                and other candle-making quantities more easily.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/candle-wax-calculator"
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50"
                >
                  Candle Wax Calculator
                </Link>

                <Link
                  to="/fragrance-load-calculator"
                  className="rounded-xl border border-white px-5 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Fragrance Load Calculator
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default CandleWaxFragranceCalculation;