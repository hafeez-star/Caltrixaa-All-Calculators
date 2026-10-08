import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function Terms() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use - Caltrixaa",
    url: "https://caltrixaa.vercel.app/terms",
    description:
      "Read the Terms of Use for using Caltrixaa's free online calculators, website content and services.",
  };

  return (
    <>
      <SEO
        title="Terms of Use - Caltrixaa"
        description="Read the Terms of Use for using Caltrixaa's free online calculators, website content and services."
        keywords="Caltrixaa terms, terms of use, calculator website terms"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <header className="border-b border-slate-200 pb-8">
              <div className="text-4xl">📄</div>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Terms of Use
              </h1>

              <p className="mt-3 text-slate-500">
                Last updated: October 2026
              </p>
            </header>

            <div className="mt-10 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Acceptance of These Terms
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  By accessing or using Caltrixaa, you agree to these Terms of
                  Use. If you do not agree with these terms, please do not use
                  the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  About Caltrixaa
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa provides free online calculators, calculation
                  tools, guides and other informational content for general
                  use.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  The website may be updated, changed, expanded or discontinued
                  in whole or in part without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Use of the Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  You may use Caltrixaa calculators for lawful personal,
                  educational, business or other legitimate purposes.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  You are responsible for checking the information you enter
                  and deciding whether a calculator result is appropriate for
                  your particular situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Accuracy of Results
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We aim to provide useful and accurate calculators and
                  explanations. However, calculator results may depend on the
                  values entered, formulas used, assumptions and rounding.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa does not guarantee that every calculation will be
                  suitable for every purpose or situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Health-Related Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Health calculators available on Caltrixaa, including BMI,
                  BMR, calorie and weight-related tools, are intended for
                  general informational purposes.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  They are not intended to diagnose, treat or prevent any
                  medical condition and should not replace advice from a
                  qualified healthcare professional.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Craft and DIY Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Craft and DIY calculators provide estimates or calculations
                  intended to assist with planning. Actual results can vary
                  depending on materials, measurements, equipment, processes
                  and other conditions.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Users are responsible for appropriate testing, measurements,
                  safety procedures and decisions when working with physical
                  materials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Prohibited Use
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  You agree not to misuse the website or attempt to interfere
                  with its operation.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                  <li>
                    Do not attempt to disrupt or damage the website.
                  </li>
                  <li>
                    Do not use automated methods to abuse or overload the
                    service.
                  </li>
                  <li>
                    Do not use the website for unlawful activities.
                  </li>
                  <li>
                    Do not attempt unauthorized access to website systems.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Intellectual Property
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Unless otherwise stated, the website's original text,
                  design, branding, graphics and other content are owned by or
                  used by Caltrixaa.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  You may use the calculators and publicly available
                  information for their intended purposes, but you may not
                  reproduce substantial portions of the website's original
                  content without appropriate permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  External Websites
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may link to websites or services operated by third
                  parties. We do not control those websites and are not
                  responsible for their content, availability, policies or
                  practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Availability
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We try to keep Caltrixaa available and functional, but we do
                  not guarantee uninterrupted or error-free access to the
                  website.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Features may be changed, removed or temporarily unavailable
                  because of maintenance, technical problems or other reasons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Limitation of Liability
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  To the extent permitted by applicable law, Caltrixaa is not
                  responsible for losses, damages or decisions resulting from
                  reliance on calculator results, website content or
                  third-party services.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Users should independently verify important calculations and
                  information before making significant decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Changes to These Terms
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  These Terms of Use may be updated as Caltrixaa develops.
                  Changes will be published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have questions about these Terms of Use, please visit
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

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Terms;