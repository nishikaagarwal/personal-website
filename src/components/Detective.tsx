"use client";
import { motion } from "framer-motion";


export default function Detective() {
  return (
    <section className="section-padding" id="detective">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Magnifying glass */}
            <motion.div
              animate={{ rotate: [0, 8, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="relative">
                <div
                  className="w-44 h-44 rounded-full flex items-center justify-center"
                  style={{ border: "8px solid rgba(32,64,200,0.4)", backgroundColor: "rgba(32,64,200,0.05)" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl"
                  >
                    🔍
                  </motion.div>
                </div>
                <div
                  className="absolute bottom-0 right-0 translate-x-8 translate-y-8 w-3 h-16 rounded-full rotate-45"
                  style={{ backgroundColor: "rgba(32,64,200,0.4)" }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#2040C8" }}>
            As a child, my dream was to be
          </p>
          <h2 className="font-sans font-normal leading-tight mb-6" style={{ color: "#111111", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            A Detective
          </h2>
          <p className="font-sans leading-relaxed text-base" style={{ color: "#666666" }}>
            I was fascinated by mysteries and endlessly curious. My first role model was{" "}
            <span style={{ color: "#111111", fontStyle: "italic" }}>Nancy Drew</span>.
            That curiosity never left. It just found a new home — in strategy, systems,
            and the quiet thrill of figuring things out.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
