import {  useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";


function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  

  function calculateAge() {
    setError("");
    setAge(null);

    if (!birthDate) {
      setError("Please select your date of birth.");
      return;
    }

    const birth = new Date(birthDate + "T00:00:00");
    const today = new Date();

    if (birth > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (today - birth) / (1000 * 60 * 60 * 24)
    );

    setAge({
      years: years,
      months: months,
      days: days,
      totalDays: totalDays,
    });
  }

  function resetCalculator() {
    setBirthDate("");
    setAge(null);
    setError("");
  }
  

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
  title="Age Calculator Online - Calculate Your Exact Age | Caltrixaa"
  description="Calculate your exact age online from your date of birth. Find your age in years, months and days with Caltrixaa's free age calculator."
  keywords="age calculator online, age calculator, calculate age, exact age calculator, age calculator by date of birth"
  schema={{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Age Calculator",
    url: "https://caltrixaa.vercel.app/age-calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  }}
/>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm">
              Free Online Calculator
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Age Calculator Online
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Calculate your exact age in years, months, and days using your
              date of birth. Fast, simple, free, and easy to use.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-950">
                Calculate Your Age
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your date of birth and we'll calculate your current age.
              </p>
            </div>

            <label
              htmlFor="birthDate"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Date of Birth
            </label>

            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={function (event) {
                setBirthDate(event.target.value);
              }}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            {error && (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={calculateAge}
                className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Calculate Age
              </button>

              <button
                onClick={resetCalculator}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            {/* Result */}
            {age && (
              <div className="mt-8">
                <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl">
                  <p className="text-sm font-medium text-indigo-100">
                    Your exact age is
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                      <div className="text-3xl font-bold">
                        {age.years}
                      </div>
                      <div className="mt-1 text-xs text-indigo-100">
                        Years
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                      <div className="text-3xl font-bold">
                        {age.months}
                      </div>
                      <div className="mt-1 text-xs text-indigo-100">
                        Months
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                      <div className="text-3xl font-bold">
                        {age.days}
                      </div>
                      <div className="mt-1 text-xs text-indigo-100">
                        Days
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-white/10 px-4 py-4 text-center">
                    <p className="text-sm text-indigo-100">
                      Approximately
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {age.totalDays.toLocaleString()} days
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEO Content */}
        <article className="mx-auto mt-16 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              What Is an Age Calculator?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              An age calculator is an online tool that calculates how old a
              person is based on their date of birth. Instead of manually
              counting years, months, and days, you can enter your birthday
              and get the result in seconds.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Caltrixaa's age calculator gives you an easy way to find your
              current age in years, months, and days. It can be useful when
              filling out forms, checking birthdays, planning events, or
              simply finding your exact age.
            </p>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              How to Calculate Your Age
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Using the calculator is simple:
            </p>

            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-600">
              <li>Select your date of birth.</li>
              <li>Click the "Calculate Age" button.</li>
              <li>Your age will be displayed in years, months, and days.</li>
              <li>You can use the Reset button to calculate another age.</li>
            </ol>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              How Does an Age Calculator Work?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The calculator compares your date of birth with today's date.
              It first calculates the difference in years, then adjusts the
              months and days so the result represents your completed age as
              accurately as possible.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              For example, if someone was born on January 15, 2000, the
              calculator compares that date with the current date and returns
              the completed years, remaining months, and remaining days.
            </p>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              Common Uses of an Age Calculator
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-600">
              <li>Checking your exact age</li>
              <li>Finding age for forms and applications</li>
              <li>Checking how many years, months, and days you have lived</li>
              <li>Preparing for birthday celebrations</li>
              <li>Calculating age for general personal use</li>
            </ul>
            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
  Related Calculators
</h2>

<div className="mt-6 flex flex-wrap gap-3">

  <a
    href="/date-calculator"
    className="rounded-xl bg-indigo-50 px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-100"
  >
    Date Calculator
  </a>

  <a
    href="/days-between-dates"
    className="rounded-xl bg-indigo-50 px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-100"
  >
    Days Between Dates
  </a>

  <a
    href="/time-calculator"
    className="rounded-xl bg-indigo-50 px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-100"
  >
    Time Calculator
  </a>

</div>

            {/* FAQ */}
            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  How accurate is this age calculator?
                </summary>

                <p className="mt-3 leading-7 text-slate-600">
                  The calculator uses your date of birth and the current date
                  to calculate completed years, months, and days.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  Can I calculate my age from my date of birth?
                </summary>

                <p className="mt-3 leading-7 text-slate-600">
                  Yes. Enter your date of birth above and click Calculate Age
                  to see your age.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  Is the age calculator free?
                </summary>

                <p className="mt-3 leading-7 text-slate-600">
                  Yes. Caltrixaa's age calculator is free to use.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  Can I use the calculator on my phone?
                </summary>

                <p className="mt-3 leading-7 text-slate-600">
                  Yes. The calculator is designed to work on phones, tablets,
                  laptops, and desktop computers.
                </p>
              </details>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default AgeCalculator;