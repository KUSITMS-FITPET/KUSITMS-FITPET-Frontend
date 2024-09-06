import { generateContext } from '@/react-utils'
import { ReactNode, useState, useMemo } from 'react'
import { QuotationsResponse } from '../type'
import { useGetQuotations } from '../quotations'

export const [QuotationProvider, useQuotationContext] = generateContext<{
  response: QuotationsResponse
  selectedIds: number[]
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>
}>({
  name: 'quotations',
})

export default function QuoationsFetcher({
  children,
  page = 1,
  size,
  option,
}: {
  children: ReactNode
  size: number
  page: number
  option: 'desc' | 'asc'
}) {
  const { data: response } = useGetQuotations(page, size, option)
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const contextValue = useMemo(
    () => ({
      response,
      selectedIds,
      setSelectedIds,
    }),
    [response, selectedIds],
  )

  return <QuotationProvider {...contextValue}>{children}</QuotationProvider>
}
