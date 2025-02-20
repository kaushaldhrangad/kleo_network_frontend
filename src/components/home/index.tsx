import { BackedBy } from './sections/BackedBy'
import { FAQSection } from './sections/FAQSection'
import { Feature1 } from './sections/Feature1'
import { Feature2 } from './sections/Feature2'
import { Feature3 } from './sections/Feature3'
import { Feature4 } from './sections/Feature4'
import { Footer } from './sections/Footer'
import { HeroSection } from './sections/HeroSection'
// import StackedCards from './sections/StackedCards'

export function Home() {
  return (
    <div className="flex flex-col items-start justify-center self-stretch font-inter">
      <HeroSection />
      {/* <StackedCards /> */}
     
      <Feature2 />
      <Feature4 />
      <Feature3 />
      <BackedBy />
      <FAQSection />
      <Footer />
    </div>
  )
}
