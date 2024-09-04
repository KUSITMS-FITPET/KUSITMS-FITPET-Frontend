import React, { useState } from 'react'
import { usePostReview } from '../../api/reviewwrite'

function ReviewForm() {
  const [petType, setPetType] = useState<string | null>(null)
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState<number | null>(null)

  const { mutate: submitReview, status } = usePostReview()

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const reviewData = {
      petInfo: petType,
      petAge: Number(age),
      petSpecies: breed,
      content: review,
      star: rating || 0, // 별점이 null이면 0을 저장
    }
    submitReview(reviewData)
  }

  // 별점 SVG 이미지
  const starSVG = (
    <svg
      width="70"
      height="65"
      viewBox="0 0 70 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 1L43.34 22.47H65.48L47.57 36.06L55.91 57.53L35 43.94L14.09 57.53L22.43 36.06L4.52 22.47H26.66L35 1Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div className="min-h-screen w-full h-full flex flex-col bg-[#ffffff] justify-start items-center p-8">
      {/* 상단 텍스트와 별점 영역 */}
      <div className="w-full max-w-4xl lg:max-w-6xl bg-[#F4F7FA] p-8 lg:p-16 rounded-md mb-8 lg:mb-16">
        <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8 lg:mb-16">
          스마트커버 인슈어런스에 만족하셨나요?
        </h2>

        {/* 별점 입력 */}
        <div className="flex justify-center mb-6 lg:mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button" // button 타입 명시
              className={`cursor-pointer p-2 lg:p-4 mr-2 lg:mr-4 ${
                rating !== null && rating >= star
                  ? 'text-yellow-400'
                  : 'text-[#9CA3AF]'
              }`}
              onClick={() => setRating(rating === star ? null : star)}
              style={{
                color:
                  rating !== null && rating >= star ? '#FFD700' : '#9CA3AF',
              }}
            >
              {starSVG}
            </button>
          ))}
        </div>
        <p className="text-center text-[#9CA3AF] text-lg lg:text-2xl mb-8 lg:mb-16">
          별점을 선택해주세요
        </p>
      </div>

      {/* 반려동물 정보 및 리뷰 입력 */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl lg:max-w-6xl bg-white p-8 lg:p-16 rounded-md"
      >
        <h3 className="text-lg lg:text-2xl font-semibold mb-4 lg:mb-8 text-black">
          반려동물 정보를 입력해주세요.
        </h3>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mb-6 lg:mb-12">
          <button
            type="button"
            className={`px-8 lg:px-16 py-4 lg:py-8 border ${
              petType === 'dog'
                ? 'bg-[#E2F2FF] text-[#008CFF] border-[#E2F2FF]'
                : 'text-[#008CFF] border-[#D1D5DB]'
            } rounded-md`}
            onClick={() => setPetType('dog')}
          >
            강아지
          </button>
          <button
            type="button"
            className={`px-8 lg:px-16 py-4 lg:py-8 border ${
              petType === 'cat'
                ? 'bg-[#E2F2FF] text-[#008CFF] border-[#E2F2FF]'
                : 'text-[#008CFF] border-[#D1D5DB]'
            } rounded-md`}
            onClick={() => setPetType('cat')}
          >
            고양이
          </button>
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mb-6 lg:mb-12">
          <div className="flex-1">
            <label className="block text-lg lg:text-2xl text-black mb-2 lg:mb-4">
              만 나이를 숫자만 입력해주세요.
            </label>
            <input
              type="text"
              className="w-full border border-[#D1D5DB] rounded-md p-4 text-lg lg:text-2xl text-black"
              placeholder="ex) (만) 3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-lg lg:text-2xl text-black mb-2 lg:mb-4">
              품종
            </label>
            <input
              type="text"
              className="w-full border border-[#D1D5DB] rounded-md p-4 text-lg lg:text-2xl text-black"
              placeholder="품종을 입력하세요"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 lg:mb-12">
          <label className="block text-lg lg:text-2xl font-semibold mb-2 lg:mb-4 text-black">
            리뷰를 작성해주세요.
          </label>
          <textarea
            className="w-full border border-[#D1D5DB] rounded-md p-4 lg:p-8 text-lg lg:text-2xl text-black"
            placeholder="최소 10자 이상 입력해주세요."
            rows={6}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <div className="text-right text-[#D1D5DB] text-sm lg:text-xl">
            {review.length}/1000
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit" // submit 타입 명시
            className="bg-[#F7F8F9] text-[#C5C8CE] px-6 lg:px-16 py-4 lg:py-8 rounded-md hover:bg-blue-600 text-lg lg:text-2xl"
            disabled={
              !petType ||
              !age ||
              !breed ||
              review.length < 10 ||
              status === 'pending'
            }
          >
            {status === 'pending' ? '등록 중...' : '리뷰 등록하기'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
