"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ACCENT  = "#2040C8";
const ACCENT2 = "#1535A0";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nishika-agarwal", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:nishika.agarwal01@gmail.com",          label: "Email"    },
  { icon: Github,   href: "https://github.com/nishikaagarwal",           label: "GitHub"   },
];

const carouselWords = [
  "Strategist", "Builder", "Systems Thinker", "Growth Catalyst",
  "Designer", "Storyteller", "Learner",
];

// Duplicate for seamless loop
const carouselItems = [...carouselWords, ...carouselWords];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="max-w-3xl mx-auto w-full text-center">

        {/* ── Top meta row ── */}
        <motion.div
          className="flex justify-end items-center mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-sans text-[10px] tracking-[0.3em]" style={{ color: "rgba(17,17,17,0.25)", fontWeight: 300 }}>
            2026
          </span>
        </motion.div>

        {/* ── Top rule ── */}
        <motion.div
          className="h-px w-full"
          style={{ background: "rgba(17,17,17,0.12)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        />

        {/* ── Inner content (between rules) ── */}
        <div className="py-10 md:py-14">

          {/* Business Strategy & Transformation */}
          <motion.p
            className="font-sans text-[11px] tracking-[0.35em] uppercase mb-4"
            style={{ color: ACCENT }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Business Strategy &amp; Transformation
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-sans font-semibold leading-none select-none"
            style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.8rem)", letterSpacing: "-0.03em", color: "#111111" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m Nishika Agarwal
          </motion.h1>

          {/* Carousel */}
          <motion.div
            className="mt-16 overflow-hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <style>{`
              @keyframes carousel-scroll {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .carousel-track {
                display: flex;
                width: max-content;
                animation: carousel-scroll 26s linear infinite;
              }
            `}</style>
            <div className="carousel-track">
              {carouselItems.map((word, i) => (
                <span
                  key={i}
                  className="font-sans text-[13px] tracking-[0.2em] uppercase whitespace-nowrap"
                  style={{ color: "#999999" }}
                >
                  {word}
                  <span style={{ color: ACCENT, margin: "0 12px" }}>·</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom rule ── */}
        <motion.div
          className="h-px w-full"
          style={{ background: "rgba(17,17,17,0.12)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        {/* ── Buttons + social ── */}
        <motion.div
          className="mt-7 flex items-center justify-between gap-6"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <motion.a
              href="/work"
              className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full inline-flex items-center gap-2"
              style={{ border: `1px solid ${ACCENT}`, color: ACCENT, backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: ACCENT, color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              See my work →
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full inline-flex items-center gap-2"
              style={{ border: "1px solid rgba(17,17,17,0.2)", color: "#111111", backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: "#111111", color: "#fff", borderColor: "#111111" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              Download resume
            </motion.a>
          </div>

          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(17,17,17,0.15)", color: ACCENT2, backgroundColor: "rgba(247,247,247,0.6)" }}
                whileHover={{ scale: 1.1, y: -2, backgroundColor: ACCENT, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll arrow */}
      <motion.a
        href="#experience"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to experience"
      >
        <motion.div
          className="flex items-center justify-center rounded-full"
          style={{ width: 36, height: 36, backgroundColor: ACCENT }}
          animate={{ y: [0, 5, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 3l5 6 5-6" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
