import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@/api/constants';

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

const getToken = () => {
  const token = Cookies.get(ACCESS_TOKEN);
  if (!token) throw new Error('로그인 토큰이 없습니다.');
  return token;
};

export const fetchAdminList = async (page: number = 1) => {
  try {
    const token = getToken(); 
    const response = await axios.get(`/api/v1/fitpetAdmin/master?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data.result; 
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('관리자 목록 조회 에러:', axiosError.response?.data || axiosError.message);
    throw new Error('관리자 목록을 불러오지 못했습니다.');
  }
};

export const createAdmin = async (adminData: NewAdmin, roleMaster: boolean) => {
  if (!roleMaster) throw new Error('권한이 없습니다. 관리자 추가는 마스터 권한이 필요합니다.');

  try {
    const token = getToken(); 
    const response = await axios.post('/api/v1/fitpetAdmin/master/register', adminData, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('새 관리자 추가 에러:', axiosError.response?.data || axiosError.message);
    throw new Error('새 관리자를 추가하지 못했습니다.');
  }
};

export const deleteAdmin = async (adminId: string, roleMaster: boolean) => {
  if (!roleMaster) throw new Error('권한이 없습니다. 관리자 삭제는 마스터 권한이 필요합니다.');

  try {
    const token = getToken(); 
    const response = await axios.delete(`/api/v1/fitpetAdmin/master/${adminId}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('관리자 삭제 에러:', axiosError.response?.data || axiosError.message);
    throw new Error('관리자를 삭제하지 못했습니다.');
  }
};
