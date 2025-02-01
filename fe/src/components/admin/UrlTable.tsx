import { useState } from 'react'
import { useUrlContext } from '@/api/admin/url'

export default function ChannelTable() {
  const { urls: data } = useUrlContext()
  const [editMode, setEditMode] = useState<number | null>(null)
  const [editedData, setEditedData] = useState(data)

  const handleEditClick = (index: number) => {
    setEditMode(index)
  }

  const handleSaveClick = () => {
    setEditMode(null)
  }

  const handleAddClick = () => {
    const newRow = { id: Date.now(), name: '', value: '', memo: '' }
    setEditedData([...editedData, newRow])
    setEditMode(editedData.length)
  }

  const handleInputChange = (index: number, key: string, value: string) => {
    const updatedData = [...editedData]
    updatedData[index] = { ...updatedData[index], [key]: value }
    setEditedData(updatedData)
  }

  return (
    <section className="bg-white h-full rounded-md px-20 py-10">
      <div className="overflow-x-auto">
        <section className="flex justify-between items-center w-full mb-4">
          <p className="font-semibold">전체 {editedData.length}개</p>
          <button
            type="button"
            className="bg-main text-white px-10 py-2 rounded-md"
            onClick={handleAddClick}
          >
            추가
          </button>
        </section>

        <table className="w-full bg-white text-sm">
          <thead>
            <tr>
              <th className="px-4 py-4 border-b border-gray-300 text-center">
                Channel Name
              </th>
              <th className="px-4 py-4 border-b border-gray-300 text-center">
                Landing Page URL
              </th>
              <th className="px-4 py-4 border-b border-gray-300 text-center">
                Memo
              </th>
              <th className="px-4 py-4 border-b border-gray-300 text-center" />
            </tr>
          </thead>
          <tbody>
            {editedData.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  데이터가 없습니다
                </td>
              </tr>
            ) : (
              editedData.map((row, index) => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 border-b border-gray-300 text-center">
                    {editMode === index ? (
                      <input
                        type="text"
                        value={row.name}
                        onChange={(e) =>
                          handleInputChange(index, 'name', e.target.value)
                        }
                        className="border rounded w-full text-center"
                      />
                    ) : (
                      row.name
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 text-center">
                    {editMode === index ? (
                      <input
                        type="text"
                        value={row.value}
                        onChange={(e) =>
                          handleInputChange(index, 'value', e.target.value)
                        }
                        className="border rounded w-full text-center"
                      />
                    ) : (
                      <a
                        href={row.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {row.value}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 text-center">
                    {editMode === index ? (
                      <input
                        type="text"
                        value={row.memo}
                        onChange={(e) =>
                          handleInputChange(index, 'memo', e.target.value)
                        }
                        className="border rounded w-full text-center"
                      />
                    ) : (
                      row.memo
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 text-center">
                    {editMode === index ? (
                      <button
                        type="button"
                        className="underline text-blue-500"
                        onClick={handleSaveClick}
                      >
                        저장
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="underline text-blue-500"
                        onClick={() => handleEditClick(index)}
                      >
                        수정
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
