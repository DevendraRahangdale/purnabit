import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function SoftwareDevPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* PAGE FADE-IN */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative text-slate-900 bg-slate-50 overflow-hidden"
      >
        {/* 🔙 BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-16 md:top-6 left-2 md:left-10 z-50"
        >
          <button
            onClick={() => navigate(-1)}
            className="
              group flex items-center gap-2
              px-2 py-1
              rounded-full
              border border-slate-300
              bg-white/80 backdrop-blur-md
              text-sm font-semibold text-slate-800
              hover:text-[#008080]
              hover:border-[#008080]
              hover:bg-[#e6f7f5]
              transition-all duration-300
            "
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            <span className="hidden sm:inline">Back</span>
          </button>
        </motion.div>

        {/* ================= HERO ================= */}
        <section
          className="
            relative min-h-[65vh]
            flex items-center justify-center
            bg-cover bg-center
            px-6
          "
          style={{ backgroundImage: "url('/software_banner.png')" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 max-w-4xl text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-black">
              Build Software <br />
              <span className="text-[#14545b]">That Scales</span>
            </h1>

            <p className="text-base md:text-lg text-black max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we engineer secure, scalable, and
              future-ready software solutions tailored to your business.
            </p>
          </motion.div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-16 px-4 bg-[#f0f8f9]">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-4xl font-extrabold mb-12"
          >
            What We Build
          </motion.h2>

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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="
                  relative bg-slate-50
                  border border-slate-200
                  rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-[#008080]
                "
              >
                <div className="h-1 w-full bg-gradient-to-r from-[#008080] to-[#15dbf6] rounded-t-2xl" />

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= AGILE ================= */}
        <section className="py-18 px-10 bg-[#e5e8f8] grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/Agile.png"
              alt="Agile Development"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Agile & Collaborative Delivery
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Iterative development, continuous feedback, and transparent
              communication ensure faster delivery and measurable impact.
            </p>
          </motion.div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section className="py-18 px-10 bg-slate-200 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-last md:order-first"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Future-Ready Technologies
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              AI, Cloud, Containers, React, Next.js and Node — we build systems
              designed to evolve with your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/futureTech.png"
              alt="Modern Tech"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </motion.div>
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

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Ready To Innovate?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Transform your vision into powerful software that accelerates
              growth.
            </p>
          </motion.div>
        </section>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      </motion.main>

      <Footer />
    </>
  );
}
