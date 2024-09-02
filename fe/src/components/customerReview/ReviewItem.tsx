import React from 'react';

interface ReviewItemProps {
  title: string;
  rating: number;
  content: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ title, rating, content }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <div className="flex justify-between">
        <h4 className="font-bold">{title}</h4>
        <span>{'⭐'.repeat(rating)}</span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default ReviewItem;
