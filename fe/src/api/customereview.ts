import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export interface Review {
  reviewId: number
  petSpecies: string
  petInfo: string
  petAge: number
  star: number
  content: string
  createdAt: string
}

export interface ReviewListResponse {
  isSuccess: boolean
  result: {
    listPageResponse: Review[]
    totalCount: number
    size: number
  }
}

export interface ReviewResponse {
  isSuccess: boolean
  result: Review
}

// 리뷰 목록을 가져오는 함수
export const getReviews = async (
  page: number,
  order: 'desc' | '', // desc = 최신순, 빈 문자열 = 별점순
  dog: boolean,
  cat: boolean,
): Promise<ReviewListResponse | null> => {
  try {
    const response = await axios.post<ReviewListResponse>(
      `${API_BASE_URL}/api/v1/reviews/filter`,
      {
        dog,
        cat,
        orderBy: order === 'desc' ? 'desc' : 'asc', // 백엔드가 기대하는 형태로 orderBy 전달
      },
      {
        params: { page, size: 9 }, // 페이지와 사이즈는 쿼리 파라미터로 전달
      },
    )

    if (response.data.isSuccess) {
      return response.data
    }
    console.error('Failed to fetch reviews: ', response.data)
    return null
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return null
  }
}

// 특정 리뷰를 ID로 가져오는 함수 추가
export const getReviewById = async (
  reviewId: number,
): Promise<ReviewResponse | null> => {
  try {
    const response = await axios.get<ReviewResponse>(
      `${API_BASE_URL}/api/v1/reviews/${reviewId}`,
    )

    if (response.data.isSuccess) {
      return response.data
    }
    console.error('Failed to fetch review by ID: ', response.data)
    return null
  } catch (error) {
    console.error('Error fetching review by ID:', error)
    return null
  }
}
