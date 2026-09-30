import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import CalculatorCard from "../components/CalculatorCard";

function CraftDiyCalculators() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <SEO
        title="Craft & DIY Calculators - Free Candle & Bath Bomb Tools | Caltrixaa"
        description="Free Craft and DIY calculators for candle making, bath bombs, fragrance loads and wax recipes. Calculate ingredients and ratios easily."
        keywords="craft diy calculators, DIY calculator, candle calculator, bath bomb calculator, fragrance calculator, wax calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Craft & DIY Calculators",
          url: "https://caltrixaa.vercel.app/craft-diy-calculators"
        }}
      />

      <Navbar />

      <main>

        <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">

            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
              Craft & DIY
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Craft & DIY Calculators
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Free calculators for candle making, bath bombs, fragrance
              loads, wax recipes and other creative DIY projects.
            </p>

          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <CalculatorCard
              icon="🛁"
              title="Bath Bomb Ratio Calculator"
              description="Calculate a simple 1:2 citric acid to baking soda ratio in grams for bath bomb recipes."
              link="/bath-bomb-ratio-calculator"
            />

            <CalculatorCard
              icon="🕯️"
              title="Fragrance Load Calculator"
              description="Calculate fragrance oil amounts for candles, soy wax and wax melts."
              link="/fragrance-load-calculator"
            />

            <CalculatorCard
              icon="🫙"
              title="Candle Wax Calculator"
              description="Estimate wax and fragrance amounts for candle jars and containers."
              link="/candle-wax-calculator"
            />

          </div>

        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

            <h2 className="text-2xl font-bold text-slate-950">
              Free Craft & DIY Calculation Tools
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Caltrixaa's Craft & DIY calculators are designed to make common
              recipe and ingredient calculations easier. Use the tools to
              work with bath bomb ratios, candle wax, fragrance oil and other
              DIY measurements.
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default CraftDiyCalculators;