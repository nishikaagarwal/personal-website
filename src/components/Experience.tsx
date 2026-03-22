"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ACCENT = "#2040C8";

const experiences = [
  {
    title: "Consultant",
    company: "Emerald Consulting",
    period: "Nov – Dec 2025",
    skills: ["Go-to-Market", "Market Research", "Strategy"],
  },
  {
    title: "Software Developer",
    company: "Oracle",
    period: "Jul 2023 – Jan 2025",
    skills: ["Process Optimisation", "Governance", "Engineering"],
  },
  {
    title: "Project Intern",
    company: "Oracle",
    period: "Jan – Jul 2023",
    skills: ["Security", "QA"],
  },
  {
    title: "Development Intern",
    company: "RMgX Technologies",
    period: "Jun – Aug 2022",
    skills: ["Full-Stack", "Product", "GovTech"],
  },
];

const education = [
  {
    degree: "Master in Management",
    school: "INSEAD",
    period: "2025 – 2027",
    detail: "GMAT 705 · Top 2%",
  },
  {
    degree: "B.Tech, Information Technology",
    school: "Manipal Institute of Technology",
    period: "2019 – 2023",
    detail: "CGPA 8.63 / 10",
  },
];

const highlights = [
  "GMAT Top 2% globally",
  "Women's Mentorship Board · INSEAD",
  "Realism artist · 15+ years",
  "Badminton · Regional level",
  "IECSE Board Member",
];

const colLabel = (text: string) => (
  <p className="font-sans text-xs uppercase tracking-[0.22em] mb-5" style={{ color: ACCENT }}>
    {text}
  </p>
);

export default function Experience() {
  return (
    <section className="section-padding" id="experience">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-sans font-normal leading-tight mb-2" style={{ color: "#111111", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Experience &amp; Education
          </h2>
          <div className="w-14 h-px mt-3" style={{ backgroundColor: ACCENT }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* — Work — */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {colLabel("Work")}
            <div className="space-y-5">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="group pb-5 border-b"
                  style={{ borderColor: "rgba(17,17,17,0.08)" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-sans font-medium text-sm" style={{ color: "#111111" }}>
                        {exp.title}
                      </p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: "#666666" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-sans text-xs flex-shrink-0 ml-3 mt-0.5" style={{ color: "#999999" }}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.06 + j * 0.04 }}
                        className="font-sans text-xs px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(32,64,200,0.07)",
                          color: ACCENT,
                          border: `1px solid rgba(32,64,200,0.15)`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* — Education — */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {colLabel("Education")}
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="pb-6 border-b"
                  style={{ borderColor: "rgba(17,17,17,0.08)" }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-sans font-medium text-sm" style={{ color: "#111111" }}>
                      {edu.school}
                    </p>
                    <span className="font-sans text-xs flex-shrink-0 ml-3" style={{ color: "#999999" }}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-sans text-xs mb-1" style={{ color: "#666666" }}>{edu.degree}</p>
                  <p className="font-sans text-xs font-medium" style={{ color: ACCENT }}>{edu.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* — Highlights — */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {colLabel("Highlights")}
            <div className="flex flex-col gap-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl"
                  style={{ border: "1px solid rgba(17,17,17,0.07)" }}
                >
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <span className="font-sans text-xs" style={{ color: "#444444" }}>{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Resume button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: ACCENT, color: "#fff", borderColor: ACCENT }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-sm transition-colors duration-200"
            style={{ border: `1px solid rgba(17,17,17,0.2)`, color: ACCENT }}
          >
            View Full Resume <ExternalLink size={13} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
