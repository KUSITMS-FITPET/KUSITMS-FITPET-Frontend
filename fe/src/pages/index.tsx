import { NextPage } from 'next';
import FloatingButton from '@/components/mainpage/Floating';
import SlideBanner from '@/components/mainpage/SlideBanner';
import PartnerLogos from '@/components/mainpage/PartnerLogos';
import CardContainer from '@/components/mainpage/CardContainer';
import InsuranceCTA from '@/components/mainpage/InsuranceCTA';
import Reviewimage from '@/components/mainpage/Reviewimage';
import HelpSection from '@/components/mainpage/HelpSection';

const HomePage: NextPage = () => {
  return (
    <div>
      <SlideBanner />  
      <PartnerLogos />  
      <CardContainer />  
      <InsuranceCTA />  
      <Reviewimage src="/images/review.svg" />  
      <HelpSection />  
      <FloatingButton />  
    </div>
  );
};

export default HomePage;
