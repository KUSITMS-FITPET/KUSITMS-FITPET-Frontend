import axios from 'axios';

const API_BASE_URL = '/api'; // 기본 API URL

// 상담 건수를 가져오는 함수
export const fetchConsultationCount = async (): Promise<number> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/consultation-count`);
    return response.data.count; // 서버에서 반환된 상담 건수
  } catch (error) {
    console.error('Failed to fetch consultation count', error);
    throw error;
  }
};
