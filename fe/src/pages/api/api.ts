import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import http from './core'
import { NewsResponse, Quotation } from './types'

export const postQuotation = (quotation: Quotation) =>
  http.post<string>({
    url: '/api/v1/estimates',
    data: quotation,
  })

export const usePostQuotation = () =>
  useMutation({
    mutationKey: ['post-quotation'],
    mutationFn: (data: Quotation) => postQuotation(data),
  })

export const getNews = (page: number, size: number, options = 'desc') =>
  http.get<NewsResponse>({
    url: `/api/v1/cardNews/${options}`,
    params: {
      page,
      size,
    },
  })

export const useGetNews = (page: number, size: number, options: string) =>
  useSuspenseQuery({
    queryKey: ['get-news', page, options],
    queryFn: () => getNews(page, size, options),
    select: ({ result }) => result,
  })
