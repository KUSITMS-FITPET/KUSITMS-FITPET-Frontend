import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

// Review 데이터 타입 정의
export interface ReviewData {
  petInfo: string | null
  petAge: number
  petSpecies: string
  content: string
  star: number
}

// 리뷰 작성 API 호출 함수
export const postReview = async (reviewData: ReviewData) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reviews`,
    reviewData,
  )
  return response.data
}
