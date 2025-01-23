import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { showSwal } from '../utils/swalUtil';

interface UseAxiosResponse<T> {
  callApi: (config: AxiosRequestConfig) => Promise<T | undefined>;
  isLoading: boolean;
  error: string | null;
}

const useAxios = <T = any>(): UseAxiosResponse<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (config: AxiosRequestConfig): Promise<T | undefined> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios(config);

      // Show success alert for responses with status 2xx
      showSwal({
        title: 'Success',
        text: response?.data?.message || 'Operation completed successfully.',
        icon: 'success',
      });

      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'An unexpected error occurred.';

      setError(errorMessage);

      // Show error alert for failed requests
      showSwal({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { callApi, isLoading, error };
};

export default useAxios;
