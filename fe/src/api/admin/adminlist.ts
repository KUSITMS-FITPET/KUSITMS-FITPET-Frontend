import axios from 'axios'

export interface Admin {
  id: string
  name: string
  roleContents: boolean
  roleEstimates: boolean
  roleSites: boolean
  roleMaster: boolean
  createdAt: string
}

export interface NewAdmin {
  adminId: string
  adminPw: string
  name: string
  roleContents: boolean
  roleEstimates: boolean
  roleSites: boolean
  roleMaster: boolean
  createdAt: string
}

// 관리자 목록 가져오기
export const fetchAdminList = async (page: number = 1) => {
  const token = localStorage.getItem('token') // JWT 토큰
  const response = await axios.get(`/api/v1/fitpetAdmin/master?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// 새로운 관리자 추가
export const createAdmin = async (adminData: NewAdmin) => {
  const token = localStorage.getItem('token') // JWT 토큰
  const response = await axios.post(
    '/api/v1/fitpetAdmin/master/register',
    adminData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
}

// 관리자 삭제
export const deleteAdmin = async (adminId: string) => {
  const token = localStorage.getItem('token') // JWT 토큰
  const response = await axios.delete(`/api/v1/fitpetAdmin/master/${adminId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
