import React from 'react';
import ReviewItem from './ReviewItem';

const reviews = [
  { title: '말티즈 | 5세', rating: 5, content: 'Lorem ipsum dolor sit amet consectetur.' },
  // 더 많은 리뷰를 여기에 추가
];

const ReviewList: React.FC = () => {
  return (
    <div className="mt-8">
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
