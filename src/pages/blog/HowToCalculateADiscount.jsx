import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

function HowToCalculateADiscount() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Calculate a Discount",
        description:
          "Learn how to calculate a discount, savings and final sale price using simple percentage formulas.",
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
            "https://caltrixaa.vercel.app/blog/how-to-calculate-a-discount",
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
            name: "How to Calculate a Discount",
            item:
              "https://caltrixaa.vercel.app/blog/how-to-calculate-a-discount",
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="How to Calculate a Discount | Caltrixaa"
        description="Learn how to calculate a discount, savings and final sale price using simple formulas and practical examples."
        keywords="how to calculate a discount, discount formula, discount percentage, sale price calculator"
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

            <span>How to Calculate a Discount</span>
          </nav>

          <header>
            <p className="mb-3 font-semibold text-indigo-600">
              Money & Shopping
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How to Calculate a Discount
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Learn how to calculate a discount percentage, find your savings,
              and determine the final price after a discount.
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate a discount, multiply the original price by the
              discount percentage expressed as a decimal. Subtract the
              discount amount from the original price to find the final sale
              price. For example, 20% off $100 means $20 in savings and a
              final price of $80.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is a Discount?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              A discount reduces the original price of a product or service.
              Discounts are usually expressed as a percentage, such as 10%,
              20%, 30% or 50% off.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              The discount percentage tells you how much of the original
              price is being removed.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              How Do You Calculate a Discount?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              First calculate the discount amount:
            </p>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Discount Amount = Original Price × Discount Percentage ÷ 100
            </div>

            <p className="leading-8 text-slate-700">
              Then subtract the discount amount from the original price:
            </p>

            <div className="my-5 rounded-xl bg-slate-900 p-5 text-center font-semibold text-white">
              Final Price = Original Price − Discount Amount
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Example: 20% Discount on $100
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Suppose a product costs $100 and has a 20% discount.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">
                Discount = $100 × 20 ÷ 100 = $20
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Final Price = $100 − $20 = $80
              </p>
            </div>

            <p className="leading-8 text-slate-700">
              You save $20 and pay $80 after the discount.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              How Do You Calculate the Sale Price?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              You can calculate the sale price directly by subtracting the
              discount percentage from 100%.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              For example, a 25% discount means you pay 75% of the original
              price.
            </p>

            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-5 text-center font-semibold text-slate-900">
              $200 × 75 ÷ 100 = $150
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Discount Examples
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Original Price
                    </th>
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Discount
                    </th>
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Savings
                    </th>
                    <th className="px-4 py-3 font-bold text-slate-900">
                      Final Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">$100</td>
                    <td className="px-4 py-3">10%</td>
                    <td className="px-4 py-3">$10</td>
                    <td className="px-4 py-3">$90</td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">$100</td>
                    <td className="px-4 py-3">25%</td>
                    <td className="px-4 py-3">$25</td>
                    <td className="px-4 py-3">$75</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">$200</td>
                    <td className="px-4 py-3">30%</td>
                    <td className="px-4 py-3">$60</td>
                    <td className="px-4 py-3">$140</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Discount Calculation Mistakes
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>Using the discount percentage as a whole number incorrectly.</li>
              <li>Subtracting the percentage directly from the price.</li>
              <li>Confusing the savings amount with the final price.</li>
              <li>Forgetting that the discount is based on the original price.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Takeaways
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>A discount reduces an original price.</li>
              <li>Calculate the savings before finding the final price.</li>
              <li>Use the original price as the discount baseline.</li>
              <li>A 20% discount means you pay 80% of the original price.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you calculate 20% off a price?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Multiply the original price by 20 and divide by 100 to
                  find the savings, then subtract the savings from the
                  original price.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How do you calculate the final price after a discount?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  Subtract the discount amount from the original price.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  What is a 30% discount on $100?
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  The savings are $30, so the final price is $70.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Calculate a Discount Online
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Use the Caltrixaa Discount Calculator to quickly calculate
              savings and final prices.
            </p>

            <Link
              to="/discount-calculator"
              className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Open Discount Calculator →
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculateADiscount;