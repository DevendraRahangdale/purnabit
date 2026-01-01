import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Database Consulting",
    desc: "We design, optimize, and manage secure, high-performance databases that scale with your business.",
    image: "/database1.png",
    link: "/services/database",
  },
  {
    title: "IT Services",
    desc: "Reliable IT solutions that modernize infrastructure, improve security, and streamline operations.",
    image: "/It_service1.png",
    link: "/services/it",
  },
  {
    title: "Software Development",
    desc: "Custom software solutions built with modern technologies to drive innovation and growth.",
    image: "/bussiness.png",
    link: "/services/software",
  },
];

// Animation variants
const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    y: direction === "up" ? 80 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 md:px-16 py-28 bg-gradient-to-br from-[#F3EEF6] to-white overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#7B5A8E]/20 rounded-full blur-3xl" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold">
          OUR <span className="text-orange-600">SERVICES</span>
        </h2>

        <div className="mt-5 h-[4px] w-24 bg-gradient-to-r from-[#F6C445] to-[#F28C28] mx-auto rounded-full" />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-lg text-gray-700"
        >
          End-to-end technology services that help businesses innovate, scale,
          and succeed in a digital world.
        </motion.p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        {services.map((service, index) => {
          const directions = ["left", "up", "right"];

          return (
            <motion.div
              key={index}
              custom={directions[index]}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                group relative rounded-3xl overflow-hidden
                bg-white/80 backdrop-blur-xl
                border border-white/40
                hover:-translate-y-4
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A4F]/80 via-[#3E2A4F]/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-extrabold mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-white/90 leading-relaxed">
                  {service.desc}
                </p>

                <Link
                  to={service.link}
                  className="
                    mt-6 inline-block w-fit
                    rounded-full
                    bg-gradient-to-r from-[#e96f0b] to-[#c30b5e]
                    px-7 py-2 text-sm font-semibold text-black
                    opacity-0 translate-y-5
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
