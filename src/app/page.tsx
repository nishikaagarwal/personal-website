import Hero from "@/components/Hero";
import Goals from "@/components/Goals";
import ParticleSection from "@/components/ParticleSection";
import Experience from "@/components/Experience";
import Books from "@/components/Books";
import BestAdvice from "@/components/BestAdvice";
import Detective from "@/components/Detective";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <ParticleSection />
      <Books />
      <BestAdvice />
      <Detective />
      <Goals />
    </main>
  );
}
