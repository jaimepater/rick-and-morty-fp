import axios, { Method } from 'axios';

const apiClient = axios.create({});

export const httpCall = <R>(url: string, method: Method): Promise<R> => {
  return apiClient.request<never, R>({
    url,
    method,
  });
};
