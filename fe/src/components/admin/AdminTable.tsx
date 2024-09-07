import { Admin } from '@/api/admin/adminlist'
import { FiPlusCircle, FiTrash2 } from 'react-icons/fi'
import { useState } from 'react'
import Image from 'next/image'

interface AdminTableProps {
  admins: Admin[]
  onDelete: (id: string) => void
  isLoading: boolean
  onAddAdmin: () => void
}

// 함수 선언 방식으로 변경
function AdminTable({
  admins,
  onDelete,
  isLoading,
  onAddAdmin,
}: AdminTableProps) {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {},
  )
  const [selectAll, setSelectAll] = useState(false)

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSelectAll = () => {
    const allChecked = !selectAll
    setSelectAll(allChecked)
    const updatedCheckedItems = admins.reduce(
      (acc, admin) => {
        acc[admin.id] = allChecked
        return acc
      },
      {} as { [key: string]: boolean },
    )
    setCheckedItems(updatedCheckedItems)
  }

  const handleDelete = (id: string) => {
    if (window.confirm('정말로 이 관리자를 삭제하시겠습니까?')) {
      onDelete(id)
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="w-full p-6 mt-6 bg-white">
      <div className="flex justify-between items-center mb-4 p-4 bg-white">
        <div className="text-[#282828] text-sm font-semibold">
          전체 {admins.length}개
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            className="bg-main text-white px-6 py-3 rounded-md flex items-center"
            onClick={onAddAdmin}
          >
            <FiPlusCircle className="text-white" />
            <span>관리자 등록</span>
          </button>
          <button
            type="button"
            className="bg-white text-main border border-main px-6 py-3 rounded-md flex items-center"
            onClick={() => {
              const idsToDelete = Object.keys(checkedItems).filter(
                (id) => checkedItems[id],
              )
              idsToDelete.forEach((id) => handleDelete(id))
              setCheckedItems({})
              setSelectAll(false)
            }}
          >
            <FiTrash2 className="text-main" />
            <span>제거</span>
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-4 px-6 border-b w-16">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="py-4 px-6 border-b text-left">관리자</th>
            <th className="py-4 px-6 border-b text-left">계정 권한</th>
            <th className="py-4 px-6 border-b text-left">등록 일자</th>
            <th className="py-4 px-6 border-b" />
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id} className="border-b">
              <td className="py-4 px-6 w-16">
                <input
                  type="checkbox"
                  checked={checkedItems[admin.id] || false}
                  onChange={() => handleCheckboxChange(admin.id)}
                />
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://via.placeholder.com/60"
                    alt="profile"
                    width={60}
                    height={60}
                    className="w-24 h-24 rounded-full"
                  />
                  <span>{admin.name}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                {admin.roleContents && '콘텐츠 관리, '}
                {admin.roleEstimates && '견적서 관리, '}
                {admin.roleSites && '사이트 관리'}
              </td>
              <td className="py-4 px-6">
                {new Date(admin.createdAt).toLocaleDateString()}{' '}
                {new Date(admin.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td className="py-4 px-6">
                <button
                  type="button"
                  className="text-blue-600 underline"
                  onClick={() => {
                    // 권한 설정 기능 추가
                  }}
                >
                  권한 설정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable
