import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";


const tools = [
  {
    icon: "🛁",
    name: "Bath Bomb Ratio Calculator",
    description:
      "Calculate bath bomb ingredients using a simple 1:2 citric acid to baking soda ratio.",
    path: "/bath-bomb-ratio-calculator",
  },
  {
    icon: "🕯️",
    name: "Wick Size Calculator",
    description:
      "Estimate a starting candle wick range from jar diameter.",
    path: "/wick-size-calculator",
  },
  {
    icon: "🕯️",
    name: "Soy Wax Calculator",
    description:
      "Estimate soy wax weight from container volume in grams and ounces.",
    path: "/soy-wax-calculator",
  },
  {
    icon: "🕯️",
    name: "Candle Wax Calculator",
    description:
      "Calculate estimated candle wax from jar or container volume.",
    path: "/candle-wax-calculator",
  },
  {
    icon: "🌸",
    name: "Fragrance Load Calculator",
    description:
      "Calculate fragrance oil amounts from wax weight and fragrance load.",
    path: "/fragrance-load-calculator",
  },
  {
    icon: "🕯️",
    name: "Candle Wick Calculator",
    description:
      "Estimate a starting wick range from candle diameter.",
    path: "/candle-wick-calculator",
  },
  {
    icon: "🪵",
    name: "Wooden Wick Calculator",
    description:
      "Estimate a starting wooden wick range based on jar diameter.",
    path: "/wooden-wick-calculator",
  },
  {
    icon: "⚖️",
    name: "Candle Wax Weight Calculator",
    description:
      "Convert container volume into estimated candle wax weight.",
    path: "/candle-wax-weight-calculator",
  },
  {
    icon: "🧮",
    name: "Candle Making Calculator",
    description:
      "Calculate candle wax, fragrance oil and total batch weight.",
    path: "/candle-making-calculator",
  },
];

function CraftDiyCalculators() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Craft & DIY Calculators - Candle, Wax & Bath Bomb Tools | Caltrixaa"
        description="Free Craft and DIY calculators for candle making, wax, fragrance loads, wick sizing, bath bombs and other creative projects."
        keywords="craft diy calculators, candle calculators, candle making calculator, wax calculator, fragrance load calculator, bath bomb calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Craft & DIY Calculators",
          url: "https://caltrixaa.vercel.app/craft-diy-calculators",
        }}
      />

      <Navbar />

      <main>
        <section className="bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
              🛠️ Craft & DIY Calculators
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Craft & DIY Calculators
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Free calculators for candle making, wax recipes, fragrance
              loads, wick sizing, bath bombs and other DIY projects.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(function (tool) {
              return (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:scale-110">
                    {tool.icon}
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-slate-950">
                    {tool.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>

                  <div className="mt-5 font-bold text-indigo-600">
                    Use Calculator →
                  </div>
                </Link>
              );
            })}
          </div>

          <article className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-950">
              Free Craft & DIY Calculators
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Caltrixaa provides simple calculators for makers and DIY
              creators. These tools can help with candle wax quantities,
              fragrance loads, wick starting points, bath bomb ratios and
              other common project calculations.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-slate-950">
              Candle Making Calculators
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Candle makers can use the available tools to estimate wax
              quantities, fragrance oil amounts, batch weights and starting
              wick ranges. The calculators are designed to make recipe
              planning faster while keeping the final testing process in
              the maker's hands.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-slate-950">
              DIY Recipe Calculators
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you are making candles, bath bombs or other craft
              products, accurate measurements can make recipes easier to
              repeat. Use the calculator that matches your project and
              always follow the instructions supplied with your ingredients.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CraftDiyCalculators;