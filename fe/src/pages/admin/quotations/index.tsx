import QuoationsFetcher from '@/api/admin/Fetcher'
import { QuotationsResponse } from '@/api/admin/type'
import Filtering from '@/components/admin/Filtering'
import QuotationTable from '@/components/admin/QuationTable'
import { AsyncBoundaryWithQuery } from '@/react-utils'
import { useState } from 'react'

export default function QuotationsPage() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<QuotationsResponse>({
    totalCount: 1,
    listPageResponse: [],
    size: 0,
  })
  const [isFiltering, setIsFiltering] = useState(false)
  const [option, setOption] = useState<'desc' | 'asc'>('desc')

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-22 mb-20">견적서 목록 조회</h1>
      <AsyncBoundaryWithQuery>
        <QuoationsFetcher size={13} page={page} option={option}>
          <Filtering
            data={data}
            page={page}
            setPage={setPage}
            setIsFiltering={setIsFiltering}
            setData={setData}
            option={option}
            setOption={setOption}
          />
          <QuotationTable
            isFiltering={isFiltering}
            data={data}
            setData={setData}
          />
        </QuoationsFetcher>
      </AsyncBoundaryWithQuery>
    </div>
  )
}
