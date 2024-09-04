import React, { useState, useEffect } from 'react'
import { getReviews, Review } from '../../api/customereview'
import ReviewItem from './ReviewItem'

interface ReviewListProps {
  currentPage: number
  order: 'asc' | 'desc'
  selectedPet: string | null
  onTotalPages: (totalPages: number) => void
}

function ReviewList({
  currentPage,
  order,
  selectedPet,
  onTotalPages,
}: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(currentPage, order)
        if (data.isSuccess) {
          const filteredReviews = data.result.listPageResponse.filter(
            (review) =>
              !selectedPet ||
              review.petSpecies.toLowerCase() === selectedPet?.toLowerCase(),
          )
          setReviews(filteredReviews)
          onTotalPages(Math.ceil(data.result.totalCount / data.result.size))
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
      }
    }

    fetchReviews()
  }, [currentPage, order, selectedPet, onTotalPages])

  return (
    <div className="flex flex-col gap-4">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewItem key={review.reviewId} reviewId={review.reviewId} />
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  )
}

export default ReviewList
