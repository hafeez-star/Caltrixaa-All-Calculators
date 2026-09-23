import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">

          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <h1 className="text-3xl font-bold text-slate-900">
              Terms & Conditions
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Last updated: September 2026
            </p>

            <div className="mt-8 space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Acceptance of Terms
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  By accessing and using Caltrixaa, you agree to use the
                  website responsibly and in accordance with these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Use of Our Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa provides online calculators and tools for general
                  informational and educational purposes.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  You are responsible for reviewing calculator inputs and
                  results before using them for important decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Accuracy
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We aim to provide useful and accurate calculations, but we
                  cannot guarantee that every result will be suitable for
                  every situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Health Information
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Health-related calculators such as BMI, BMR, calorie and
                  ideal-weight calculators are provided for general
                  informational purposes only. They are not a substitute for
                  professional medical advice, diagnosis or treatment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Intellectual Property
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Website content, branding, design and original materials
                  provided by Caltrixaa may not be copied or redistributed
                  without appropriate permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Changes
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We may update these terms as the website develops. Updated
                  terms will be published on this page.
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