import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@/api/constants';

// Admin 인터페이스 정의
export interface Admin {
  id: string;
  name: string;
  roleContents: boolean;
  roleEstimates: boolean;
  roleSites: boolean;
  roleMaster: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NewAdmin {
  adminId: string;
  adminPw: string;
  name: string;
  roleContents: boolean;
  roleEstimates: boolean;
  roleSites: boolean;
  roleMaster: boolean;
}

// JWT 토큰을 쿠키에서 가져오는 함수
const getToken = () => {
  const token = Cookies.get(ACCESS_TOKEN);
  if (!token) throw new Error('로그인 토큰이 없습니다.');
  return token;
};

// 관리자 목록 가져오기
export const fetchAdminList = async (page: number = 1) => {
  try {
    const token = getToken(); // 토큰 가져오기
    const response = await axios.get(`/api/v1/fitpetAdmin/master?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
      },
    });
    return response.data.result; // 관리자 목록 반환
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('관리자 목록 조회 에러:', axiosError.response?.data || axiosError.message);
    throw new Error('관리자 목록을 불러오지 못했습니다.');
  }
};

// 새로운 관리자 추가 (roleMaster 권한 체크)
export const createAdmin = async (adminData: NewAdmin, roleMaster: boolean) => {
  if (!roleMaster) throw new Error('권한이 없습니다. 관리자 추가는 마스터 권한이 필요합니다.');

  try {
    const token = getToken(); // 토큰 가져오기
    const response = await axios.post('/api/v1/fitpetAdmin/master/register', adminData, {
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('새 관리자 추가 에러:', axiosError.response?.data || axiosError.message);
    throw new Error('새 관리자를 추가하지 못했습니다.');
  }
};

// 관리자 삭제 (roleMaster 권한 체크)
export const deleteAdmin = async (adminId: string, roleMaster: boolean) => {
  if (!roleMaster) throw new Error('권한이 없습니다. 관리자 삭제는 마스터 권한이 필요합니다.');

  try {
    const token = getToken(); // 토큰 가져오기
    const response = await axios.delete(`/api/v1/fitpetAdmin/master/${adminId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('관리자 삭제 에러:', axiosError.response?.data || axiosError.message);
    throw new Error('관리자를 삭제하지 못했습니다.');
  }
};
