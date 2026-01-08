import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(108vh-70px)]
        pt-24
        flex items-center
        bg-cover
        bg-center md:bg-left
        scroll-mt-[80px]
        overflow-hidden
      "
      style={{ backgroundImage: "url('/heroimg.png')" }}
    >
      {/* LEFT CONTENT WRAPPER */}
      <div className="relative z-10 w-full">
        <div
          className="
            max-w-6xl mx-auto
            px-6 md:px-16
          "
        >
          {/* TEXT BLOCK */}
          <div className="max-w-xl lg:max-w-2xl">
            {/* Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.18 },
                },
              }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                DRIVING BUSINESS GROWTH
              </motion.span>

              <br />

              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                THROUGH{" "}
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="text-white"
                >
                  INTELLIGENT TECHNOLOGY & SOLUTIONS
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* CTA BUTTON */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.25, delayChildren: 0.9 },
                },
              }}
              className="mt-10"
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="
                  bg-[#008080] hover:bg-[#02baba]
                  text-white
                  px-6 py-3
                  rounded-full
                  font-semibold
                  shadow-lg shadow-teal-500/30
                  transition
                "
              >
                Services →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
