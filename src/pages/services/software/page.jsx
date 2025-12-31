// src/pages/services/software/page.jsx

import Navbar from "../../../components/Navbar";

export default function SoftwareDevPage() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <main className="text-white bg-[#0b0b0b] overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="grid md:grid-cols-2 min-h-[65vh]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-10 py-24 bg-gradient-to-br from-[#141414] to-[#1c1c1c] animate-fadeLeft">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Build Software <br />
              <span className="text-[#d9590a]">That Scales</span>
            </h1>

            <p className="text-white/75 text-lg max-w-xl">
              From concept to deployment, we engineer secure, scalable and
              future-ready software solutions tailored to your business.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Software Development"
              className="absolute inset-0 w-full h-full object-cover
                         group-hover:scale-90 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-26 px-10 bg-[#111]">
          <h2 className="text-center text-5xl font-extrabold mb-20 animate-fadeUp">
            What We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
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
                className="group bg-[#1a1a1a] p-10 rounded-2xl border border-white/10
                           hover:border-[#e74e07]
                           hover:-translate-y-4
                           hover:shadow-[0_0_40px_rgba(246,196,69,0.25)]
                           transition-all duration-300 animate-fadeUp"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#de520c] transition">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= AGILE ================= */}
        <section className="py-25 px-12 bg-[#151515] grid md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl group animate-fadeLeft">
            <img
              src="/Agile.png"
              alt="Agile Development"
              className="absolute inset-0 w-full h-full object-cover
                         group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="animate-fadeRight">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Agile & Collaborative Delivery
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Iterative development, continuous feedback, and transparent
              communication ensure faster delivery and measurable impact.
            </p>
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section className="py-22 px-12 bg-[#1b1b1b] grid md:grid-cols-2 gap-20 items-center">
          <div className="animate-fadeLeft order-last md:order-first">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Future-Ready Technologies
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              AI, Cloud, Containers, React, Next.js and Node — we build systems
              designed to evolve with your business.
            </p>
          </div>

          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl group animate-fadeRight">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
              alt="Modern Tech"
              className="absolute inset-0 w-full h-full object-cover
                         group-hover:scale-110 transition duration-700"
            />
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-26 text-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="CTA Background"
              className="w-full h-full object-cover scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

          <div className="relative z-10 animate-fadeUp px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Ready To Innovate?
            </h2>
            <p className="text-white/85 max-w-3xl mx-auto mb-10 text-lg">
              Transform your vision into powerful software that accelerates growth.
            </p>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </main>
    </>
  );
}
