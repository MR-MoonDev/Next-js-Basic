import Feature from "@/Components/Feature";
import HeroSection from "@/Components/HeroSection";

export default function Home(){
  return(
     <main className="text-white min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <Feature/>
     </main>
  )
}