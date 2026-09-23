import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <div className="text-center">
              <div className="text-4xl">🧮</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                About Caltrixaa
              </h1>

              <p className="mt-3 text-slate-500">
                Free online calculators and useful everyday tools.
              </p>
            </div>

            <div className="mt-10 space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  What is Caltrixaa?
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa is a free online calculator website designed to
                  make everyday calculations simple, quick and accessible.
                  Our goal is to provide easy-to-use calculators that work
                  directly in your web browser without requiring complicated
                  software or downloads.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Our Calculators
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa provides calculators for different everyday needs,
                  including age, BMI, dates, percentages, discounts, tips,
                  averages, time and health-related calculations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Our Goal
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Our goal is to create simple, fast and mobile-friendly tools
                  that anyone can use. We are continuously adding new
                  calculators and improving the website experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Free to Use
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa calculators are designed to be free to use.
                  Calculations are performed directly in your browser for
                  supported tools.
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

export default About;