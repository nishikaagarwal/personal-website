"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#2040C8";

const Tag = ({ text }: { text: string }) => (
  <span
    className="font-sans text-xs px-2.5 py-1 rounded-full"
    style={{
      backgroundColor: "rgba(32,64,200,0.07)",
      color: ACCENT,
      border: "1px solid rgba(32,64,200,0.15)",
    }}
  >
    {text}
  </span>
);

const SectionLabel = ({ text }: { text: string }) => (
  <p className="font-sans text-xs tracking-[0.25em] uppercase mb-3" style={{ color: ACCENT }}>
    {text}
  </p>
);

function TimelineEntry({
  children,
  isLast,
  index,
}: {
  children: React.ReactNode;
  isLast: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex gap-5"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: "16px" }}>
        <div
          className="rounded-full flex-shrink-0"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: ACCENT,
            marginTop: "22px",
          }}
        />
        {!isLast && (
          <div
            className="w-px flex-1"
            style={{ backgroundColor: "rgba(17,17,17,0.1)", marginTop: "6px" }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-5">
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#ffffff", border: "1px solid rgba(17,17,17,0.08)" }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

const education = [
  {
    school: "INSEAD",
    degree: "Master in Management, Class of 2027 · France / Singapore",
    period: "2025 – 2027",
    bullets: [
      "GMAT Focus Edition: 705 (Top 2%)",
      "Relevant Courses: Corporate Strategy, Process & Operations Management, Negotiations, Data Analysis, AI in Business",
      "Leadership Board @ Women's Mentorship Program INSEAD, Social Impact Consultant @ Emerald Consulting",
    ],
  },
  {
    school: "Manipal Institute of Technology",
    degree: "B.Tech, Information Technology · Manipal, India",
    period: "2019 – 2023",
    bullets: [
      "CGPA: 8.63/10 · Minor Specialisation in Big Data Modelling and Management",
      "Relevant Coursework: Essentials of Management, Engineering Economics and Financial Management, Corporate Finance",
      "Leadership Board @ IECSE Manipal, Core Member @ Entrepreneurship Cell (E-Cell) Manipal",
    ],
  },
];

const roles = [
  {
    title: "Consultant",
    company: "Emerald Consulting · INSEAD Pro-bono Initiative",
    period: "Nov – Dec 2025",
    highlight: "Turning ambiguity into a plan",
    bullets: [
      "Drove market entry strategy for a Paris-based sustainability company targeting the $2B+ Saudi water market",
      "Narrowed focus to 4 priority industries and 3 high-growth regions using quantitative market data",
      "Designed a 3-phase go-to-market plan integrating sales and partnerships",
    ],
    tags: ["Strategy", "Market Research", "Go-to-Market"],
  },
  {
    title: "Software Developer",
    company: "Oracle · IC1 & IC2",
    period: "Jul 2023 – Jan 2025",
    highlight: "Fixing what slows teams down",
    bullets: [
      "Led process optimisation across 6 delivery teams, reducing release cycle from 6 days to 30 minutes, adopted company-wide",
      "Built a governance system for code changes, cutting conflicts and failed releases by 30%",
      "Resolved a long-standing issue for global food & beverage clients, cutting processing delays from weeks to 5 days",
      "Authored 5+ knowledge-transfer guides to support onboarding",
    ],
    tags: ["Engineering", "Process Optimisation", "Governance"],
  },
  {
    title: "Project Intern",
    company: "Oracle",
    period: "Jan – Jul 2023",
    highlight: "Spotting problems before they happen",
    bullets: [
      "Ran 10+ security reviews to identify and fix vulnerabilities, improving integrity and compliance",
    ],
    tags: ["Security", "QA"],
  },
  {
    title: "Development Intern",
    company: "RMgX Technologies",
    period: "Jun – Aug 2022",
    highlight: "Building for people you've never met",
    bullets: [
      "Designed key modules for a Middle Eastern video and audio social media platform",
      "Built a flood-tracking dashboard for an Indian government disaster response program, enabling real-time monitoring across 50+ districts",
    ],
    tags: ["Full-Stack", "Product", "GovTech"],
  },
];

const skills = [
  "Market Entry Strategy",
  "Competitive Analysis",
  "Process Optimisation",
  "Business Case Development",
  "Structured Communication",
  "Data Analysis",
  "Advanced Excel",
  "SQL",
  "Python",
  "Risk Assessment",
  "Design Thinking",
  "Go-to-Market Planning",
  "Problem Structuring",
  "Cross-functional Coordination",
];

export default function ExperiencePage() {
  return (
    <main className="section-padding">
      <div className="max-w-3xl mx-auto">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#experience"
            className="font-sans text-xs inline-flex items-center rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-60"
            style={{ color: "#666666", border: "0.5px solid currentColor", backgroundColor: "transparent" }}
          >
            ← Back
          </Link>
        </motion.div>

        {/* ══ Education ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-2"
        >
          <SectionLabel text="Education" />
          <h2
            className="font-sans font-normal leading-tight mb-10"
            style={{
              color: "#111111",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Where I&apos;ve studied
          </h2>
        </motion.div>

        <div className="mb-16">
          {education.map((edu, i) => (
            <TimelineEntry key={i} index={i} isLast={i === education.length - 1}>
              {/* Header */}
              <div className="flex items-start justify-between mb-1">
                <p className="font-sans font-medium" style={{ color: "#111111", fontSize: "15px" }}>
                  {edu.school}
                </p>
                <span
                  className="font-sans text-xs flex-shrink-0 ml-6 mt-0.5"
                  style={{ color: "#999999" }}
                >
                  {edu.period}
                </span>
              </div>

              {/* Degree subtitle */}
              <p className="font-sans text-sm mb-4" style={{ color: ACCENT }}>
                {edu.degree}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {edu.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span
                      className="rounded-full flex-shrink-0"
                      style={{
                        width: "4px",
                        height: "4px",
                        backgroundColor: ACCENT,
                        marginTop: "8px",
                      }}
                    />
                    <span
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "#666666" }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </TimelineEntry>
          ))}
        </div>

        {/* ══ Experience ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <SectionLabel text="Experience" />
          <h2
            className="font-sans font-normal leading-tight mb-10"
            style={{
              color: "#111111",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="mb-16">
          {roles.map((role, i) => (
            <TimelineEntry key={i} index={i} isLast={i === roles.length - 1}>
              {/* Header */}
              <div className="flex items-start justify-between mb-1">
                <p className="font-sans font-medium" style={{ color: "#111111", fontSize: "15px" }}>
                  {role.title}
                </p>
                <span
                  className="font-sans text-xs flex-shrink-0 ml-6 mt-0.5"
                  style={{ color: "#999999" }}
                >
                  {role.period}
                </span>
              </div>

              {/* Company subtitle */}
              <p className="font-sans text-sm mb-3" style={{ color: "#666666" }}>
                {role.company}
              </p>

              {/* Highlight inset */}
              <div
                className="inline-block rounded-xl px-3 py-1.5 mb-4"
                style={{ backgroundColor: "rgba(17,17,17,0.05)" }}
              >
                <span
                  className="font-sans font-medium"
                  style={{ color: ACCENT, fontSize: "13px" }}
                >
                  {role.highlight}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mb-4">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span
                      className="rounded-full flex-shrink-0"
                      style={{
                        width: "4px",
                        height: "4px",
                        backgroundColor: ACCENT,
                        marginTop: "8px",
                      }}
                    />
                    <span
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "#666666" }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {role.tags.map((tag, j) => (
                  <Tag key={j} text={tag} />
                ))}
              </div>
            </TimelineEntry>
          ))}
        </div>

        {/* ══ Skills ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel text="Skills" />
          <h2
            className="font-sans font-normal leading-tight mb-8"
            style={{
              color: "#111111",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            What I&apos;ve learned
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Tag text={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Download resume ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full inline-flex items-center gap-2"
            style={{ backgroundColor: ACCENT, color: "#fff" }}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Download resume PDF
          </motion.a>
        </motion.div>

      </div>
    </main>
  );
}
