"use client";
// Cursor-reactive gradient mesh orbs — matching the Leonard/JD Workbook reference aesthetic
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - window.innerWidth / 2);
      rawY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rawX, rawY]);

  // Each orb follows the cursor at a different lag and direction for parallax depth
  const fast = { damping: 35, stiffness: 70 };
  const mid  = { damping: 55, stiffness: 45 };
  const slow = { damping: 80, stiffness: 25 };

  const o1x = useSpring(useTransform(rawX, v => v *  0.05), fast);
  const o1y = useSpring(useTransform(rawY, v => v *  0.05), fast);
  const o2x = useSpring(useTransform(rawX, v => v * -0.04), mid);
  const o2y = useSpring(useTransform(rawY, v => v * -0.04), mid);
  const o3x = useSpring(useTransform(rawX, v => v *  0.07), slow);
  const o3y = useSpring(useTransform(rawY, v => v *  0.03), slow);
  const o4x = useSpring(useTransform(rawX, v => v * -0.06), mid);
  const o4y = useSpring(useTransform(rawY, v => v *  0.06), mid);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Orb 1 — cool lavender, top right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 750, height: 750,
          top: -220, right: -120,
          background: "radial-gradient(circle, rgba(120,110,200,0.18) 0%, rgba(140,130,210,0.09) 40%, transparent 70%)",
          filter: "blur(70px)",
          x: o1x, y: o1y,
        }}
      />

      {/* Orb 2 — cool steel-blue, mid left (like Leonard cool side) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 640, height: 640,
          top: "30%", left: -180,
          background: "radial-gradient(circle, rgba(95,128,168,0.28) 0%, rgba(110,145,180,0.14) 45%, transparent 70%)",
          filter: "blur(80px)",
          x: o2x, y: o2y,
        }}
      />

      {/* Orb 3 — soft indigo, bottom center-right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 820, height: 820,
          bottom: -320, right: "5%",
          background: "radial-gradient(circle, rgba(89,72,200,0.14) 0%, rgba(100,90,210,0.07) 45%, transparent 70%)",
          filter: "blur(90px)",
          x: o3x, y: o3y,
        }}
      />

      {/* Orb 4 — muted violet, upper left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520, height: 520,
          top: "8%", left: "12%",
          background: "radial-gradient(circle, rgba(148,115,188,0.22) 0%, rgba(160,130,195,0.1) 45%, transparent 70%)",
          filter: "blur(65px)",
          x: o4x, y: o4y,
        }}
      />

    </div>
  );
}
