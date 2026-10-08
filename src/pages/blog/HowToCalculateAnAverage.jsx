import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

function HowToCalculateAnAverage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Calculate an Average",
        description:
          "Learn how to calculate an average using the arithmetic mean formula with simple examples.",
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
            "https://caltrixaa.vercel.app/blog/how-to-calculate-an-average",
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
            name: "How to Calculate an Average",
            item:
              "https://caltrixaa.vercel.app/blog/how-to-calculate-an-average",
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="How to Calculate an Average | Caltrixaa"
        description="Learn how to calculate an average using the mean formula with simple examples and practical explanations."
        keywords="how to calculate an average, average formula, calculate average, arithmetic mean"
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

            <span>How to Calculate an Average</span>
          </nav>

          <header>
            <p className="mb-3 font-semibold text-indigo-600">
              Math & Numbers
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How to Calculate an Average
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Learn how to calculate an average using the arithmetic mean,
              with simple examples and an easy step-by-step method.
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate an average, add all the numbers together and divide
              the total by the number of values. For example, the average of
              10, 20 and 30 is (10 + 20 + 30) ÷ 3 = 20.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is an Average?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              In everyday mathematics, "average" often refers to the
              arithmetic mean. It provides a single value that represents
              the center of a group of numbers.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is the Average Formula?
            </h2>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Average = Sum of all values ÷ Number of values
            </div>

            <p className="leading-8 text-slate-700">
              First add every value in the list. Then count how many values
              there are and divide the total by that count.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Example: Average of Three Numbers
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Suppose the numbers are 12, 18 and 24.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">
                Sum = 12 + 18 + 24 = 54
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Number of values = 3
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Average = 54 ÷ 3 = 18
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Can an Average Be a Decimal?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Yes. An average does not have to be a whole number. For
              example, if the values are 5, 6 and 8, their total is 19.
              Dividing 19 by 3 gives an average of about 6.33.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Where Are Averages Used?
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Student test scores</li>
              <li>Average prices</li>
              <li>Sports statistics</li>
              <li>Daily measurements</li>
              <li>Business reports</li>
              <li>Data analysis</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Mistakes When Calculating an Average
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Forgetting to include one of the values.</li>
              <li>Dividing by the wrong number of values.</li>
              <li>Adding the values incorrectly.</li>
              <li>Rounding too early.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Takeaways
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Add all values together.</li>
              <li>Count the number of values.</li>
              <li>Divide the total by the count.</li>
              <li>The result is the arithmetic mean.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you calculate an average?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Add all the numbers together and divide the total by the
                  number of numbers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  What is the average of 10, 20 and 30?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Their total is 60, and there are three values. The average
                  is therefore 20.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Is average the same as mean?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  In common mathematical usage, average often refers to the
                  arithmetic mean. However, statistics also has other types
                  of averages, such as the median and mode.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Calculate an Average Online
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Use the Caltrixaa Average Calculator to quickly find the
              average of your numbers.
            </p>

            <Link
              to="/average-calculator"
              className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Open Average Calculator →
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculateAnAverage;