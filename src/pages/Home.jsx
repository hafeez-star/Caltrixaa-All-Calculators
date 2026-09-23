import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorCard from "../components/CalculatorCard";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden">

          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">

            <div className="mx-auto max-w-4xl text-center">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

                <span className="h-2 w-2 rounded-full bg-green-600" />

              Tools

              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">

                Smart tools for

                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">

                  everyday calculations

                </span>

              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">

                Calculate your age, BMI, percentages, dates and more with
                simple, fast and accurate online tools.

              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="#calculators"
                  className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  Explore Calculators
                </a>

                <a
                  href="#calculators"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-.5 hover:border-blue-200 hover:text-blue-600"
                >
                  Popular Tools
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* CALCULATORS */}

        <section
          id="calculators"
          className="border-t border-slate-100 bg-slate-50/70 py-20"
        >

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-10 text-center">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Our Tools
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Calculators made simple
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Fast, clean and easy-to-use tools for your everyday needs.
              </p>

            </div>


            <div className="clac grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Existing */}
              <CalculatorCard
                icon="🎂"
                title="Age Calculator"
                description="Calculate your exact age from your date of birth."
                link="/age-calculator"
              />

              <CalculatorCard
                icon="⚖️"
                title="BMI Calculator"
                description="Calculate your Body Mass Index quickly and easily."
                link="/bmi-calculator"
              />

              <CalculatorCard
                icon="📅"
                title="Date Calculator"
                description="Calculate dates, days and time differences."
                link="/date-calculator"
              />

              <CalculatorCard
                icon="%"
                title="Percentage Calculator"
                description="Calculate percentages quickly and easily."
                link="/percentage-calculator"
              />

              <CalculatorCard
                icon="🏷️"
                title="Discount Calculator"
                description="Calculate discounts, savings and final prices."
                link="/discount-calculator"
              />

              <CalculatorCard
                icon="💰"
                title="Tip Calculator"
                description="Calculate tips and split the bill between people."
                link="/tip-calculator"
              />

              <CalculatorCard
                icon="📊"
                title="Average Calculator"
                description="Calculate the average or mean of numbers."
                link="/average-calculator"
              />

              {/* Batch 3 */}
              <CalculatorCard
                icon="📆"
                title="Days Between Dates"
                description="Find the exact number of days between two dates."
                link="/days-between-dates"
              />

              <CalculatorCard
                icon="⏰"
                title="Time Calculator"
                description="Add or subtract hours and minutes."
                link="/time-calculator"
              />

              <CalculatorCard
                icon="⏱️"
                title="Hours to Minutes"
                description="Convert hours into minutes instantly."
                link="/hours-to-minutes"
              />

              <CalculatorCard
                icon="⌛"
                title="Minutes to Hours"
                description="Convert minutes into hours and remaining minutes."
                link="/minutes-to-hours"
              />

              {/* Batch 4 */}
              <CalculatorCard
                icon="⚖️"
                title="Weight Calculator"
                description="Convert kilograms to pounds quickly."
                link="/weight-calculator"
              />

              <CalculatorCard
                icon="📏"
                title="Ideal Weight Calculator"
                description="Estimate ideal weight based on height."
                link="/ideal-weight-calculator"
              />

              <CalculatorCard
                icon="🔥"
                title="BMR Calculator"
                description="Estimate your Basal Metabolic Rate."
                link="/bmr-calculator"
              />

              <CalculatorCard
                icon="🍎"
                title="Calorie Calculator"
                description="Estimate your daily calorie requirements."
                link="/calorie-calculator"
              />

            </div>

          </div>

        </section>


        {/* ABOUT PREVIEW */}

        <section className="bg-white py-20">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              About Caltrixaa
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Simple tools. Clear results.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Caltrixaa provides fast, simple and easy-to-use online
              calculators and useful everyday tools.
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;