import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-[calc(110vh-96px)]
        pt-24 flex items-center justify-center
        bg-cover bg-center scroll-mt-24
        overflow-hidden
      "
      style={{ backgroundImage: "url('/heroimg.png')" }}
    >
      {/* Dark gradient overlay for readability */}
     


      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-widest text-black mb-4"
        >
          DIGITAL TRANSFORMATION & TECHNOLOGY CONSULTING
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="text-4xl md:text-6xl font-extrabold text-black leading-tight"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Driving business growth
          </motion.span>
          <br />
          <motion.span
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            through{" "}
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-transparent text-[#008080]"
            >
              intelligent technology
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-[clamp(1rem,1.1vw,1.125rem)] font-medium leading-loose text-black/80"
        >
          PurnaBIT is a technology consulting company that partners with
          organizations to design, build, and scale secure digital solutions.
          We combine strategic thinking with modern technologies to help
          businesses innovate, optimize operations, and achieve measurable
          growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.7 },
            },
          }}
          className="mt-10 flex flex-col  sm:flex-row gap-4 justify-center"
        >
          {/* <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="
              bg-gradient-to-r from-[#0b29eb] to-[#15dbf6]
              text-white px-8 py-3 rounded-full
              font-semibold
              hover:scale-110 transition
              shadow-lg shadow-blue-500/30
            "
          >
            Explore Our Expertise
          </motion.button> */}

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
              bg-gradient-to-r from-[#008080] to-[#15dbf6]
              text-white px-8 py-3 rounded-full
              font-semibold
              hover:scale-110 transition
              shadow-lg shadow-blue-500/30
            "
          >
            View Our Services →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
