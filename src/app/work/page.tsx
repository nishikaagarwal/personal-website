"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AlertCircle, Compass, BarChart2, Lightbulb, Code2 } from "lucide-react";

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

const PlaceholderTag = ({ text }: { text: string }) => (
  <span
    className="font-sans text-xs px-2.5 py-1 rounded-full"
    style={{
      backgroundColor: "rgba(17,17,17,0.05)",
      color: "rgba(17,17,17,0.4)",
      border: "1px solid rgba(17,17,17,0.1)",
    }}
  >
    {text}
  </span>
);

const sections = [
  {
    icon: AlertCircle,
    num: "01",
    heading: "The problem",
    paras: [
      "Every time a junior consultant joins a small firm, the same knowledge gets re-taught from scratch. Sector primers, client context, how engagements are structured, what good presentations look like — none of it is written down in a way a new hire can actually use. It lives in senior consultants' heads, in scattered documents, and in Slack threads nobody can find.",
      "At smaller firms this compounds quickly because there are no dedicated knowledge management teams, and as the firm grows, the problem gets more expensive rather than easier to manage.",
    ],
  },
  {
    icon: Compass,
    num: "02",
    heading: "The approach",
    paras: [
      "I mapped the problem before proposing anything. Three questions guided the work: what does a new consultant actually need to know in their first four weeks, where does that knowledge currently live, and what is the real cost of the current approach in time and senior capacity.",
      "Working backwards from what a consultant is expected to do independently by week four, each function has a knowledge dependency — things you need to understand before you can do them. The knowledge exists across past case summaries, sector primers, and informal guidance in email and memory, but none of it is queryable in any meaningful way. I also estimated that senior consultants spend roughly three to five hours per new hire per week answering questions that a well-built system could handle, which at a small firm hiring two to three people a year adds up quickly.",
    ],
  },
  {
    icon: BarChart2,
    num: "03",
    heading: "The findings",
    paras: [
      "New hires are short of a way to find the right material at the right moment. A good knowledge system answers questions without requiring you to already know what you are looking for.",
      "The knowledge that matters most is also the hardest to document — the judgment calls, when to push back on a client assumption, how to frame a recommendation when the data is inconclusive, require a different format. Structured case summaries with annotated decisions come closest. And the cost of the current approach falls disproportionately on whoever is most senior, which at small firms usually means the people most needed on client work.",
    ],
  },
  {
    icon: Lightbulb,
    num: "04",
    heading: "The recommendation",
    paras: [
      "A lightweight AI assistant built on top of the firm's existing knowledge — an indexed layer on what already exists. The knowledge base would include anonymised case summaries tagged by sector and engagement type, sector primers in a standardised format, a structured FAQ drawn from real questions new hires ask in their first month, and a short guide to how the firm structures and presents recommendations.",
      "A new hire asking how a typical due diligence engagement runs would get a specific, contextual answer drawn from real firm material rather than a generic framework. It gets smarter as the firm grows, and it shifts the burden from people to a system so senior consultants become the escalation point for questions that genuinely need judgment.",
      "The technical side is straightforward — the real constraint is the discipline of capturing and tagging institutional knowledge consistently.",
    ],
  },
];

function PrototypeSection({ notified, onNotify }: { notified: boolean; onNotify: () => void }) {
  const [entering, setEntering] = useState(false);
  const [email, setEmail]       = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { onNotify(); setEntering(false); }
  };

  return (
    <div className="flex gap-5 items-start">
      {/* Icon box */}
      <div
        className="flex-shrink-0 rounded-xl flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(17,17,17,0.05)",
          border: "1px solid rgba(17,17,17,0.08)",
        }}
      >
        <Code2 size={18} style={{ color: "#666666" }} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p
          className="font-sans tracking-[0.2em] uppercase mb-1"
          style={{ fontSize: "11px", color: "#999999" }}
        >
          05
        </p>
        <p
          className="font-sans mb-3"
          style={{ fontSize: "17px", fontWeight: 500, color: "#111111" }}
        >
          Prototype
        </p>
        <p
          className="font-sans mb-5"
          style={{ fontSize: "14px", color: "#666666", lineHeight: 1.75 }}
        >
          A working version of this assistant is in progress. It will be built on the firm's real
          knowledge base and available to interact with directly here.
        </p>

        {/* Inset block */}
        <div
          className="rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap"
          style={{
            backgroundColor: "rgba(17,17,17,0.04)",
            border: "1px solid rgba(17,17,17,0.08)",
          }}
        >
          <div>
            <p
              className="font-sans tracking-[0.2em] uppercase mb-1"
              style={{ fontSize: "10px", color: "#999999" }}
            >
              Coming soon
            </p>
            <p className="font-sans font-medium text-sm" style={{ color: "#111111" }}>
              Interactive prototype
            </p>
            <p className="font-sans text-xs mt-0.5" style={{ color: "#666666" }}>
              Get notified when it goes live
            </p>
          </div>

          {notified ? (
            <p className="font-sans text-xs flex-shrink-0" style={{ color: "#666666", fontStyle: "italic" }}>
              You&apos;re on the list.
            </p>
          ) : entering ? (
            <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-shrink-0">
              <input
                type="email"
                required
                autoFocus
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="font-sans text-xs px-3 py-2 rounded-full outline-none"
                style={{ border: `1px solid ${ACCENT}`, color: "#111111", width: "160px", backgroundColor: "#fff" }}
              />
              <motion.button
                type="submit"
                className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full flex-shrink-0"
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
              onClick={() => setEntering(true)}
              className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full inline-flex items-center gap-2 flex-shrink-0"
              style={{ backgroundColor: ACCENT, color: "#fff" }}
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Notify me →
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [expanded, setExpanded] = useState(false);
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("expand") === "0") setExpanded(true);
  }, []);

  return (
    <main className="section-padding">
      <div className="max-w-5xl mx-auto">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#work"
            className="font-sans text-xs inline-flex items-center rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-60"
            style={{ color: "#666666", border: "0.5px solid currentColor", backgroundColor: "transparent" }}
          >
            ← Back
          </Link>
        </motion.div>

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="font-sans text-xs tracking-[0.25em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Case studies
          </p>
          <h1
            className="font-sans font-normal leading-tight mb-3"
            style={{
              color: "#111111",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Selected work
          </h1>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "#666666" }}>
            Projects in strategy, consulting, and engineering.
          </p>
        </motion.div>

        {/* ── Case Study 01 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl mb-6"
          style={{ backgroundColor: "#ffffff", border: "1px solid rgba(17,17,17,0.08)" }}
        >
          {/* Preview */}
          <div className="p-8">
            <p
              className="font-sans tracking-[0.2em] uppercase mb-4"
              style={{ fontSize: "11px", color: "#999999" }}
            >
              Case study 01
            </p>
            <h2
              className="font-sans mb-3"
              style={{ fontSize: "20px", fontWeight: 500, color: "#111111", letterSpacing: "-0.01em" }}
            >
              An AI onboarding tool for new consultants
            </h2>
            <p
              className="font-sans text-sm leading-relaxed mb-5 max-w-xl"
              style={{ color: "#666666" }}
            >
              A concept and working prototype for how small consulting firms can stop re-teaching the
              same institutional knowledge every time someone new joins.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag text="Concept" />
              <Tag text="Knowledge management" />
              <Tag text="Team scaling" />
              <motion.button
                onClick={() => setExpanded(v => !v)}
                className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 ml-auto"
                style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent" }}
                whileHover={{ opacity: 0.6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {expanded ? "Collapse ↑" : "Read case study ↓"}
              </motion.button>
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="expanded"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div
                  className="px-8 pb-8"
                  style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }}
                >
                  <div className="pt-8 flex flex-col gap-10">
                    {sections.map(({ icon: Icon, num, heading, paras }) => (
                      <div key={num} className="flex gap-5 items-start">
                        {/* Icon box */}
                        <div
                          className="flex-shrink-0 rounded-xl flex items-center justify-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "rgba(17,17,17,0.05)",
                            border: "1px solid rgba(17,17,17,0.08)",
                          }}
                        >
                          <Icon size={18} style={{ color: "#666666" }} strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <p
                            className="font-sans tracking-[0.2em] uppercase mb-1"
                            style={{ fontSize: "11px", color: "#999999" }}
                          >
                            {num}
                          </p>
                          <p
                            className="font-sans mb-3"
                            style={{ fontSize: "17px", fontWeight: 500, color: "#111111" }}
                          >
                            {heading}
                          </p>
                          {paras.map((para, j) => (
                            <p
                              key={j}
                              className={`font-sans${j < paras.length - 1 ? " mb-3" : ""}`}
                              style={{ fontSize: "14px", color: "#666666", lineHeight: 1.75 }}
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}

                    <PrototypeSection notified={notified} onNotify={() => setNotified(true)} />
                  </div>

                  {/* Collapse button */}
                  <div
                    className="mt-10 pt-6 flex"
                    style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }}
                  >
                    <motion.button
                      onClick={() => setExpanded(false)}
                      className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2"
                      style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent" }}
                      whileHover={{ opacity: 0.6 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                    >
                      Collapse ↑
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Case Study 02 — placeholder ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-2xl p-8"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(17,17,17,0.08)",
            opacity: 0.45,
          }}
        >
          <p
            className="font-sans tracking-[0.2em] uppercase mb-4"
            style={{ fontSize: "11px", color: "#999999" }}
          >
            Case study 02
          </p>
          <h2
            className="font-sans mb-3"
            style={{ fontSize: "20px", fontWeight: 500, color: "#111111", letterSpacing: "-0.01em" }}
          >
            Coming soon
          </h2>
          <p
            className="font-sans text-sm leading-relaxed mb-5"
            style={{ color: "#666666" }}
          >
            More case studies in progress.
          </p>
          <PlaceholderTag text="Placeholder" />
        </motion.div>

      </div>
    </main>
  );
}
