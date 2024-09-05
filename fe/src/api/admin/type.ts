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
}

export interface QuotationsResponse {
  listPageResponse: QuotationInfo[]
  totalCount: number
  size: number
}
