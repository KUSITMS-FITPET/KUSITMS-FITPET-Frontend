import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

// 리뷰 데이터 타입 정의
export type ReviewData = {
  petInfo: string | null
  petSpecies: string
  petAge: number
  content: string
  star: number | null
}

// 서버에 배포된 실제 API의 기본 URL로 설정
axios.defaults.baseURL = 'http://3.35.191.40:8080' // 실제 배포된 서버 주소

// 리뷰 등록 API 호출 함수
export const postReview = (review: ReviewData) =>
  axios.post('/api/v1/reviews', review)

// React Query의 useMutation을 사용한 함수
export const usePostReview = () =>
  useMutation({
    mutationKey: ['post-review'],
    mutationFn: (data: ReviewData) => postReview(data),
    onSuccess: () => {
      alert('리뷰가 성공적으로 등록되었습니다.')
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        // 서버에서 반환된 오류 메시지 표시
        console.error(
          '리뷰 등록 중 오류가 발생했습니다:',
          error.response?.data || error.message,
        )
        alert(
          `리뷰 등록에 실패했습니다: ${error.response?.data?.message || '서버 오류'}`,
        )
      } else {
        console.error('리뷰 등록 중 알 수 없는 오류가 발생했습니다.', error)
        alert('리뷰 등록 중 알 수 없는 오류가 발생했습니다.')
      }
    },
  })
