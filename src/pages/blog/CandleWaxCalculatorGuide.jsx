import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function CandleWaxCalculatorGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Much Wax Do You Need for a Candle Jar?",
    description:
      "Learn how to calculate candle wax for a jar or container, including wax weight, fragrance oil and simple candle-making calculations.",
    url: "https://caltrixaa.vercel.app/blog/how-much-wax-for-candle-jar",
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    author: {
      "@type": "Organization",
      name: "Caltrixaa",
      url: "https://caltrixaa.vercel.app/",
    },
    publisher: {
      "@type": "Organization",
      name: "Caltrixaa",
      url: "https://caltrixaa.vercel.app/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://caltrixaa.vercel.app/blog/how-much-wax-for-candle-jar",
    },
  };

  return (
    <>
      <SEO
        title="How Much Wax Do You Need for a Candle Jar? | Caltrixaa"
        description="Learn how to calculate candle wax for jars and containers, including wax weight, fragrance load and simple candle-making calculations."
        keywords="candle wax calculator, how much wax for candle jar, candle wax weight calculator, candle calculator"
        schema={schema}
      />

      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <article className="mx-auto max-w-4xl">

          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            Candle Wax
          </nav>

          {/* Header */}
          <header className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Candle Making Guide
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              How Much Wax Do You Need for a Candle Jar?
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Finding the right amount of wax for a candle jar can be
              confusing, especially when you are working with different
              container sizes, wax types and fragrance loads. This guide
              explains a simple way to estimate your candle wax in grams and
              connect the calculation with fragrance oil.
            </p>

            <div className="mt-6 text-sm text-slate-500">
              Published October 5, 2026 · Caltrixaa
            </div>
          </header>

          {/* Calculator CTA */}
          <section className="mt-8 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Want the calculation done for you?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Use the free Candle Wax Calculator to estimate the wax amount
              for your container instead of doing the calculation manually.
            </p>

            <Link
              to="/candle-wax-calculator"
              className="mt-5 inline-block rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              Use Candle Wax Calculator
            </Link>
          </section>

          {/* Content */}
          <div className="mt-8 space-y-8">

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Why Is Candle Wax Weight Important?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                When making candles, the container volume alone does not tell
                you exactly how many grams of wax you need. Wax has its own
                density, and the final candle also needs room for fragrance
                oil and other factors.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                An accurate estimate helps reduce wasted wax and makes it
                easier to prepare consistent batches. This is particularly
                useful when making several candles using the same container.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                How to Calculate Wax for a Candle Jar
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                A practical approach is to first determine the finished fill
                weight you want in the container. If you already know the
                approximate finished candle weight, you can use that as your
                starting point.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-100 p-5">
                <p className="font-semibold text-slate-900">
                  Basic idea:
                </p>

                <p className="mt-2 text-slate-700">
                  Finished candle weight = wax + fragrance oil
                </p>
              </div>

              <p className="mt-4 leading-8 text-slate-700">
                The exact calculation depends on how your wax and fragrance
                are measured and on the formulation you are using. For this
                reason, it is useful to keep your measurements consistent
                from batch to batch.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                What Is Fragrance Load?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Fragrance load describes the amount of fragrance oil used
                relative to the amount of wax. For example, a maker may choose
                a particular percentage based on the wax manufacturer's
                recommended usage range and the desired scent strength.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Fragrance limits vary by wax and fragrance product, so always
                follow the supplier's recommended usage and safety information
                rather than assuming one percentage works for every candle.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-5 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Calculate fragrance load →
              </Link>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Example Candle Calculation
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Suppose your target finished candle weight is 200 grams. The
                actual amount of wax required will depend on the fragrance
                percentage you choose and how your formulation defines the
                percentage.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Instead of repeatedly doing the math with a calculator, you
                can enter your values into the Caltrixaa Candle Wax Calculator
                and use the result as a starting point for your batch.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Common Candle Wax Calculation Mistakes
              </h2>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Confusing container volume with wax weight.</li>
                <li>• Forgetting that fragrance contributes to total weight.</li>
                <li>• Using the same fragrance percentage for every wax.</li>
                <li>• Ignoring the recommended fill level of the container.</li>
                <li>• Making a large batch without first testing a small one.</li>
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Final Thoughts
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Candle calculations become much easier once you consistently
                measure your container, finished weight, wax and fragrance.
                A calculator can save time and reduce repeated manual
                calculations when preparing candle batches.
              </p>

              <Link
                to="/candle-wax-calculator"
                className="mt-5 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Open Candle Wax Calculator
              </Link>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}

export default CandleWaxCalculatorGuide;