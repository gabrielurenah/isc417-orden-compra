import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '//localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
