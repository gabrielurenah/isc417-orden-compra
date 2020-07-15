import Article from './model';

const articles = [
  {
    codigo: 'ART-001',
    tipo: 'CPU',
    nombre: 'CPU X',
    descripcion: '',
    precioUnidad: 50,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 50 },
      { codigoAlmacen: 'ALM-002', cantidad: 40 },
      { codigoAlmacen: 'ALM-003', cantidad: 60 },
    ],
  },
  {
    codigo: 'ART-002',
    tipo: 'CPU',
    nombre: 'CPU A',
    descripcion: '',
    precioUnidad: 76,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 10 },
      { codigoAlmacen: 'ALM-002', cantidad: 5 },
      { codigoAlmacen: 'ALM-003', cantidad: 18 },
    ],
  },
  {
    codigo: 'ART-003',
    tipo: 'CPU Cooler',
    nombre: 'Cooler generico',
    descripcion: '',
    precioUnidad: 10,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 1 },
      { codigoAlmacen: 'ALM-002', cantidad: 5 },
      { codigoAlmacen: 'ALM-003', cantidad: 8 },
    ],
  },
  {
    codigo: 'ART-004',
    tipo: 'CPU Cooler',
    nombre: 'Cooler premium',
    descripcion: '',
    precioUnidad: 25,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 3 },
      { codigoAlmacen: 'ALM-002', cantidad: 8 },
      { codigoAlmacen: 'ALM-003', cantidad: 1 },
    ],
  },
  {
    codigo: 'ART-005',
    tipo: 'Motherboard',
    nombre: 'Motherboard X',
    descripcion: '',
    precioUnidad: 35,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 2 },
      { codigoAlmacen: 'ALM-002', cantidad: 1 },
      { codigoAlmacen: 'ALM-003', cantidad: 3 },
    ],
  },
  {
    codigo: 'ART-006',
    tipo: 'Memory',
    nombre: 'RAM 8GB',
    descripcion: '',
    precioUnidad: 15,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 12 },
      { codigoAlmacen: 'ALM-002', cantidad: 21 },
      { codigoAlmacen: 'ALM-003', cantidad: 13 },
    ],
  },
  {
    codigo: 'ART-007',
    tipo: 'Memory',
    nombre: 'RAM 4GB',
    descripcion: '',
    precioUnidad: 10,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 7 },
      { codigoAlmacen: 'ALM-002', cantidad: 5 },
      { codigoAlmacen: 'ALM-003', cantidad: 1 },
    ],
  },
  {
    codigo: 'ART-008',
    tipo: 'Storage',
    nombre: 'SSD 256GB',
    descripcion: '',
    precioUnidad: 40,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 5 },
      { codigoAlmacen: 'ALM-002', cantidad: 7 },
      { codigoAlmacen: 'ALM-003', cantidad: 18 },
    ],
  },
  {
    codigo: 'ART-009',
    tipo: 'Storage',
    nombre: 'HDD 1TB',
    descripcion: '',
    precioUnidad: 20,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 1 },
      { codigoAlmacen: 'ALM-002', cantidad: 4 },
      { codigoAlmacen: 'ALM-003', cantidad: 9 },
    ],
  },
  {
    codigo: 'ART-010',
    tipo: 'Video Card',
    nombre: 'Video Card X',
    descripcion: '',
    precioUnidad: 40,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 5 },
      { codigoAlmacen: 'ALM-002', cantidad: 7 },
      { codigoAlmacen: 'ALM-003', cantidad: 18 },
    ],
  },
  {
    codigo: 'ART-011',
    tipo: 'Video Card',
    nombre: 'Video Card A',
    descripcion: '',
    precioUnidad: 40,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 2 },
      { codigoAlmacen: 'ALM-002', cantidad: 3 },
      { codigoAlmacen: 'ALM-003', cantidad: 9 },
    ],
  },
  {
    codigo: 'ART-012',
    tipo: 'Case',
    nombre: 'Case X',
    descripcion: 'Tiene un paquete de luces RGB',
    precioUnidad: 24,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 5 },
      { codigoAlmacen: 'ALM-002', cantidad: 10 },
      { codigoAlmacen: 'ALM-003', cantidad: 11 },
    ],
  },
  {
    codigo: 'ART-013',
    tipo: 'PSU',
    nombre: 'PSU X',
    descripcion: '',
    precioUnidad: 10,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 1 },
      { codigoAlmacen: 'ALM-002', cantidad: 2 },
      { codigoAlmacen: 'ALM-003', cantidad: 3 },
    ],
  },
  {
    codigo: 'ART-014',
    tipo: 'Monitor',
    nombre: 'Monitor ACER',
    descripcion: '24in 120hz',
    precioUnidad: 70,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 10 },
      { codigoAlmacen: 'ALM-002', cantidad: 12 },
      { codigoAlmacen: 'ALM-003', cantidad: 13 },
    ],
  },
  {
    codigo: 'ART-015',
    tipo: 'Monitor',
    nombre: 'Samsung Curved',
    descripcion: '27in',
    precioUnidad: 90,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 1 },
      { codigoAlmacen: 'ALM-002', cantidad: 2 },
      { codigoAlmacen: 'ALM-003', cantidad: 3 },
    ],
  },
  {
    codigo: 'ART-016',
    tipo: 'Mouse',
    nombre: 'Mouse Generico',
    descripcion: '',
    precioUnidad: 5,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 20 },
      { codigoAlmacen: 'ALM-002', cantidad: 25 },
      { codigoAlmacen: 'ALM-003', cantidad: 13 },
    ],
  },
  {
    codigo: 'ART-017',
    tipo: 'Mouse',
    nombre: 'Mouse Ergonomico X',
    descripcion: '',
    precioUnidad: 37,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 12 },
      { codigoAlmacen: 'ALM-002', cantidad: 27 },
      { codigoAlmacen: 'ALM-003', cantidad: 3 },
    ],
  },
  {
    codigo: 'ART-018',
    tipo: 'Mouse',
    nombre: 'Trackpad inalambrico',
    descripcion: '',
    precioUnidad: 40,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 5 },
      { codigoAlmacen: 'ALM-002', cantidad: 7 },
      { codigoAlmacen: 'ALM-003', cantidad: 13 },
    ],
  },
  {
    codigo: 'ART-019',
    tipo: 'Keyboard',
    nombre: 'Teclado inalambrico',
    descripcion: 'Tiene luces RGB y es mecanico',
    precioUnidad: 20,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 12 },
      { codigoAlmacen: 'ALM-002', cantidad: 22 },
      { codigoAlmacen: 'ALM-003', cantidad: 32 },
    ],
  },
  {
    codigo: 'ART-020',
    tipo: 'Keyboard',
    nombre: 'Teclado generico X',
    descripcion: '',
    precioUnidad: 7,
    disponibilidad: [
      { codigoAlmacen: 'ALM-001', cantidad: 2 },
      { codigoAlmacen: 'ALM-002', cantidad: 17 },
      { codigoAlmacen: 'ALM-003', cantidad: 13 },
    ],
  },
];

export default function () {
  Article.insertMany(articles)
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

// Article.bulkWrite(
//   articles.map(article => ({
//     updateOne: {
//       filter: { codigo: article.codigo },
//       update: { $set: article },
//       upsert: true,
//     },
//   }))
// );
