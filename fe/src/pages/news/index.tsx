import { RadioButton } from '@/components'
import { useState } from 'react'
import { AsyncBoundaryWithQuery } from '@/react-utils'
import { CardSection, NewsFetcher, NewsPagination } from './components'

export default function Page() {
  const [option, setOption] = useState<'desc' | 'asc'>('desc')

  return (
    <div className="bg-bgColor3">
      <section className="w-full h-300 bg-[#008CFF]">
        <div className="h-full flex flex-col px-160 justify-center text-white font-normal">
          <p className="text-2xl font-regular">어렵기만 했던 펫보험,</p>
          <p className="text-4xl font-semibold">
            SC의 카드뉴스와 함께 알아볼까요?
          </p>
        </div>
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
          <NewsFetcher page={1} option={option}>
            <CardSection />
            <NewsPagination />
          </NewsFetcher>
        </AsyncBoundaryWithQuery>
      </section>
    </div>
  )
}
