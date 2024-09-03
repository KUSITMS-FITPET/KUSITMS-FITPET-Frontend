import { useMutation } from '@tanstack/react-query'
import http from './core'

export type Quotation = {
  petName: string
  petSpecies: string
  petInfo: 'dog' | 'cat'
  petAge: number
  phoneNumber: string
  moreInfo: string
  agreement: true
}

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
