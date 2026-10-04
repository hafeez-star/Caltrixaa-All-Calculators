import { Link } from "react-router-dom";

const tools = [
  {
    icon: "🕯️",
    name: "Candle Wax Calculator",
    path: "/candle-wax-calculator",
  },
  {
    icon: "🌸",
    name: "Fragrance Load Calculator",
    path: "/fragrance-load-calculator",
  },
  {
    icon: "🧮",
    name: "Candle Making Calculator",
    path: "/candle-making-calculator",
  },
  {
    icon: "🕯️",
    name: "Wick Size Calculator",
    path: "/wick-size-calculator",
  },
  {
    icon: "🪵",
    name: "Wooden Wick Calculator",
    path: "/wooden-wick-calculator",
  },
  {
    icon: "⚖️",
    name: "Candle Wax Weight Calculator",
    path: "/candle-wax-weight-calculator",
  },
  {
    icon: "🛁",
    name: "Bath Bomb Ratio Calculator",
    path: "/bath-bomb-ratio-calculator",
  },
  {
    icon: "🧼",
    name: "Soap Cost & Profit Calculator",
    path: "/soap-cost-profit-calculator",
  },
];

function RelatedCraftTools() {
  return (
    <section className="mx-auto mt-16 max-w-5xl">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

        <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
          More Craft & DIY Tools
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          Related Craft & DIY Calculators
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Explore our other free calculators for candle making, wax,
          fragrance, bath bombs and DIY projects.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(function (tool) {
            return (
              <Link
                key={tool.path}
                to={tool.path}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md"
              >
                <span className="text-2xl">
                  {tool.icon}
                </span>

                <span>
                  {tool.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-6">
          <Link
            to="/craft-diy-calculators"
            className="font-bold text-indigo-600 hover:text-indigo-700"
          >
            ← View All Craft & DIY Calculators
          </Link>
        </div>

      </div>
    </section>
  );
}

export default RelatedCraftTools;