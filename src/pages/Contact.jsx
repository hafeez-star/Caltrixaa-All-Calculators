import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Caltrixaa",
    url: "https://caltrixaa.vercel.app/contact",
    description:
      "Contact Caltrixaa for questions, calculator issues, feedback and suggestions for new tools.",
  };

  return (
    <>
      <SEO
        title="Contact Caltrixaa - Questions, Feedback & Suggestions"
        description="Contact Caltrixaa for questions, calculator issues, feedback and suggestions for new online calculators and tools."
        keywords="contact Caltrixaa, Caltrixaa contact, calculator feedback"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            {/* Header */}
            <header className="text-center">
              <div className="text-5xl">✉️</div>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Contact Caltrixaa
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Have a question, found an issue with a calculator, or have an
                idea for a useful new tool? We would be happy to hear from you.
              </p>
            </header>

            {/* Contact CTA */}
            <section className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                    Email
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Get in Touch
                  </h2>

                  <p className="mt-2 leading-7 text-slate-600">
                    Send us an email if you have a question, feedback,
                    suggestion or notice an issue with one of our tools.
                  </p>
                </div>

                <a
                  href="mailto:hafeezullah4217@gmail.com"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Email Us →
                </a>

              </div>

              <a
                href="mailto:hafeezullah4217@gmail.com"
                className="mt-5 inline-block break-all font-semibold text-indigo-600 hover:text-indigo-700"
              >
                hafeezullah4217@gmail.com
              </a>
            </section>

            {/* Main Content */}
            <div className="mt-10 space-y-10">

              {/* Questions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Questions About Caltrixaa
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have a question about how a Caltrixaa calculator
                  works, how a result is calculated, or how to use a particular
                  tool, you can contact us by email.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  When contacting us about a calculator, mentioning the name
                  of the calculator can help us understand your question more
                  quickly.
                </p>
              </section>

              {/* Calculator Issues */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Report a Calculator Issue
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you believe a calculator is producing an unexpected
                  result or you notice a technical problem, please let us know.
                </p>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Helpful information to include
                  </h3>

                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>The name of the calculator.</li>
                    <li>The values you entered.</li>
                    <li>The result you received.</li>
                    <li>What you expected the result to be.</li>
                    <li>Any error message you saw.</li>
                  </ul>
                </div>
              </section>

              {/* Suggestions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Suggest a New Calculator
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We are continuously working on expanding the collection of
                  free calculators available on Caltrixaa.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  If there is a calculation tool you would like to see on the
                  website, send us your suggestion. Useful suggestions can help
                  us decide which tools to develop next.
                </p>
              </section>

              {/* Feedback */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Feedback
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Feedback about the website experience, calculator interface,
                  explanations or mobile usability is welcome.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Clear and specific feedback is especially helpful when
                  something could be made easier to understand or use.
                </p>
              </section>

              {/* Before Contacting */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Before Contacting Us
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  You may also find useful information in our calculator guides
                  and articles. These explain common formulas, calculation
                  methods and practical examples.
                </p>

                <Link
                  to="/blog"
                  className="mt-4 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Visit the Caltrixaa Blog →
                </Link>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-6">

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      How can I contact Caltrixaa?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      You can contact Caltrixaa by email at
                      {" "}
                      <a
                        href="mailto:hafeezullah4217@gmail.com"
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        hafeezullah4217@gmail.com
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Can I suggest a new calculator?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Yes. Calculator suggestions are welcome. Send the name
                      or type of calculator you would like to see through
                      email.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      What should I do if a calculator gives an unexpected
                      result?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Check the values and units you entered first. If the
                      result still appears incorrect, contact us with the
                      calculator name, input values and the result so the issue
                      can be reviewed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Can I send website feedback?
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Yes. Feedback about calculators, explanations, design,
                      usability or new features is welcome.
                    </p>
                  </div>

                </div>
              </section>

            </div>

            {/* Final CTA */}
            <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-center sm:p-8">
              <h2 className="text-2xl font-bold text-white">
                Have Something to Share?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Whether it is a question, suggestion or calculator issue,
                your feedback can help make Caltrixaa better.
              </p>

              <a
                href="mailto:hafeezullah4217@gmail.com"
                className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Contact Caltrixaa →
              </a>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;