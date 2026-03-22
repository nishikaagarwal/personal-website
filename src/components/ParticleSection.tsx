"use client";
import { motion } from "framer-motion";

const facts = [
  {
    number: "01",
    label: "Shades of Expression",
    text: "I spent 15 years learning many different art mediums, and my favorite was charcoal. I've even conducted multiple workshops for children and adults alike.",
    accent: "rgba(32,64,200,0.05)",
    border: "rgba(32,64,200,0.15)",
    illustration: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="8" width="12" height="36" rx="2" fill="rgba(149,128,204,0.25)" stroke="rgba(149,128,204,0.55)" strokeWidth="1.5"/>
        <path d="M26 44 L32 56 L38 44 Z" fill="rgba(149,128,204,0.4)" stroke="rgba(149,128,204,0.6)" strokeWidth="1" strokeLinejoin="round"/>
        <rect x="26" y="8" width="12" height="5" rx="1" fill="rgba(149,128,204,0.5)"/>
        <path d="M10 38 Q18 34 14 42" stroke="rgba(149,128,204,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 46 Q16 40 12 50" stroke="rgba(149,128,204,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 30 Q22 26 18 35" stroke="rgba(149,128,204,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="50" cy="18" r="2" fill="rgba(149,128,204,0.4)"/>
        <circle cx="56" cy="26" r="1.5" fill="rgba(149,128,204,0.25)"/>
        <circle cx="48" cy="30" r="1" fill="rgba(149,128,204,0.3)"/>
      </svg>
    ),
  },
  {
    number: "02",
    label: "A Game of Clues",
    text: "Treasure hunts have held a special place in my heart ever since they became a birthday tradition. My team's five-year winning streak is a cherished memory.",
    accent: "rgba(32,64,200,0.05)",
    border: "rgba(32,64,200,0.15)",
    illustration: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="16" stroke="rgba(95,128,168,0.6)" strokeWidth="2.5" fill="rgba(95,128,168,0.08)"/>
        <path d="M16 20 Q20 15 26 16" stroke="rgba(95,128,168,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="38" y1="38" x2="54" y2="54" stroke="rgba(95,128,168,0.55)" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="22" cy="24" r="2.5" fill="rgba(95,128,168,0.5)"/>
        <circle cx="30" cy="24" r="2.5" fill="rgba(95,128,168,0.5)"/>
        <circle cx="26" cy="31" r="2.5" fill="rgba(95,128,168,0.5)"/>
        <circle cx="8" cy="10" r="1.5" fill="rgba(95,128,168,0.3)"/>
        <circle cx="52" cy="14" r="2" fill="rgba(95,128,168,0.25)"/>
        <circle cx="56" cy="8" r="1" fill="rgba(95,128,168,0.2)"/>
      </svg>
    ),
  },
  {
    number: "03",
    label: "Ink, Paper, Possibilities",
    text: "I have an ever-growing collection of stationery. I can never resist buying new notebooks, over 90% of which are still empty.",
    accent: "rgba(32,64,200,0.05)",
    border: "rgba(32,64,200,0.15)",
    illustration: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="36" width="38" height="22" rx="3" fill="rgba(148,115,188,0.2)" stroke="rgba(148,115,188,0.4)" strokeWidth="1.5"/>
        <line x1="14" y1="36" x2="14" y2="58" stroke="rgba(148,115,188,0.35)" strokeWidth="1.5"/>
        <rect x="10" y="26" width="36" height="20" rx="3" fill="rgba(148,115,188,0.25)" stroke="rgba(148,115,188,0.5)" strokeWidth="1.5"/>
        <line x1="16" y1="26" x2="16" y2="46" stroke="rgba(148,115,188,0.4)" strokeWidth="1.5"/>
        <rect x="12" y="16" width="34" height="18" rx="3" fill="rgba(148,115,188,0.35)" stroke="rgba(148,115,188,0.65)" strokeWidth="1.5"/>
        <line x1="18" y1="16" x2="18" y2="34" stroke="rgba(148,115,188,0.5)" strokeWidth="1.5"/>
        <line x1="22" y1="22" x2="40" y2="22" stroke="rgba(148,115,188,0.3)" strokeWidth="1"/>
        <line x1="22" y1="27" x2="38" y2="27" stroke="rgba(148,115,188,0.2)" strokeWidth="1"/>
        <path d="M44 6 L48 10 L42 18 L38 14 Z" fill="rgba(148,115,188,0.5)" stroke="rgba(148,115,188,0.7)" strokeWidth="1"/>
        <path d="M42 18 L40 22 L38 14 Z" fill="rgba(148,115,188,0.3)"/>
        <circle cx="39" cy="23" r="1.5" fill="rgba(148,115,188,0.5)"/>
      </svg>
    ),
  },
];

export default function ParticleSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#2040C8" }}>
            A little about me
          </p>
          <h2 className="font-sans font-normal leading-tight" style={{ color: "#111111", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Three things worth knowing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7, transition: { type: "spring", stiffness: 260, damping: 22 } }}
              className="group relative rounded-2xl p-7 flex flex-col overflow-hidden"
              style={{
                backgroundColor: fact.accent,
                border: `1px solid ${fact.border}`,
                minHeight: "280px",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Illustration — top right */}
              <motion.div
                className="absolute top-5 right-5 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
              >
                {fact.illustration}
              </motion.div>

              {/* Number — ghost background, absolute */}
              <span
                className="absolute bottom-5 right-5 font-sans text-7xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(17,17,17,0.05)" }}
              >
                {fact.number}
              </span>

              {/* Content — top aligned */}
              <div className="mt-16">
                <h3 className="font-sans font-normal text-xl mb-3 leading-snug" style={{ color: "#111111" }}>
                  {fact.label}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {fact.text}
                </p>
              </div>

              {/* Bottom accent line — reveals on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: fact.border.replace("0.2)", "0.6)") }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
