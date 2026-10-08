import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculateAPercentage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Calculate a Percentage",
    description:
      "Learn how to calculate percentages using a simple formula with practical examples.",
    author: {
      "@type": "Organization",
      name: "Caltrixaa",
    },
    publisher: {
      "@type": "Organization",
      name: "Caltrixaa",
    },
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://caltrixaa.vercel.app/blog/how-to-calculate-a-percentage",
    },
  };

  return (
    <>
      <SEO
        title="How to Calculate a Percentage | Caltrixaa"
        description="Learn how to calculate a percentage using a simple formula, with easy examples for everyday calculations."
        keywords="how to calculate a percentage, percentage formula, percentage calculator, calculate percentage"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">

          <nav className="mb-8 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>{" "}
            / Math & Numbers / Percentage Guide
          </nav>

          <header>
            <div className="mb-4 text-5xl">％</div>

            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              How to Calculate a Percentage
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Learn the basic percentage formula and how to use it with
              simple real-world examples.
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate a percentage, divide the part by the whole and
              multiply the result by 100. The basic formula is:
              Percentage = (Part ÷ Whole) × 100.
            </p>
          </section>

          <section className="mt-10 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is a Percentage?
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                A percentage expresses a number as a fraction of 100. The
                word percent means "per hundred."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Percentage Formula
              </h2>

              <div className="mt-4 rounded-xl bg-slate-900 p-5 text-white">
                Percentage = (Part ÷ Whole) × 100
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Example
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                Suppose 25 students are in a class and 20 passed an exam.
              </p>

              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                Percentage = (20 ÷ 25) × 100
                <br />
                Percentage = 80%
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Where Are Percentages Used?
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>Discounts</li>
                <li>Exam results</li>
                <li>Business calculations</li>
                <li>Statistics</li>
                <li>Price changes</li>
                <li>Interest and financial calculations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Mistakes
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>Using the wrong whole value</li>
                <li>Forgetting to multiply by 100</li>
                <li>Confusing percentage with percentage points</li>
                <li>Rounding too early</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Key Takeaways
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>A percentage represents a value out of 100.</li>
                <li>Divide the part by the whole.</li>
                <li>Multiply by 100 to convert the result into a percentage.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-semibold">
                    What is the basic percentage formula?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-700">
                    The basic formula is part divided by whole, multiplied by
                    100.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    How can I calculate a percentage quickly?
                  </h3>

                  <p className="mt-2 leading-7 text-slate-700">
                    You can use the percentage formula or enter the values into
                    a percentage calculator.
                  </p>
                </div>
              </div>
            </div>

          </section>

          <section className="mt-12 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-2xl font-bold">
              Calculate a Percentage
            </h2>

            <p className="mt-3 text-slate-600">
              Use the Caltrixaa percentage calculator for quick calculations.
            </p>

            <Link
              to="/percentage-calculator"
              className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
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

export default HowToCalculateAPercentage;