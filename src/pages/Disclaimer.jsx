import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function Disclaimer() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer - Caltrixaa",
    url: "https://caltrixaa.vercel.app/disclaimer",
    description:
      "Read the Caltrixaa disclaimer covering calculator results, health information, craft and DIY calculations and general website content.",
  };

  return (
    <>
      <SEO
        title="Disclaimer - Caltrixaa"
        description="Read the Caltrixaa disclaimer covering calculator results, health information, craft and DIY calculations and general website content."
        keywords="Caltrixaa disclaimer, calculator disclaimer"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <header className="border-b border-slate-200 pb-8">
              <div className="text-4xl">⚠️</div>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Disclaimer
              </h1>

              <p className="mt-3 text-slate-500">
                Last updated: October 2026
              </p>
            </header>

            <div className="mt-10 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  General Information
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  The information and calculators provided on Caltrixaa are
                  intended for general informational and educational purposes.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  While we aim to provide useful and accurate information, we
                  do not guarantee that all content, calculations or results
                  will always be complete, accurate or suitable for every
                  individual situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Calculator Results
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Calculator results are generated from the information
                  entered by the user and the calculation methods implemented
                  on the relevant calculator page.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Different formulas, assumptions, units or rounding methods
                  can produce different results. Important calculations should
                  be independently verified when accuracy is critical.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Health Disclaimer
                </h2>

                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="leading-7 text-slate-700">
                    Caltrixaa's health-related calculators and articles are
                    provided for general informational purposes only. They are
                    not medical advice and are not intended to diagnose,
                    treat, cure or prevent any disease or medical condition.
                  </p>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  BMI, BMR, calorie and weight-related calculations may provide
                  estimates based on simplified formulas. Individual health
                  circumstances can be more complex than a calculator result
                  suggests.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have concerns about your health, nutrition, weight or
                  another medical matter, speak with a qualified healthcare
                  professional.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Craft and DIY Disclaimer
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Craft and DIY calculators are intended to assist with
                  calculations and planning. Actual results may vary depending
                  on materials, brands, measurements, equipment, environmental
                  conditions and techniques.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Users should follow appropriate safety instructions and
                  manufacturer recommendations when working with wax,
                  fragrance oils, soap ingredients, bath bomb ingredients,
                  heating equipment or other materials.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Calculator results should not be treated as a substitute for
                  proper product testing or safety procedures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Financial and Money Calculations
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Money-related calculators, including discount and tip
                  calculators, provide mathematical calculations based on the
                  values entered by the user.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  They do not constitute financial, tax, accounting or legal
                  advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  External Links
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may provide links to external websites for
                  additional information or resources. We do not control those
                  websites and cannot guarantee the accuracy, availability or
                  policies of external websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  No Guarantees
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Use of Caltrixaa is at your own discretion. We do not
                  guarantee that the website or its calculators will be
                  available at all times or that every result will meet a
                  particular purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact Us
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have questions about this Disclaimer, please visit
                  our{" "}
                  <Link
                    to="/contact"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Contact page
                  </Link>
                  .
                </p>
              </section>

            </div>

            <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-center">
              <h2 className="text-xl font-bold text-white">
                Use Caltrixaa Responsibly
              </h2>

              <p className="mt-2 leading-7 text-slate-300">
                Our calculators are designed to make everyday calculations
                easier. For important decisions, always verify the result
                using an appropriate authoritative source or professional.
              </p>

              <Link
                to="/"
                className="mt-5 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Explore Calculators →
              </Link>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Disclaimer;