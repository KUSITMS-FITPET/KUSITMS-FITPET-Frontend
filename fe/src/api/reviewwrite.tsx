import axios from 'axios'

export interface ReviewData {
  petInfo: string | null
  petAge: number
  petSpecies: string
  content: string
  star: number
}

export const postReview = async (reviewData: ReviewData) => {
  const response = await axios.post(`/api/v1/reviews`, reviewData)
  return response.data
}
