import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Caltrixaa"
        description="The page you are looking for could not be found. Explore Caltrixaa's free online calculators and tools."
      />

      <Navbar />

      <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="mb-6 text-7xl font-bold text-indigo-600">
            404
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Page Not Found
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-slate-600">
            Sorry, the page you are looking for does not exist or may have
            been moved. You can return to the homepage or explore our free
            calculators.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Go to Homepage
            </Link>

            <Link
              to="/craft-diy-calculators"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Explore Calculators
            </Link>

            <Link
              to="/blog"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Visit Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;