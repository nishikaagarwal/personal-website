"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ACCENT = "#2040C8";

const TopicChip = ({ text }: { text: string }) => (
  <span
    className="font-sans text-xs px-2.5 py-1 rounded-full"
    style={{
      backgroundColor: "rgba(32,64,200,0.07)",
      color: ACCENT,
    }}
  >
    {text}
  </span>
);

const posts = [
  {
    label: "Post 01",
    title: "On the gap between what a tool can do and what people will actually use",
    topic: "Technology",
    readTime: "5 min read",
    date: "Mar 2026",
    subheading: "The most common reason a tool fails is not that it does not work. It is that nobody wanted to change how they worked to accommodate it.",
    paragraphs: [
      "I spent two years building software at a company with around 150,000 employees, which meant that anything we shipped had to work not just technically but socially. A feature could be perfectly engineered and still sit unused because the people it was built for had a system that already worked well enough, and well enough almost always beats better when better requires effort and relearning.",
      "The first thing this taught me is that adoption is a design problem rather than a communication problem. When a tool is not being used, the instinct is to explain it better, to run training sessions, to write cleaner documentation, and sometimes that helps. But more often the problem is that the tool asked people to change something they had no particular desire to change, and no amount of explanation fixes that. The tool needed to meet people where they already were, and it did not.",
      "I watched this happen with a governance system I worked on for managing code changes across teams. The system itself was sound and solved a real problem, but the first version required people to add a step to a workflow they had been running the same way for years. Adoption was slow not because people disagreed with the goal but because the friction of the new step outweighed the pain of the problem it was solving, at least in the short term, and we had to redesign it so the new behaviour sat much closer to the existing one before it started to stick.",
      "The tools that get used are rarely the most powerful ones — they are the ones that slot into existing habits with the least resistance and make the right thing to do also the easy thing to do. There is a reason spreadsheets have survived every wave of purpose-built software designed to replace them. They are infinitely malleable, they require no onboarding, and everyone already knows how to use them, which turns out to be a more durable competitive advantage than almost any feature set.",
      "The harder lesson is about what this means for how you build things. If you design around what a tool is capable of rather than around how people actually work, you will end up with something impressive that nobody uses, and the capability gap is almost never the reason. Understanding the workflow you are slotting into, the habits you are asking people to adjust, and the minimum viable disruption that still solves the problem — that is the actual design challenge, and it tends to be far less glamorous than building the feature itself.",
      "I think about this when I look at how AI tools are landing in organisations right now. The ones getting real traction are not necessarily the most sophisticated — they are the ones sitting inside tools people already open every day, answering questions in the flow of existing work rather than requiring a context switch to a new interface. The capability of the underlying model matters far less than where it appears and what it quietly asks the user to do differently.",
      "The gap between what a tool can do and what people will actually use it for is almost never a technical problem. It is a question of how much change you are asking for, and whether the benefit is visible and immediate enough to make that change feel worth it.",
    ],
  },
  {
    label: "Post 02",
    title: "What fifteen years of drawing taught me about iteration",
    topic: "Learning",
    readTime: "4 min read",
    date: "Mar 2026",
    subheading: "The gap between what you see and what you can make gets smaller every time. That is the whole practice.",
    paragraphs: [
      "I started drawing when I was seven, which means I spent a long time being bad at it before I was any good. That sounds obvious, but it is worth sitting with because most skills do not give you that kind of feedback loop so cleanly. With drawing, the gap between what you intended and what you produced is right there on the paper in front of you. There is nowhere to hide.",
      "The first thing my teacher told me was to never erase the bad lines, because they are the most useful thing on the page. A line that goes wrong tells you exactly where your hand deviated from what your eye saw, and that information is more valuable than a clean sheet. You learn quickly that iteration is not a sign something went wrong — it is the process itself, and every version that does not work is a more accurate map of where you actually are versus where you thought you were.",
      "Realism in particular is unforgiving in this way because the goal is to make something look exactly like what you are looking at, which means every deviation is visible and measurable. You cannot approximate a face. So you learn to slow down, to look more than you draw, to treat the looking as the real work and the drawing as almost incidental.",
      "What surprised me when I moved into more structured work was how rarely people are taught to look properly before they act. The instinct is to start producing something, to show progress, to fill the blank page. Drawing trained me to sit with the wrong product longer than feels comfortable, to really understand what I am trying to make before I make it, and the output is almost always better for it.",
      "The other thing drawing taught me is that improvement is not linear and it is not always visible in the moment. There were long stretches where I felt like nothing was changing, and then something small would shift, a technical understanding, a change in how I was seeing the page, and suddenly a whole set of problems I had been having would dissolve at once. You only ever see that pattern in retrospect, which means the only thing to do while you are in it is to keep going.",
      "The people I knew who improved the fastest were not the most talented. They were the ones who filled the most pages.",
    ],
  },
  {
    label: "Post 03",
    title: "The new luxury is not being seen",
    topic: "Consumer behaviour",
    readTime: "4 min read",
    date: "Mar 2026",
    subheading: "The most valuable thing a space can offer you today is the feeling that nobody is watching.",
    paragraphs: [
      "There is a specific kind of relief that comes from being somewhere nobody is trying to sell you anything.",
      "I noticed it properly for the first time on a trip where the hotel we stayed at had no social media presence worth speaking of. No influencer photos on the walls, no hashtag printed on the menu, no queue outside. Just a place that existed for the people inside it. I remember thinking: this is what expensive actually feels like. Not the thread count or the food, but the fact that nobody was performing anything.",
      "We have spent a long time conflating luxury with visibility. The brands that signal status are the ones everyone recognises, which means by definition they are not rare. The handbag that marks you as someone is the same one carried by several thousand other people who also wanted to be marked as someone. There is nothing wrong with that, but it is worth being honest about what it is. Belonging, not exclusivity.",
      "Real exclusivity has quietly moved somewhere else. It lives in the things that do not scale: the restaurant that seats thirty people and does not take walk-ins, the tailor who has a two-year wait, the community where membership is not purchased but earned. These things are expensive not because of materials or marketing but because access is genuinely limited.",
      "Privacy sits alongside this, and I think it is increasingly the more interesting of the two. The ability to move through the world without being tracked or served content about it later is something most people have simply accepted losing. The ultra-wealthy figured this out quietly. They travel on planes with no passenger manifests, stay in properties that do not appear on booking sites, move through cities in ways that generate no data trail. Privacy at that level is not paranoia. It is the logical endpoint of having enough resources to opt out of the attention economy entirely.",
      "For the rest of us it shows up in smaller ways. The choice to not post about something. The dinner where no one photographs the food. The holiday that does not appear on your grid. There is a growing number of people, especially younger ones, who have started treating their own lives as something worth keeping private, not because they have something to hide but because the experience of a thing is diminished when it is also content.",
      "The brands and spaces that understand this are building something that cannot be replicated at scale. The question is no longer whether something is beautiful or well made, but whether it protects your attention and your time as carefully as it once protected your money.",
      "The most valuable thing you can offer someone, it turns out, is the feeling that they are not being watched.",
    ],
  },
];


function PostRow({
  post,
  isExpanded,
  onToggle,
  animDelay,
  id,
  isLast,
}: {
  post: typeof posts[number];
  isExpanded: boolean;
  onToggle: () => void;
  animDelay: number;
  id: string;
  isLast: boolean;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: animDelay }}
      style={{
        borderTop: "1px solid rgba(17,17,17,0.12)",
        borderBottom: isLast ? (isExpanded ? "none" : "1px solid rgba(17,17,17,0.12)") : "none",
        scrollMarginTop: "80px",
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
            <TopicChip text={post.topic} />
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
        {/* Right column: Read / Collapse button */}
        <div className="flex-shrink-0">
          <motion.button
            onClick={onToggle}
            className="font-sans text-xs inline-flex items-center rounded-full px-4 py-2"
            style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent", cursor: "pointer" }}
            whileHover={{ opacity: 0.6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            {isExpanded ? "Collapse ↑" : "Read →"}
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="article"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden", borderBottom: "1px solid rgba(17,17,17,0.12)" }}
          >
            <div className="pb-8 max-w-2xl">
              <p
                className="font-sans text-sm mb-6"
                style={{ color: "#666666", fontStyle: "italic", lineHeight: 1.7 }}
              >
                {post.subheading}
              </p>
              {post.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={i < post.paragraphs.length - 1 ? "mb-5" : ""}
                  style={{ fontSize: "15px", color: "#444444", lineHeight: 1.8, fontFamily: "inherit" }}
                >
                  {para}
                </p>
              ))}
              <div className="mt-8 pt-6 flex" style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }}>
                <motion.button
                  onClick={onToggle}
                  className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2"
                  style={{ color: ACCENT, border: "0.5px solid currentColor", backgroundColor: "transparent", cursor: "pointer" }}
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
  );
}

export default function ThoughtsPage() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const expand = params.get("expand");
    if (expand !== null) {
      const idx = Number(expand);
      setExpandedPost(idx);
      setTimeout(() => {
        const el = document.getElementById(`post-${idx}`);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const toggle = (i: number) => setExpandedPost(prev => (prev === i ? null : i));

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
            href="/#thoughts"
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
            Thoughts
          </p>
          <h1
            className="font-sans font-normal leading-tight mb-3"
            style={{
              color: "#111111",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Writing
          </h1>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "#666666" }}>
            Observations on strategy, technology, and the space in between.
          </p>
        </motion.div>

        {/* ── Post list ── */}
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <PostRow
              key={i}
              id={`post-${i}`}
              post={post}
              isExpanded={expandedPost === i}
              onToggle={() => toggle(i)}
              animDelay={i * 0.08}
              isLast={i === posts.length - 1}
            />
          ))}

        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-sans text-sm mt-8"
          style={{ color: "rgba(17,17,17,0.35)", fontStyle: "italic" }}
        >
          More posts coming soon.
        </motion.p>

      </div>
    </main>
  );
}
