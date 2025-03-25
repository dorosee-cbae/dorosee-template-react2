import axiosInstance from '@/shared/api/axiosInstance';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchSamples = async () => {
  return await axiosInstance.get(`${API_BASE_URL}/people`);
};

export const fetchSampleById = async (id: string) => {
  return await axiosInstance.get(`${API_BASE_URL}/people/${id}`);
};
