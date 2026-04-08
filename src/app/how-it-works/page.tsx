import Header from "@/components/Header";

import HeroInteractive from "@/components/how/HeroInteractive";
import FlowStory from "@/components/how/FlowStory";
import UnderTheHood from "@/components/how/UnderTheHood";
import ProductsShowcase from "@/components/how/ProductsShowcase";
import PartnersBlock from "@/components/how/PartnersBlock";
import CTAHow from "@/components/how/CTAHow";


import Footer from "@/components/Footer";
import { footer } from "framer-motion/client";

export default function Page() {
  return (

    <>
      <Header />

    <main className="bg-[#F6F4F1]">

      <HeroInteractive />

      <FlowStory />

      <UnderTheHood />

      <ProductsShowcase />

      <PartnersBlock />

      <CTAHow />


    </main>

    <Footer />
      
      </>


  );
}