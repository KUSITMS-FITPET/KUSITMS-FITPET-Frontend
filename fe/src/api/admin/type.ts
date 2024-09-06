export interface LoginResponse {
  accessToken: string
  name: string
  roleContents: boolean
  roleEstimates: boolean
  roleSites: boolean
  roleMaster: boolean
}

export interface LoginRequest {
  adminId: string
  adminPw: string
}

export interface QuotationInfo {
  estimateId: number
  estimateIP: string
  estimateRefeere: string
  createdAt: string
  petInfo: string
  petName: string
  petSpecies: string
  petAge: number
  moreInfo: string
  phoneNumber: string
  [key: string]: string | number
}

export interface QuotationsResponse {
  listPageResponse: QuotationInfo[]
  totalCount: number
  size: number
}

export type PatchQuotationInfo = Pick<
  QuotationInfo,
  'petInfo' | 'petName' | 'petSpecies' | 'petAge' | 'moreInfo' | 'phoneNumber'
>

export type FilterRequsst = {
  startDate: string
  endDate: string
  refeere: string
  petInfo: string
  phoneNumber: string
}
