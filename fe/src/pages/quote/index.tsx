import Image from 'next/image'
import Quote from './components/Quote'
import RightArticle from './components/RightArticle'

export default function QuotePage() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-300 bg-[#008CFF]">
        <div className="absolute right-[-67px] top-58 gradient-circle h-539 w-539 rounded-full" />

        <Image
          src="/images/quote.svg"
          alt="qutoe"
          width={329}
          height={329}
          className="absolute right-120"
        />

        <div className="h-300 w-1280 mx-auto flex flex-col px-120 justify-center text-white font-normal">
          <p className="text-2xl font-regular mb-15">
            간편하게 정보 입력하고 우리 아이에게 딱 맞는 보험을 찾아보세요.
          </p>
          <p className="text-4xl font-semibold">펫보험 비교하기</p>
        </div>
      </section>

      <section className="flex flex-row py-60 px-120 mx-auto gap-56">
        <Quote />
        <div>
          <RightArticle />
        </div>
      </section>
    </div>
  )
}
