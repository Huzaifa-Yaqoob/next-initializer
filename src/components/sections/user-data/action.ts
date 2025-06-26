import { generateAxiosInstance } from '@/lib/axiosInstance';

const axios = generateAxiosInstance('/user');

export async function getUser() {
  return axios.get('');
}
