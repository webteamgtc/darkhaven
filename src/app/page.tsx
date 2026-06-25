import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import PlatformsPreview from "@/components/PlatformsPreview";
import WhoWeServe from "@/components/WhoWeServe";
import OurValues from "@/components/OurValues";
import SecurityInfrastructure from "@/components/SecurityInfrastructure";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <PlatformsPreview />
      <WhoWeServe />
      <OurValues />
      <SecurityInfrastructure />
      <CTABanner />
      <Footer />
    </main>
  );
}
