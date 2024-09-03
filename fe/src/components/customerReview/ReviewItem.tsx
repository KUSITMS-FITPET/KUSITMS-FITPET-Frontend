import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { getReviewById } from '../../api/customereview'

interface ReviewItemProps {
  reviewId: number
}

interface ReviewData {
  petSpecies: string
  petInfo: string
  petAge: number
  star: number
  content: string
  localDateTime: string
}

function ReviewItem({ reviewId }: ReviewItemProps) {
  const [review, setReview] = useState<ReviewData | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false) // 텍스트가 3줄을 초과하는지 확인하는 상태
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getReviewById(reviewId)
        if (data.isSuccess) {
          setReview(data.result)
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to fetch review:', error)
        }
      }
    }

    fetchReview()
  }, [reviewId])

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight
      const lineHeight = parseFloat(
        window.getComputedStyle(contentRef.current).lineHeight,
      )
      const maxHeight = lineHeight * 3 // 3줄 높이 계산
      setIsOverflowing(contentHeight > maxHeight)
      contentRef.current.style.height = isExpanded
        ? `${contentHeight}px`
        : `${maxHeight}px`
    }
  }, [isExpanded, review])

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  if (!review) {
    return <div>Loading...</div>
  }

  return (
    <div
      className="relative bg-white p-6 rounded shadow-md mb-4 transition-all duration-300 ease-in-out"
      style={{ minHeight: '160px' }}
    >
      <div className="flex items-center bg-[#E2F2FF] p-2 rounded">
        <span className="text-yellow-500 mr-4">{'⭐'.repeat(review.star)}</span>
        <h4 className="font-bold text-[#0093FF]">
          {review.petSpecies} | 만 {review.petAge}세
        </h4>
      </div>
      <p
        ref={contentRef}
        className="mt-6 text-[#4A4A4A] overflow-hidden transition-all duration-300 ease-in-out text-left"
        style={{ lineHeight: '1.6', padding: '0 10px' }} // 텍스트 간격 및 패딩 설정
      >
        {review.content}
      </p>
      {isOverflowing && (
        <div className="absolute right-4 bottom-2">
          {' '}
          {/* 더보기 버튼의 위치를 조금 더 하단으로 */}
          <button
            type="button"
            onClick={handleToggleExpand}
            className="p-0"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              backgroundColor: 'transparent', // 배경 투명
              borderRadius: '50%',
              boxShadow: 'none', // 그림자 제거
            }}
          >
            <Image
              src="/images/add.svg"
              alt="더보기"
              width={24}
              height={24}
              className={`cursor-pointer transform transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default ReviewItem
