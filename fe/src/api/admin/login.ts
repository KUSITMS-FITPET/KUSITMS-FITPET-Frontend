import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import http from '@/api/core'
import { ACCESS_TOKEN } from '@/api/constants'
import { useAuthContext } from '@/components/admin/AuthlProvider'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { LoginRequest, LoginResponse } from './type'

export const postLogin = (data: LoginRequest) =>
  http.post<LoginResponse>({
    url: '/api/v1/fitpetAdmin/login',
    data,
  })

export const usePostLogin = (data: LoginRequest) => {
  const { setAuthInfo } = useAuthContext()
  const { push } = useRouter()

  return useMutation({
    mutationKey: ['login'],
    mutationFn: () => postLogin(data),

    onSuccess: ({
      result: {
        accessToken,
        name,
        roleContents,
        roleEstimates,
        roleMaster,
        roleSites,
      },
      isSuccess,
    }) => {
      if (isSuccess) {
        Cookies.set(ACCESS_TOKEN, accessToken)
        setAuthInfo({
          isLoggedIn: true,
          name,
          roleContents,
          roleEstimates,
          roleSites,
          roleMaster,
        })
        push('/admin/quotations')
      } else {
        toast.error('로그인에 실패했어요.')
      }
    },
  })
}
