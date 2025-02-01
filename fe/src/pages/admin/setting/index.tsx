import { useState, useEffect } from 'react'
import AdminTable from '@/components/admin/AdminTable'
import AdminModal from '@/components/admin/AdminListModal'
import {
  fetchAdminList,
  deleteAdmin,
  createAdmin,
  Admin,
  NewAdmin,
} from '@/api/admin/adminlist'
import { useAuthContext } from '@/components/admin/AuthlProvider'

function AdminManagementPage() {
  const { authInfo } = useAuthContext()
  const [admins, setAdmins] = useState<Admin[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false)

  // ✅ loadAdmins 함수 먼저 선언 후 useEffect에서 호출
  const loadAdmins = async (page: number = 1) => {
    setLoading(true)
    try {
      const data = await fetchAdminList(page)
      const sortedAdmins = data.sort(
        (a: Admin, b: Admin) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      setAdmins(sortedAdmins)
      setErrorMessage(null)
    } catch (err) {
      setErrorMessage('관리자 목록을 불러오지 못했습니다.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAdmins()
  }, []) // ✅ useEffect 내부에서 loadAdmins 호출

  const handleDeleteAdmin = async (id: string) => {
    try {
      await deleteAdmin(id, authInfo.roleMaster)
      loadAdmins()
    } catch {
      setErrorMessage('관리자를 삭제하지 못했습니다.')
    }
  }

  const handleAddAdmin = async (newAdmin: NewAdmin): Promise<boolean> => {
    try {
      await createAdmin(newAdmin, authInfo.roleMaster)
      setIsAddAdminModalOpen(false)
      loadAdmins()
      return true
    } catch {
      setErrorMessage('새 관리자를 추가하지 못했습니다.')
      return false
    }
  }

  if (loading) {
    return <div>로딩 중...</div>
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
