import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PurchaseOrder = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  codigoSuplidor: {
    type: String,
    required: true,
  },
  articulos: {
    type: [
      new Schema({
        codigoArticulo: { type: String },
        cantidadOrdenada: { type: Number },
        precioCompra: { type: Number },
      }),
    ],
  },
  montoTotal: {
    type: Number,
    default: 0,
    min: 0,
  },
  fechaOrden: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('PurchaseOrder', PurchaseOrder);
