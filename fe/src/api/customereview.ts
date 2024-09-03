import axios from 'axios'

const API_BASE_URL = 'http://3.35.191.40:8080/api/v1/reviews'

// 정의된 타입으로 교체
interface ReviewResponse {
  isSuccess: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any // 여기에 정확한 타입을 넣어야 합니다.
}

export const getReviewById = async (
  reviewId: number,
): Promise<ReviewResponse> => {
  try {
    const response = await axios.get<ReviewResponse>(
      `${API_BASE_URL}/${reviewId}`,
    )
    return response.data
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching review by ID:', error)
    }
    throw error
  }
}

export const getReviews = async (
  page: number,
  order: 'asc' | 'desc',
  size: number = 9,
): Promise<ReviewResponse> => {
  try {
    const response = await axios.get<ReviewResponse>(API_BASE_URL, {
      params: {
        order,
        page,
        size,
      },
    })
    return response.data
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching reviews:', error)
    }
    throw error
  }
}
