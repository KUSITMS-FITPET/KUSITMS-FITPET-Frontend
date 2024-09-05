import React, { useState } from 'react'
import Image from 'next/image' // Next.js의 Image 컴포넌트 사용

interface FilterProps {
  setSelectedPet: (pet: string | null) => void
  setOrder: (order: 'asc' | 'desc') => void
}

function Filter({ setSelectedPet, setOrder }: FilterProps) {
  const [selectedPets, setSelectedPets] = useState<string[]>([])
  const [selectedOrder, setSelectedOrder] = useState<'asc' | 'desc'>('desc') // 최신순 기본값

  const handlePetChange = (pet: string) => {
    if (selectedPets.includes(pet)) {
      const newSelectedPets = selectedPets.filter((p) => p !== pet)
      setSelectedPets(newSelectedPets)
      setSelectedPet(
        newSelectedPets.length > 0 ? newSelectedPets.join(',') : null,
      )
    } else {
      const newSelectedPets = [...selectedPets, pet]
      setSelectedPets(newSelectedPets)
      setSelectedPet(newSelectedPets.join(','))
    }
  }

  const handleOrderChange = (order: 'asc' | 'desc') => {
    setSelectedOrder(order) // 선택된 정렬 기준 상태 업데이트
    setOrder(order) // 부모 컴포넌트로 선택된 정렬 방식 전달
  }

  return (
    <div className="w-full md:w-[180px] h-auto bg-white p-[16px] pt-[40px] rounded-lg shadow-md mt-8 md:mt-40">
      <h3 className="font-bold mb-[16px]">필터</h3>
      <div className="flex justify-center mb-[16px]">
        <Image
          src="/images/Line.svg"
          alt="Line Divider"
          width={140}
          height={1}
        />
      </div>
      <div className="mb-[10px]">
        <h4 className="font-semibold mb-[8px]">반려동물</h4>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedPets.includes('dog')}
            onChange={() => handlePetChange('dog')}
            className="mr-2 md:mr-10"
          />
          <div className="w-[50px] text-[14px] md:text-[16px] leading-[30px] font-medium text-light-gray">
            강아지
          </div>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedPets.includes('cat')}
            onChange={() => handlePetChange('cat')}
            className="mr-2 md:mr-10"
          />
          <div className="w-[50px] text-[14px] md:text-[16px] leading-[30px] font-medium text-light-gray">
            고양이
          </div>
        </label>
      </div>
      <div className="flex justify-center mb-[16px]">
        <Image
          src="/images/Line.svg"
          alt="Line Divider"
          width={140}
          height={1}
        />
      </div>
      <div>
        <h4 className="font-semibold mb-4 md:mb-10">정렬</h4>
        <label className="flex items-center mb-4 md:mb-10">
          <input
            type="radio"
            name="sortOrder"
            checked={selectedOrder === 'desc'} // 최신순이 디폴트로 선택됨
            onChange={() => handleOrderChange('desc')}
            className="mr-2 md:mr-10"
          />
          최신순
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="sortOrder"
            checked={selectedOrder === 'asc'} // 별점순이 선택되었을 때만 체크됨
            onChange={() => handleOrderChange('asc')}
            className="mr-2 md:mr-10"
          />
          별점순
        </label>
      </div>
    </div>
  )
}

export default Filter
