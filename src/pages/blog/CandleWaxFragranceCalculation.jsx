import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function CandleWaxFragranceCalculation() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Calculate Candle Wax and Fragrance Oil",
    description:
      "Learn how to calculate candle wax and fragrance oil in grams using simple percentage calculations for candle making.",
    url: "https://caltrixaa.vercel.app/blog/candle-wax-fragrance-calculation",
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
  };

  return (
    <>
      <SEO
        title="How to Calculate Candle Wax and Fragrance Oil | Caltrixaa"
        description="Learn how to calculate candle wax and fragrance oil in grams using simple candle-making calculations and fragrance load percentages."
        keywords="candle wax calculator, candle fragrance calculator, candle wax and fragrance calculator, fragrance oil calculator, candle making calculator"
        schema={schema}
      />

      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <article className="mx-auto max-w-4xl">

          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-slate-500">
            <Link
              to="/"
              className="transition hover:text-indigo-600"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link
              to="/blog"
              className="transition hover:text-indigo-600"
            >
              Blog
            </Link>

            <span className="mx-2">/</span>

            <span>Candle Wax & Fragrance</span>
          </nav>

          {/* Header */}
          <header className="rounded-3xl bg-white p-6 shadow-sm md:p-10">

            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Candle Making Guide
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              How to Calculate Candle Wax and Fragrance Oil
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn how to calculate the amount of candle wax and fragrance
              oil you need for a candle batch. This guide explains the basic
              calculations in grams and shows how wax weight and fragrance
              load work together.
            </p>

            <div className="mt-6 text-sm text-slate-500">
              Published October 5, 2026 · Caltrixaa
            </div>

          </header>

          {/* Main Calculator CTA */}
          <section className="mt-8 rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 p-6 md:p-8">

            <h2 className="text-2xl font-bold text-slate-900">
              Calculate Candle Wax and Fragrance
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              If you already know your container size or target candle
              weight, use our free calculator to make the calculation faster.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <Link
                to="/candle-wax-calculator"
                className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                Candle Wax Calculator
              </Link>

              <Link
                to="/fragrance-load-calculator"
                className="rounded-xl border border-orange-200 bg-white px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                Fragrance Load Calculator
              </Link>

            </div>

          </section>

          {/* Article Content */}
          <div className="mt-8 space-y-8">

            {/* Section 1 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                Why Calculate Candle Wax and Fragrance Oil?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                When making candles, guessing the amount of wax or fragrance
                oil can make it difficult to produce consistent batches.
                Measuring everything by weight makes your candle-making
                process easier to repeat.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A proper calculation can also help reduce wasted materials.
                This is especially useful when making several candles using
                the same container size.
              </p>

            </section>

            {/* Section 2 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                How to Calculate Candle Wax
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                The first step is to determine how much finished candle
                material your container should hold. Container volume and
                finished weight are not exactly the same thing because
                different waxes have different densities.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                If you already know the approximate finished weight of your
                candle, you can use that value as the starting point for
                calculating your wax and fragrance amounts.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-100 p-5">

                <p className="font-semibold text-slate-900">
                  Basic candle calculation:
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  Finished candle weight = wax + fragrance oil
                </p>

              </div>

              <p className="mt-4 leading-8 text-slate-700">
                The exact wax amount depends on how you define your fragrance
                percentage and the formulation you are using.
              </p>

            </section>

            {/* Section 3 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                How to Calculate Fragrance Oil for Candles
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Fragrance oil is normally calculated as a percentage in
                relation to the wax amount or according to the specific
                formulation method being used.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A simple percentage calculation can be written as:
              </p>

              <div className="mt-6 rounded-2xl bg-indigo-50 p-5">

                <p className="font-semibold text-slate-900">
                  Fragrance calculation:
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  Fragrance oil = wax weight × fragrance percentage
                </p>

              </div>

              <p className="mt-4 leading-8 text-slate-700">
                For example, if your wax weight is 500 grams and your selected
                fragrance percentage is 6%, convert 6% to 0.06 before doing
                the multiplication.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-100 p-5">

                <p className="font-semibold text-slate-900">
                  Example:
                </p>

                <p className="mt-2 text-slate-700">
                  500 × 0.06 = 30 grams
                </p>

              </div>

              <p className="mt-4 leading-8 text-slate-700">
                So, under this calculation method, 500 grams of wax at a 6%
                fragrance load would correspond to 30 grams of fragrance oil.
              </p>

            </section>

            {/* Section 4 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                What Is Fragrance Load?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Fragrance load describes the amount of fragrance oil used in
                relation to wax. It is commonly expressed as a percentage.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                The suitable percentage is not automatically the same for
                every candle. Different waxes and fragrance oils can have
                different recommended usage limits.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Always check the technical information and recommended usage
                range provided by your wax and fragrance suppliers.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-5 inline-block font-semibold text-indigo-600 transition hover:text-indigo-800"
              >
                Calculate Fragrance Load →
              </Link>

            </section>

            {/* Section 5 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                How to Calculate Candle Wax and Fragrance Together
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                When you know the desired finished candle weight, you need to
                account for both wax and fragrance oil. This is where the
                calculation method becomes important.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                For example, suppose your target finished candle weight is
                530 grams and your formulation uses 30 grams of fragrance oil.
                The remaining weight would be approximately 500 grams of wax.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">

                <div className="grid grid-cols-2 bg-slate-100 p-4 font-semibold text-slate-900">
                  <span>Material</span>
                  <span>Weight</span>
                </div>

                <div className="grid grid-cols-2 border-t border-slate-200 p-4 text-slate-700">
                  <span>Wax</span>
                  <span>500 g</span>
                </div>

                <div className="grid grid-cols-2 border-t border-slate-200 p-4 text-slate-700">
                  <span>Fragrance oil</span>
                  <span>30 g</span>
                </div>

                <div className="grid grid-cols-2 border-t border-slate-200 p-4 font-semibold text-slate-900">
                  <span>Total</span>
                  <span>530 g</span>
                </div>

              </div>

            </section>

            {/* Section 6 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                Candle Wax Calculator for Jar and Container Candles
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Container candles come in many different sizes, so manually
                calculating the required wax for every jar can become
                inconvenient.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A candle wax calculator can help you estimate the amount of
                wax required based on your chosen measurements. You can then
                use the result with your fragrance calculation.
              </p>

              <Link
                to="/candle-wax-calculator"
                className="mt-5 inline-block rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                Open Candle Wax Calculator
              </Link>

            </section>

            {/* Section 7 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                Common Candle Calculation Mistakes
              </h2>

              <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                <li>
                  • Assuming container volume is exactly the same as wax
                  weight.
                </li>

                <li>
                  • Forgetting that fragrance oil contributes to the finished
                  candle weight.
                </li>

                <li>
                  • Using the same fragrance percentage for every wax and
                  fragrance combination.
                </li>

                <li>
                  • Ignoring the manufacturer's recommended fragrance limits.
                </li>

                <li>
                  • Changing measurement methods between different batches.
                </li>
              </ul>

            </section>

            {/* Section 8 */}
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-900">
                Tips for More Consistent Candle Batches
              </h2>

              <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                <li>
                  • Measure materials by weight using a suitable digital
                  scale.
                </li>

                <li>
                  • Keep a written record of each candle formula.
                </li>

                <li>
                  • Use the same calculation method throughout a batch.
                </li>

                <li>
                  • Test new wax and fragrance combinations before producing
                  large quantities.
                </li>

                <li>
                  • Follow supplier instructions for wax and fragrance
                  products.
                </li>
              </ul>

            </section>

            {/* Final CTA */}
            <section className="rounded-3xl bg-slate-900 p-6 text-white md:p-8">

              <h2 className="text-2xl font-bold">
                Ready to Calculate Your Candle Formula?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Use the Caltrixaa calculators to estimate your candle wax and
                fragrance amounts without doing the calculations manually.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <Link
                  to="/candle-wax-calculator"
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Candle Wax Calculator
                </Link>

                <Link
                  to="/fragrance-load-calculator"
                  className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Fragrance Load Calculator
                </Link>

              </div>

            </section>

          </div>
        </article>
      </main>
    </>
  );
}

export default CandleWaxFragranceCalculation;