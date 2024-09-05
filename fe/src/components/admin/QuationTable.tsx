/* eslint-disable react/button-has-type */
import { useQuotationContext } from '@/api/admin/Fetcher'
import Image from 'next/image'
import { useState } from 'react'
import Download from '../common/Icons/Download'

export default function QuotationTable() {
  const { listPageResponse: data, totalCount } = useQuotationContext()
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleCheckboxChange = (id: number) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id],
    )
  }

  const handleSelectAll = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([])
    } else {
      const allIds = data.map((item) => item.estimateId)
      setSelectedIds(allIds)
    }
  }
  const columns = [
    { key: 'estimateIP', label: 'IP' },
    { key: 'estimateRefeere', label: '유입 채널' },
    { key: 'createdAt', label: '접수 일자' },
    { key: 'petSpecies', label: '품종' },
    { key: 'petName', label: '이름' },
    { key: 'petInfo', label: '종류' },
    { key: 'petAge', label: '나이' },
    { key: 'moreInfo', label: '특이사항' },
    { key: 'phoneNumber', label: '보호자 연락처' },
    { key: 'action', label: '' },
    { key: 'download', label: '' },
  ]

  return (
    <section className="bg-white h-full rounded-md p-20">
      <div className="overflow-x-auto">
        <section className="flex justify-between mb-13">
          <p className="font-semibold">전체 {totalCount}개</p>
          <button className="underline" type="button">
            <Image
              src="/images/download-button.svg"
              height={15}
              width={170}
              alt="button"
            />
          </button>
        </section>

        <table className="w-full bg-white text-14">
          <thead>
            <tr>
              <th className="px-4 py-4 border-b border-[#D1D5DB] text-center">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedIds.length === data.length && data.length > 0
                  }
                />
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-4 border-b border-[#D1D5DB] text-center"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((quotation) => (
              <tr key={quotation.estimateId}>
                <td className="px-4 py-2 border-b border-[#D1D5DB] text-center">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(quotation.estimateId)}
                    checked={selectedIds.includes(quotation.estimateId)}
                  />
                </td>
                {columns.map((column) => {
                  if (column.key === 'action') {
                    return (
                      <td
                        key={column.key}
                        className="px-4 py-2 border-b border-[#D1D5DB] text-center"
                      >
                        <button className="underline">수정</button>
                      </td>
                    )
                  }
                  if (column.key === 'download') {
                    return (
                      <td
                        key={column.key}
                        className="px-4 py-2 border-b border-[#D1D5DB] flex justify-center"
                      >
                        <button className="">
                          <Download width={25} />
                        </button>
                      </td>
                    )
                  }
                  if (column.key === 'createdAt') {
                    return (
                      <td
                        key={column.key}
                        className="px-4 py-2 border-b max-w-[150px] break-words border-[#D1D5DB] text-center"
                      >
                        {new Date(quotation[column.key]).toLocaleString(
                          'ko-KR',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          },
                        )}
                      </td>
                    )
                  }
                  return (
                    <td
                      key={column.key}
                      className="px-4 py-4 border-b max-w-[100px] break-words border-[#D1D5DB] text-center truncate"
                      style={{
                        maxHeight: '3em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {quotation[column.key as keyof typeof quotation]}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
