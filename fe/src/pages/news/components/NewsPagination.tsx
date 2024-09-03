import { Pagination } from '@/components'
import { useState } from 'react'
import { useNewsContext } from './NewsFetcher'

export default function NewsPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const { totalCount } = useNewsContext()

  return (
    <div className="mt-50 mb-100">
      <Pagination
        totalPages={totalCount}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
