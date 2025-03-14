import axios from 'axios';
import axiosRetry from 'axios-retry';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Axios = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  // timeout: 30000,
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosRetry(Axios, {
  retries: 0,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) || error?.response?.status >= 500,
});

export default Axios;
