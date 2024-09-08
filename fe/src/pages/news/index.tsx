import { RadioButton } from '@/components'
import { useState } from 'react'
import { AsyncBoundaryWithQuery } from '@/react-utils'
import { CardSection, NewsFetcher, NewsPagination } from '@/components/news'
import Image from 'next/image'

export default function Page() {
  const [option, setOption] = useState<'desc' | 'asc'>('desc')
  const [currentPage, setCurrentPage] = useState(1)

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

      <section className="w-4/5 h-auto mt-100 flex flex-col items-center mx-auto p-20 flex-grow">
        <div className="w-full flex flex-row gap-20 justify-end mb-36">
          <RadioButton
            label="최신순"
            checked={option === 'desc'}
            onChange={() => setOption('desc')}
          />
          <RadioButton
            label="오래된순"
            checked={option === 'asc'}
            onChange={() => setOption('asc')}
          />
        </div>

        <AsyncBoundaryWithQuery>
          <NewsFetcher page={currentPage} option={option}>
            <CardSection />
            <NewsPagination page={currentPage} setPage={setCurrentPage} />
          </NewsFetcher>
        </AsyncBoundaryWithQuery>
      </section>
    </div>
  )
}
