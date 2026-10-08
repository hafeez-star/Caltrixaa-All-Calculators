import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculateBmrForAdults() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Calculate BMR for Adults",
    description:
      "Learn what BMR means, how basal metabolic rate is estimated, and how age, height, weight and sex affect the calculation.",
    author: {
      "@type": "Organization",
      name: "Caltrixaa",
    },
    publisher: {
      "@type": "Organization",
      name: "Caltrixaa",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://caltrixaa.vercel.app/blog/how-to-calculate-bmr-for-adults",
    },
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  };

  return (
    <>
      <SEO
        title="How to Calculate BMR for Adults | Caltrixaa"
        description="Learn how to calculate BMR for adults using height, weight, age and sex, with a simple explanation of basal metabolic rate and calorie needs."
        keywords="how to calculate BMR for adults, BMR calculator, basal metabolic rate calculator, BMR formula, calculate BMR"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-white text-slate-800">
        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

          <nav className="mb-8 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/category/health" className="hover:text-indigo-600">
              Health
            </Link>{" "}
            / BMR Calculator Guide
          </nav>

          <header className="mb-10">
            <div className="mb-4 text-5xl">🔥</div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How to Calculate BMR for Adults
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Learn what basal metabolic rate means, how BMR is estimated,
              and how age, height, weight and sex affect the calculation.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Answer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              BMR, or basal metabolic rate, is an estimate of how much energy
              your body uses at rest to maintain basic functions such as
              breathing, circulation and temperature regulation. A common
              estimate uses age, sex, height and body weight. BMR is different
              from total daily calorie needs because daily activity requires
              additional energy.
            </p>
          </section>

          <section className="space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is BMR?
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                BMR stands for basal metabolic rate. It represents the energy
                your body needs to support essential functions while at rest.
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                Your body continuously uses energy even when you are not
                exercising. Your heart, lungs, brain and other organs need
                energy to keep working.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Information Is Needed to Calculate BMR?
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>Age</li>
                <li>Sex</li>
                <li>Height</li>
                <li>Body weight</li>
              </ul>

              <p className="mt-4 leading-7 text-slate-700">
                Different BMR equations may use these measurements in slightly
                different ways, so two formulas can produce different
                estimates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How Is BMR Calculated?
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                One commonly used approach is the Mifflin-St Jeor equation.
                The formula uses body weight, height and age, with a different
                constant depending on sex.
              </p>

              <div className="mt-5 rounded-xl bg-slate-900 p-5 text-white">
                <p className="font-semibold">For men:</p>
                <p className="mt-2">
                  BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5
                </p>

                <p className="mt-5 font-semibold">For women:</p>
                <p className="mt-2">
                  BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Example BMR Calculation
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                Suppose an adult weighs 70 kg, is 170 cm tall and is 30 years
                old. Those measurements can be entered into an appropriate BMR
                equation to produce an estimated resting energy requirement.
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                The result is an estimate rather than a direct measurement of
                metabolism.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                BMR vs Daily Calorie Needs
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                BMR should not be confused with the number of calories a person
                needs during a normal day. Walking, working, exercising,
                digestion and other activities require additional energy.
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                For this reason, daily calorie needs are generally estimated by
                considering BMR together with activity level.
              </p>

              <Link
                to="/bmr-calculator"
                className="mt-5 inline-block rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Try the BMR Calculator
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Factors That Can Affect Energy Needs
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>Age</li>
                <li>Body size and composition</li>
                <li>Height</li>
                <li>Sex</li>
                <li>Physical activity</li>
                <li>Health and other individual factors</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common BMR Calculation Mistakes
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>Confusing BMR with total daily calorie needs</li>
                <li>Entering pounds when kilograms are required</li>
                <li>Entering inches when centimeters are required</li>
                <li>Using the wrong age or measurement units</li>
                <li>Treating an estimated BMR as an exact measurement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Key Takeaways
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>BMR estimates energy used at rest.</li>
                <li>Age, height, weight and sex are used by common formulas.</li>
                <li>BMR is not the same as total daily calorie needs.</li>
                <li>Calculator results are estimates, not medical measurements.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    What does BMR stand for?
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    BMR stands for basal metabolic rate and estimates the
                    energy your body requires at rest for essential functions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Is BMR the same as daily calorie needs?
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    No. Daily calorie needs also account for physical activity
                    and other energy expenditure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Can a BMR calculator give an exact result?
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    No. BMR calculators provide estimates based on mathematical
                    formulas.
                  </p>
                </div>
              </div>
            </div>

          </section>

          <section className="mt-12 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Calculate Your BMR
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Use the Caltrixaa BMR calculator to estimate your basal metabolic
              rate using your basic measurements.
            </p>

            <Link
              to="/bmr-calculator"
              className="mt-5 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Open BMR Calculator
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowToCalculateBmrForAdults;