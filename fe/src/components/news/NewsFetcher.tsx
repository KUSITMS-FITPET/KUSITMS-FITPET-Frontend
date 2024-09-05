import { useGetNews } from '@/pages/api/api'
import { NewsResponse } from '@/pages/api/types'
import { generateContext } from '@/react-utils'
import { ReactNode } from 'react'

export const [NewsProvider, useNewsContext] = generateContext<NewsResponse>({
  name: 'news',
})

export default function NewsFetcher({
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
  const { data } = useGetNews(page, size, option)

  return <NewsProvider {...data}>{children}</NewsProvider>
}
