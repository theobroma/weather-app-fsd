import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = process.env.REACT_APP_API_URL;

export const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL: API_URL,
    params: {
      key: API_KEY,
    },
  }),
);
