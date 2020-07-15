import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PurchaseOrder = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  codigoSuplidor: {
    type: Schema.Types.ObjectId,
    ref: 'Supplier',
  },
  articulos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Article',
    },
  ],
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
