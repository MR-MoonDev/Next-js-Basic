import AnimatedTooltipPreview from "@/Components/AnimatedTooltipPreview";
import Chossen from "@/Components/Chossen";
import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import TestCard from "@/Components/TestCard";
import UpcomingCard from "@/Components/UpcomingCard";

export default function Home(){
  return(
     <main className="text-white min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <Feature/>
      <Chossen/>
      <TestCard/>
      <UpcomingCard/>
      <AnimatedTooltipPreview/>
      <Footer/>
     </main>
  )
}