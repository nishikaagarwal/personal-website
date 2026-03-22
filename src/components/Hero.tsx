"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { useRef, useState } from "react";

const ACCENT  = "#2040C8";
const ACCENT2 = "#1535A0";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nishika-agarwal", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:nishika.agarwal01@gmail.com",          label: "Email"    },
  { icon: Github,   href: "https://github.com/nishikaagarwal",           label: "GitHub"   },
];

const keywords = [
  { label: "builder",      top: "12%",  left: "4%"   },
  { label: "curious",      top: "8%",   left: "55%"  },
  { label: "strategic",    top: "30%",  left: "20%"  },
  { label: "engineer",     top: "55%",  left: "8%"   },
  { label: "consultant",   top: "75%",  left: "40%"  },
  { label: "storyteller",  top: "20%",  left: "70%"  },
  { label: "INSEAD",       top: "65%",  left: "68%"  },
  { label: "driven",       top: "42%",  left: "58%"  },
  { label: "creator",      top: "88%",  left: "15%"  },
  { label: "thinker",      top: "50%",  left: "82%"  },
];

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null);
  const [viewportPos, setViewportPos] = useState({ x: 0, y: 0 });
  const [nameRect, setNameRect]       = useState<DOMRect | null>(null);
  const [overName, setOverName]       = useState(false);

  const handleNameMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setViewportPos({ x: e.clientX, y: e.clientY });
    if (nameRef.current) setNameRect(nameRef.current.getBoundingClientRect());
  };

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

          {/* Hello, I'm */}
          <motion.p
            className="font-sans text-[11px] tracking-[0.35em] uppercase mb-8"
            style={{ color: ACCENT }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <div
            ref={nameRef}
            className="relative inline-block"
            onMouseMove={handleNameMove}
            onMouseEnter={() => setOverName(true)}
            onMouseLeave={() => setOverName(false)}
          >
            <motion.h1
              data-glass="true"
              className="font-sans font-semibold leading-none select-none"
              style={{ fontSize: "clamp(2.8rem, 9vw, 7rem)", letterSpacing: "-0.03em", color: "#111111" }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Nishika Agarwal
            </motion.h1>

            {/* Keyword reveal layer */}
            {overName && nameRect && (
              <div
                className="fixed inset-0 pointer-events-none"
                style={{
                  zIndex: 10000,
                  maskImage: `radial-gradient(circle 34px at ${viewportPos.x}px ${viewportPos.y}px, black 55%, transparent 100%)`,
                  WebkitMaskImage: `radial-gradient(circle 34px at ${viewportPos.x}px ${viewportPos.y}px, black 55%, transparent 100%)`,
                }}
              >
                {keywords.map(({ label, top, left }) => (
                  <span
                    key={label}
                    className="absolute font-sans text-[10px] tracking-[0.25em] uppercase"
                    style={{
                      top:  `calc(${nameRect.top}px + ${parseFloat(top) / 100} * ${nameRect.height}px)`,
                      left: `calc(${nameRect.left}px + ${parseFloat(left) / 100} * ${nameRect.width}px)`,
                      color: ACCENT,
                      opacity: 0.9,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bio */}
          <motion.p
            className="font-sans text-sm leading-relaxed mt-8 mx-auto max-w-sm"
            style={{ color: "#666666" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            INSEAD MIM candidate, software engineer, and consultant building things that matter.
          </motion.p>
        </div>

        {/* ── Bottom rule ── */}
        <motion.div
          className="h-px w-full"
          style={{ background: "rgba(17,17,17,0.12)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        {/* ── Button + social ── */}
        <motion.div
          className="mt-7 flex items-center justify-between gap-6"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <motion.a
            href="#case-studies"
            className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full inline-flex items-center gap-2"
            style={{ border: `1px solid ${ACCENT}`, color: ACCENT, backgroundColor: "transparent" }}
            whileHover={{ backgroundColor: ACCENT, color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            See what I&apos;ve built →
          </motion.a>

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

      {/* Keyword reveal — fixed overlay above cursor */}

      {/* Scroll arrow */}
      <motion.a
        href="#experience"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to experience"
      >
        <motion.svg
          width="16" height="48" viewBox="0 0 16 48" fill="none"
          style={{ color: ACCENT }}
          animate={{ y: [0, 6, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="8" y1="0" x2="8" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 34l6 8 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
