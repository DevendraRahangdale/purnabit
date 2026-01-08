import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617] text-white overflow-hidden">
      
      {/* TOP DIVIDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#008080]/60 to-transparent" />

      {/* SOFT GLOW */}
      <div className="absolute -top-24 right-0 w-72 h-72 bg-[#008080]/10 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/white_logo.png"
              alt="PurnaBIT Logo"
              className="w-[170px] h-auto object-contain hover:opacity-90 transition"
            />
          </Link>
        </div>

        {/* COPYRIGHT + LINKS */}
        <div className="text-center text-sm text-white/80 max-w-xl">
          <p className="mb-2">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              PurnaBIT Technology Solutions LLP
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-6 text-xs text-white/60">
            <Link to="/terms-of-use" className="hover:text-[#008080] transition">
              Terms of use
            </Link>

            <Link to="/privacy" className="hover:text-[#008080] transition">
              Privacy Notice
            </Link>

            <Link to="/cookies" className="hover:text-[#008080] transition">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-xl">
          
          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/company/purnabit/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-3 rounded-full bg-white/5 hover:bg-[#008080]/20 text-white/80 hover:text-[#008080] transition"
          >
            <FaLinkedin />
          </motion.a>

          {/* X / TWITTER */}
          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-3 rounded-full bg-white/5 hover:bg-[#008080]/20 text-white/80 hover:text-[#008080] transition"
          >
            <FaXTwitter />
          </motion.a>

          {/* FACEBOOK */}
          <motion.a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-3 rounded-full bg-white/5 hover:bg-[#008080]/20 text-white/80 hover:text-[#008080] transition"
          >
            <FaFacebook />
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-3 rounded-full bg-white/5 hover:bg-[#008080]/20 text-white/80 hover:text-[#008080] transition"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
