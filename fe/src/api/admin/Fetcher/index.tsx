import { generateContext } from '@/react-utils'
import { ReactNode } from 'react'
import { QuotationsResponse } from '../type'
import { useGetQuotations } from '../quotations'

export const [QuotationProvider, useQuotationContext] =
  generateContext<QuotationsResponse>({
    name: 'quotations',
  })

export default function QuoationsFetcher({
  children,
  page = 1,
  size = 9,
  option,
}: {
  children: ReactNode
  size?: number
  page: number
  option: 'desc' | 'asc'
}) {
  const { data } = useGetQuotations(page, size, option)

  return <QuotationProvider {...data}>{children} </QuotationProvider>
}
