import React, { useState, useEffect } from 'react'
import ReviewItem from './ReviewItem'
import { getReviews } from '../../api/customereview'

interface Review {
  reviewId: number
  petSpecies: string
  petInfo: string
  petAge: number
  star: number
  content: string
  createdAt: string
  localDateTime: string // localDateTime 필드 추가
}

interface ReviewListProps {
  currentPage: number
  order: 'asc' | 'desc'
  selectedPet: string | null
}

function ReviewList({ currentPage, order, selectedPet }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(currentPage, order)
        if (data.isSuccess) {
          const filteredReviews = data.result.listPageResponse.filter(
            (review: Review) =>
              !selectedPet || review.petSpecies.toLowerCase() === selectedPet,
          )
          setReviews(filteredReviews)
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
      }
    }

    fetchReviews()
  }, [currentPage, order, selectedPet])

  return (
    <div className="flex flex-col gap-30">
      {reviews.map((review) => (
        <ReviewItem key={review.reviewId} reviewId={review.reviewId} />
      ))}
    </div>
  )
}

export default ReviewList
