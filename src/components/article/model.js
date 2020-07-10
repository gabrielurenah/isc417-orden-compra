const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const computer_part_types = [
  'CPU',
  'CPU Cooler',
  'Motherboard',
  'Memory',
  'Storage',
  'Video Card',
  'Case',
  'PSU',
  'Monitor',
  'Mouse',
  'Keyboard',
];

const Article = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: computer_part_types,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: false,
  },
  disponibilidad: {
    type: [
      new Schema({
        codigoAlmacen: {
          type: String,
          required: true,
        },
        cantidad: {
          type: Number,
          required: true,
        },
      }),
    ],
    required: false,
  },
  precioUnidad: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Article', Article);
