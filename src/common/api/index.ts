import axios from 'axios';
import { store } from '@/store';
import { apiConfig } from '../config/api.config';

export const request = axios.create({
  baseURL: apiConfig.apiUrl,
});

request.interceptors.request.use((config) => {
  const { auth } = store.getState().auth;
  if (auth) {
    config.headers.Authorization = `Bearer ${auth.access?.token}`;
  }

  return config;
});

export * from './mappers';
export * from './responses';
