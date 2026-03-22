"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isGlass, setIsGlass]     = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping: 30, stiffness: 250 });
  const y = useSpring(mouseY, { damping: 30, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      setIsGlass(!!(e.target as Element).closest("[data-glass]"));
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      animate={{
        width:  isGlass ? 76 : 22,
        height: isGlass ? 76 : 22,
        backgroundColor: isGlass ? "rgba(89,72,200,0.06)" : "rgba(89,72,200,0.55)",
        border: isGlass ? "1.5px solid rgba(89,72,200,0.35)" : "none",
        backdropFilter: isGlass ? "blur(12px) saturate(1.6)" : "none",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
