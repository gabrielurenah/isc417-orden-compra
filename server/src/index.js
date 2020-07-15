import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectToDB from './services/mongo';
import articleSeeder from './components/article/seeder';
import {
  article,
  inventoryMovement,
  purchaseOrder,
  supplier,
} from './config/routes';

connectToDB();
// articleSeeder();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/articles', article);
app.use('/api/movements', inventoryMovement);
app.use('/api/purchase-orders', purchaseOrder);
app.use('/api/suppliers', supplier);

app.listen(3000, () => console.log('ta corriendo'));
