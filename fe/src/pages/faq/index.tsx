import { Input } from '@/components'
import { AsyncBoundaryWithQuery } from '@/react-utils'
import Image from 'next/image'
import Search from '@/components/common/Icons/Search'
import TabWithDropdown from '@/components/FaQ'
import { useEffect, useState } from 'react'
import Floating from '@/components/mainpage/Floating'
import FaQFetcher from '@/api/faq'

export default function FnQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 200)

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm])

  return (
    <div className="bg-bgColor3 flex flex-col min-h-screen">
      <section className="w-full h-300 bg-[#008CFF]">
        <div className="absolute right-[-80px] top-200 gradient-circle h-539 w-539 rounded-full" />
        <div className="h-full flex flex-col px-160 justify-center text-white font-normal">
          <p className="text-2xl font-regular">
            어렵고 헷갈리는 펫보험, 함께 알아볼까요?
          </p>
          <p className="text-4xl font-semibold mt-10">펫보험 팁</p>
        </div>

        <Image
          src="/images/news-banner.svg"
          alt="qutoe"
          width={370}
          height={400}
          className="absolute top-100 right-40"
        />
      </section>
      <section className="bg-bgColor3 w-full h-350 px-100">
        <div className="flex flex-col justify-center h-full gap-30 relative">
          <Floating className="absolute !top-50 " />
          <h1 className="font-semibold text-xl text-center leading-40">
            궁금하신 내용을 검색해주세요. <br /> 찾는 내용이 없을 경우, 전화
            상담이나 톡 문의를 이용해 주세요.
          </h1>
          <div className="flex justify-center">
            <Input
              placeholder="궁금한 사항을 검색해보세요."
              value={searchTerm}
              wrapperClassName="shadow-md w-2/3 h-50 border-none"
              endContent={<Search />}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-30 pb-100">
        <AsyncBoundaryWithQuery>
          <FaQFetcher>
            <TabWithDropdown searchTerm={debouncedSearchTerm} />
          </FaQFetcher>
        </AsyncBoundaryWithQuery>
      </section>
    </div>
  )
}
