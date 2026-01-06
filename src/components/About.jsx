"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative min-h-screen
        bg-gradient-to-b from-white via-[#f6faff] to-white
        px-6 md:px-16 py-16
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[480px] h-[480px] bg-blue-500/10 rounded-full blur-3xl" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-slate-900">
          ABOUT{" "}
          <span className="text-transparent bg-clip-text text-[#008080]">
            PurnaBIT
          </span>
        </h2>

        <div className="mt-4 h-[3px] w-24 bg-gradient-to-r from-[#008080] to-[#15dbf6] mx-auto rounded-full" />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
        >
          Building technology that empowers businesses to grow, innovate, and
          lead in the digital era.
        </motion.p>
      </motion.div>

      {/* CONTENT */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/about.png"
            alt="Technology & Business"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Our Mission
          </h3>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            At <strong>PurnaBIT</strong>, our mission is to deliver innovative
            software solutions and exceptional technology services that empower
            businesses to grow, adapt, and succeed in a digital-first world.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            We deeply understand client needs and build scalable, secure, and
            high-performance digital solutions that create long-term value.
          </p>

          {/* HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="
              mt-10 p-8 rounded-2xl
              bg-white/80 backdrop-blur-md
              border border-blue-100
              shadow-lg hover:shadow-xl
              transition-shadow duration-300
            "
          >
            <p className="text-slate-900 font-semibold text-lg">
              Strategy, technology, and innovation — built for real business
              impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
