import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center md:items-start
        bg-cover bg-center md:bg-left
        scroll-mt-[80px]
        overflow-hidden
      "
      style={{ backgroundImage: "url('/heroimg.png')" }}
    >
      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">

          {/* TEXT BLOCK */}
          <div
            className="
              max-w-[820px]
              pt-0 md:pt-40
              mt-0 md:mt-10
            "
          >
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.16 } },
              }}
              className="
                text-[30px] md:text-[48px]
                text-white
                leading-tight
                font-normal
                uppercase
              "
            >
              {/* LINE 1 */}
              <motion.span
                className="block font-light"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                DRIVING BUSINESS
              </motion.span>

              {/* LINE 2 */}
              <motion.span
                className="block font-light"
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                GROWTH THROUGH
              </motion.span>

              {/* LINE 3 */}
              <motion.span
                className="block font-bold"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
              >
                INTELLIGENT TECHNOLOGY
              </motion.span>

              {/* LINE 4 */}
              <motion.span
                className="block font-bold"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
              >
                AND SOLUTIONS
              </motion.span>
            </motion.h1>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="
                  bg-[#008080] hover:bg-[#02baba]
                  text-white
                  px-7 py-3
                  rounded-full
                  text-[14px]
                  font-medium
                  uppercase
                  shadow-lg shadow-teal-500/30
                  transition
                "
              >
                SERVICES →
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
