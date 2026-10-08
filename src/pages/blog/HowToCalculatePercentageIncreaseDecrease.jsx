import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

function HowToCalculatePercentageIncreaseDecrease() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Calculate Percentage Increase and Decrease",
        description:
          "Learn how to calculate percentage increase and decrease using simple formulas and practical examples.",
        author: {
          "@type": "Organization",
          name: "Caltrixaa",
        },
        publisher: {
          "@type": "Organization",
          name: "Caltrixaa",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://caltrixaa.vercel.app/blog/how-to-calculate-percentage-increase-decrease",
        },
        datePublished: "2026-10-08",
        dateModified: "2026-10-08",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://caltrixaa.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://caltrixaa.vercel.app/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Percentage Increase and Decrease",
            item:
              "https://caltrixaa.vercel.app/blog/how-to-calculate-percentage-increase-decrease",
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="How to Calculate Percentage Increase and Decrease"
        description="Learn how to calculate percentage increase and decrease with simple formulas, examples and practical calculations."
        keywords="how to calculate percentage increase, percentage decrease, percentage change, percentage increase formula"
        schema={schema}
      />

      <Navbar />

      <main className="bg-white">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2">/</span>

            <Link to="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
            <span className="mx-2">/</span>

            <span>Percentage Increase and Decrease</span>
          </nav>

          <header>
            <p className="mb-3 font-semibold text-indigo-600">
              Math & Numbers
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How to Calculate Percentage Increase and Decrease
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Learn how to compare an original value with a new value and
              calculate the percentage increase or decrease.
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate percentage increase, subtract the original value
              from the new value, divide by the original value, and multiply
              by 100. For a decrease, use the same comparison and interpret
              the result as a percentage decrease when the new value is
              smaller.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is Percentage Increase?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Percentage increase shows how much a value has grown compared
              with its original value.
            </p>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Percentage Increase = ((New − Original) ÷ Original) × 100
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Example of Percentage Increase
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Suppose a product originally costs $80 and its price increases
              to $100.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">
                Increase = 100 − 80 = 20
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Percentage increase = (20 ÷ 80) × 100 = 25%
              </p>
            </div>

            <p className="leading-8 text-slate-700">
              The price increased by 25% compared with the original price.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is Percentage Decrease?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Percentage decrease shows how much a value has fallen compared
              with its original value.
            </p>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Percentage Decrease = ((Original − New) ÷ Original) × 100
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Example of Percentage Decrease
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Suppose a price falls from $200 to $150.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">
                Decrease = 200 − 150 = 50
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Percentage decrease = (50 ÷ 200) × 100 = 25%
              </p>
            </div>

            <p className="leading-8 text-slate-700">
              The value decreased by 25%.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Does the Original Value Matter?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              The original value is used as the baseline because percentage
              change describes how large the change is relative to where the
              value started.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Using the new value instead can produce a different percentage,
              so it is important to identify the correct starting value.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Where Is Percentage Change Used?
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Product price changes</li>
              <li>Sales and revenue comparisons</li>
              <li>Population changes</li>
              <li>Test score comparisons</li>
              <li>Investment performance</li>
              <li>Business and financial reports</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Mistakes
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Dividing by the new value instead of the original.</li>
              <li>Forgetting to multiply by 100.</li>
              <li>Confusing absolute change with percentage change.</li>
              <li>Ignoring whether the value increased or decreased.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Takeaways
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Percentage increase measures growth from an original value.</li>
              <li>Percentage decrease measures a fall from an original value.</li>
              <li>The original value is the baseline.</li>
              <li>Multiply the final decimal result by 100.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you calculate percentage increase?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Subtract the original value from the new value, divide the
                  difference by the original value, and multiply by 100.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you calculate percentage decrease?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Subtract the new value from the original value, divide the
                  difference by the original value, and multiply by 100.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Is percentage change the same as percentage increase?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Percentage change is a general comparison. When the new
                  value is larger, the change is an increase; when it is
                  smaller, it is a decrease.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Calculate Percentage Changes Online
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Use the Caltrixaa Percentage Calculator for quick calculations.
            </p>

            <Link
              to="/percentage-calculator"
              className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Open Percentage Calculator →
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculatePercentageIncreaseDecrease;