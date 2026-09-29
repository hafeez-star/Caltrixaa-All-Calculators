import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function CraftDiyCalculators() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SEO
        title="Craft & DIY Calculators - Free Online Tools | Caltrixaa"
        description="Explore free Craft & DIY calculators from Caltrixaa. Calculate bath bomb ratios and plan your DIY projects quickly and easily."
        keywords="craft calculators, DIY calculators, craft and DIY calculators, bath bomb calculator, DIY project calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Craft & DIY Calculators",
          url: "https://caltrixaa.vercel.app/craft-diy-calculators",
          description:
            "Free Craft and DIY calculators from Caltrixaa.",
        }}
      />

      <Navbar />

      <section className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              🛠️ Caltrixaa Tools
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Craft & DIY Calculators
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-indigo-100 sm:text-lg">
              Helpful calculators for makers, crafters and DIY projects.
              Quickly work out measurements, ratios and quantities for your
              next project.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Craft & DIY Tools
          </h2>

          <p className="mt-2 text-slate-600">
            Choose a calculator to get started.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/bath-bomb-ratio-calculator"
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:scale-110">
              🛁
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Bath Bomb Ratio Calculator
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Calculate citric acid and baking soda using a simple 1:2 bath
              bomb ratio in grams and ounces.
            </p>

            <span className="mt-5 inline-flex font-semibold text-indigo-600">
              Calculate Ratio →
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CraftDiyCalculators;