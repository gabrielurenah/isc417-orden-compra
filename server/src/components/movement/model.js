import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const InventoryMovement = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  codigoAlmacen: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: ['Entrada', 'Salida'],
  },
  codigoArticulo: {
    type: String,
    required: true,
    unique: true,
  },
  cantidad: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('InventoryMovement', InventoryMovement);
