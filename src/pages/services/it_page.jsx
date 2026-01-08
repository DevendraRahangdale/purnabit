// src/pages/ITPage.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ITPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* PAGE FADE-IN */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-slate-50 text-slate-900"
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
          className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center pt-28 pb-20"
          style={{ backgroundImage: "url('/it_banner.png')" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black">
              Enterprise <span className="text-[#008080]">IT Services</span>
            </h1>

            <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl mx-auto">
              We deliver reliable, secure, and scalable IT solutions that help
              organizations grow, improve operational efficiency, and achieve
              long-term digital transformation with confidence.
            </p>
          </motion.div>
        </section>

        {/* ================= SECTION 1 ================= */}
        <section className="py-20 px-6 bg-[#def9f6]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-semibold mb-5">
                Cloud Infrastructure & Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our cloud services help organizations modernize their
                infrastructure while maintaining high availability, performance,
                and security across public, private, and hybrid environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden border border-slate-200"
            >
              <img
                src="/cloud.png"
                alt="Cloud Infrastructure"
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="py-20 px-6 bg-slate-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden border border-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                alt="Cybersecurity"
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-semibold mb-5">
                Cybersecurity & Risk Management
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We protect critical systems and sensitive data through proactive
                security monitoring, risk assessment, and compliance-focused
                strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= DELIVERY MODEL ================= */}
        <section className="py-20 px-4 bg-[#d4e8f8]">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold mb-8"
            >
              How We Deliver IT Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-lg text-black mb-14 leading-relaxed"
            >
              Our IT services are delivered through flexible engagement models
              to meet the operational and strategic needs of organizations of
              all sizes.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "On-Site Services",
                  desc: "Our experts work directly at your location to support infrastructure setup, audits, and mission-critical operations.",
                },
                {
                  title: "Remote Support",
                  desc: "Secure remote delivery enables faster response times and continuous monitoring without location constraints.",
                },
                {
                  title: "Hybrid Engagement",
                  desc: "A balanced combination of on-site and remote services ensures flexibility and long-term stability.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="
                    bg-white border border-slate-300
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-xl
                  "
                >
                  <div className="h-12 bg-gradient-to-r from-[#008080] to-[#15dbf6]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 px-4 bg-[#e1edf6]">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our IT Capabilities
          </motion.h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Cloud Migration",
                desc: "Structured and secure migration strategies with minimal downtime.",
              },
              {
                title: "Network & Infrastructure Security",
                desc: "Firewall configuration, monitoring, and access control solutions.",
              },
              {
                title: "DevOps & Automation",
                desc: "CI/CD pipelines, automation, and performance optimization.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="
                  bg-white border border-slate-200
                  rounded-xl p-8
                  transition-all duration-300
                  hover:border-[#008080] hover:shadow-lg
                  hover:-translate-y-2
                "
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-24 text-center overflow-hidden">
          <img
            src="/it_grid.png"
            alt="IT Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Partner With Us for Reliable IT
            </h2>

            <p className="max-w-2xl mx-auto text-white mb-10 text-lg">
              Talk to our IT specialists to design secure, scalable, and
              future-ready technology solutions.
            </p>

            <button
              className="
                group px-10 py-4
                bg-[#008080] text-white
                font-semibold rounded-md
                hover:bg-[#006b6b] hover:shadow-lg
                transition-all duration-300
              "
            >
              Get in Touch
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </motion.div>
        </section>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      </motion.main>

      <Footer />
    </>
  );
}
