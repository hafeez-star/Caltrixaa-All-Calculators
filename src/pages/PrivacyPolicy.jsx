import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - Caltrixaa",
    url: "https://caltrixaa.vercel.app/privacy-policy",
    description:
      "Read the Caltrixaa Privacy Policy to learn how information may be handled when you use our website and calculators.",
  };

  return (
    <>
      <SEO
        title="Privacy Policy - Caltrixaa"
        description="Read the Caltrixaa Privacy Policy to learn how information may be handled when you use our website and calculators."
        keywords="Caltrixaa privacy policy, privacy policy"
        schema={schema}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <header className="border-b border-slate-200 pb-8">
              <div className="text-4xl">🔒</div>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Privacy Policy
              </h1>

              <p className="mt-3 text-slate-500">
                Last updated: October 2026
              </p>
            </header>

            <div className="mt-10 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Introduction
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Welcome to Caltrixaa. This Privacy Policy explains how
                  information may be collected, used and handled when you
                  visit and use the Caltrixaa website.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa provides free online calculators and related
                  informational content. We respect your privacy and aim to
                  keep the information you provide to the website limited to
                  what is necessary for the services we provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information You Provide
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Some parts of the website may allow you to voluntarily
                  provide information, such as when you contact us.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  We do not ask users to provide sensitive personal
                  information simply to use the calculators.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Calculator Information
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Many Caltrixaa calculators process the values you enter
                  directly in your web browser. For example, information
                  entered into a calculator may be used to perform the
                  calculation and display the result.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  You should avoid entering sensitive personal information
                  into any calculator unless the page specifically requires
                  it and explains how that information is handled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Automatically Collected Information
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Like many websites, Caltrixaa may use standard technical
                  information such as browser type, device information,
                  approximate location, pages visited and other basic usage
                  information when analytics or similar services are enabled.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  This type of information can help us understand how the
                  website is used and identify technical or usability
                  improvements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cookies and Similar Technologies
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may use cookies or similar technologies in the
                  future for website functionality, analytics, security or
                  advertising purposes.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  If third-party advertising or analytics services are used,
                  those services may have their own privacy policies and
                  cookie practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Third-Party Services
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may use third-party services to provide hosting,
                  analytics, advertising, security or other website
                  functionality.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Third-party services may collect or process information
                  according to their own privacy policies. We recommend
                  reviewing the relevant third party's privacy policy when
                  applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  How Information May Be Used
                </h2>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                  <li>To operate and maintain the website.</li>
                  <li>To provide calculator functionality.</li>
                  <li>To respond to messages or inquiries.</li>
                  <li>To improve website performance and usability.</li>
                  <li>To understand general website usage.</li>
                  <li>To help maintain website security.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Data Security
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We take reasonable steps to protect information handled
                  through the website. However, no method of transmission or
                  storage over the internet can be guaranteed to be completely
                  secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Children's Privacy
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa is a general-purpose website and is not designed
                  specifically to collect personal information from children.
                  We do not knowingly request sensitive personal information
                  from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  External Links
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may contain links to external websites. We are not
                  responsible for the privacy practices, content or security of
                  websites operated by third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Changes to This Privacy Policy
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  This Privacy Policy may be updated from time to time as the
                  website develops or as services and features change. Any
                  updated version will be published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact Us
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have questions about this Privacy Policy, you can
                  contact Caltrixaa through our{" "}
                  <Link
                    to="/contact"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Contact page
                  </Link>
                  .
                </p>
              </section>

            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;