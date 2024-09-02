import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const WriteReviewButton: React.FC = () => {
  return (
    <button 
      className="w-[180px] h-[60px] rounded-lg bg-main-color flex items-center justify-center"
    >
      <div className="flex items-center gap-2 text-white">
        <span className="leading-[26px] font-medium">리뷰 작성하기</span>
        <FaArrowRight className="ml-2 text-lg" />
      </div>
    </button>
  );
};

export default WriteReviewButton;
