import { NextPage } from 'next'
import FloatingButton from '@/components/mainpage/Floating'
import SlideBanner from '@/components/mainpage/SlideBanner'
import PartnerLogos from '@/components/mainpage/PartnerLogos'
import CardContainer from '@/components/mainpage/CardContainer'
import InsuranceCTA from '@/components/mainpage/InsuranceCTA'
import Reviewimage from '@/components/mainpage/Reviewimage'
import HelpSection from '@/components/mainpage/HelpSection'

const HomePage: NextPage = function HomePage() {
  return (
    <div>
      <SlideBanner /> {/* 메인 배너 슬라이드 */}
      <PartnerLogos /> {/* 파트너 로고 섹션 */}
      <CardContainer /> {/* 주요 카드 콘텐츠 섹션 */}
      <InsuranceCTA /> {/* 보험 CTA(Call to Action) 섹션 */}
      <Reviewimage src="/images/review.svg" /> {/* 리뷰 이미지 섹션 */}
      <HelpSection /> {/* 도움말 섹션 */}
      <FloatingButton /> {/* 플로팅 버튼 */}
    </div>
  )
}

export default HomePage
