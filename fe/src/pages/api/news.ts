import http from './core'

export type NewsResponse = {
  listPageResponse: [
    {
      cardNewsId: number
      cardNewsTitle: string
      cardNewsContent: string
      image_url: string
    },
  ]
  totalCount: number
  size: number
}

export const getNews = () =>
  http.get<NewsResponse>({
    url: '/api/v1/cardNews/desc',
  })
