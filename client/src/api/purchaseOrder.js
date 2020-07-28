import { apiClient } from './axios';

const getPurchaseOrders = () => apiClient.get('/api/purchase-orders/');

const createPurchaseOrder = order =>
  apiClient.post('/api/purchase-orders/', order);

const automaticOrder = attributes =>
  apiClient.post('/api/purchase-orders/auto', attributes);

export { getPurchaseOrders, createPurchaseOrder, automaticOrder };
