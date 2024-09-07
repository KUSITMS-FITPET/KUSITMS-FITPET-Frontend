import axios from 'axios'

// 상담 건수 데이터를 가져오는 함수 (GET 요청)
export const fetchConsultationCount = async () => {
  try {
    const response = await axios.get(
      `/api/v1/contacts/mainpages`, // 환경 변수를 사용한 API_BASE_URL
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching consultation count:', error)
    }
    throw error
  }
}

// 전화 문의 카운트를 증가시키는 함수 (POST 요청)
export const increasePhoneCount = async () => {
  try {
    const response = await axios.post(
      `/api/v1/contacts/phones`, // 환경 변수를 사용한 API_BASE_URL
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.data.isSuccess) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to increase phone count:', response.data.message)
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error increasing phone count:', error)
    }
    throw error
  }
}
