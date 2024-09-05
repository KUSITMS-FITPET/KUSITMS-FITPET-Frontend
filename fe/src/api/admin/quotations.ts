import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import http from '../core'
import { QuotationInfo, QuotationsResponse } from './type'

const getQuotations = (page: number, size: number, options = 'desc') =>
  http.get<QuotationsResponse>({
    url: `/api/v1/fitpetAdmin/estimates/${options}`,
    params: {
      page,
      size,
    },
  })

export const useGetQuotations = (page: number, size: number, options: string) =>
  useSuspenseQuery({
    queryKey: ['get-quotations', page, options],
    queryFn: () => getQuotations(page, size, options),
    select: ({ result }) => result,
  })

const patchQuotation = (estimateId: number, data: Partial<QuotationInfo>) =>
  http.patch<string>({
    url: `/api/v1/fitpetAdmin/estimates/${estimateId}`,
    data,
  })

export const usePatchQuotation = (estimateId: number = 1) =>
  useMutation({
    mutationKey: ['patch-quotation', estimateId],
    mutationFn: (data: Partial<QuotationInfo>) =>
      patchQuotation(estimateId, data),
  })
