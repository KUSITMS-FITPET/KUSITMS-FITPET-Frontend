import axios from 'axios'

const API_BASE_URL = 'http://3.35.191.40:8080/api/v1/reviews'

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
  order: 'asc' | 'desc',
  dog: boolean,
  cat: boolean,
): Promise<ReviewListResponse | null> => {
  try {
    const response = await axios.post<ReviewListResponse>(
      `${API_BASE_URL}/filter`,
      {
        dog,
        cat,
        orderBy: order,
      },
      {
        params: { page, size: 9 },
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

// 특정 리뷰를 ID로 가져오는 함수
export const getReviewById = async (
  reviewId: number,
): Promise<ReviewResponse | null> => {
  try {
    const response = await axios.get<ReviewResponse>(
      `${API_BASE_URL}/${reviewId}`,
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
