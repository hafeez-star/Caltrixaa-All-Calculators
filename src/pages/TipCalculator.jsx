import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("15");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(function () {
    document.title = "Tip Calculator - Calculate Tip & Split Bill | Caltrixaa";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Free tip calculator to calculate restaurant tips, total bill and amount per person.";
  }, []);

  function calculate() {
    setError("");
    setResult(null);

    if (!bill || !tip || !people) {
      setError("Please enter all values.");
      return;
    }

    const billValue = Number(bill);
    const tipValue = Number(tip);
    const peopleValue = Number(people);

    if (billValue <= 0 || tipValue < 0 || peopleValue <= 0) {
      setError("Please enter valid values.");
      return;
    }

    const tipAmount = (billValue * tipValue) / 100;
    const total = billValue + tipAmount;
    const perPerson = total / peopleValue;

    setResult({
      tipAmount: tipAmount,
      total: total,
      perPerson: perPerson,
    });
  }

  function reset() {
    setBill("");
    setTip("15");
    setPeople("1");
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <span className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            Free Money Calculator
          </span>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Tip Calculator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Calculate restaurant tips, total bills and how much each person
            should pay.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-2xl font-bold">
              Calculate Your Tip
            </h2>

            <div className="mt-7">
              <label className="mb-2 block text-sm font-semibold">
                Bill Amount
              </label>

              <input
                type="number"
                value={bill}
                onChange={function (e) {
                  setBill(e.target.value);
                }}
                placeholder="Example: 100"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Tip Percentage (%)
              </label>

              <input
                type="number"
                value={tip}
                onChange={function (e) {
                  setTip(e.target.value);
                }}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Number of People
              </label>

              <input
                type="number"
                min="1"
                value={people}
                onChange={function (e) {
                  setPeople(e.target.value);
                }}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {error && (
              <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              onClick={calculate}
              className="mt-6 w-full rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white hover:bg-indigo-700"
            >
              Calculate Tip
            </button>

            <button
              onClick={reset}
              className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-3.5 font-semibold hover:bg-slate-50"
            >
              Reset
            </button>

            {result && (
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Tip
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.tipAmount.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Total
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.total.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Per Person
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {result.perPerson.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <article className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold">
            What Is a Tip Calculator?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A tip calculator helps you calculate a tip based on your bill
            amount. It can also divide the final bill between multiple
            people.
          </p>

          <h2 className="mt-10 text-3xl font-bold">
            How Does It Work?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Enter your bill amount, choose a tip percentage and enter the
            number of people. The calculator calculates the tip and adds it
            to the original bill.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default TipCalculator;