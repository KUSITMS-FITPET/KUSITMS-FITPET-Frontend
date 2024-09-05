import { Pagination } from '@/components'
import { useNewsContext } from './NewsFetcher'

interface NewsPaginationProps {
  page: number
  setPage: (page: number) => void
}

export default function NewsPagination({ page, setPage }: NewsPaginationProps) {
  const { totalCount } = useNewsContext()

  return (
    <div className="mt-50 mb-100">
      <Pagination
        totalPages={Math.ceil(totalCount / 9)}
        currentPage={page}
        onPageChange={(data) => setPage(data)}
      />
    </div>
  )
}
