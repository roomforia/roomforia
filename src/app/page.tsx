
import Hero from "@/components/Hero";
import StyleSwitcher from "@/components/StyleSwitcher";
import FlowSection from "@/components/FlowSection";
import PainSection from "@/components/PainSection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />
        <StyleSwitcher />
        <FlowSection />
        <PainSection />
        <ComparisonSection />
        <CTASection />
      </main>
        <Footer />
        
    </>
  );
}