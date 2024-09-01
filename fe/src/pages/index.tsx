import type { NextPage } from 'next';
import FloatingButton from './components/mainpage/Floating';
import SlideBanner from './components/mainpage/SlideBanner';
import PartnerLogo from './components/mainpage/PartnerLogos';
import CardContainer from './components/mainpage/CardContainer';
import InsuranceCTA from './components/mainpage/InsuranceCTA';
import Review from './components/mainpage/Review'  // 올바른 경로로 수정
import HelpSection from './components/mainpage/HelpSection';

const HomePage: NextPage = () => {
  return (
    <div>
      <FloatingButton />
      <SlideBanner /> 
      <PartnerLogo />
      <CardContainer />
      <InsuranceCTA />
      <Review src="/images/review.svg" />  {/* src 속성을 명시적으로 전달 */}
      <HelpSection />
    </div>
  );
};

export default HomePage;