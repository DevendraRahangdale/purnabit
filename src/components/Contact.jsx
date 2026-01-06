import { motion } from "framer-motion";

export default function Contact({ onOpen }) {
  return (
    <section
      id="contact"
      className="
        relative bg-[#ecfbf7]
        px-6 md:px-16 py-24
        overflow-hidden scroll-mt-24
      "
    >
      {/* Decorative blur */}
    <div className="absolute -top-32 -left-32 h-96 w-96 bg-[#9deeee] rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-[#a7eeee] rounded-full blur-3xl" />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          relative max-w-4xl mx-auto
          bg-white/10 backdrop-blur-xl
          rounded-3xl
          px-8 md:px-16 py-20
          text-center
          shadow-2xl
          border border-white/20
        "
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold tracking-wide mb-6"
        >
          CONTACT <span className="text-[#008080]">US</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-black/80 mb-12"
        >
          Let’s discuss how PurnaBIT can help transform your business with
          intelligent technology solutions.
        </motion.p>

        {/* Company Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="space-y-4 text-black/90 text-lg"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-semibold"
          >
            PurnaBIT Technology Solutions LLP
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-black/70"
          >
            Office #444, Triaa Vasantam City Center,
            <br />
            Dhanori, Pune, Maharashtra 411015, India
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-[#008080] font-medium"
          >
            contact@purnabit.com
          </motion.p>
        </motion.div>

        {/* Optional CTA (Animated if enabled later) */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button
            onClick={onOpen}
            className="
              inline-block rounded-full
              bg-gradient-to-r from-[#F6C445] to-[#F28C28]
              px-12 py-4
              text-lg font-semibold text-black
              hover:scale-110 transition
            "
          >
            Get in Touch
          </button>
        </motion.div>
        */}
      </motion.div>
    </section>
  );
}
