import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhatItSolvesSection from "@/components/WhatItSolvesSection";
import WhyPreventionWorksSection from "@/components/WhyPreventionWorksSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhatItSolvesSection />
      <WhyPreventionWorksSection />
    </div>
  );
}
