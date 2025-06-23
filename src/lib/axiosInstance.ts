import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
if (!baseURL) {
  throw new Error(
    'Missing environment variable NEXT_PUBLIC_BACKEND_URL. ' +
      'Please define it in your .env file.'
  );
}

export function generateAxiosInstance(
  url: string = '',
  useJson = true
): AxiosInstance {
  const modifiedBaseURL = baseURL + url;
  return axios.create({
    baseURL: modifiedBaseURL,
    headers: {
      'Content-Type': useJson ? 'application/json' : 'multipart/form-data',
    },
  });
}
