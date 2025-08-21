import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { BenefitsSection } from "@/components/sections/education/benefits-section";
import { ChallengesSection } from "@/components/sections/education/challenges-section";
import { FaqSection } from "@/components/sections/education/faq-section";
import { HeroSection } from "@/components/sections/education/hero-section";
import { IntroSection } from "@/components/sections/education/intro-section";
import { SolutionsSection } from "@/components/sections/education/solutions-section";
import { UniversityExampleSection } from "@/components/sections/education/university-example";
import { WhyPaperflySection } from "@/components/sections/education/why-paperfly-section";

export default function EducationPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="pt-[72px]">
        <HeroSection />
        <IntroSection />
        <ChallengesSection />
        <SolutionsSection />
        <UniversityExampleSection />
        <BenefitsSection />
        <FaqSection />
        <WhyPaperflySection />
        <CallToActionSection
          title="Ready to Streamline Campus Procurement?"
          description="Join educational institutions that have reduced committee review time by 30-40% while maintaining full compliance and transparency."
        />
      </main>
      <Footer />
    </div>
  );
}

