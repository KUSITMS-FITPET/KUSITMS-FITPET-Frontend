export interface BaseResponse<T> {
  code: number
  message: string
  result: T
}

export type Quotation = {
  petName: string
  petSpecies: string
  petInfo: '강아지' | '고양이'
  petAge: number
  phoneNumber: string
  moreInfo: string
  agreement: true
}

export type NewsResponse = {
  listPageResponse: Array<{
    cardNewsId: number
    cardNewsTitle: string
    cardNewsContent: string
    image_url: string
  }>
  totalCount: number
  size: number
}
