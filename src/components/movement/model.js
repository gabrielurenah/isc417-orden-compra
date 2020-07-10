const mongoose = require('mongoose');

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
  unidad: {
    type: String,
    required: true,
    enum: ['Unidad', 'Caja (12)'],
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('movimientoInventario', InventoryMovement);
