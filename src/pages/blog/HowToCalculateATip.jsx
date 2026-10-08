import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

function HowToCalculateATip() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Calculate a Tip",
        description:
          "Learn how to calculate a tip from a bill amount, choose a tip percentage and split a bill between people.",
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
            "https://caltrixaa.vercel.app/blog/how-to-calculate-a-tip",
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
            name: "How to Calculate a Tip",
            item:
              "https://caltrixaa.vercel.app/blog/how-to-calculate-a-tip",
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="How to Calculate a Tip | Caltrixaa"
        description="Learn how to calculate a tip from a restaurant bill, choose a tip percentage and split the total between people."
        keywords="how to calculate a tip, tip calculator, tip percentage, restaurant tip calculator, split bill"
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

            <span>How to Calculate a Tip</span>
          </nav>

          <header>
            <p className="mb-3 font-semibold text-indigo-600">
              Money & Shopping
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How to Calculate a Tip
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Learn how to calculate a tip from a bill amount, choose a
              percentage, and work out the total bill or amount per person.
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate a tip, multiply the bill amount by the tip
              percentage and divide by 100. For example, a 15% tip on a $60
              bill is $9. The total becomes $69 before any other charges.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is a Tip?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              A tip is an additional amount given for service. In restaurants,
              customers may calculate a tip as a percentage of the bill.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              The appropriate tip percentage can depend on local customs,
              service expectations and the situation, so there is no single
              percentage that applies everywhere.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              How Do You Calculate a Tip?
            </h2>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Tip Amount = Bill Amount × Tip Percentage ÷ 100
            </div>

            <p className="leading-8 text-slate-700">
              After finding the tip amount, add it to the original bill if
              you want to calculate the total.
            </p>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Total = Bill Amount + Tip Amount
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Example: 15% Tip on a $60 Bill
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Suppose your restaurant bill is $60 and you choose a 15% tip.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">
                Tip = $60 × 15 ÷ 100 = $9
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Total = $60 + $9 = $69
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              How Do You Split a Tip Between People?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              First calculate the total bill including the tip. Then divide
              that total by the number of people if everyone is sharing the
              bill equally.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">
                Example: $80 bill + 20% tip = $96 total
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                4 people: $96 ÷ 4 = $24 per person
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Tip Calculation Examples
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Bill
                    </th>
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Tip
                    </th>
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Tip Amount
                    </th>
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">$50</td>
                    <td className="px-4 py-3">10%</td>
                    <td className="px-4 py-3">$5</td>
                    <td className="px-4 py-3">$55</td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">$75</td>
                    <td className="px-4 py-3">15%</td>
                    <td className="px-4 py-3">$11.25</td>
                    <td className="px-4 py-3">$86.25</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">$100</td>
                    <td className="px-4 py-3">20%</td>
                    <td className="px-4 py-3">$20</td>
                    <td className="px-4 py-3">$120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Tip Calculation Mistakes
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Forgetting to divide the percentage by 100.</li>
              <li>Adding the tip percentage directly to the bill.</li>
              <li>Dividing the bill between people before adding the tip.</li>
              <li>Confusing the tip amount with the final total.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Takeaways
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Multiply the bill by the tip percentage.</li>
              <li>Divide by 100 to get the tip amount.</li>
              <li>Add the tip to the bill to find the total.</li>
              <li>Divide the total by the number of people for an equal split.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you calculate a 20% tip?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Multiply the bill amount by 20 and divide by 100. For a
                  $50 bill, the tip would be $10.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you split a restaurant bill with a tip?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Calculate the tip, add it to the bill, and divide the total
                  by the number of people sharing the bill equally.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Is there one correct tip percentage?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  No. Tipping customs vary by country, location, type of
                  service and personal choice.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Calculate a Tip Online
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Use the Caltrixaa Tip Calculator to calculate the tip, total
              bill and amount per person.
            </p>

            <Link
              to="/tip-calculator"
              className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Open Tip Calculator →
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculateATip;