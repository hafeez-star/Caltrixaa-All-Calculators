import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Disclaimer() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">

          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <h1 className="text-3xl font-bold text-slate-900">
              Disclaimer
            </h1>

            <div className="mt-8 space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  General Information
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  The information and calculators provided on Caltrixaa are
                  intended for general informational and educational purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  No Guarantee
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Although we make reasonable efforts to provide useful
                  calculators, Caltrixaa does not guarantee that every result
                  will be completely accurate or appropriate for every
                  individual situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Health Disclaimer
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Health and fitness calculators should not be considered
                  medical advice. Consult a qualified healthcare professional
                  for personal medical decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Financial Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Financial calculators are intended for general educational
                  purposes and should not be considered financial, tax or
                  investment advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  External Links
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may eventually contain links to third-party
                  websites. We are not responsible for the content, privacy
                  practices or policies of external websites.
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

export default Disclaimer;