"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        scroll-mt-[80px]
        bg-gradient-to-b from-white via-[#f6faff] to-white
        px-4 md:px-16
        py-10 md:py-16
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute top-20 -right-40 w-[480px] h-[480px] bg-blue-500/10 rounded-full blur-3xl hidden md:block" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-slate-900">
          About <span className="text-[#008080]">PurnaBIT</span>
        </h2>

        <div className="mt-3 md:mt-4 h-[3px] w-20 md:w-24 bg-gradient-to-r from-[#008080] to-[#15dbf6] mx-auto rounded-full" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 text-slate-600 max-w-2xl mx-auto text-[15px] md:text-[17px] leading-[1.65]"
        >
          Building technology that empowers businesses to grow, innovate, and
          lead in the digital era.
        </motion.p>
      </motion.div>

      {/* CONTENT */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[220px] md:h-[420px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/about.png"
            alt="Technology & Business"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 md:mb-6">
            Our Mission
          </h3>

          <p className="text-[15px] md:text-[17px] text-slate-700 leading-[1.65] mb-4 md:mb-6">
            At <span className="font-medium">PurnaBIT</span>, our mission is to
            deliver innovative software solutions and exceptional technology
            services that empower businesses to grow, adapt, and succeed in a
            digital-first world.
          </p>

          <p className="text-[15px] md:text-[17px] text-slate-700 leading-[1.65]">
            We deeply understand client needs and build scalable, secure, and
            high-performance digital solutions that create long-term value.
          </p>

          {/* HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-6 md:mt-10
              p-5 md:p-8
              rounded-xl md:rounded-2xl
              bg-white/80 backdrop-blur-md
              border border-blue-100
              shadow-lg hover:shadow-xl
              transition-shadow duration-300
            "
          >
            <p className="text-slate-900 font-medium text-[15px] md:text-[17px]">
              Strategy, technology, and innovation — built for real business
              impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
