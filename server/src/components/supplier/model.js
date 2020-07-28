import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Supplier = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  articulos: {
    type: [
      new Schema({
        codigoArticulo: { type: String },
        tiempoEntrega: { type: Number },
        precioCompra: { type: Number },
      }),
    ],
  },
});

export default mongoose.model('Supplier', Supplier);
