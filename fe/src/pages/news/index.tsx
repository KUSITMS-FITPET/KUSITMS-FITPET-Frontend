import { RadioButton, Card, Pagination } from '@/components'
import { useState } from 'react'

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1)
  const [option, setOption] = useState<0 | 1>(0)

  const dummy = {
    title: '제목제목제목',
    content:
      ' Lorem ipsum dolor sit amet consectetur. Vitae leo velit montes adipiscing porttitor frin Lorem ipsum dolor sit amet consectetur',
  }

  return (
    <div className="h-screen">
      <section className="w-full h-300 bg-[#008CFF]">
        <div className="h-full flex flex-col px-120 justify-center text-white font-normal">
          <p className="text-2xl font-regular">어렵기만 했던 펫보험,</p>
          <p className="text-4xl font-semibold">
            SC의 카드뉴스와 함께 알아볼까요?
          </p>
        </div>
      </section>

      <section className="w-4/5 h-auto mt-100 flex flex-col items-center mx-auto p-20">
        <div className="w-full flex flex-row gap-20 justify-end mb-36">
          <RadioButton
            label="최신순"
            checked={option === 0}
            onChange={() => setOption(0)}
          />
          <RadioButton
            label="오래된순"
            checked={option === 1}
            onChange={() => setOption(1)}
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30">
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
          <Card title={dummy.title} content={dummy.content} id={1} />
        </div>
        <div className="mt-50 mb-100">
          <Pagination
            totalPages={10}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </div>
  )
}
