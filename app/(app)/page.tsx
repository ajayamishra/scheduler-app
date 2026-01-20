import { CTASection } from "@/components/landing/cta";
import { FeaturesSection } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { IntegrationSection } from "@/components/landing/integration";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
