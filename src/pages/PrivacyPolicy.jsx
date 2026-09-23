import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">

          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">

            <h1 className="text-3xl font-bold text-slate-900">
              Privacy Policy
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Last updated: September 2026
            </p>

            <div className="mt-8 space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Introduction
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Welcome to Caltrixaa. We respect your privacy and are
                  committed to providing a transparent experience when you use
                  our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information We Collect
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa does not require you to create an account to use
                  the basic calculators available on the website.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Some information may be collected automatically by hosting,
                  analytics, advertising or other third-party services if
                  those services are used on the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Calculator Data
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Many Caltrixaa calculators perform calculations directly in
                  your browser. Information entered into a calculator is not
                  intentionally stored by Caltrixaa unless a particular tool
                  clearly states otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cookies
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Caltrixaa may use cookies or similar technologies if
                  required by analytics, advertising or other website
                  functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Third-Party Services
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We may use third-party services for website hosting,
                  analytics, advertising and other functionality. These
                  services may collect information according to their own
                  privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Changes to This Policy
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  This Privacy Policy may be updated when our website,
                  services or legal requirements change. The updated version
                  will be published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  If you have questions about this Privacy Policy, please
                  contact us through the Contact page.
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