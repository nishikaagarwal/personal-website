"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Paintbrush, Send, Search } from "lucide-react";
import Hero from "@/components/Hero";

const ACCENT = "#2040C8";

const Divider = () => (
  <div className="h-px w-full" style={{ background: "rgba(17,17,17,0.12)" }} />
);

const SectionHeader = ({
  label,
  linkHref,
  linkText,
}: {
  label: string;
  linkHref: string;
  linkText: string;
}) => (
  <div className="flex items-center justify-between mb-4">
    <p className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
      {label}
    </p>
    <Link
      href={linkHref}
      className="font-sans text-xs inline-flex items-center rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-60"
      style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent" }}
    >
      {linkText}
    </Link>
  </div>
);

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

const expCards = [
  {
    role: "Consultant",
    company: "Emerald Consulting",
    period: "Nov – Dec 2025",
    calloutHeading: "Turning ambiguity into a plan",
    highlight:
      "Turned an ambiguous brief into a structured market entry strategy, from scoping the problem to building a recommendation the client could actually use.",
  },
  {
    role: "Software Developer",
    company: "Oracle",
    period: "Jul 2023 – Jan 2025",
    calloutHeading: "Fixing what slows teams down",
    highlight:
      "Mapped a problem that spanned six teams, redesigned the process into something clean that people would actually follow.",
  },
  {
    role: "Project Intern",
    company: "Oracle",
    period: "Jan – Jul 2023",
    calloutHeading: "Spotting problems before they happen",
    highlight:
      "Developed a habit of structured risk thinking, identifying what could fail, why, and what to do about it before it becomes a problem.",
  },
  {
    role: "Development Intern",
    company: "RMgX Technologies",
    period: "Jun – Aug 2022",
    calloutHeading: "Building for people you've never met",
    highlight:
      "Learned to build for users I'd never meet, in contexts I had to research from scratch.",
  },
];

const aboutItems = [
  {
    num: "01",
    label: "I care about how things are made",
    text: "Fifteen years of realism drawing taught me that the difference between good and great is almost always in the part you almost skipped. That carries into everything I make, whether it is an artwork, or a strategy solution.",
    icon: Paintbrush,
    iconColor: "#9473BC",
    bg: "rgba(148,115,188,0.08)",
    border: "rgba(148,115,188,0.2)",
  },
  {
    num: "02",
    label: "The answer is always no if you don't ask",
    text: "My dad said this early and it stuck. I have cold-emailed partners, pitched ideas nobody asked for, and walked into rooms I was not invited to. The worst outcome is always the one you already have.",
    icon: Send,
    iconColor: "#2040C8",
    bg: "rgba(32,64,200,0.07)",
    border: "rgba(32,64,200,0.18)",
  },
  {
    num: "03",
    label: "I have always been a bit of a detective",
    text: "Nancy Drew was my first role model. I was drawn to the part where you sit with a set of clues and slowly make them make sense. That instinct just moved from mystery novels into strategy problems and systems that do not quite work yet.",
    icon: Search,
    iconColor: "#5F80A8",
    bg: "rgba(95,128,168,0.08)",
    border: "rgba(95,128,168,0.22)",
  },
];

const caseStudies = [
  {
    label: "Case study 01",
    title: "An AI onboarding tool for new consultants",
    desc: "A concept and working prototype for how small consulting firms can stop re-teaching the same institutional knowledge every time someone new joins.",
    tags: ["Concept", "Knowledge management", "Team scaling"],
    placeholder: false,
  },
  {
    label: "Case study 02",
    title: "Coming soon",
    desc: "More case studies in progress.",
    tags: ["Placeholder"],
    placeholder: true,
  },
];

const thoughts = [
  {
    label: "Post 01",
    title: "On the gap between what a tool can do and what people will actually use",
    topic: "Technology",
    readTime: "5 min read",
    date: "Mar 2026",
  },
  {
    label: "Post 02",
    title: "What fifteen years of drawing taught me about iteration",
    topic: "Learning",
    readTime: "4 min read",
    date: "Mar 2026",
  },
  {
    label: "Post 03",
    title: "The new luxury is not being seen",
    topic: "Consumer behaviour",
    readTime: "4 min read",
    date: "Mar 2026",
  },
];

export default function Home() {
  const [notifiedCs2, setNotifiedCs2] = useState(false);
  const [enteringCs2, setEnteringCs2] = useState(false);
  const [emailCs2, setEmailCs2]       = useState("");

  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <Divider />

      {/* ── Experience Preview ── */}
      <section id="experience" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Experience"
              linkHref="/experience"
              linkText="View full experience →"
            />
            <h2
              className="font-sans font-normal leading-tight mb-8"
              style={{
                color: "#111111",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Where I&apos;ve worked and what I&apos;ve learned
            </h2>
          </motion.div>

          {/* Key Highlights column header — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center mb-2"
          >
            <div className="flex-shrink-0" style={{ width: "280px" }} />
            <div className="flex-shrink-0" style={{ width: "52px" }} />
            <p
              className="font-sans text-xs tracking-[0.25em] uppercase flex-1"
              style={{ color: ACCENT }}
            >
              Key Highlights
</p>
          </motion.div>

          {/* Rows */}
          <div className="flex flex-col gap-5">
            {expCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {/* Mobile: stacked */}
                <div className="flex flex-col gap-3 md:hidden">
                  <div>
                    <p className="font-sans font-medium text-sm" style={{ color: "#111111" }}>
                      {card.role}
                    </p>
                    <p className="font-sans text-xs mt-0.5" style={{ color: "#666666" }}>
                      {card.company}
                    </p>
                    <p className="font-sans text-xs mt-1" style={{ color: "#999999" }}>
                      {card.period}
                    </p>
                  </div>
                  <div className="px-4 py-3" style={{ backgroundColor: "rgba(32,64,200,0.05)" }}>
                    <p className="font-sans font-medium text-sm mb-1" style={{ color: ACCENT }}>
                      {card.calloutHeading}
                    </p>
                    <p className="font-sans text-sm" style={{ color: "#666666", fontSize: "14px", lineHeight: 1.7 }}>
                      {card.highlight}
                    </p>
                  </div>
                </div>

                {/* Desktop: three-column row */}
                <div className="hidden md:flex items-start">
                  <div className="flex-shrink-0" style={{ width: "280px" }}>
                    <p className="font-sans font-medium text-sm" style={{ color: "#111111" }}>
                      {card.role}
                    </p>
                    <p className="font-sans text-xs mt-0.5" style={{ color: "#666666" }}>
                      {card.company}
                    </p>
                    <p className="font-sans text-xs mt-1" style={{ color: "#999999" }}>
                      {card.period}
                    </p>
                  </div>

                  {/* Vertical line + arrow */}
                  <div
                    className="self-stretch flex-shrink-0 flex items-center justify-center relative"
                    style={{ width: "52px" }}
                  >
                    <div
                      className="absolute top-0 bottom-0 w-px"
                      style={{
                        backgroundColor: "rgba(32,64,200,0.35)",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                    <span
                      className="relative font-sans text-xs"
                      style={{
                        color: ACCENT,
                        backgroundColor: "#F7F7F7",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      →
                    </span>
                  </div>

                  {/* Callout */}
                  <div
                    className="flex-1 px-5 py-4"
                    style={{ backgroundColor: "rgba(32,64,200,0.05)" }}
                  >
                    <p className="font-sans font-medium text-sm mb-1" style={{ color: ACCENT }}>
                      {card.calloutHeading}
                    </p>
                    <p
                      className="font-sans text-sm"
                      style={{ color: "#666666", fontSize: "14px", lineHeight: 1.7 }}
                    >
                      {card.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── About Preview ── */}
      <section id="about" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader label="About" linkHref="/about" linkText="More about me →" />
            <h2
              className="font-sans font-normal leading-tight mb-8"
              style={{
                color: "#111111",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Get to know me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aboutItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-7 flex flex-col items-center text-center"
                  style={{
                    backgroundColor: item.bg,
                    border: `1px solid ${item.border}`,
                    minHeight: "160px",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: item.border }}
                  >
                    <Icon size={20} style={{ color: item.iconColor }} />
                  </div>
                  <h3
                    className="font-sans font-normal text-xl mb-2 leading-snug"
                    style={{ color: "#111111" }}
                  >
                    {item.label}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#666666" }}>
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Case Studies Preview ── */}
      <section id="work" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader label="Case studies" linkHref="/work" linkText="View all →" />
            <h2
              className="font-sans font-normal leading-tight mb-8"
              style={{
                color: "#111111",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Selected work
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(17,17,17,0.08)",
                  opacity: cs.placeholder ? 0.45 : 1,
                }}
              >
                <p
                  className="font-sans tracking-[0.2em] uppercase mb-4"
                  style={{ fontSize: "11px", color: "#999999" }}
                >
                  {cs.label}
                </p>
                <h3
                  className="font-sans mb-3"
                  style={{ fontSize: "20px", fontWeight: 500, color: "#111111", letterSpacing: "-0.01em" }}
                >
                  {cs.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-5 max-w-xl" style={{ color: "#666666" }}>
                  {cs.desc}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {cs.placeholder ? (
                    notifiedCs2 ? (
                      <p className="font-sans text-xs" style={{ color: "#666666", fontStyle: "italic" }}>
                        You&apos;re on the list.
                      </p>
                    ) : enteringCs2 ? (
                      <form
                        onSubmit={e => { e.preventDefault(); if (emailCs2.trim()) { setNotifiedCs2(true); setEnteringCs2(false); } }}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="email"
                          required
                          autoFocus
                          placeholder="your@email.com"
                          value={emailCs2}
                          onChange={e => setEmailCs2(e.target.value)}
                          className="font-sans text-xs px-3 py-2 rounded-full outline-none"
                          style={{ border: `1px solid ${ACCENT}`, color: "#111111", width: "160px", backgroundColor: "#fff" }}
                        />
                        <motion.button
                          type="submit"
                          className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full"
                          style={{ backgroundColor: ACCENT, color: "#fff" }}
                          whileHover={{ opacity: 0.85 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                        >
                          →
                        </motion.button>
                      </form>
                    ) : (
                      <motion.button
                        onClick={() => setEnteringCs2(true)}
                        className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2"
                        style={{ backgroundColor: ACCENT, color: "#fff" }}
                        whileHover={{ opacity: 0.85 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                      >
                        Notify me →
                      </motion.button>
                    )
                  ) : (
                    <>
                      {cs.tags.map((tag, j) => <Tag key={j} text={tag} />)}
                      <Link
                        href="/work?expand=0"
                        className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 ml-auto transition-opacity duration-200 hover:opacity-60"
                        style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent" }}
                      >
                        Read case study →
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Thoughts Preview ── */}
      <section id="thoughts" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader label="Thoughts" linkHref="/thoughts" linkText="View all →" />
            <h2
              className="font-sans font-normal leading-tight mb-8"
              style={{
                color: "#111111",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Writing
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {thoughts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  borderTop: "1px solid rgba(17,17,17,0.12)",
                  borderBottom: i === thoughts.length - 1 ? "1px solid rgba(17,17,17,0.12)" : "none",
                }}
              >
                <div className="flex items-center gap-6 py-4">
                  {/* Left column: number, title, chip + read time */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-sans tracking-[0.2em] uppercase mb-1"
                      style={{ fontSize: "11px", color: "#999999" }}
                    >
                      {post.label}
                    </p>
                    <p
                      className="font-sans mb-2"
                      style={{ fontSize: "15px", fontWeight: 500, color: "#111111", letterSpacing: "-0.01em" }}
                    >
                      {post.title}
                    </p>
                    <div className="flex items-center gap-3">
                      <span
                        className="font-sans text-xs px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(32,64,200,0.07)", color: ACCENT }}
                      >
                        {post.topic}
                      </span>
                      <span className="font-sans text-xs" style={{ color: "#999999" }}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  {/* Middle column: date */}
                  <div className="flex-shrink-0 hidden sm:flex" style={{ width: "72px", justifyContent: "flex-end" }}>
                    <span className="font-sans" style={{ fontSize: "12px", color: "#999999" }}>
                      {post.date}
                    </span>
                  </div>
                  {/* Right column: Read button */}
                  <div className="flex-shrink-0">
                    <Link
                      href={`/thoughts?expand=${i}`}
                      className="font-sans text-xs inline-flex items-center rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-60"
                      style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent" }}
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Contact Footer ── */}
      <section id="contact" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-sans text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Open to opportunities
            </p>
            <h2
              className="font-sans font-normal leading-tight mb-4"
              style={{
                color: "#111111",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Work with me
            </h2>
            <p
              className="font-sans text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: "#666666" }}
            >
              Always open to interesting projects, collaborations, and conversations. If you&apos;re
              building something and think I could help, reach out.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
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
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
