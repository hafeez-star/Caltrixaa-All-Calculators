import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculateBmiFromHeightAndWeight() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Calculate BMI from Height and Weight",
        description:
          "Learn how BMI is calculated from height and weight, understand the BMI formula, and see how adult BMI categories are interpreted.",
        url: "https://caltrixaa.vercel.app/blog/how-to-calculate-bmi-from-height-and-weight",
        datePublished: "2026-10-08",
        dateModified: "2026-10-08",
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
            name: "Health Calculators",
            item: "https://caltrixaa.vercel.app/category/health",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "How to Calculate BMI",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="How to Calculate BMI from Height and Weight"
        description="Learn how to calculate BMI from height and weight using the BMI formula, with examples and adult BMI category ranges."
        keywords="how to calculate BMI from height and weight, BMI formula, calculate BMI manually, BMI calculation for adults, BMI kg m2"
        schema={schema}
      />

      <Navbar />

      <main>
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>{" "}
            / Health / BMI Guide
          </nav>

          <header>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
              ⚖️ Health Guide
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              How to Calculate BMI from Height and Weight
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              BMI is a simple calculation that compares body weight with
              height. This guide explains the BMI formula, how to calculate it
              manually, and how adult BMI ranges are generally interpreted.
            </p>
          </header>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-black text-slate-950">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              For adults, BMI is calculated by dividing weight in kilograms by
              height in meters squared. For example, a person weighing 70 kg
              and measuring 1.75 m has a BMI of about 22.9.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-black">What Is BMI?</h2>

            <p className="mt-4 leading-8 text-slate-700">
              Body mass index, or BMI, is a calculated measure of weight
              relative to height. It is commonly used as a screening measure
              for adults rather than as a diagnosis of an individual health
              condition.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              BMI does not directly measure body fat and does not distinguish
              between muscle, fat and bone. For that reason, BMI is best
              considered alongside other health information.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">
              What Is the BMI Formula?
            </h2>

            <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-center text-xl font-bold text-white">
              BMI = Weight (kg) ÷ Height² (m)
            </div>

            <p className="mt-5 leading-8 text-slate-700">
              You need two measurements: your body weight in kilograms and
              your height in meters. Square the height and then divide the
              weight by that number.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">
              Example: Calculate BMI from Height and Weight
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Suppose an adult weighs 70 kg and is 1.75 meters tall.
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-700">
              <li>Square the height: 1.75 × 1.75 = 3.0625</li>
              <li>Divide 70 by 3.0625.</li>
              <li>The result is approximately 22.9.</li>
            </ol>

            <p className="mt-5 leading-8 text-slate-700">
              You can also use the{" "}
              <Link
                to="/bmi-calculator"
                className="font-bold text-blue-600 hover:underline"
              >
                Caltrixaa BMI Calculator
              </Link>{" "}
              to perform the calculation automatically.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">
              Adult BMI Categories
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">BMI</th>
                    <th className="p-4">Category</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Below 18.5</td>
                    <td className="p-4">Underweight</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">18.5 to less than 25</td>
                    <td className="p-4">Healthy weight</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">25 to less than 30</td>
                    <td className="p-4">Overweight</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">30 or greater</td>
                    <td className="p-4">Obesity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              These are adult screening categories. BMI should not be used as
              a standalone diagnosis.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">
              What Can BMI Tell You?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              BMI can provide a quick starting point when looking at weight
              relative to height. However, it does not tell you where body fat
              is stored or how much of your weight comes from muscle.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              If you have concerns about your weight or health, consider
              discussing your results with a qualified healthcare professional.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">Key Takeaways</h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>BMI compares weight with height.</li>
              <li>The adult BMI formula uses kilograms and meters.</li>
              <li>BMI is a screening measure, not a diagnosis.</li>
              <li>Muscle mass and body-fat distribution are not captured by BMI.</li>
              <li>Use a calculator to reduce manual calculation errors.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">Frequently Asked Questions</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-bold">
                  How do I calculate BMI manually?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Divide weight in kilograms by height in meters squared.
                </p>
              </div>

              <div>
                <h3 className="font-bold">
                  Is BMI the same for men and women?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Standard adult BMI categories are applied regardless of sex,
                  although BMI does not capture all differences in body
                  composition.
                </p>
              </div>

              <div>
                <h3 className="font-bold">
                  Does BMI measure body fat?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. BMI uses height and weight and does not directly measure
                  body fat.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-14 rounded-3xl bg-slate-950 p-8 text-center text-white">
            <h2 className="text-2xl font-black">
              Calculate Your BMI
            </h2>

            <p className="mt-3 text-slate-300">
              Enter your height and weight to get a quick BMI result.
            </p>

            <Link
              to="/bmi-calculator"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-950 hover:bg-blue-50"
            >
              Open BMI Calculator →
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default HowToCalculateBmiFromHeightAndWeight;