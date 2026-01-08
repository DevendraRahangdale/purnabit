import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    title: "Database Consulting",
    desc: "We design, optimize, and manage secure, high-performance databases that scale with your business.",
    image: "/database_icon.png",
    link: "/services/database",
    iconBg: "bg-blue-900",
  },
  {
    title: "IT Services",
    desc: "Reliable IT solutions that modernize infrastructure, improve security, and streamline operations.",
    image: "/it_icon.png",
    link: "/services/it",
    iconBg: "bg-teal-500",
  },
  {
    title: "Software Development",
    desc: "Custom software solutions built with modern technologies to drive innovation and growth.",
    image: "/software_icon.png",
    link: "/services/software",
    iconBg: "bg-[#F0A228]",
  },
];

/* =======================
   CARD VARIANTS
======================= */
const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index === 0 ? -120 : index === 2 ? 120 : 0,
    y: index === 1 ? 120 : 0,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =======================
   SERVICE CARD
======================= */
function ServiceCard({ title, desc, image, link, iconBg, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0px 28px 55px rgba(0,0,0,0.22)",
      }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className={`
        ${iconBg}
        rounded-none
        flex flex-col
        items-center
        text-center
        px-10 py-8
      `}
    >
      {/* ICON */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.25, type: "spring", stiffness: 180 }}
        className="mb-8"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          className="
            w-32 h-32
            rounded-full
            border border-white/80
            flex items-center justify-center
          "
        >
          <img
            src={image}
            alt={title}
            className="w-30 h-30 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* TITLE */}
      <h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-white mb-4">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.65] mb-8 max-w-sm">
        {desc}
      </p>

      {/* LINK */}
      <Link
        to={link}
        className="
          text-white
          text-[14px]
          font-medium
          underline underline-offset-6
          hover:text-white/80
          transition
        "
      >
        Learn More →
      </Link>
    </motion.div>
  );
}

/* =======================
   SERVICES SECTION
======================= */
export default function Services() {
  return (
    <>
      <section
        id="services"
        className="
          relative
          scroll-mt-[70px]
          px-6 md:px-16
          pt-12 pb-24
          bg-[#e7e7fc]
        "
      >
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Our <span className="text-[#00c2c2]">Services</span>
          </h2>
          <div className="mt-4 h-[3px] w-24 bg-gradient-to-r from-[#008080] to-cyan-500" />
        </motion.div>

        {/* GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
    </>
  );
}
