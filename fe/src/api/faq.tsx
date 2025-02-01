import { useSuspenseQuery } from '@tanstack/react-query'
import { generateContext } from '@/react-utils'
import { ReactNode } from 'react'
import http from './core'

export interface FaQ {
  categories: { id: number; name: string }[]
  faqs: { categoryId: number; question: string; answer: string }[]
}

export const getFaQ = () =>
  http.get<FaQ>({
    url: `/api/v1/faqs`,
  })

export const useGetFaQ = () =>
  useSuspenseQuery({
    queryKey: ['get-faq'],
    queryFn: () => getFaQ(),
    select: ({ result }) => result,
  })

export const [FaQProvider, useFaQContext] = generateContext<FaQ>({
  name: 'FaQ',
})

export default function FaQFetcher({ children }: { children: ReactNode }) {
  const { data } = useGetFaQ()

  return <FaQProvider {...data}>{children}</FaQProvider>
}
