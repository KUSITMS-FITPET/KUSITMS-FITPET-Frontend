import axios from 'axios'

// 상담 건수 API 응답 타입 정의
export interface ConsultationCountResponse {
  isSuccess: boolean
  code: string
  message: string
  result: number
}

// 상담 건수 데이터를 가져오는 함수
export const fetchConsultationCount =
  async (): Promise<ConsultationCountResponse> => {
    const response = await axios.get(
      'http://3.35.191.40:8080/api/v1/contacts/mainpages',
    ) // 수정된 실제 API 엔드포인트
    return response.data
  }
