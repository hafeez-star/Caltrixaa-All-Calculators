import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import CalculatorCategories from "../components/CalculatorCategories";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* SEO */}
      <SEO
        title="Free Online Calculators - Caltrixaa"
        description="Use free online calculators for age, BMI, percentage, dates, discounts, tips, averages, weight, calories, time and more."
        keywords="free online calculators, online calculator, age calculator, BMI calculator, percentage calculator, date calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Caltrixaa",
          url: "https://caltrixaa.vercel.app/",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "All",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />

      <Navbar />

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden">

          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">

            <div className="mx-auto max-w-4xl text-center">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

                <span className="h-2 w-2 rounded-full bg-green-600" />

                Free Online Calculators & Tools

              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">

                Smart tools for

                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">

                  everyday calculations

                </span>

              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">

                Calculate your age, BMI, percentages, dates, discounts,
                tips, averages and more with simple, fast and free online tools.

              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="#calculators"
                  className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  Explore Calculators
                </a>

                <a
                  href="#categories"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                >
                  Browse Categories
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* CALCULATOR CATEGORIES */}
        <section
          id="calculators"
          className="border-t border-slate-100 bg-slate-50/70 py-20"
        >

          <div
            id="categories"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >



            <CalculatorCategories />

          </div>

        </section>


        {/* SEO CONTENT */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">

            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Free Online Calculators
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Caltrixaa provides simple and free online calculators for
              everyday calculations. You can calculate your age, BMI,
              percentages, discounts, tips, averages, date differences
              and more without installing any software.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-slate-900 sm:text-3xl">
              Calculators for Everyday Use
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you need to calculate your exact age, find your BMI,
              work out a percentage, calculate a discount, compare dates,
              calculate a tip or find the average of numbers, Caltrixaa
              provides easy-to-use tools designed for quick results.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-slate-900 sm:text-3xl">
              Craft & DIY Calculators
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Caltrixaa also includes practical calculators for creative
              projects and DIY activities. These tools can help with ratios,
              measurements and other everyday craft calculations.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-slate-900 sm:text-3xl">
              Why Use Caltrixaa?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">

              <li>Free online calculators</li>

              <li>Simple and easy-to-use interfaces</li>

              <li>Responsive design for mobile and desktop</li>

              <li>No software installation required</li>

              <li>Useful calculation formulas and explanations</li>

              <li>New calculators and useful tools added regularly</li>

            </ul>

          </article>

        </section>


        {/* ABOUT PREVIEW */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              About Caltrixaa
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Simple tools. Clear results.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Caltrixaa provides fast, simple and easy-to-use online
              calculators and useful everyday tools for students,
              shoppers, families, creators and everyday users.
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;