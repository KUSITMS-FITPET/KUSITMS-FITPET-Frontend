import React, { useState, useEffect, useRef } from 'react'
import { getReviewById, Review } from '@/api/customereview'

interface ReviewItemProps {
  reviewId: number
}

function ReviewItem({ reviewId }: ReviewItemProps) {
  const [review, setReview] = useState<Review | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getReviewById(reviewId)
        if (data && data.isSuccess) {
          setReview(data.result)
        } else {
          setReview(null)
        }
      } catch (error) {
        console.error('Failed to fetch review:', error)
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
      const maxHeight = lineHeight * 3
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
      <div className="flex items-center bg-[#E2F2FF] p-6 rounded justify-between">
        <div className="flex items-center">
          <h4 className="font-bold text-[#0093FF] mr-4">
            {review.petSpecies} | 만 {review.petAge}세
          </h4>
          <span className="text-yellow-500">{'⭐'.repeat(review.star)}</span>
        </div>
      </div>

      <p
        ref={contentRef}
        className="mt-6 text-[#4A4A4A] overflow-hidden transition-all duration-300 ease-in-out text-left"
        style={{ lineHeight: '1.6', padding: '0 10px' }}
      >
        {review.content}
      </p>
      {isOverflowing && (
        <div className="absolute right-4 bottom-2">
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
              backgroundColor: 'transparent',
              borderRadius: '50%',
              boxShadow: 'none',
            }}
          >
            <img
              src="/images/add.svg"
              alt="더보기"
              width={24}
              height={24}
              className={`cursor-pointer transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default ReviewItem
