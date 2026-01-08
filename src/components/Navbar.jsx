import { useState, useEffect } from "react";

/* Icons */
const MenuIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="7" x2="24" y2="7" />
    <line x1="4" y1="14" x2="24" y2="14" />
    <line x1="4" y1="21" x2="24" y2="21" />
  </svg>
);

const CloseIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="6" y1="6" x2="22" y2="22" />
    <line x1="6" y1="22" x2="22" y2="6" />
  </svg>
);

/* NAV ITEMS */
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Blogs", disabled: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("/");

  useEffect(() => {
    const resize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

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
          <a href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="PurnaBIT Logo"
              className="w-[160px] md:w-[190px] lg:w-[220px] h-auto object-contain"
            />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.disabled ? (
                  <span className="text-[15px] font-normal tracking-wide text-gray-400 cursor-default">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="text-[15px] font-normal tracking-wide text-gray-700 hover:text-black transition"
                  >
                    {item.name}
                  </a>
                )}

                {!item.disabled && (
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[1.5px]
                      bg-black transition-all duration-300
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
            className="hidden md:inline-block rounded-full bg-black px-6 py-2 text-[14px] font-medium text-white hover:opacity-90 transition"
          >
            Contact Us
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
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span className="text-xs font-medium tracking-wide">Menu</span>
              <button onClick={() => setOpen(false)}>
                <CloseIcon />
              </button>
            </div>

            <ul className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.disabled ? (
                    <span className="block text-[15px] font-normal text-gray-400">
                      {item.name}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-[15px] font-normal tracking-wide text-gray-700 hover:text-black transition"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-black py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Contact Us
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
