import { useSuspenseQuery } from '@tanstack/react-query'
import { generateContext } from '@/react-utils'
import { ReactNode } from 'react'
import http from '../core'

export interface Url {
  id: number
  value: string
  name: string
  memo: string
}
const getUrl = () =>
  http.get<Array<Url>>({
    url: `/api/v1/fitpetAdmin/url`,
  })

export const useGetUrl = () =>
  useSuspenseQuery({
    queryKey: ['get-quotations'],
    queryFn: () => getUrl(),
    select: ({ result }) => result,
  })

export const [UrlProvider, useUrlContext] = generateContext<{ urls: Url[] }>({
  name: 'FaQ',
})

export default function UrlFetcher({ children }: { children: ReactNode }) {
  const { data } = useGetUrl()

  return <UrlProvider urls={data}>{children}</UrlProvider>
}
