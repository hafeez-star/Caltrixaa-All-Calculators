import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function CraftCalculatorPage({ config }) {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function updateValue(name, value) {
    setValues(function (oldValues) {
      return {
        ...oldValues,
        [name]: value,
      };
    });
  }

  function calculate() {
    setError("");
    setResult(null);

    for (let i = 0; i < config.inputs.length; i++) {
      const input = config.inputs[i];

      if (
        input.required !== false &&
        (values[input.name] === undefined ||
          values[input.name] === "")
      ) {
        setError("Please enter " + input.label.toLowerCase() + ".");
        return;
      }
    }

    const calculated = config.calculate(values);

    if (calculated.error) {
      setError(calculated.error);
      return;
    }

    setResult(calculated);
  }

  function reset() {
    setValues({});
    setResult(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: config.name,
          url: "https://caltrixaa.vercel.app" + config.path,
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
        <section className="bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:py-20">
            <Link
              to="/craft-diy-calculators"
              className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm transition hover:border-indigo-300"
            >
              🛠️ Craft & DIY Calculators
            </Link>

            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {config.h1}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {config.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-slate-950">
                  {config.calculatorTitle}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter your measurements below to calculate your result.
                </p>
              </div>

              {config.inputs.map(function (input) {
                return (
                  <div key={input.name} className="mt-5">
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      {input.label}
                    </label>

                    <div className="flex">
                      <input
                        type="number"
                        min={input.min}
                        max={input.max}
                        step={input.step || "any"}
                        value={values[input.name] || ""}
                        onChange={function (e) {
                          updateValue(input.name, e.target.value);
                        }}
                        placeholder={input.placeholder}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      {input.unit && (
                        <span className="ml-2 flex min-w-16 items-center justify-center rounded-2xl bg-slate-100 px-3 text-sm font-semibold text-slate-600">
                          {input.unit}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}

              {error && (
                <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-600">
                  {error}
                </div>
              )}

              <div className="mt-7 flex gap-3">
                <button
                  onClick={calculate}
                  className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-bold text-white shadow-lg transition hover:bg-indigo-700"
                >
                  Calculate
                </button>

                <button
                  onClick={reset}
                  className="rounded-2xl border border-slate-300 px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>

              {result && (
                <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white">
                  <p className="text-sm font-semibold text-indigo-100">
                    Your Result
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {result.results.map(function (item) {
                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl bg-white/10 p-5"
                        >
                          <p className="text-sm text-indigo-100">
                            {item.label}
                          </p>

                          <p className="mt-2 text-2xl font-black">
                            {item.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {result.note && (
                    <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-indigo-50">
                      {result.note}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <article className="mx-auto mt-16 max-w-4xl">
            {config.content.map(function (section, index) {
              if (section.type === "h2") {
                return (
                  <h2
                    key={index}
                    className="mt-10 text-3xl font-bold tracking-tight text-slate-950"
                  >
                    {section.text}
                  </h2>
                );
              }

              if (section.type === "h3") {
                return (
                  <h3
                    key={index}
                    className="mt-7 text-xl font-bold text-slate-950"
                  >
                    {section.text}
                  </h3>
                );
              }

              return (
                <p
                  key={index}
                  className="mt-5 leading-8 text-slate-600"
                >
                  {section.text}
                </p>
              );
            })}

            <h2 className="mt-12 text-3xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              {config.faqs.map(function (faq) {
                return (
                  <details
                    key={faq.question}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-900">
                      {faq.question}
                    </summary>

                    <p className="mt-3 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                );
              })}
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: config.faqs.map(function (faq) {
                    return {
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    };
                  }),
                }),
              }}
            />

            <div className="mt-12 rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
              <h2 className="text-2xl font-bold text-slate-950">
                More Craft & DIY Calculators
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {config.related.map(function (tool) {
                  return (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {tool.name} →
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CraftCalculatorPage;