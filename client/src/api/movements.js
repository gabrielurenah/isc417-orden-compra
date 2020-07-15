import { apiClient } from './axios';

const getInventoryMovements = () => apiClient.get('/api/movements/');

const createInventoryMovement = movement =>
  apiClient.post('/api/movements/', movement);

export { getInventoryMovements, createInventoryMovement };
