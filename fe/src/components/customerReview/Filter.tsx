import React, { useState } from 'react'
import Image from 'next/image'

function Filter() {
  const [selectedPet, setSelectedPet] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<string>('latest')

  return (
    <div className="w-[180px] h-auto bg-white p-[16px] pt-[40px] rounded-lg shadow-md">
      <h3 className="font-bold mb-[16px]">필터</h3>

      {/* Line SVG Image */}
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
            checked={selectedPet === 'dog'}
            onChange={() =>
              setSelectedPet(selectedPet === 'dog' ? null : 'dog')
            }
            className="mr-10"
          />
          <div className="w-[50px] relative text-[16px] leading-[30px] font-medium font-pretendard text-light-gray text-left inline-block">
            강아지
          </div>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedPet === 'cat'}
            onChange={() =>
              setSelectedPet(selectedPet === 'cat' ? null : 'cat')
            }
            className="mr-10"
          />
          <div className="w-[50px] relative text-[16px] leading-[30px] font-medium font-pretendard text-light-gray text-left inline-block">
            고양이
          </div>
        </label>
      </div>

      {/* Line SVG Image */}
      <div className="flex justify-center mb-[16px]">
        <Image
          src="/images/Line.svg"
          alt="Line Divider"
          width={140}
          height={1}
        />
      </div>

      <div>
        <h4 className="font-semibold mb-10">정렬</h4>
        <label className="flex items-center mb-10">
          <input
            type="radio"
            name="sortOrder"
            checked={sortOrder === 'latest'}
            onChange={() => setSortOrder('latest')}
            className="mr-10"
          />
          최신순
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="sortOrder"
            checked={sortOrder === 'oldest'}
            onChange={() => setSortOrder('oldest')}
            className="mr-10"
          />
          별점순
        </label>
      </div>
    </div>
  )
}

export default Filter
