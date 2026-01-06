import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Database Consulting",
    desc: "We design, optimize, and manage secure, high-performance databases that scale with your business.",
    image: "/database_icon.png",
    link: "/services/database",
  },
  {
    title: "IT Services",
    desc: "Reliable IT solutions that modernize infrastructure, improve security, and streamline operations.",
    image: "/it_icon.png",
    link: "/services/it",
  },
  {
    title: "Software Development",
    desc: "Custom software solutions built with modern technologies to drive innovation and growth.",
    image: "/software_icon.png",
    link: "/services/software",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-[#f6faff] to-white
        overflow-hidden
      "
    >
      {/* BACKGROUND ACCENT */}
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] bg-[#008080]/10 rounded-full blur-3xl" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-[#008080]">
            SERVICES
          </span>
        </h2>

        <div className="mt-4 h-[3px] w-24 bg-gradient-to-r from-[#008080] to-cyan-500 mx-auto rounded-full" />

        <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
          End-to-end technology services that help businesses innovate, scale,
          and succeed in a digital world.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}   // ⬅ subtle lift only
            transition={{ type: "spring", stiffness: 300 }}
            className="
              rounded-3xl bg-white
              border border-slate-100
              shadow-lg hover:shadow-2xl
              transition-shadow duration-300
              flex flex-col
              p-8
            "
          >
            {/* ICON SECTION */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{ y: [0, -4, 0] }}   // ⬅ gentle float
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="
                  w-60 h-24
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r from-[#008080] to-cyan-500
                "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    max-h-[130%]
                    max-w-[140%]
                    object-contain
                  "
                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 text-center px-4">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed mb-10">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="
                  mt-auto inline-flex justify-center items-center
                  rounded-full
                  bg-[#008080] hover:bg-[#02baba]
                  px-8 py-3
                  text-sm font-semibold text-white
                  transition-all duration-300
                "
              >
                Support and Services →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
