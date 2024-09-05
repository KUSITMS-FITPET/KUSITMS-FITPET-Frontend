import { useQuotationContext } from '@/api/admin/Fetcher'
import Pagination from './Pagination'
import { Input } from '../common'

interface FilteringProps {
  page: number
  setPage: (page: number) => void
}

export default function Filtering({ page, setPage }: FilteringProps) {
  const { totalCount } = useQuotationContext()

  return (
    <section className="flex items-end justify-between mb-10">
      <div className="bg-white rounded-md flex px-20 py-10 gap-20">
        <div className="flex items-center gap-10">
          <p>날짜 및 시간</p>
          <Input wrapperClassName="h-28" />
        </div>
        <div className="flex items-center gap-10">
          <p>전화번호</p>
          <Input wrapperClassName="h-28" />
        </div>
        <button type="button" className="bg-main w-72 rounded-md text-white">
          검색
        </button>
      </div>
      <div className="flex h-full items-end">
        <p className="text-[#9CA3AF] mb-2 text-15">최신순</p>

        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalPages={Math.ceil(totalCount / 13)}
        />
      </div>
    </section>
  )
}
