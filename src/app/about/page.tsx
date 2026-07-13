import ParticleSection from "@/components/ParticleSection";
import Books from "@/components/Books";
import BestAdvice from "@/components/BestAdvice";
import Detective from "@/components/Detective";

export default function AboutPage() {
  return (
    <main>
      {/* ── Facts ── */}
      <ParticleSection />

      {/* ── Reads ── */}
      <Books />

      {/* ── Advice ── */}
      <BestAdvice />

      {/* ── Origins ── */}
      <Detective />
    </main>
  );
}
