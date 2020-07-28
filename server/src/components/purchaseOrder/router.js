import express from 'express';
import { list, create, automaticOrder } from './controller';

const router = express.Router();

router.get('/', list);

router.post('/', create);

router.post('/auto', automaticOrder);

export default router;
