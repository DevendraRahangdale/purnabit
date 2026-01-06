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

/* NAV ITEMS */
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Blogs", disabled: true }, // 
  // { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("/");

  /* Close mobile menu on resize */
  useEffect(() => {
    const resize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Track hash for active state */
  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "/";
      setActiveHash(hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">

          {/* LOGO */}
          <a href="/">
            <img
              src="/logo.png"
              alt="PurnaBIT Logo"
              className="w-[178px] h-auto object-contain"
            />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-14 text-sm font-semibold tracking-widest">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">

                {/* ✅ LINK OR BUTTON */}
                {item.disabled ? (
                  <button
                    type="button"
                    aria-disabled="true"
                    className="cursor-default text-black hover:text-[#008080]"
                  >
                    {item.name.toUpperCase()}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-black hover:text-[#008080] transition-colors"
                  >
                    {item.name.toUpperCase()}
                  </a>
                )}

                {/* underline only for links */}
                {!item.disabled && (
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[2px]
                      bg-gradient-to-r from-[#008080] to-[#15dbf6]
                      transition-all duration-300
                      ${
                        activeHash === item.href.replace("/", "") ||
                        (item.href === "/" && activeHash === "/")
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/#contact"
            className="
              hidden md:inline-block rounded-full
              bg-gradient-to-r from-[#008080] to-[#15dbf6]
              px-7 py-2 text-sm font-semibold text-white
              hover:scale-105 transition
            "
          >
            Contact Our Team
          </a>

          {/* HAMBURGER */}
          <button onClick={() => setOpen(true)} className="md:hidden text-black">
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
            className="absolute right-4 top-6 w-72 rounded-3xl bg-white shadow-2xl"
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

                  {item.disabled ? (
                    <button
                      type="button"
                      aria-disabled="true"
                      className="w-full text-left py-2 text-gray-400 cursor-default"
                    >
                      {item.name.toUpperCase()}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex justify-between items-center py-2 hover:text-[#008080] transition"
                    >
                      {item.name.toUpperCase()}
                      <span className="opacity-0 group-hover:opacity-100 transition">
                        →
                      </span>
                    </a>
                  )}

                  {!item.disabled && (
                    <div className="h-[2px] w-0 bg-gradient-to-r from-[#008080] to-[#15dbf6] group-hover:w-full transition-all duration-300" />
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="px-6 pb-6">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="
                  block w-full text-center rounded-full
                  bg-gradient-to-r from-[#008080] to-[#15dbf6]
                  py-3 font-semibold text-white
                  hover:scale-105 transition
                "
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
