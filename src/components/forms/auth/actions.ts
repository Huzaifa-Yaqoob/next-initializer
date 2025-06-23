import { generateAxiosInstance } from '@/lib/axiosInstance';
import { z } from 'zod';
import { registerSchema } from './schemas';

export const axios = generateAxiosInstance('/auth');

export async function register(data: z.infer<typeof registerSchema>) {
  return axios.post('/register', data);
}

export async function login(email: string, password: string) {
  return axios.post('/login', { email, password });
}
