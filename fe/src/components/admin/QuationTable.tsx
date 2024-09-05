/* eslint-disable react/button-has-type */
import { useQuotationContext } from '@/api/admin/Fetcher'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PatchQuotationInfo, QuotationInfo } from '@/api/admin/type'
import { usePatchQuotation } from '@/api/admin/quotations'
import Download from '../common/Icons/Download'

export default function QuotationTable() {
  const { listPageResponse, totalCount } = useQuotationContext()
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [editMode, setEditMode] = useState<number | null>(null)
  const defaultValue = {
    estimateId: 0,
    estimateIP: '',
    estimateRefeere: '',
    createdAt: '',
    petInfo: '',
    petName: '',
    petSpecies: '',
    petAge: 0,
    moreInfo: '',
    phoneNumber: '',
  }
  const [editedData, setEditedData] = useState<QuotationInfo>(defaultValue)
  const [data, setData] = useState<QuotationInfo[]>(listPageResponse)

  useEffect(() => {
    setData(listPageResponse)
  }, [listPageResponse])

  const { mutate } = usePatchQuotation(editedData?.estimateId)

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

  const handleEditClick = (id: number) => {
    const targetData = data.find((item) => item.estimateId === id)
    setEditMode(id)
    setEditedData(targetData || defaultValue)
  }

  const handleInputChange = (
    key: keyof QuotationInfo,
    value: string | number,
  ) => {
    if (editedData) {
      setEditedData((prev) => ({
        ...prev,
        estimateId: prev?.estimateId ?? editedData.estimateId,
        estimateIP: prev?.estimateIP ?? editedData.estimateIP,
        estimateRefeere: prev?.estimateRefeere ?? editedData.estimateRefeere,
        createdAt: prev?.createdAt ?? editedData.createdAt,
        petInfo: prev?.petInfo ?? editedData.petInfo,
        petName: prev?.petName ?? editedData.petName,
        petSpecies: prev?.petSpecies ?? editedData.petSpecies,
        petAge: prev?.petAge ?? editedData.petAge,
        moreInfo: prev?.moreInfo ?? editedData.moreInfo,
        phoneNumber: prev?.phoneNumber ?? editedData.phoneNumber,
        [key]: value,
      }))
    }
  }

  const handleSaveClick = () => {
    if (editedData) {
      const dataToSend: PatchQuotationInfo = {
        petInfo: editedData.petInfo,
        petName: editedData.petName,
        petSpecies: editedData.petSpecies,
        petAge: editedData.petAge,
        moreInfo: editedData.moreInfo,
        phoneNumber: editedData.phoneNumber,
      }
      mutate(dataToSend, {
        onSuccess: () => {
          const updatedData = data.map((item) =>
            item.estimateId === editedData.estimateId ? editedData : item,
          )
          setData(updatedData)
          setEditMode(null)
          setEditedData(defaultValue)
        },
        onError: (error) => {
          alert(`${error}! 다시 시도해주세요.`)
        },
      })
    }
  }

  const columns = [
    { key: 'estimateIP', label: 'IP' },
    { key: 'estimateRefeere', label: '유입 채널' },
    { key: 'createdAt', label: '접수 시간' },
    { key: 'petInfo', label: '종류' },
    { key: 'petName', label: '이름' },
    { key: 'petAge', label: '나이' },
    { key: 'petSpecies', label: '품종' },
    { key: 'moreInfo', label: '특이사항' },
    { key: 'phoneNumber', label: '보호자 연락처' },
    { key: 'action', label: '' },
    { key: 'download', label: '' },
  ]

  return (
    <section className="bg-white h-full rounded-md px-20 py-10">
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
                        {editMode === quotation.estimateId ? (
                          <button
                            className="underline"
                            onClick={handleSaveClick}
                          >
                            저장
                          </button>
                        ) : (
                          <button
                            className="underline"
                            onClick={() =>
                              handleEditClick(quotation.estimateId)
                            }
                          >
                            수정
                          </button>
                        )}
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
                      {editMode === quotation.estimateId &&
                      column.key !== 'estimateIP' &&
                      column.key !== 'estimateRefeere' ? (
                        <input
                          type="text"
                          value={editedData[column.key]}
                          onChange={(e) =>
                            handleInputChange(column.key, e.target.value)
                          }
                          className="border rounded text-center w-full"
                        />
                      ) : (
                        quotation[column.key as keyof typeof quotation]
                      )}
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
