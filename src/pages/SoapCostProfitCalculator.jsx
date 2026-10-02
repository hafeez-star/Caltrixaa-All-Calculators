import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function SoapCostProfitCalculator() {
  const [oilCost, setOilCost] = useState("");
  const [lyeCost, setLyeCost] = useState("");
  const [fragranceCost, setFragranceCost] = useState("");
  const [packagingCost, setPackagingCost] = useState("");
  const [laborTime, setLaborTime] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [soapQuantity, setSoapQuantity] = useState("10");
  const [profitMargin, setProfitMargin] = useState(30);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateProfit() {
    setError("");
    setResult(null);

    const oils = Number(oilCost);
    const lye = Number(lyeCost);
    const fragrance = Number(fragranceCost);
    const packaging = Number(packagingCost);
    const time = Number(laborTime);
    const rate = Number(hourlyRate);
    const quantity = Number(soapQuantity);
    const margin = Number(profitMargin);

    if (
      oilCost === "" ||
      lyeCost === "" ||
      fragranceCost === "" ||
      packagingCost === "" ||
      laborTime === "" ||
      hourlyRate === "" ||
      soapQuantity === ""
    ) {
      setError("Please enter all cost and production values.");
      return;
    }

    if (
      oils < 0 ||
      lye < 0 ||
      fragrance < 0 ||
      packaging < 0 ||
      time < 0 ||
      rate < 0 ||
      quantity <= 0 ||
      margin < 0 ||
      margin > 100
    ) {
      setError("Please enter valid positive values.");
      return;
    }

    const laborCost = time * rate;

    const totalBatchCost =
      oils +
      lye +
      fragrance +
      packaging +
      laborCost;

    const costPerBar = totalBatchCost / quantity;

    const sellingPrice =
      costPerBar / (1 - margin / 100);

    const profitPerBar = sellingPrice - costPerBar;

    const monthlyProfit = profitPerBar * quantity;

    setResult({
      laborCost: laborCost,
      totalBatchCost: totalBatchCost,
      costPerBar: costPerBar,
      sellingPrice: sellingPrice,
      profitPerBar: profitPerBar,
      monthlyProfit: monthlyProfit,
      quantity: quantity,
    });
  }

  function resetCalculator() {
    setOilCost("");
    setLyeCost("");
    setFragranceCost("");
    setPackagingCost("");
    setLaborTime("");
    setHourlyRate("");
    setSoapQuantity("10");
    setProfitMargin(30);
    setResult(null);
    setError("");
  }

  function formatMoney(value) {
    return Number(value).toFixed(2);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best free soap calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A useful soap calculator should make it easy to estimate ingredient costs, labor, packaging, selling price and profit. Caltrixaa's Soap Cost & Profit Calculator combines these business calculations in one free tool.",
        },
      },
      {
        "@type": "Question",
        name: "How to use lye calculator for soap making?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A lye calculator for soap making normally uses your soap recipe and oil quantities to determine the required lye. This calculator focuses on the cost of lye as part of the total soap production cost.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between soap calculator and soap lye calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A soap calculator can refer to tools that calculate recipe, cost or pricing information, while a soap lye calculator specifically focuses on determining lye requirements from a soap recipe.",
        },
      },
      {
        "@type": "Question",
        name: "How much lye do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The amount of lye depends on the oils, their weights and the selected soap recipe. Lye requirements should be calculated with a dedicated soap recipe lye calculator rather than guessed.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate soap cost and profit?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Add your oil, lye, fragrance, packaging and labor costs to find the total batch cost. Divide by the number of soap bars to find cost per bar, then use your desired profit margin to estimate a selling price and profit.",
        },
      },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Soap Cost & Profit Calculator - Advanced Soap Calculator",
    description:
      "Calculate soap production cost, cost per bar, selling price and profit using ingredient, packaging and labor costs.",
    url: "https://caltrixaa.vercel.app/soap-cost-profit-calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-slate-900">
      <SEO
        title="Soap Cost Calculator | Soap Profit Calculator | Lye & Soap Calculator"
        description="Free soap calculator for soap cost, profit, selling price, lye cost, fragrance, packaging and labor. Calculate soap business profit per bar."
        keywords="soap calculator, soap calculators, calculator soap, lye calculator, lye calculator for soap, soap lye calculator, lye soap calculator, soap calculator lye, lye calculator for soap making"
        schema={[calculatorSchema, faqSchema]}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#e8e1d3] bg-gradient-to-br from-[#eef7ed] via-[#fbfaf6] to-[#f5eee1]">
        <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-green-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
            🧼 Free Soap Business Calculator
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Soap Cost & Profit Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Calculate soap production costs, cost per bar, selling price and
            profit using your oils, lye, fragrance, packaging and labor costs.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section
          id="soap-calculator"
          className="mx-auto max-w-4xl rounded-3xl border border-[#ded7c8] bg-white p-6 shadow-xl sm:p-9"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Free Soap Calculator
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your batch costs and production details to calculate your
              soap cost and expected profit.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* OIL COST */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Oil Cost
              </label>

              <input
                type="number"
                min="0"
                value={oilCost}
                onChange={function (e) {
                  setOilCost(e.target.value);
                }}
                placeholder="Example: 25"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />

              <p className="mt-1.5 text-xs text-slate-500">
                Olive oil, coconut oil and other soap oils
              </p>
            </div>

            {/* LYE COST */}
            <div id="lye-cost">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Lye Cost - Lye Calculator for Soap Cost
              </label>

              <input
                type="number"
                min="0"
                value={lyeCost}
                onChange={function (e) {
                  setLyeCost(e.target.value);
                }}
                placeholder="Example: 8"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />

              <p className="mt-1.5 text-xs text-slate-500">
                NaOH or KOH cost used in your soap batch
              </p>
            </div>

            {/* FRAGRANCE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Fragrance / Essential Oil Cost
              </label>

              <input
                type="number"
                min="0"
                value={fragranceCost}
                onChange={function (e) {
                  setFragranceCost(e.target.value);
                }}
                placeholder="Example: 6"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* PACKAGING */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Mold / Packaging Cost
              </label>

              <input
                type="number"
                min="0"
                value={packagingCost}
                onChange={function (e) {
                  setPackagingCost(e.target.value);
                }}
                placeholder="Example: 10"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* LABOR TIME */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Labor Time (Hours)
              </label>

              <input
                type="number"
                min="0"
                step="0.1"
                value={laborTime}
                onChange={function (e) {
                  setLaborTime(e.target.value);
                }}
                placeholder="Example: 2"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* HOURLY RATE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Labor Rate Per Hour
              </label>

              <input
                type="number"
                min="0"
                value={hourlyRate}
                onChange={function (e) {
                  setHourlyRate(e.target.value);
                }}
                placeholder="Example: 15"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* QUANTITY */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Number of Soap Bars
              </label>

              <input
                type="number"
                min="1"
                value={soapQuantity}
                onChange={function (e) {
                  setSoapQuantity(e.target.value);
                }}
                placeholder="Example: 10"
                className="w-full rounded-2xl border border-[#d8d1c3] bg-[#fdfcf9] px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* PROFIT MARGIN */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700">
                  Profit Margin
                </label>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  {profitMargin}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={profitMargin}
                onChange={function (e) {
                  setProfitMargin(Number(e.target.value));
                }}
                className="mt-3 w-full accent-green-700"
              />

              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={calculateProfit}
              className="flex-1 rounded-2xl bg-green-700 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-800"
            >
              Calculate Soap Cost & Profit
            </button>

            <button
              onClick={resetCalculator}
              className="rounded-2xl border border-[#d8d1c3] bg-[#faf8f2] px-7 py-4 font-bold text-slate-700 transition hover:bg-[#f2eee4]"
            >
              Reset
            </button>
          </div>

          {/* RESULTS */}
          {result && (
            <div className="mt-9 rounded-3xl bg-gradient-to-br from-green-800 to-emerald-700 p-6 text-white shadow-lg sm:p-8">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-green-100">
                  Your Soap Business Results
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Cost, Price & Profit
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">
                    Total Batch Cost
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {formatMoney(result.totalBatchCost)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">
                    Cost Per Soap Bar
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {formatMoney(result.costPerBar)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">
                    Suggested Selling Price
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {formatMoney(result.sellingPrice)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">
                    Profit Per Bar
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {formatMoney(result.profitPerBar)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 sm:col-span-2">
                  <p className="text-sm text-green-100">
                    Profit for {result.quantity} Soap Bars
                  </p>

                  <p className="mt-2 text-4xl font-black">
                    {formatMoney(result.monthlyProfit)}
                  </p>

                  <p className="mt-2 text-sm text-green-100">
                    Based on one production batch of {result.quantity} bars.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-black/10 p-4 text-sm text-green-50">
                Labor cost included in this calculation:{" "}
                <strong>{formatMoney(result.laborCost)}</strong>
              </div>
            </div>
          )}
        </section>

        {/* QUICK LINK */}
        <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-green-100 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Need a Soap Lye Calculator?
          </h2>

          <p className="mt-2 leading-7 text-slate-600">
            Lye requirements depend on the specific oils and recipe. Use the
            lye-cost section above when calculating production expenses, and
            keep recipe lye calculations separate from business pricing.
          </p>

          <a
            href="#lye-cost"
            className="mt-4 inline-flex rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
          >
            Go to Lye Calculator for Soap Cost →
          </a>
        </section>

        {/* SEO CONTENT */}
        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-950">
            What is Soap Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A soap calculator can mean different things depending on what a
            soap maker needs to calculate. Some soap calculators focus on
            recipe quantities, while others help with ingredient costs,
            pricing and profit. This advanced soap calculator is designed for
            soap makers who want to understand the business side of each
            batch. Instead of looking only at ingredients, you can include oil
            cost, lye cost, fragrance or essential oil cost, packaging and
            labor. The result gives you a clearer picture of what each bar
            actually costs to produce and what selling price may support your
            chosen profit margin.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Search terms such as soap calculator, calculator soap and soap
            calculators can refer to several types of tools. A good calculator
            should make the calculation easy to understand and should show
            the numbers that matter to the person making or selling soap.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            How to Use Our Lye Calculator for Soap Cost?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Start by entering the total cost of the oils used in your batch.
            Olive oil, coconut oil, shea butter and other oils can be combined
            into the oil cost. Next, enter the amount you spent on NaOH or KOH.
            This is the lye cost used by the business calculator. Add your
            fragrance or essential oil expense and then include packaging or
            mold costs if you want a more complete production estimate.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            After that, enter the time spent making the batch and your desired
            hourly labor rate. The calculator converts those two values into a
            labor cost. Finally, enter how many bars the batch produces and
            choose a profit margin using the slider. The calculator then
            divides the total production cost by the number of bars and
            estimates a selling price and profit per bar.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Soap Calculator vs Lye Soap Calculator - Difference
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A soap calculator and a lye soap calculator are not necessarily the
            same type of tool. A general soap calculator may be used for
            pricing, ingredients, batch sizes or business calculations. A soap
            lye calculator, on the other hand, normally refers to a recipe tool
            that calculates the amount of lye required for a specific
            combination and weight of oils.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            This distinction matters because lye is a caustic ingredient and
            its required amount should come from a properly calculated recipe.
            It should not be estimated from a selling-price calculator. This
            page therefore treats lye as a production cost while keeping recipe
            formulation as a separate calculation task.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            How to Price Soap to Sell?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Start with your real production costs instead of choosing a selling
            price first. Add oils, lye, fragrance, packaging and labor. If
            there are other regular production expenses, such as labels or
            consumable supplies, they can also be included in your cost
            records. Divide the total batch cost by the number of finished bars
            to find the cost per bar.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Once you know your cost per bar, choose a target profit margin and
            use the calculator to see a suggested selling price. Your final
            retail price can also depend on your market, packaging, product
            positioning, selling fees and other business expenses. The useful
            part of calculating your costs first is that you can see whether a
            proposed price leaves enough room for profit.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-slate-950">
            Soap Cost Calculator for Small Businesses
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Small soap businesses can use this calculator before changing
            recipes or prices. If fragrance becomes more expensive, packaging
            changes or labor time increases, updating the numbers shows how
            those changes affect the cost of every bar. This makes the tool
            useful for handmade soap makers, hobby businesses and small-batch
            production.
          </p>
        </article>

        {/* FAQ */}
        <section className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-7 space-y-4">
            <details className="rounded-2xl border border-[#ddd6c8] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">
                What is the best free soap calculator?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                A useful free soap calculator should make it easy to estimate
                ingredient costs, labor, packaging, selling price and profit.
                This calculator combines those business calculations in one
                place.
              </p>
            </details>

            <details className="rounded-2xl border border-[#ddd6c8] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">
                How to use lye calculator for soap making?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                A lye calculator for soap making normally uses the oils and
                recipe details to determine the required lye. This page uses
                lye as a cost input for soap business pricing.
              </p>
            </details>

            <details className="rounded-2xl border border-[#ddd6c8] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">
                What is the difference between soap calculator and soap lye
                calculator?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                A soap calculator can cover recipe, cost or pricing
                calculations, while a soap lye calculator generally focuses on
                determining the lye requirement for a specific soap recipe.
              </p>
            </details>

            <details className="rounded-2xl border border-[#ddd6c8] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">
                How much lye do I need?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                The amount depends on the oils and recipe. Lye requirements
                should be calculated with a dedicated soap recipe lye
                calculator rather than estimated from a cost calculator.
              </p>

              <a
                href="#lye-cost"
                className="mt-3 inline-block font-semibold text-green-700 hover:underline"
              >
                Lye Calculator for Soap Cost →
              </a>
            </details>

            <details className="rounded-2xl border border-[#ddd6c8] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">
                How do I calculate soap cost and profit?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Add oil, lye, fragrance, packaging and labor costs. Divide the
                total by the number of soap bars to find the cost per bar, then
                use your desired profit margin to estimate the selling price
                and profit.
              </p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SoapCostProfitCalculator;