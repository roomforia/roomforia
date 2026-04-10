import Header from "@/components/Header"
import Hero from "@/components/partners/Hero"
import PartnerSegments from "@/components/partners/PartnerSegments"
import UnifiedDemo from "@/components/partners/UnifiedDemo"
import Benefits from "@/components/partners/Benefits"
import CaseStudy from "@/components/partners/CaseStudy"
import Pricing from "@/components/partners/Pricing"
import FinalCTA from "@/components/partners/FinalCTA"
import Footer from "@/components/Footer"

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerSegments />
        <UnifiedDemo />
        <Benefits />
        <CaseStudy />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
