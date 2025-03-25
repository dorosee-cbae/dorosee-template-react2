import axiosInstance from '@/shared/api/axiosInstance';
import { UserCardType } from '@/modules/user/types/user';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createUser = async (user: UserCardType) => {
  return await axiosInstance.post(`${API_BASE_URL}/users`, user);
};
