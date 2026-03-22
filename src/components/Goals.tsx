"use client";
import { motion } from "framer-motion";

const ACCENT = "#2040C8";

const offerings = [
  {
    title: "Strategy & Consulting",
    description: "Helping teams think through product direction, growth, and operational challenges.",
  },
  {
    title: "Software Development",
    description: "Building clean, thoughtful products — from early prototypes to production systems.",
  },
  {
    title: "Research & Analysis",
    description: "Turning messy data and ambiguous problems into clear, actionable insight.",
  },
];

export default function Goals() {
  return (
    <section className="section-padding" id="work-with-me">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase mb-3" style={{ color: ACCENT }}>
            Open to opportunities
          </p>
        </motion.div>

        {/* Top rule */}
        <motion.div
          className="h-px w-full mb-10"
          style={{ background: "rgba(17,17,17,0.12)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-semibold leading-tight mb-6" style={{ color: "#111111", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              Work with me
            </h2>
            <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: "#666666" }}>
              I&apos;m always open to interesting projects, collaborations, and conversations. If you&apos;re building something and think I could help, reach out.
            </p>
            <motion.a
              href="mailto:nishika.agarwal01@gmail.com"
              className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full inline-flex items-center gap-2"
              style={{ backgroundColor: ACCENT, color: "#fff" }}
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Get in touch →
            </motion.a>
          </motion.div>

          {/* Right: offerings */}
          <div className="flex flex-col gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-t pt-5"
                style={{ borderColor: "rgba(17,17,17,0.1)" }}
              >
                <h3 className="font-sans font-medium text-sm mb-1.5" style={{ color: "#111111" }}>
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom rule */}
        <motion.div
          className="h-px w-full mt-12"
          style={{ background: "rgba(17,17,17,0.12)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

      </div>
    </section>
  );
}
