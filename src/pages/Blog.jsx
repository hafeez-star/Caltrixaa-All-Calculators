
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "Bath Bombs",
    icon: "🛁",
    title: "How to Calculate Bath Bomb Ingredients in Grams",
    description:
      "Learn how to calculate citric acid, baking soda and other bath bomb ingredients by batch weight using a simple ratio.",
    path: "/blog/how-to-calculate-bath-bomb-ingredients",
    readTime: "6 min read",
  },
  {
    category: "Candle Making",
    icon: "🕯️",
    title: "How to Calculate Candle Wax and Fragrance Oil",
    description:
      "A practical guide to calculating candle wax and fragrance oil amounts from container size and wax weight.",
    path: "/blog/candle-wax-fragrance-calculation",
    readTime: "7 min read",
  },
  {
    category: "Fragrance",
    icon: "🌸",
    title: "What Is Fragrance Load? A Simple Guide for Candle Makers",
    description:
      "Understand fragrance load percentages and learn how to calculate fragrance oil for candles and wax melts.",
    path: "/blog/what-is-fragrance-load",
    readTime: "6 min read",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Caltrixaa Blog - Calculator Guides, DIY Tips & Tutorials"
        description="Read practical calculator guides, craft and DIY tutorials, candle making tips, bath bomb recipes, fragrance calculations and useful calculation guides."
        keywords="calculator blog, craft diy calculator guides, candle making calculator guide, bath bomb calculator guide, fragrance load calculator guide"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Caltrixaa Blog",
          url: "https://caltrixaa.vercel.app/blog",
          description:
            "Practical calculator guides, DIY tutorials and calculation tips from Caltrixaa.",
          publisher: {
            "@type": "Organization",
            name: "Caltrixaa",
            url: "https://caltrixaa.vercel.app/",
          },
        }}
      />

      <Navbar />

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-sm">
                📝 Caltrixaa Guides & Articles
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Calculator Guides &{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  DIY Tips
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Practical guides that explain calculations in simple language,
                from candle making and bath bombs to everyday calculators and
                useful DIY projects.
              </p>

            </div>
          </div>
        </section>


        {/* FEATURED */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="mb-8 flex items-end justify-between gap-4">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Featured Guide
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950">
                Start with a practical calculation guide
              </h2>
            </div>

          </div>


          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            <div className="grid lg:grid-cols-2">

              <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-10">

                <div className="text-center">

                  <div className="text-8xl">🛁</div>

                  <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-sm">
                    Bath Bomb Guide
                  </div>

                </div>

              </div>


              <div className="flex flex-col justify-center p-8 sm:p-10">

                <span className="text-sm font-bold text-indigo-600">
                  Craft & DIY
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  How to Calculate Bath Bomb Ingredients in Grams
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Learn how batch weight and ingredient ratios work when
                  making bath bombs. This beginner-friendly guide explains
                  how to plan ingredients before mixing your recipe.
                </p>

                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <span>⏱️ 6 min read</span>
                  <span>•</span>
                  <span>DIY Guide</span>
                </div>

                <Link
                  to="/blog/how-to-calculate-bath-bomb-ingredients"
                  className="mt-7 inline-flex w-fit items-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo-600"
                >
                  Read Guide →
                </Link>

              </div>

            </div>

          </article>

        </section>


        {/* ARTICLES */}
        <section className="bg-slate-50 py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Latest Guides
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Learn, Calculate & Create
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Simple explanations for makers, DIY creators and anyone who
                wants to understand the numbers behind a recipe or project.
              </p>

            </div>


            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {articles.map(function (article) {

                return (
                  <article
                    key={article.path}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex h-44 items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-50">

                      <span className="text-7xl transition duration-300 group-hover:scale-110">
                        {article.icon}
                      </span>

                    </div>


                    <div className="p-6">

                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">
                        {article.category}
                      </span>

                      <h2 className="mt-4 text-xl font-bold leading-7 text-slate-950">
                        {article.title}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {article.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between">

                        <span className="text-xs font-semibold text-slate-400">
                          {article.readTime}
                        </span>

                        <Link
                          to={article.path}
                          className="font-bold text-indigo-600 transition group-hover:translate-x-1"
                        >
                          Read → 
                        </Link>

                      </div>

                    </div>

                  </article>
                );

              })}

            </div>

          </div>

        </section>


        {/* CALCULATOR CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">

            <span className="text-4xl">🧮</span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Need the calculation instead?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Use Caltrixaa's free calculators to get quick results without
              doing the math manually.
            </p>

            <Link
              to="/craft-diy-calculators"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Explore Craft & DIY Calculators →
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Blog;
