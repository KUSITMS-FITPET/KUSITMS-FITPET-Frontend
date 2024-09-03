import React from 'react'
import ReviewItem from './ReviewItem'

const reviews = [
  {
    id: 1,
    title: '말티즈 | 5세',
    rating: 5,
    content: 'Lorem ipsum dolor sit amet consectetur.',
  },
  // 더 많은 리뷰를 여기에 추가
]

function ReviewList() {
  return (
    <div className="mt-8">
      {reviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </div>
  )
}

export default ReviewList
