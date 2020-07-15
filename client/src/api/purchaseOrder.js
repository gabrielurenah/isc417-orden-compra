import { apiClient } from './axios';

const getPurchaseOrders = () => apiClient.get('/api/purchase-orders/');

const createPurchaseOrder = order =>
  apiClient.post('/api/purchase-orders/', order);

export { getPurchaseOrders, createPurchaseOrder };
