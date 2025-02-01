import { NextPage } from 'next'
import FloatingButton from '@/components/mainpage/Floating'
import SlideBanner from '@/components/mainpage/SlideBanner'
import PartnerLogos from '@/components/mainpage/PartnerLogos'
import CardContainer from '@/components/mainpage/CardContainer'
import InsuranceCTA from '@/components/mainpage/InsuranceCTA'
import ReviewBackground from '@/components/mainpage/ReviewBackgroup'
import HelpSection from '@/components/mainpage/HelpSection'

const HomePage: NextPage = function HomePage() {
  return (
    <div>
      <SlideBanner />
      <PartnerLogos />
      <CardContainer />
      <InsuranceCTA />
      <ReviewBackground />
      <HelpSection />
      <FloatingButton />
    </div>
  )
}

export default HomePage
