"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Hello" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "books", label: "Reads" },
  { id: "advice", label: "Advice" },
  { id: "detective", label: "Detective" },
  { id: "goals", label: "Goals" },
];

export default function ScrollProgress() {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };

    const observer = new IntersectionObserver(
      entries => {
        // pick the one with highest intersection ratio
        let best = "";
        let bestRatio = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= bestRatio) {
            bestRatio = e.intersectionRatio;
            best = e.target.id;
          }
        }
        if (best) setActive(best);
      },
      { threshold: [0.2, 0.5], rootMargin: "-10% 0px -10% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-7 top-0 bottom-0 z-30 hidden lg:flex flex-col items-center justify-center"
      ref={lineRef}
    >
      <div className="relative flex flex-col items-center" style={{ gap: 0 }}>
        {/* Background track */}
        <div
          className="absolute left-[3px] top-0 bottom-0 w-px"
          style={{ backgroundColor: "rgba(28,23,16,0.1)" }}
        />

        {SECTIONS.map(({ id, label }, i) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="relative flex items-center group"
              style={{ height: "40px" }}
              title={label}
            >
              {/* Dot */}
              <motion.div
                className="relative z-10 rounded-full"
                animate={{
                  width: isActive ? 7 : 4,
                  height: isActive ? 7 : 4,
                  backgroundColor: isActive ? "#9580CC" : "rgba(28,23,16,0.22)",
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Label — appears on hover */}
              <motion.span
                initial={{ opacity: 0, x: -4 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-5 font-sans text-xs whitespace-nowrap pointer-events-none select-none"
                style={{ color: isActive ? "#9580CC" : "#7C6A58" }}
              >
                {label}
              </motion.span>
            </a>
          );
        })}

        {/* Progress fill — overlays the track, clipped to scroll progress */}
        <div
          className="absolute left-[3px] top-0 w-px origin-top pointer-events-none"
          style={{
            backgroundColor: "#9580CC",
            height: `${progress * 100}%`,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
}
