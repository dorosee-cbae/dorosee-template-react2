// src/shared/hooks/useSampleHook.ts
import { useState, useEffect } from 'react';
import { fetchSampleById, fetchSamples } from '@/shared/api/useSampleAPI';

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[]; // 실제 데이터 타입에 맞게 수정해주세요
}

interface UseSampleHookReturn {
  data: ApiResponse | null;
  isLoading: boolean;
  error: Error | null;
}

export const useSampleHook = (id?: string): UseSampleHookReturn => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setData(null);
        setError(null);

        if (id) {
          const response = await fetchSampleById(id);
          setData(response.data);
        } else {
          const response = await fetchSamples();
          setData(response.data.results);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('알 수 없는 에러가 발생했습니다.')
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, isLoading, error };
};
