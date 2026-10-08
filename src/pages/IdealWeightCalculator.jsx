import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function IdealWeightCalculator() {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculate() {
    const heightCm = Number(height);

    if (!heightCm) {
      setResult(null);
      setError("Please enter your height.");
      return;
    }

    if (heightCm < 100 || heightCm > 250) {
      setResult(null);
      setError("Please enter a height between 100 cm and 250 cm.");
      return;
    }

    setError("");

    const heightInches = heightCm / 2.54;
    const inchesOverFiveFeet = heightInches - 60;

    let idealWeight;

    if (gender === "male") {
      idealWeight = 50 + 2.3 * inchesOverFiveFeet;
    } else {
      idealWeight = 45.5 + 2.3 * inchesOverFiveFeet;
    }

    if (idealWeight < 0) {
      idealWeight = 0;
    }

    setResult(idealWeight);
  }

  function reset() {
    setHeight("");
    setGender("male");
    setResult(null);
    setError("");
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Ideal Weight Calculator",
        url: "https://caltrixaa.vercel.app/ideal-weight-calculator",
        applicationCategory: "HealthApplication",
        operatingSystem: "All",
        description:
          "Free ideal weight calculator that estimates body weight from height using a commonly used height-based formula.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://caltrixaa.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ideal Weight Calculator",
            item: "https://caltrixaa.vercel.app/ideal-weight-calculator",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an ideal weight?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Ideal weight is an estimated body weight based on factors such as height and sex. It is a reference estimate rather than a medical diagnosis or a single universally healthy weight.",
            },
          },
          {
            "@type": "Question",
            name: "How is ideal weight calculated?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "This calculator uses the Devine formula. For men, the estimate starts at 50 kg plus 2.3 kg for each inch above 5 feet. For women, it starts at 45.5 kg plus 2.3 kg for each inch above 5 feet.",
            },
          },
          {
            "@type": "Question",
            name: "Does ideal weight depend only on height?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. Height is only one factor used by simple ideal-weight formulas. Age, body composition, muscle mass, activity level and other individual factors can also affect what is appropriate for a person.",
            },
          },
          {
            "@type": "Question",
            name: "Is ideal weight the same as healthy weight?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Not necessarily. An ideal-weight formula provides an estimate, while healthy weight depends on several individual factors. A single calculated number should not be treated as a medical target.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use this calculator for children?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "This calculator is intended as a general adult estimation tool. Children and teenagers require age- and sex-specific growth references, so an adult ideal-weight formula should not be used for them.",
            },
          },
          {
            "@type": "Question",
            name: "Why do different ideal weight calculators give different results?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Different calculators may use different formulas and assumptions. Devine, Robinson, Miller and Hamwi formulas can produce different estimates for the same height.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Ideal Weight Calculator - Calculate Ideal Weight by Height | Caltrixaa"
        description="Use Caltrixaa's free ideal weight calculator to estimate body weight from height and sex. Learn the formula, see an example, and understand the limits."
        keywords="ideal weight calculator, ideal weight by height, ideal body weight calculator, healthy weight calculator, ideal weight calculator for adults"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">

          {/* Calculator */}
          <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-4xl">⚖️</div>

              <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Ideal Weight Calculator
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                Estimate an ideal body weight from height and sex using a
                commonly used height-based formula.
              </p>
            </div>

            {/* Quick Answer */}
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
              <h2 className="text-lg font-bold text-slate-900">
                Quick Answer
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                An ideal weight calculator gives an estimated reference weight
                based mainly on height. This calculator uses the Devine formula
                and provides an estimate for adults. It should be viewed as a
                reference rather than a medical diagnosis or a universal
                healthy-weight target.
              </p>
            </div>

            {/* Form */}
            <div className="mx-auto mt-8 max-w-xl">
              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Sex
                </label>

                <select
                  value={gender}
                  onChange={function (e) {
                    setGender(e.target.value);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-semibold text-slate-700">
                  Height (cm)
                </label>

                <input
                  type="number"
                  min="100"
                  max="250"
                  value={height}
                  onChange={function (e) {
                    setHeight(e.target.value);
                  }}
                  placeholder="Example: 175"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              {error && (
                <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <div className="mt-5 flex gap-3">
                <button
                  onClick={calculate}
                  className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Calculate
                </button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>

              {result !== null && (
                <div className="mt-6 rounded-2xl bg-indigo-50 p-6 text-center">
                  <p className="text-sm text-slate-500">
                    Estimated Ideal Body Weight
                  </p>

                  <p className="mt-2 text-4xl font-bold text-indigo-600">
                    {result.toFixed(1)} kg
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    This is an estimate based on the selected formula. It is
                    not a medical diagnosis or a guaranteed healthy weight.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* What is ideal weight */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is Ideal Weight?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Ideal weight is a general estimate of body weight based on
              characteristics such as height and sex. Several mathematical
              formulas have been developed to estimate ideal body weight, but
              they do not describe one exact weight that is healthy for every
              person.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Factors such as muscle mass, body composition, age, activity level
              and overall health can affect an individual's appropriate weight.
              For that reason, an ideal-weight calculation is best used as a
              reference point rather than a strict goal.
            </p>
          </section>

          {/* How calculated */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              How Is Ideal Weight Calculated?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              This calculator uses the <strong>Devine formula</strong>, a
              commonly cited ideal body weight formula. The calculation uses
              height in inches and applies a different base value for men and
              women.
            </p>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Devine Formula for Men
            </h3>

            <div className="mt-3 rounded-2xl bg-slate-50 p-5 font-semibold text-slate-800">
              Ideal Weight = 50 kg + 2.3 kg × (inches over 5 feet)
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Devine Formula for Women
            </h3>

            <div className="mt-3 rounded-2xl bg-slate-50 p-5 font-semibold text-slate-800">
              Ideal Weight = 45.5 kg + 2.3 kg × (inches over 5 feet)
            </div>

            <p className="mt-4 leading-7 text-slate-600">
              Because the calculator accepts height in centimeters, height is
              first converted to inches. One inch equals 2.54 centimeters.
            </p>
          </section>

          {/* Example */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Ideal Weight Calculation Example
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Suppose a man is 175 cm tall. First, the height is converted from
              centimeters to inches. The result is then compared with 5 feet
              (60 inches), and the Devine formula is applied to the inches above
              5 feet.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-800">
                Example height: 175 cm
              </p>

              <p className="mt-2 text-slate-600">
                Height in inches = 175 ÷ 2.54
              </p>

              <p className="mt-2 text-slate-600">
                The resulting estimate is then calculated using the male Devine
                formula.
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              The example demonstrates the calculation method. Your result may
              differ depending on your height and selected sex.
            </p>
          </section>

          {/* Important limitations */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Important Limitations of Ideal Weight Calculators
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Simple ideal-weight formulas cannot account for every factor that
              influences health and body weight.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>
                • They do not directly measure body fat or muscle mass.
              </li>
              <li>
                • Different formulas can produce different estimates.
              </li>
              <li>
                • They are not intended to diagnose a health condition.
              </li>
              <li>
                • A calculated number should not automatically be treated as a
                personal medical target.
              </li>
              <li>
                • Adult formulas should not be used to assess children and
                teenagers.
              </li>
            </ul>
          </section>

          {/* Related calculators */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Related Health Calculators
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Explore other Caltrixaa health calculators for additional
              mathematical estimates.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                to="/bmi-calculator"
                className="rounded-xl border border-slate-200 p-4 font-semibold text-indigo-600 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                BMI Calculator →
              </Link>

              <Link
                to="/bmr-calculator"
                className="rounded-xl border border-slate-200 p-4 font-semibold text-indigo-600 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                BMR Calculator →
              </Link>

              <Link
                to="/calorie-calculator"
                className="rounded-xl border border-slate-200 p-4 font-semibold text-indigo-600 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Calorie Calculator →
              </Link>

              <Link
                to="/weight-calculator"
                className="rounded-xl border border-slate-200 p-4 font-semibold text-indigo-600 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Weight Calculator →
              </Link>
            </div>
          </section>

          {/* Blog */}
          <section className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Learn More About Ideal Weight
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Want to understand the formulas in more detail? Read our guide
              explaining how height-based ideal weight calculations work and
              why different formulas can produce different estimates.
            </p>

            <Link
              to="/blog/how-to-calculate-ideal-weight-for-height"
              className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              How to Calculate Ideal Weight for Height →
            </Link>
          </section>

          {/* FAQ */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  What is an ideal weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Ideal weight is an estimated reference weight based on
                  characteristics such as height and sex. It is not a single
                  universally healthy weight for everyone.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How is ideal weight calculated?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  This calculator uses the Devine formula, which estimates
                  weight from height in inches and uses different base values
                  for men and women.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Does ideal weight depend only on height?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. Height is only one factor. Body composition, muscle mass,
                  age, activity level and overall health can also matter.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Is ideal weight the same as healthy weight?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. An ideal-weight formula gives a mathematical estimate.
                  Healthy weight is more individual and cannot be determined
                  from one formula alone.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Can this calculator be used for children?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  No. This calculator is intended as a general adult estimation
                  tool. Children and teenagers require age-specific growth
                  references.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Why do different calculators give different ideal weights?
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Different calculators may use different formulas. Because the
                  underlying assumptions differ, two calculators can produce
                  different estimates for the same height.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Health Information Disclaimer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              This calculator provides a mathematical estimate for general
              informational purposes. It is not medical advice, diagnosis or
              treatment. If you have concerns about your weight or health,
              consider discussing them with a qualified healthcare
              professional.
            </p>

            <Link
              to="/disclaimer"
              className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Read the full Caltrixaa Disclaimer →
            </Link>
          </section>

          {/* Key Takeaways */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Takeaways
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>
                • Ideal weight formulas provide estimates rather than exact
                health targets.
              </li>
              <li>
                • This calculator uses the Devine formula.
              </li>
              <li>
                • Height and sex are used in the calculation.
              </li>
              <li>
                • Different ideal-weight formulas can produce different
                results.
              </li>
              <li>
                • Body composition and individual health factors are not fully
                represented by a simple formula.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-8 rounded-3xl bg-indigo-600 p-6 text-center text-white sm:p-8">
            <h2 className="text-2xl font-bold">
              Explore More Free Calculators
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-indigo-100">
              Use Caltrixaa's free online calculators for health, math, money,
              date and time, and craft and DIY calculations.
            </p>

            <Link
              to="/"
              className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-slate-100"
            >
              Explore Caltrixaa Calculators →
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default IdealWeightCalculator;