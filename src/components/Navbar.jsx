import { useState, useEffect } from "react";

/* Icons */
const MenuIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3">
    <line x1="4" y1="7" x2="24" y2="7" />
    <line x1="4" y1="14" x2="24" y2="14" />
    <line x1="4" y1="21" x2="24" y2="21" />
  </svg>
);

const CloseIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3">
    <line x1="6" y1="6" x2="22" y2="22" />
    <line x1="6" y1="22" x2="22" y2="6" />
  </svg>
);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  {
    name: "Blogs",
    // href: "https://purnabit.blogspot.com",
    external: true,
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active hash */
  useEffect(() => {
    const updateHash = () =>
      setActiveHash(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  /* Close menu on resize */
  useEffect(() => {
    const resize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300 border-b
          ${
            scrolled
              ? "bg-white text-black border-gray-200"
              : "bg-transparent text-white border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">

          {/* LOGO */}
          <img
            src={scrolled ? "/logoblack.png" : "/logowhite.png"}
            alt="PurnaBIT Logo"
            className="w-[175px] h-auto object-contain"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-14 text-sm font-semibold tracking-widest">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
  href={item.href}
  target={item.external ? "_blank" : "_self"}
  rel={item.external ? "noopener noreferrer" : undefined}
  className={`
    transition-colors duration-300
    ${
      !item.external && activeHash === item.href
        ? "text-[#F6C445]"
        : scrolled
        ? "text-black hover:text-[#F6C445]"
        : "text-white hover:text-[#F6C445]"
    }
  `}
>

                  {item.name.toUpperCase()}
                </a>

                {/* underline */}
                <span
  className={`
    absolute left-0 -bottom-2 h-[2px]
    bg-gradient-to-r from-[#F6C445] to-[#F28C28]
    transition-all duration-300
    ${
      !item.external && activeHash === item.href
        ? "w-full"
        : "w-0 group-hover:w-full"
    }
  `}
/>

              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block rounded-full
            bg-gradient-to-r from-[#e2430e] to-[#ac0360]
            px-7 py-2 text-sm font-semibold text-white hover:scale-105 transition text-black "
          >
            Contact Our Team
          </a>

          {/* HAMBURGER */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="
              absolute right-4 top-6 w-72
              rounded-3xl bg-white/95 backdrop-blur-xl
              shadow-2xl animate-slideIn
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span className="text-xs font-bold tracking-widest">MENU</span>
              <button onClick={() => setOpen(false)}>
                <CloseIcon />
              </button>
            </div>

            {/* Links */}
            <ul className="px-6 py-6 space-y-5 text-sm font-semibold tracking-widest">
              {navItems.map((item) => (
                <li key={item.name} className="group">
                  <a
  href={item.href}
  target={item.external ? "_blank" : "_self"}
  rel={item.external ? "noopener noreferrer" : undefined}
  onClick={() => setOpen(false)}
  className="flex justify-between items-center py-2 hover:text-[#F6C445] transition"
>

                    {item.name.toUpperCase()}
                    <span className="opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </a>
                  <div className="h-[2px] w-0 bg-gradient-to-r from-[#F6C445] to-[#F28C28] group-hover:w-full transition-all duration-300" />
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="px-6 pb-6">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full
                bg-gradient-to-r from-[#e2430e] to-[#ac0360]
                py-3 font-semibold text-white hover:scale-105 transition text-black"
              >
                Contact Our Team
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
