"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const ACCENT = "#2040C8";

const SECTIONS = [
  { id: "hero",       label: "Hello"      },
  { id: "experience", label: "Experience" },
  { id: "about",      label: "About"      },
  { id: "work",       label: "Work"       },
  { id: "thoughts",   label: "Thoughts"   },
  { id: "contact",    label: "Contact"    },
];

export default function ScrollProgress() {
  const pathname = usePathname();
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

  if (pathname !== "/") return null;

  return (
    <div
      className="fixed left-7 top-0 bottom-0 z-30 hidden lg:flex flex-col items-center justify-center"
      ref={lineRef}
    >
      <div className="relative flex flex-col items-center" style={{ gap: 0 }}>
        {/* Background track */}
        <div
          className="absolute left-[3px] top-0 bottom-0 w-px"
          style={{ backgroundColor: "rgba(17,17,17,0.1)" }}
        />

        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="relative flex items-center group"
              style={{ height: "40px" }}
              title={label}
            >
              {/* Label — appears on hover */}
              <motion.span
                initial={{ opacity: 0, x: -4 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-3 font-sans text-xs whitespace-nowrap pointer-events-none select-none"
                style={{ color: isActive ? ACCENT : "#999999" }}
              >
                {label}
              </motion.span>
            </a>
          );
        })}

        {/* Progress fill */}
        <div
          className="absolute left-[3px] top-0 w-px origin-top pointer-events-none"
          style={{
            backgroundColor: ACCENT,
            height: `${progress * 100}%`,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
}
