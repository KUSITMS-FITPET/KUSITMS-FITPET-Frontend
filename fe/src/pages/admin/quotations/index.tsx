import QuoationsFetcher from '@/api/admin/Fetcher'
import Filtering from '@/components/admin/Filtering'
import QuotationTable from '@/components/admin/QuationTable'
import { AsyncBoundaryWithQuery } from '@/react-utils'
import { useState } from 'react'

export default function QuotationsPage() {
  const [page, setPage] = useState(1)

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-22 mb-20">견적서 목록 조회</h1>
      <AsyncBoundaryWithQuery>
        <QuoationsFetcher size={13} page={page} option="desc">
          <Filtering page={page} setPage={setPage} />
          <QuotationTable />
        </QuoationsFetcher>
      </AsyncBoundaryWithQuery>
    </div>
  )
}
