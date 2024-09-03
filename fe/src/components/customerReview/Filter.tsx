interface FilterProps {
  setSelectedPet: (pet: string | null) => void
  setOrder: (order: 'asc' | 'desc') => void
}

function Filter({ setSelectedPet, setOrder }: FilterProps) {
  return (
    <div className="w-[180px] h-auto bg-white p-[16px] pt-[40px] rounded-lg shadow-md">
      <h3 className="font-bold mb-[16px]">필터</h3>
      <div className="flex justify-center mb-[16px]">
        <img
          src="/images/Line.svg"
          alt="Line Divider"
          className="w-[140px] h-[1px]"
        />
      </div>
      <div className="mb-[10px]">
        <h4 className="font-semibold mb-[8px]">반려동물</h4>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            onChange={() => setSelectedPet('dog')}
            className="mr-10"
          />
          <div className="w-[50px] relative text-[16px] leading-[30px] font-medium font-pretendard text-light-gray text-left inline-block">
            강아지
          </div>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            onChange={() => setSelectedPet('cat')}
            className="mr-10"
          />
          <div className="w-[50px] relative text-[16px] leading-[30px] font-medium font-pretendard text-light-gray text-left inline-block">
            고양이
          </div>
        </label>
      </div>
      <div className="flex justify-center mb-[16px]">
        <img
          src="/images/Line.svg"
          alt="Line Divider"
          className="w-[140px] h-[1px]"
        />
      </div>
      <div>
        <h4 className="font-semibold mb-10">정렬</h4>
        <label className="flex items-center mb-10">
          <input
            type="radio"
            name="sortOrder"
            onChange={() => setOrder('desc')}
            className="mr-10"
          />
          최신순
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="sortOrder"
            onChange={() => setOrder('asc')}
            className="mr-10"
          />
          별점순
        </label>
      </div>
    </div>
  )
}

export default Filter
