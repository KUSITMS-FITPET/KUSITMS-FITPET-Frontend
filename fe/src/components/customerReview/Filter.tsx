interface FilterProps {
  setSelectedPet: (pet: string | null) => void
  setOrder: (order: 'asc' | 'desc') => void
}

function Filter({ setSelectedPet, setOrder }: FilterProps) {
  return (
    <div className="w-full md:w-[180px] h-auto bg-white p-[16px] pt-[40px] rounded-lg shadow-md mt-8 md:mt-40">
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
            className="mr-2 md:mr-10"
          />
          <div className="w-[50px] text-[14px] md:text-[16px] leading-[30px] font-medium text-light-gray">
            강아지
          </div>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            onChange={() => setSelectedPet('cat')}
            className="mr-2 md:mr-10"
          />
          <div className="w-[50px] text-[14px] md:text-[16px] leading-[30px] font-medium text-light-gray">
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
        <h4 className="font-semibold mb-4 md:mb-10">정렬</h4>
        <label className="flex items-center mb-4 md:mb-10">
          <input
            type="radio"
            name="sortOrder"
            onChange={() => setOrder('desc')}
            className="mr-2 md:mr-10"
          />
          최신순
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="sortOrder"
            onChange={() => setOrder('asc')}
            className="mr-2 md:mr-10"
          />
          별점순
        </label>
      </div>
    </div>
  )
}

export default Filter
