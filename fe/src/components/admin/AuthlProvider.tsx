import { generateContext } from '@/react-utils'
import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react'

interface AuthInfo {
  isLoggedIn: boolean
  name: string
  roleContents: boolean
  roleEstimates: boolean
  roleSites: boolean
  roleMaster: boolean
}
const defaultAuthInfo: AuthInfo = {
  isLoggedIn: false,
  name: '',
  roleContents: false,
  roleEstimates: false,
  roleSites: false,
  roleMaster: false,
}

interface AuthContextProps {
  authInfo: AuthInfo
  setAuthInfo: Dispatch<SetStateAction<AuthInfo>>
}

export const [AuthProvider, useAuthContext] = generateContext<AuthContextProps>(
  {
    name: 'news',
  },
)

export default function AuthProviderWrapper({
  children,
}: {
  children: ReactNode
}) {
  const [authInfo, setAuthInfo] = useState<AuthInfo>(defaultAuthInfo)

  const data = useMemo(
    () => ({
      authInfo,
      setAuthInfo,
    }),
    [authInfo, setAuthInfo],
  )
  return <AuthProvider {...data}>{children}</AuthProvider>
}
