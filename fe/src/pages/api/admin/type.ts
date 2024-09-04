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
