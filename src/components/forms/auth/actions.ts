import { generateAxiosInstance } from '@/lib/axiosInstance';
import { z } from 'zod';
import { registerSchema, loginSchema } from './schemas';

export const axios = generateAxiosInstance('/auth');

export async function register(data: z.infer<typeof registerSchema>) {
  return axios.post('/register', data);
}

export async function login(data: z.infer<typeof loginSchema>) {
  return axios.post('/login', data);
}
