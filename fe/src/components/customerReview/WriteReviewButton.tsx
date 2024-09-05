import React from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowRight } from 'react-icons/fa'

function WriteReviewButton() {
  const { push } = useRouter()

  const handleClick = () => {
    push('/customerReview/reviewWrite')
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full md:w-[180px] h-[60px] rounded-lg bg-main-color flex items-center justify-center"
    >
      <div className="flex items-center gap-2 text-white">
        <span className="leading-[26px] font-medium">리뷰 작성하기</span>
        <FaArrowRight className="ml-2 text-lg" />
      </div>
    </button>
  )
}

export default WriteReviewButton
