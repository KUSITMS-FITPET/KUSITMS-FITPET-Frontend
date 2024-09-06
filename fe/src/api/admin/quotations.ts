import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import http from '../core'
import { FilterRequsst, QuotationInfo, QuotationsResponse } from './type'

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

export const postFiltering = (
  page: number,
  size: number,
  data: FilterRequsst,
) =>
  http.post<QuotationsResponse>({
    url: '/api/v1/fitpetAdmin/estimates/search',
    params: {
      page,
      size,
    },
    data,
  })

export const usePostFilter = (page: number, size: number) =>
  useMutation({
    mutationKey: ['post-filter', page],
    mutationFn: (data: FilterRequsst) => postFiltering(page, size, data),
  })

const postGetPDF = (id: number) =>
  http.post<string>({
    url: `/api/v1/fitpetAdmin/estimates/convert/${id}`,
  })

export const usePostPDF = () =>
  useMutation({
    mutationKey: ['post-filter'],
    mutationFn: (id: number) => postGetPDF(id),
  })

const postGetExcel = (data: { ids: number[] }) =>
  http.post<string>({
    url: '/api/v1/fitpetAdmin/estimates/export',
    data,
  })

export const useDownloadExcel = () =>
  useMutation({
    mutationKey: ['excel'],
    mutationFn: (ids: number[]) => postGetExcel({ ids }),
  })
