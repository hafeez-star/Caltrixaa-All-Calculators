import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(function () {
    document.title = "Discount Calculator - Calculate Sale Price | Caltrixaa";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Calculate discounts, savings and final sale prices with Caltrixaa's free discount calculator.";
  }, []);

  function calculate() {
    setError("");
    setResult(null);

    if (price === "" || discount === "") {
      setError("Please enter the price and discount.");
      return;
    }

    const originalPrice = Number(price);
    const discountPercent = Number(discount);

    if (
      originalPrice <= 0 ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      setError("Please enter valid values.");
      return;
    }

    const savings = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - savings;

    setResult({
      savings: savings,
      finalPrice: finalPrice,
    });
  }

  function reset() {
    setPrice("");
    setDiscount("");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <span className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            Free Shopping Calculator
          </span>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Discount Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Calculate your discount, savings and final sale price instantly.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-2xl font-bold">
              Calculate Your Discount
            </h2>

            <div className="mt-7">
              <label className="mb-2 block text-sm font-semibold">
                Original Price
              </label>

              <input
                type="number"
                value={price}
                onChange={function (e) {
                  setPrice(e.target.value);
                }}
                placeholder="Example: 100"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Discount (%)
              </label>

              <input
                type="number"
                value={discount}
                onChange={function (e) {
                  setDiscount(e.target.value);
                }}
                placeholder="Example: 20"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {error && (
              <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={calculate}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white hover:bg-indigo-700"
              >
                Calculate Discount
              </button>

              <button
                onClick={reset}
                className="rounded-2xl border border-slate-300 px-5 py-3.5 font-semibold hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            {result && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-7 text-white">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-indigo-100">
                      You Save
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                      {result.savings.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-indigo-100">
                      Final Price
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                      {result.finalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold">
            What Is a Discount Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A discount calculator helps you find how much money you save
            during a sale and what the final price will be after applying a
            percentage discount.
          </p>

          <h2 className="mt-10 text-3xl font-bold">
            Discount Formula
          </h2>

          <div className="mt-5 rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700">
            Discount = Original Price × Discount % ÷ 100
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5 text-center font-semibold text-slate-700">
            Final Price = Original Price − Discount
          </div>

          <h2 className="mt-10 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            <details className="rounded-2xl border bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                How do I calculate a discount?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Multiply the original price by the discount percentage divided
                by 100.
              </p>
            </details>

            <details className="rounded-2xl border bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                Can I calculate sale prices?
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. The calculator shows both your savings and the final
                price.
              </p>
            </details>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default DiscountCalculator;