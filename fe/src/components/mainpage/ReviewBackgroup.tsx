import React from 'react'

function ReviewBackground() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: "url('/images/review.svg')", // 배경 이미지 설정
        backgroundSize: 'cover', // 화면을 채우되, 비율이 깨지지 않도록 처리
        backgroundPosition: 'center', // 배경 이미지 가운데 정렬
        backgroundRepeat: 'no-repeat', // 배경 이미지 반복 없음
      }}
    />
  )
}

export default ReviewBackground
