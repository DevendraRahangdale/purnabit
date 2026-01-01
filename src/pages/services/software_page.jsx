// src/pages/services/software/page.jsx
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function SoftwareDevPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="relative text-slate-900 bg-slate-50 overflow-hidden">

        {/* 🔙 BACK BUTTON (TOP LEFT) */}
<div className="absolute top-28 left-6 md:left-8 z-50">
  <button
    onClick={() => navigate(-1)}
    className="
      group flex items-center gap-2
      px-4 py-2
      rounded-full
      border border-black
      bg-white/5 backdrop-blur-md
      text-sm font-semibold
      text-black

      hover:text-orange-400
      hover:border-orange-400/60
      hover:bg-orange-400/10

      transition-all duration-300 ease-out
    "
  >
    <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
      ←
    </span>
    <span className="hidden sm:inline">Back</span>
  </button>
</div>


        {/* ================= HERO ================= */}
        <section className="grid md:grid-cols-2 min-h-[55vh]">

          {/* LEFT */}
          <div
            className="
              flex flex-col justify-center px-10 py-20
              bg-gradient-to-br from-slate-100 to-slate-200
              animate-hero
            "
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-14 leading-tight">
              Build Software <br />
              <span className="text-orange-600">That Scales</span>
            </h1>

            <p className="text-slate-700 text-lg max-w-xl">
              From concept to deployment, we engineer secure, scalable and
              future-ready software solutions tailored to your business.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden h-[320px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Software Development"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-700
                hover:scale-[1.04]
              "
            />
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-16 px-4 bg-white">
  <h2 className="text-center text-4xl font-extrabold mb-12 animate-reveal">
    What We Build
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {[
      {
        title: "Web Applications",
        desc: "Modern, responsive, enterprise-grade applications built for performance and scalability.",
      },
      {
        title: "Mobile Apps",
        desc: "Cross-platform mobile solutions with seamless UX and high performance.",
      },
      {
        title: "Custom Integrations",
        desc: "APIs, automation, and intelligent systems tailored to your workflows.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          relative bg-slate-50
          border border-slate-200
          rounded-2xl
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-orange-500
          animate-reveal delay-100
        "
      >
        {/* TOP BOLD LINE */}
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-blue-500 rounded-t-2xl" />

        {/* CONTENT */}
        <div className="p-8">
          <h3 className="text-xl font-bold mb-3 text-slate-900">
            {item.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* ================= AGILE ================= */}
        <section className="py-18 px-10 bg-slate-100 grid md:grid-cols-2 gap-14 items-center">

          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg animate-reveal">
            <img
              src="/Agile.png"
              alt="Agile Development"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-700
                hover:scale-[1.03]
              "
            />
          </div>

          <div className="animate-reveal delay-200">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Agile & Collaborative Delivery
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Iterative development, continuous feedback, and transparent
              communication ensure faster delivery and measurable impact.
            </p>
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section className="py-18 px-10 bg-slate-200 grid md:grid-cols-2 gap-14 items-center">

          <div className="animate-reveal delay-200 order-last md:order-first">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Future-Ready Technologies
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              AI, Cloud, Containers, React, Next.js and Node — we build systems
              designed to evolve with your business.
            </p>
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg animate-reveal">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
              alt="Modern Tech"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-700
                hover:scale-[1.03]
              "
            />
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-20 text-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="CTA Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 px-6 animate-reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Ready To Innovate?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Transform your vision into powerful software that accelerates growth.
            </p>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      </main>

      <Footer />
    </>
  );
}
