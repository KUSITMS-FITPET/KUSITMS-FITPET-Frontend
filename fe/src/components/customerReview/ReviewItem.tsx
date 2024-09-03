import React, { useState, useEffect } from 'react'
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

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  if (!review) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <div className="flex items-center bg-[#E2F2FF] p-2 rounded">
        <span className="text-yellow-500 mr-2">{'⭐'.repeat(review.star)}</span>
        <h4 className="font-bold">
          {review.petSpecies} {review.petInfo}, 만 {review.petAge}세
        </h4>
      </div>
      <p className={`mt-2 ${!isExpanded ? 'line-clamp-3' : ''}`}>
        {review.content}
      </p>
      {review.content.split('\n').length > 3 && (
        <button
          type="button" // 버튼의 타입을 명시
          onClick={handleToggleExpand}
          className="text-blue-500 mt-2"
        >
          {isExpanded ? '접기' : '펼치기'}
        </button>
      )}
    </div>
  )
}

export default ReviewItem
