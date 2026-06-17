import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import OurValues from "@/components/OurValues";
import Compliance from "@/components/Compliance";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <WhoWeAre />
      <WhatWeDo />
      <WhoWeServe />
      <OurValues />
      <Compliance />
      <CTABanner />
      <Footer />
    </main>
  );
}
