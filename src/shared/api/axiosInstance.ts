// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (필요 시 토큰 등 추가)
axiosInstance.interceptors.request.use(
  (config) => {
    // 예시: config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (에러 처리 등)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 공통 에러 처리 로직 추가 가능
    return Promise.reject(error);
  }
);

export default axiosInstance;
