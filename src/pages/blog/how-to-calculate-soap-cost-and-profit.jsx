import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function HowToCalculateSoapCostAndProfit() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Calculate Soap Cost and Profit",
    description:
      "Learn how to calculate handmade soap costs, selling price, profit per bar, packaging, labor and batch expenses.",
    url: "https://caltrixaa.vercel.app/blog/how-to-calculate-soap-cost-and-profit",
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
        title="How to Calculate Soap Cost and Profit | Caltrixaa"
        description="Learn how to calculate handmade soap costs, selling price, profit per bar, packaging and labor with a practical soap cost calculator."
        keywords="soap cost calculator, soap profit calculator, soap calculator, handmade soap cost calculator, soap pricing calculator"
        schema={schema}
      />

      <main className="min-h-screen bg-stone-50 px-4 py-10">
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

            Soap Cost & Profit
          </nav>

          <header className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Soap Making Guide
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              How to Calculate Soap Cost and Profit
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Handmade soap pricing becomes much easier when you know the
              actual cost of ingredients, packaging and labor. This guide
              explains a simple way to estimate your cost per bar and choose a
              selling price.
            </p>

            <div className="mt-6 text-sm text-slate-500">
              Published October 5, 2026 · Caltrixaa
            </div>
          </header>

          <section className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-lime-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Calculate Your Soap Cost
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Use the Caltrixaa Soap Cost & Profit Calculator to organize
              ingredient costs, packaging, labor and profit calculations.
            </p>

            <Link
              to="/soap-cost-profit-calculator"
              className="mt-5 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Use Soap Cost Calculator
            </Link>
          </section>

          <div className="mt-8 space-y-8">

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                What Should Be Included in Soap Cost?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                The cost of a handmade soap bar is more than the cost of the
                oils. A useful cost calculation can include ingredients,
                fragrance or essential oils, packaging, labels and labor.
              </p>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>• Oils and butters</li>
                <li>• Lye or other required ingredients</li>
                <li>• Fragrance or essential oils</li>
                <li>• Colorants and additives</li>
                <li>• Packaging and labels</li>
                <li>• Labor</li>
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                How to Calculate Cost Per Soap Bar
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Start by adding the costs associated with the complete batch.
                Then determine how many finished bars you expect to sell from
                that batch.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-100 p-5">
                <p className="font-semibold text-slate-900">
                  Basic idea:
                </p>

                <p className="mt-2 text-slate-700">
                  Cost per bar = total batch cost ÷ number of finished bars
                </p>
              </div>

              <p className="mt-4 leading-8 text-slate-700">
                For example, if a complete batch costs 2,000 in your chosen
                currency and produces 20 finished bars, the ingredient and
                production cost would be 100 per bar before adding a profit
                margin.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                How Do You Price Handmade Soap?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                After calculating your cost per bar, you need to decide how
                much profit you want to make. Your final price can also depend
                on your market, packaging, brand positioning, selling
                platform, delivery costs and other business expenses.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A simple cost-plus approach starts with your cost per bar and
                adds a target margin or markup. More detailed pricing may also
                account for overhead and selling fees.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                What About Lye Cost?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                If lye is part of your soap-making process, its cost should be
                included in your overall production cost.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                The amount and type of lye required for an actual soap recipe
                depends on the oils, their SAP values, lye purity, superfat
                level and whether you are using sodium hydroxide or potassium
                hydroxide.
              </p>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Important:
                </p>

                <p className="mt-2 leading-7 text-amber-800">
                  This article and the cost calculator should not be used as a
                  substitute for a properly calculated and safety-checked lye
                  recipe.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                How to Calculate Soap Profit
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Once you know your selling price and production cost, you can
                estimate the profit per bar.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-100 p-5">
                <p className="font-semibold text-slate-900">
                  Basic idea:
                </p>

                <p className="mt-2 text-slate-700">
                  Profit per bar = selling price − cost per bar
                </p>
              </div>

              <p className="mt-4 leading-8 text-slate-700">
                If you sell multiple bars each month, multiplying the estimated
                profit per bar by the number of bars sold gives you a simple
                monthly profit estimate.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Why Use a Soap Cost Calculator?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Manually calculating ingredient costs for every batch can
                become time-consuming. A calculator gives you a repeatable
                method for checking your costs and comparing different
                pricing scenarios.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                This is especially useful when ingredient prices change or
                when you want to test different selling prices.
              </p>

              <Link
                to="/soap-cost-profit-calculator"
                className="mt-5 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Open Soap Cost & Profit Calculator
              </Link>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Final Thoughts
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Good soap pricing starts with knowing your real production
                cost. Include the ingredients, packaging and labor that apply
                to your business, then choose a selling price that makes sense
                for your market and desired profit.
              </p>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}

export default HowToCalculateSoapCostAndProfit;