import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-3xl">

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <div className="text-center">
              <div className="text-4xl">✉️</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Contact Caltrixaa
              </h1>

              <p className="mt-3 text-slate-500">
                Have a question, suggestion or feedback?
              </p>
            </div>

            <div className="mt-10 space-y-6">

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Get in Touch
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have a question about Caltrixaa, find an issue with
                  one of our calculators, or have a suggestion for a new tool,
                  you can contact us by email.
                </p>
              </section>

              <div className="rounded-2xl bg-indigo-50 p-6">
                <p className="font-semibold text-slate-800">
                  Email
                </p>

                <a
                  href="mailto:hafeezullah4217@gmail.com"
                  className="mt-2 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  hafeezullah4217@gmail.com
                </a>

                <p className="mt-3 text-sm leading-6 text-slate-500">
          Contact us via email for any inquiries, feedback, or suggestions.
                </p>
              </div>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Suggestions
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We welcome suggestions for calculators and tools that can
                  make Caltrixaa more useful.
                </p>
              </section>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;