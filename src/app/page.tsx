import Chossen from "@/Components/Chossen";
import Feature from "@/Components/Feature";
import HeroSection from "@/Components/HeroSection";
import TestCard from "@/Components/TestCard";

export default function Home(){
  return(
     <main className="text-white min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <Feature/>
      <Chossen/>
      <TestCard/>
     </main>
  )
}