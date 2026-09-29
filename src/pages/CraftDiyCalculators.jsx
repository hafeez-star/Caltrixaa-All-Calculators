import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorCard from "../components/CalculatorCard";
import SEO from "../components/SEO";

function CraftDiyCalculators() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Craft & DIY Calculators - Free Online Tools | Caltrixaa"
        description="Explore free craft and DIY calculators from Caltrixaa, including bath bomb ratio and recipe calculation tools."
        keywords="craft calculators, DIY calculators, bath bomb calculator, bath bomb ratio calculator, craft recipe calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Craft & DIY Calculators",
          url: "https://caltrixaa.vercel.app/craft-diy-calculators",
          description:
            "Free craft and DIY calculators from Caltrixaa.",
        }}
      />

      <Navbar />

      <main>
        <section className="bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
              ✂️ Craft & DIY
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Craft & DIY Calculators
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Simple calculators for crafting, DIY projects and recipe
              measurements.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <CalculatorCard
              icon="🛁"
              title="Bath Bomb Ratio Calculator"
              description="Calculate a simple 1:2 citric acid to baking soda ratio in grams and ounces."
              link="/bath-bomb-ratio-calculator"
            />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Free Craft & DIY Calculators
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Caltrixaa's Craft & DIY section provides simple online tools
              designed to make common crafting calculations easier. These
              calculators can help you scale recipes, check ratios and work
              with measurements without doing the calculations manually.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-slate-950">
              Bath Bomb Calculator
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Start with the Bath Bomb Ratio Calculator to calculate a basic
              1:2 citric acid to baking soda ratio for your desired batch
              size.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CraftDiyCalculators;