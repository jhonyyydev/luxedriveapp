import Header from "@/components/Header"
import Hero from "@/components/Hero"
import BrandSection from "@/components/BrandSection"
import BodyTypeSection from "@/components/BodyTypeSection"

export default function Home(){
  return(
    <main className="min-h-screen bg-white">
      <Header/>
      <Hero/>
      <BrandSection/>
      <BodyTypeSection/>
    </main>
  )
}