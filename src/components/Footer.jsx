import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
   <footer className="bg-black text-white pt-6 pb-4">


      
      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-8 mt-6">

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl">
          <FaLinkedin className="cursor-pointer hover:text-orange-700 duration-200" />
          <FaXTwitter className="cursor-pointer hover:text-orange-700 duration-200" />
          <FaFacebook className="cursor-pointer hover:text-orange-700 duration-200" />
          <FaInstagram className="cursor-pointer hover:text-orange-700 duration-200" />
        </div>

        {/* COPYRIGHT + LINKS */}
        <div className="text-center text-sm text-white/85">
          <p>
            Copyright © {new Date().getFullYear()} Purnabit Technology Solutions
            LLP. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 mt-2 text-white/70 text-xs">
            <span className="hover:text-white cursor-pointer">
              Terms and Conditions
            </span>
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/logowhite.png"
            alt="purnabit-logo"
            className="w-[180px] h-auto object-contain"
          />
        </div>

      </div>
    </footer>
  );
}
