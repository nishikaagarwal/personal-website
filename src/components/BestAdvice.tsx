"use client";
import { motion } from "framer-motion";

const ACCENT = "#2040C8";

export default function BestAdvice() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" id="advice" style={{ backgroundColor: "#111111" }}>

      <div className="relative max-w-4xl mx-auto text-center">

        <motion.p
          className="font-sans text-xs tracking-[0.25em] uppercase mb-8"
          style={{ color: ACCENT }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Best advice I&apos;ve ever received
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-normal leading-tight mb-8"
          style={{ color: "#F5F5F5", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
        >
          &ldquo;The answer is always{" "}
          <span style={{ color: ACCENT }} className="italic">no</span>{" "}
          if you don&apos;t ask.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-sans text-sm leading-relaxed max-w-md mx-auto"
          style={{ color: "rgba(245,245,245,0.45)" }}
        >
          I live by this quote ingrained in me by my dad.
          The worst that can happen is a no you already have.
        </motion.p>

        {/* Decorative oversized quote marks */}
        <div className="absolute top-0 left-0 font-sans font-normal leading-none select-none pointer-events-none"
          style={{ fontSize: "12rem", color: "rgba(32,64,200,0.08)", transform: "translate(-1rem, -3rem)" }}>
          &ldquo;
        </div>
        <div className="absolute bottom-0 right-0 font-sans font-normal leading-none select-none pointer-events-none"
          style={{ fontSize: "12rem", color: "rgba(32,64,200,0.08)", transform: "translate(1rem, 3rem)" }}>
          &rdquo;
        </div>

      </div>
    </section>
  );
}
