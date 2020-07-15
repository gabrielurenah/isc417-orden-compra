import { apiClient } from './axios';

const getArticles = () => apiClient.get('/api/articles/');

export { getArticles };
