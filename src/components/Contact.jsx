import { motion } from "framer-motion";

export default function Contact({ onOpen }) {
  return (
    <>
      <section
        id="contact"
        className="
          relative
          scroll-mt-[60px]
          min-h-screen
          px-6 md:px-16 py-20
          bg-cover bg-center bg-no-repeat
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/Contact_banner.png')",
        }}
      >
        {/* CONTENT WRAPPER */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              relative
              max-w-xl
              pl-6 md:pl-10
              text-white
            "
          >
            {/* Vertical Line */}
            <span className="absolute left-0 top-3 h-[32%] w-[3px] bg-white/70 rounded-full" />

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-[#040404]">
              Contact <span className="text-[#008080]">Us</span>
            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[17px] text-white/90 mb-8 leading-[1.65]">
              Let’s discuss how{" "}
              <span className="font-medium">PurnaBIT</span> can help transform
              your business with intelligent, scalable technology solutions.
            </p>

            {/* Horizontal Line */}
            <div className="mb-10 h-[2px] w-56 bg-white/70 rounded-full" />

            {/* Details */}
            <div className="space-y-5">
              <p className="font-medium text-[16px] md:text-[18px] text-white">
                PurnaBIT Technology Solutions LLP
              </p>

              <p className="text-[15px] md:text-[16px] leading-[1.65] text-white/85">
                Office #444, Triaa Vasantam City Center,
                <br />
                Dhanori, Pune, Maharashtra 411015, India
              </p>

              <p className="text-[15px] md:text-[16px] font-medium text-[#e6fefe]">
                contact@purnabit.com
              </p>
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              onClick={onOpen}
              className="
                mt-12 inline-flex items-center justify-center
                rounded-full
                bg-[#008080] hover:bg-[#02baba]
                px-8 py-3
                text-[15px] md:text-[16px]
                font-medium text-white
                shadow-xl shadow-black/30
                hover:scale-105 transition
              "
            >
              Get in Touch →
            </motion.button>
          </motion.div>

          {/* RIGHT ILLUSTRATION (OPTIONAL) */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              hidden md:flex
              justify-center items-center
              relative
            "
          >
            {/* Illustration intentionally hidden */}
          </motion.div>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full h-[2px] bg-white" />
    </>
  );
}
