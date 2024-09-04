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

export const getReviews = async (
  page: number,
  order: 'asc' | 'desc',
): Promise<ReviewListResponse> => {
  const response = await axios.get<ReviewListResponse>(
    `${API_BASE_URL}/${order}`,
    {
      params: { page, size: 9 },
    },
  )
  return response.data
}

export const getReviewById = async (
  reviewId: number,
): Promise<ReviewResponse> => {
  const response = await axios.get<ReviewResponse>(
    `${API_BASE_URL}/${reviewId}`,
  )
  return response.data
}
