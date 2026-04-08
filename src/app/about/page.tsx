import Header from "@/components/Header"
import Footer from "@/components/Footer"

import AboutHero from "@/components/about/AboutHero"
import AboutValues from "@/components/about/AboutValues"
import Ecosystem from "@/components/about/Ecosystem"
import Philosophy from "@/components/about/Philosophy"
import Team from "@/components/about/Team"
import Expansion from "@/components/about/Expansion"
import Industries from "@/components/about/Industries"
import FinalCTA from "@/components/about/FinalCTA"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="relative px-4 md:px-6 overflow-hidden">

        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#F6F4F1]" />

          {/* top light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white blur-[120px] opacity-70" />

          {/* warm glow */}
          <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#C47A2C] opacity-20 blur-[140px]" />
        </div>

        <AboutHero />
        <AboutValues />
        <Ecosystem />
        <Philosophy />
        <Team />
        <Expansion />
        <Industries />
        <FinalCTA />

      </main>

      <Footer />
      
    </>
  )
}