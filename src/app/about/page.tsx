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
      <main className="bg-white overflow-hidden">
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
