import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Supplier = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  codigoArticulo: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
  tiempoEntrega: {
    type: Number,
    default: 1,
    min: 1,
  },
  precioCompra: {
    type: Number,
    default: 0,
    min: 0,
  },
});

export default mongoose.model('Supplier', Supplier);
