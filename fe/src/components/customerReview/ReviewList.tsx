import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { getReviews, Review } from '../../api/customereview'
import ReviewItem from './ReviewItem'

interface ReviewListProps {
  currentPage: number
  order: 'desc' | '' // 'desc'는 최신순, 빈 문자열 ''은 별점순
  selectedPet: string | null
  onTotalPages: Dispatch<SetStateAction<number>>
}

function ReviewList({
  currentPage,
  order,
  selectedPet,
  onTotalPages,
}: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      setError(null)

      try {
        // order가 빈 문자열이면 별점순으로 처리
        const data = await getReviews(
          currentPage,
          order, // 이제 'desc' 또는 '' 만 전달됨
          selectedPet === 'dog',
          selectedPet === 'cat',
        )
        if (data) {
          setReviews(data.result.listPageResponse)
          onTotalPages(Math.ceil(data.result.totalCount / 9))
        } else {
          setError('리뷰를 불러오는 데 실패했습니다.')
        }
      } catch (e) {
        setError('리뷰를 불러오는 데 실패했습니다.')
      }

      setLoading(false)
    }

    fetchReviews()
  }, [currentPage, order, selectedPet, onTotalPages])

  if (loading) {
    return <p>리뷰 로딩 중...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="review-list">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewItem key={review.reviewId} reviewId={review.reviewId} />
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </div>
  )
}

export default ReviewList
