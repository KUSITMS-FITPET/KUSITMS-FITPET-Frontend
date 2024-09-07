import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'
import AdminTable from '@/components/admin/AdminTable'
import AdminModal from '@/components/admin/AdminListModal'
import {
  fetchAdminList,
  deleteAdmin,
  createAdmin,
  Admin,
  NewAdmin,
} from '@/api/admin/adminlist'

interface JWTPayload {
  role: string
  exp: number
}

// 함수 선언 방식으로 컴포넌트 정의
function AdminManagementPage() {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [admins, setAdmins] = useState<Admin[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    try {
      const decoded: JWTPayload = jwtDecode<JWTPayload>(token)

      // 토큰 만료 확인
      if (decoded.exp < Date.now() / 1000) {
        alert('토큰이 만료되었습니다. 다시 로그인해주세요.')
        localStorage.removeItem('token')
        router.push('/login')
      } else if (decoded.role === 'admin') {
        setIsAuthorized(true)
      } else {
        alert('접근 권한이 없습니다.')
        router.push('/')
      }
    } catch (error) {
      alert('토큰 디코딩 오류가 발생했습니다.')
      router.push('/login')
    }
  }, [router])

  const loadAdmins = async (page: number) => {
    setLoading(true)
    try {
      const data = await fetchAdminList(page)
      const sortedAdmins = data.result.sort(
        (a: Admin, b: Admin) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      setAdmins(sortedAdmins)
      setErrorMessage(null)
    } catch (err) {
      setErrorMessage('Failed to load admins.')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAdmin = async (id: string) => {
    try {
      await deleteAdmin(id)
      loadAdmins(1)
    } catch {
      setErrorMessage('Failed to delete admin.')
    }
  }

  const handleAddAdmin = async (newAdmin: NewAdmin): Promise<boolean> => {
    try {
      await createAdmin(newAdmin)
      setIsAddAdminModalOpen(false)
      loadAdmins(1)
      return true
    } catch {
      setErrorMessage('Failed to add admin.')
      return false
    }
  }

  useEffect(() => {
    if (isAuthorized) {
      loadAdmins(1)
    }
  }, [isAuthorized])

  if (!isAuthorized) {
    return <div>Loading...</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>
  }

  return (
    <>
      <div className="admin-management">
        <h1 className="text-xl font-semibold mb-4">관리자 목록 조회</h1>
        <AdminTable
          admins={admins}
          onDelete={handleDeleteAdmin}
          isLoading={loading}
          onAddAdmin={() => setIsAddAdminModalOpen(true)}
        />
      </div>
      {isAddAdminModalOpen && (
        <AdminModal
          onClose={() => setIsAddAdminModalOpen(false)}
          onSubmit={handleAddAdmin}
        />
      )}
    </>
  )
}

export default AdminManagementPage
