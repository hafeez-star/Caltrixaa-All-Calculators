import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

function HowToCalculateTimeDuration() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Calculate Time Duration",
    description:
      "Learn how to calculate time duration between two times using hours and minutes.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
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
        "https://caltrixaa.vercel.app/blog/how-to-calculate-time-duration",
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="How to Calculate Time Duration Between Two Times"
        description="Learn how to calculate time duration between two times using hours and minutes, including periods that cross midnight."
        keywords="time duration calculator, calculate time duration, time difference calculator, hours and minutes calculator"
        schema={schema}
      />

      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-slate-500">
          <a href="/">Home</a> / <a href="/blog">Blog</a> / Time Duration
        </nav>

        <article>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Date & Time Guide
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            How to Calculate Time Duration Between Two Times
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Calculating the duration between two times is useful for work
            schedules, study sessions, travel, appointments and everyday
            time tracking.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold">Quick Answer</h2>

            <p className="mt-3 leading-7 text-slate-700">
              To calculate time duration, convert the start and end times
              into a common unit, subtract the start from the end, and then
              convert the result back into hours and minutes. If the end time
              is after midnight, the calculation needs to account for the
              next day.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How Do You Calculate Time Duration?
            </h2>

            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-600">
              <li>Write down the starting time.</li>
              <li>Write down the ending time.</li>
              <li>Convert both times into a common unit if needed.</li>
              <li>Subtract the starting value from the ending value.</li>
              <li>Convert the answer into hours and minutes.</li>
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Example of a Time Duration
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Suppose a study session starts at 2:15 PM and ends at 4:45 PM.
              The elapsed time is 2 hours and 30 minutes.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What If the Time Crosses Midnight?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              When the ending time occurs after midnight, treat the ending
              time as belonging to the following day. This is important for
              night shifts, travel, events and other schedules that continue
              past midnight.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Convert Hours and Minutes When Needed
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              For calculations involving different units, converting the
              values first can make the calculation easier. You can also use
              the Caltrixaa{" "}
              <a
                href="/hours-to-minutes"
                className="font-semibold text-blue-600 hover:underline"
              >
                Hours to Minutes Calculator
              </a>{" "}
              when you need to convert hours into minutes.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Common Mistakes</h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
              <li>Mixing AM and PM values.</li>
              <li>Forgetting that a period crosses midnight.</li>
              <li>Subtracting hours and minutes independently without borrowing.</li>
              <li>Mixing minutes and decimal hours incorrectly.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Key Takeaways</h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
              <li>Time duration measures elapsed time between two times.</li>
              <li>Both values should use the same time format.</li>
              <li>Midnight crossings need special attention.</li>
              <li>Converting to one unit can simplify calculations.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-7">
              <div>
                <h3 className="text-xl font-bold">
                  How do I calculate time duration?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Subtract the starting time from the ending time after
                  making sure both values use compatible units.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  What happens if the time crosses midnight?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Treat the ending time as occurring on the following day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Can I calculate hours and minutes online?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. An online time calculator can calculate the duration
                  automatically.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Why should I convert time into one unit?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Using one unit, such as minutes, can reduce mistakes during
                  subtraction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Can hours be converted into minutes?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Hours can be converted to minutes by using the
                  relationship between the two units.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 rounded-2xl bg-slate-950 p-7 text-center">
            <h2 className="text-2xl font-bold text-white">
              Calculate Time Duration
            </h2>

            <a
              href="/time-calculator"
              className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-900"
            >
              Open Time Calculator →
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default HowToCalculateTimeDuration;