import axios from 'axios'

// 상담 건수 데이터를 가져오는 함수 (GET 요청)
export const fetchConsultationCount = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contacts/mainpages`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  } catch (error) {
    console.error('Error fetching consultation count:', error)
    throw error
  }
}

// 전화 문의 카운트를 증가시키는 함수 (POST 요청)
export const increasePhoneCount = async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contacts/phones`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.data.isSuccess) {
      console.error('Failed to increase phone count:', response.data.message)
    }
  } catch (error) {
    console.error('Error increasing phone count:', error)
    throw error
  }
}
