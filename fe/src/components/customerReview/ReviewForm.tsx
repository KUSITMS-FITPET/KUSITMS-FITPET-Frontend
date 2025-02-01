import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { postReview } from '../../api/reviewwrite'
import ReviewModal from './ReviewModal'

function ReviewForm() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog') // Default to 'dog'
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState<number>(1) // 기본 별점 1로 설정
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reviewDate, setReviewDate] = useState<string | null>(null)
  const router = useRouter()

  const handleCloseModal = () => {
    setIsModalOpen(false)
    router.push('/customerReview')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('pending')

    const reviewData = {
      petInfo: petType,
      petAge: Number(age),
      petSpecies: breed,
      content: review,
      star: rating,
    }

    try {
      await postReview(reviewData)
      setStatus('success')

      const currentDate = new Date().toISOString().slice(0, 10)
      setReviewDate(currentDate)

      setIsModalOpen(true)
    } catch (error) {
      setStatus('error')
      alert('리뷰 등록에 실패했습니다.')
    }
  }

  return (
    <div className="min-h-screen w-full h-full flex flex-col bg-[#ffffff] justify-start items-center p-8">
      {isModalOpen && reviewDate && (
        <ReviewModal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">
            고객님의 소중한 리뷰가 등록되었어요!
          </h2>
          <p className="text-lg">작성일자: {reviewDate}</p>
          <button
            type="button"
            className="mt-40 text-white rounded-md hover:bg-[#007BFF] transition"
            style={{
              backgroundColor: '#008CFF',
              fontSize: '1rem',
              padding: '12px 200px',
            }}
            onClick={handleCloseModal}
          >
            네, 확인했어요
          </button>
        </ReviewModal>
      )}

      <div className="w-full bg-[#F4F7FA] p-8 lg:p-40 rounded-md mb-12 lg:mb-20">
        <h2 className="text-center text-lg lg:text-xl font-normal mb-8 lg:mb-12">
          스마트커버 인슈어런스에 만족하셨나요?
        </h2>

        <div className="flex justify-center mb-8 lg:mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`cursor-pointer p-2 lg:p-3 mr-4 lg:mr-6 ${
                rating >= star ? 'text-yellow-400' : 'text-[#9CA3AF]'
              }`}
              onClick={() => setRating(star)} // null 제거
              style={{
                color: rating >= star ? '#FFD700' : '#9CA3AF',
              }}
            >
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
            </button>
          ))}
        </div>
        <p className="text-center text-[#9CA3AF] text-sm lg:text-lg mb-8 lg:mb-12">
          별점을 선택해주세요
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl lg:max-w-6xl bg-white p-8 lg:p-12 rounded-md"
        style={{ marginTop: '50px' }}
      >
        <h3 className="text-lg lg:text-xl font-semibold mb-8 lg:mb-12 text-black">
          반려동물 정보를 입력해주세요.
        </h3>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mb-8 lg:mb-12">
          <button
            type="button"
            className={`px-16 lg:px-32 py-4 lg:py-8 border text-md lg:text-lg ${
              petType === 'dog'
                ? 'bg-[#E2F2FF] text-[#008CFF] border-[#E2F2FF]'
                : 'text-[#008CFF] border-[#9CA3AF]'
            } rounded-md`}
            onClick={() => setPetType('dog')}
            style={{ width: '30%' }}
          >
            강아지
          </button>
          <button
            type="button"
            className={`px-16 lg:px-32 py-4 lg:py-8 border text-md lg:text-lg ${
              petType === 'cat'
                ? 'bg-[#E2F2FF] text-[#008CFF] border-[#E2F2FF]'
                : 'text-[#008CFF] border-[#9CA3AF]'
            } rounded-md`}
            onClick={() => setPetType('cat')}
            style={{ width: '30%' }}
          >
            고양이
          </button>
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mb-8 lg:mb-12">
          <div className="flex-1">
            <label className="block text-lg lg:text-xl text-black mb-4 lg:mb-6">
              나이를 입력해주세요.
            </label>
            <input
              type="number"
              className="w-full border border-[#9ca3af] rounded-md p-4 lg:p-6 text-lg lg:text-xl text-black placeholder-[#9CA3AF]"
              placeholder="나이는 숫자만 입력 가능합니다."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-lg lg:text-xl text-black mb-4 lg:mb-6">
              품종
            </label>
            <input
              type="text"
              className="w-full border border-[#9ca3af] rounded-md p-4 lg:p-6 text-lg lg:text-xl text-black placeholder-[#9CA3AF]"
              placeholder="품종을 입력하세요"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-8 lg:mb-12">
          <label className="block text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-black">
            리뷰를 작성해주세요.
          </label>
          <textarea
            className="w-full border border-[#9ca3af] rounded-md p-4 lg:p-6 text-lg lg:text-xl text-black placeholder-[#9CA3AF]"
            placeholder="최소 10자 이상 입력해주세요."
            rows={6}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength={1000}
          />
          <div className="text-right text-[#9CA3AF] text-lg lg:text-xl">
            {review.length}/1000
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`${
              !petType ||
              !age ||
              !breed ||
              review.length < 10 ||
              status === 'pending'
                ? 'bg-gray-400'
                : 'bg-[#008CFF] hover:bg-[#0056b3]'
            } text-white px-16 lg:px-32 py-4 lg:py-8 rounded-md text-lg lg:text-xl`}
            disabled={
              !petType ||
              !age ||
              !breed ||
              review.length < 10 ||
              status === 'pending'
            }
            style={{ width: '50%' }}
          >
            {status === 'pending' ? '등록 중...' : '리뷰 등록하기'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
