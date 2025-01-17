// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use an environment variable for the base URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
