import Header from "@/components/Header"
import Hero from "@/components/Hero"
import BrandSection from "@/components/BrandSection"
import BodyTypeSection from "@/components/BodyTypeSection"
import CardSelection from "@/components/CardSelection"
import HowItWorks from "@/components/HowItWorks"
import Services from "@/components/Services"

export default function Home(){
  return(
    <main className="min-h-screen bg-white">
      <Header/>
      <Hero/>
      <BrandSection/>
      <BodyTypeSection/>
      <CardSelection/>
      <HowItWorks/>
      <Services/>
    </main>
  )
}