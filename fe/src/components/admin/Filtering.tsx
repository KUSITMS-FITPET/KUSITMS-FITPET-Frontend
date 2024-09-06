import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { usePostFilter } from '@/api/admin/quotations'
import { format } from 'date-fns'
import { QuotationsResponse } from '@/api/admin/type'
import { toast } from 'react-toastify'
import Pagination from './Pagination'
import { Input } from '../common'
import { DateRangePicker } from '../common/DateRangePicker'

interface FilteringProps {
  page: number
  data: QuotationsResponse
  setPage: (page: number) => void
  setData: (data: QuotationsResponse) => void
  setIsFiltering: (isFiltering: boolean) => void
  option: 'desc' | 'asc'
  setOption: (option: 'desc' | 'asc') => void
}

export default function Filtering({
  page,
  setPage,
  setData,
  setIsFiltering,
  option,
  setOption,
  data,
}: FilteringProps) {
  const [date, setDate] = useState<DateRange | undefined>()
  const [phone, setPhone] = useState<string>()

  const { mutate } = usePostFilter(page, 13)

  const toggleOption = () => {
    const newOption = option === 'desc' ? 'asc' : 'desc'
    setOption(newOption)
    setPage(1)
  }

  const handleSearch = () => {
    const startDate = date?.from
      ? `${format(date.from, 'yyyy-MM-dd')} 00:00`
      : ''
    const endDate = date?.to ? `${format(date.to, 'yyyy-MM-dd')} 23:59` : ''
    setPage(1)

    mutate(
      {
        startDate,
        endDate,
        phoneNumber: phone || '',
        refeere: '',
        petInfo: '',
      },
      {
        onSuccess: ({ isSuccess, result }) => {
          if (isSuccess === true) {
            setIsFiltering(true)
            setData(result)
          } else
            toast.error('다시 시도해주세요.', {
              autoClose: 2000,
            })
        },
      },
    )
  }

  return (
    <section className="flex items-end justify-between mb-10">
      <div className="bg-white rounded-md flex px-20 py-10 gap-20">
        <div className="flex items-center gap-10">
          <p>날짜</p>
          <DateRangePicker date={date} setDate={setDate} />
        </div>
        <div className="flex items-center gap-10">
          <p>전화번호</p>
          <Input
            type="phone"
            value={phone}
            onValueChange={setPhone}
            wrapperClassName="h-28"
          />
        </div>
        <button
          type="button"
          className="bg-main w-72 rounded-md text-white"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
      <div className="flex h-full items-end">
        <button
          type="button"
          onClick={toggleOption}
          className="text-[#9CA3AF] mb-2 mr-8 text-15 underline"
        >
          {option === 'desc' ? '최신순' : '오래된순'}
        </button>

        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalPages={Math.ceil(data.totalCount / 13)}
        />
      </div>
    </section>
  )
}
