"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { href: "#hero",        label: "Hello"      },
  { href: "#experience",  label: "Experience" },
  { href: "#about",       label: "About"      },
  { href: "#books",       label: "Reads"      },
  { href: "#advice",      label: "Advice"     },
  { href: "#detective",   label: "Detective"  },
  { href: "#work-with-me",label: "Work"       },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500"
        style={{
          height: "64px",
          backgroundColor: scrolled ? "rgba(247,247,247,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(17,17,17,0.07)" : "none",
        }}
      >
        <motion.a
          href="#hero"
          className="font-sans text-sm tracking-[0.15em] uppercase select-none"
          style={{ color: "#111111" }}
          onClick={() => setOpen(false)}
          whileHover={{ opacity: 0.45 }}
          transition={{ duration: 0.2 }}
        >
          Nishika Agarwal
        </motion.a>

        <button
          onClick={() => setOpen(v => !v)}
          className="relative z-[60] w-7 h-5 flex flex-col justify-between focus:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <motion.span
            className="block h-px w-full rounded-full"
            style={{ backgroundColor: "#111111", transformOrigin: "center" }}
            animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.span
            className="block h-px rounded-full"
            style={{ backgroundColor: "#111111", width: "65%" }}
            animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-full rounded-full"
            style={{ backgroundColor: "#111111", transformOrigin: "center" }}
            animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(247,247,247,0.97)", backdropFilter: "blur(24px)" }}
          >
            <nav className="relative flex flex-col items-start gap-1 px-16">
              {sections.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span
                    className="font-sans text-xs tabular-nums opacity-30 group-hover:opacity-60 transition-opacity"
                    style={{ color: "#111111" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="font-sans font-normal leading-tight transition-opacity duration-200 group-hover:opacity-40"
                    style={{ color: "#111111", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
                  >
                    {label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
