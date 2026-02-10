import axios from 'axios';
import { API_URL } from './axiosInstance';

export const refereshAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    `${API_URL}/auth/refresh`,
    {},
    { withCredentials: true },
  );
  return response.data;
};
