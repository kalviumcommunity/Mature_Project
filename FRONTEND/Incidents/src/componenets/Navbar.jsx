
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors backdrop-blur-md ${scrolled ? 'bg-white/90 shadow-lg' : 'bg-white/50'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-extrabold text-indigo-700 tracking-wide"
          whileHover={{ scale: 1.1 }}
        >
          Pranav
        </motion.h1>
        <ul className="flex space-x-8 text-lg">
          {links.map(({ href, label }) => (
            <motion.li key={href} whileHover={{ y: -2 }}>
              <a href={href} className="text-gray-800 hover:text-indigo-600 font-medium transition">
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;