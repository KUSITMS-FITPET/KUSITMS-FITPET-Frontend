import AuthProviderWrapper from '@/components/admin/AuthlProvider'
import Login from '@/components/admin/Login'

export default function AdminPage() {
  return (
    <AuthProviderWrapper>
      <Login />
    </AuthProviderWrapper>
  )
}
