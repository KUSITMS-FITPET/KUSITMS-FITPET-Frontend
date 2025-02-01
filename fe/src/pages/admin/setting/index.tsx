import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminTable from '@/components/admin/AdminTable';
import AdminModal from '@/components/admin/AdminListModal';
import { fetchAdminList, deleteAdmin, createAdmin, Admin, NewAdmin } from '@/api/admin/adminlist';
import { useAuthContext } from '@/components/admin/AuthlProvider';

function AdminManagementPage() {
  const router = useRouter();
  const { authInfo } = useAuthContext(); // AuthContext에서 권한 정보 가져오기
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);

  useEffect(() => {
    loadAdmins(1); // 페이지가 로드될 때 관리자 목록을 가져옵니다.
  }, []);

  const loadAdmins = async (page: number) => {
    setLoading(true);
    try {
      const data = await fetchAdminList(page); // roleMaster 전달하지 않음
      const sortedAdmins = data.sort(
        (a: Admin, b: Admin) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      setAdmins(sortedAdmins);
      setErrorMessage(null);
    } catch (err) {
      setErrorMessage('Failed to load admins.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAdmin = async (id: string) => {
    try {
      await deleteAdmin(id, authInfo.roleMaster); // authInfo.roleMaster 전달
      loadAdmins(1);
    } catch {
      setErrorMessage('Failed to delete admin.');
    }
  };

  const handleAddAdmin = async (newAdmin: NewAdmin): Promise<boolean> => {
    try {
      await createAdmin(newAdmin, authInfo.roleMaster); // authInfo.roleMaster 전달
      setIsAddAdminModalOpen(false);
      loadAdmins(1);
      return true;
    } catch {
      setErrorMessage('Failed to add admin.');
      return false;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
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
  );
}

export default AdminManagementPage;
