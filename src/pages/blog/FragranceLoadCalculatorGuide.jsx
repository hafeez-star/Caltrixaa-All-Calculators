import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function FragranceLoadCalculatorGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Is Fragrance Load for Candles?",
    description:
      "Learn what fragrance load means, how candle fragrance percentages work and how to calculate fragrance oil for wax.",
    url: "https://caltrixaa.vercel.app/blog/what-is-fragrance-load",
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
        title="What Is Fragrance Load for Candles? | Caltrixaa"
        description="Learn what candle fragrance load means, how to calculate fragrance oil percentages and how to use a fragrance load calculator."
        keywords="fragrance load calculator, candle fragrance load, fragrance oil calculator, wax fragrance load"
        schema={schema}
      />

      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <article className="mx-auto max-w-4xl">

          <nav className="mb-6 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2">/</span>

            <Link to="/blog" className="hover:text-indigo-600">
              Blog
            </Link>

            <span className="mx-2">/</span>
            Fragrance Load
          </nav>

          <header className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Candle Making Guide
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              What Is Fragrance Load for Candles?
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Fragrance load is an important calculation when making scented
              candles. Understanding the percentage helps you measure
              fragrance oil consistently and avoid guessing when preparing
              candle batches.
            </p>

            <div className="mt-6 text-sm text-slate-500">
              Published October 5, 2026 · Caltrixaa
            </div>
          </header>

          <section className="mt-8 rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Calculate Your Fragrance Load
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Enter your wax amount and fragrance percentage in our free
              calculator to quickly estimate the fragrance amount.
            </p>

            <Link
              to="/fragrance-load-calculator"
              className="mt-5 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
            >
              Use Fragrance Load Calculator
            </Link>
          </section>

          <div className="mt-8 space-y-8">

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                What Does Fragrance Load Mean?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Fragrance load is commonly used to describe the amount of
                fragrance oil used in relation to the amount of wax in a
                candle. It is usually expressed as a percentage.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                For example, if a candle maker is working with 500 grams of
                wax and wants to use a 6% fragrance load, the percentage is
                applied according to the maker's chosen calculation method.
                It is important to keep the same method throughout a batch.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Calculate Fragrance Oil?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                A simple percentage calculation starts with the wax weight and
                the fragrance percentage you want to use.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-100 p-5">
                <p className="font-semibold text-slate-900">
                  Basic calculation:
                </p>

                <p className="mt-2 text-slate-700">
                  Fragrance amount = wax weight × fragrance percentage
                </p>
              </div>

              <p className="mt-4 leading-8 text-slate-700">
                Convert the percentage into decimal form before multiplying.
                For example, 6% becomes 0.06.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Always check the specific wax and fragrance manufacturer's
                recommended usage range before choosing a percentage.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Why Does Fragrance Load Matter?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Measuring fragrance consistently makes it easier to reproduce
                candle batches. It also helps you record your formulas and
                compare results between different fragrances.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                More fragrance does not automatically mean a better candle.
                Wax type, fragrance formulation, wick selection and the
                supplier's recommended limits all matter.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Fragrance Load for Soy Wax
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Soy wax is commonly used for container candles, but the
                suitable fragrance percentage depends on the specific wax
                product and fragrance oil.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Instead of assuming that one fragrance percentage works for
                every soy wax, check the supplier's technical information and
                test your finished candle.
              </p>

              <Link
                to="/soy-wax-calculator"
                className="mt-5 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Open Soy Wax Calculator →
              </Link>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Fragrance Load for Wax Melts
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Wax melts also require careful fragrance measurement. The
                maximum suitable amount depends on the wax and fragrance
                combination.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A calculator can help you quickly convert a selected
                percentage into a fragrance weight for your batch.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Final Thoughts
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Fragrance load is simply a way to consistently measure
                fragrance in relation to wax. The useful part is not just the
                percentage itself, but applying it consistently while staying
                within the manufacturer's recommended limits.
              </p>

              <Link
                to="/fragrance-load-calculator"
                className="mt-5 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Calculate Fragrance Load
              </Link>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}

export default FragranceLoadCalculatorGuide;