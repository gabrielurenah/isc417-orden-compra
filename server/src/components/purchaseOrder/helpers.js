import Supplier from '../supplier/model';
import Article from '../article/model';
import Movement from '../movement/model';

export const getDiffDays = fechaOrden => {
  const date2 = new Date(fechaOrden);
  const diffTime = Math.abs(date2 - new Date());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getBalanceActual = async codigo => {
  try {
    const [articulo] = await Article.aggregate([
      { $match: { codigo: codigo } },
      { $unwind: '$disponibilidad' },
      {
        $group: {
          _id: { codigoArticulo: '$codigo', precioUnidad: '$precioUnidad' },
          balanceActual: { $sum: '$disponibilidad.cantidad' },
        },
      },
      {
        $project: {
          _id: false,
          codigoArticulo: '$_id.codigoArticulo',
          precioUnidad: '$_id.precioUnidad',
          balanceActual: '$balanceActual',
        },
      },
    ]);

    return {
      precioUnidad: articulo.precioUnidad,
      balanceActual: articulo.balanceActual,
    };
  } catch (error) {
    console.error('ERRRR', error);
  }
};

//El suplidor correcto
export const dameElMejorSuplidor = async (codigo, diffDays) => {
  try {
    const [suplidor] = await Supplier.aggregate([
      { $unwind: '$articulos' },
      {
        $match: {
          'articulos.codigoArticulo': codigo,
          'articulos.tiempoEntrega': { $lte: diffDays },
        },
      },
      {
        $sort: { 'articulos.tiempoEntrega': 1, 'articulos.precioCompra': 1 },
      },
      { $limit: 1 },
    ]);

    return suplidor;
  } catch (error) {
    console.error(error);
  }
};

//consumo diario
export const getConsumoDiario = async codigo => {
  return Movement.aggregate([
    {
      $match: {
        codigoArticulo: codigo,
        tipo: { $eq: 'Salida' },
        fecha: { $gte: new Date('07/01/2020'), $lte: new Date('07/31/2020') },
      },
    },
    {
      $group: {
        _id: { codigoArticulo: '$codigoArticulo' },
        // consumoDiario: { $sum: { $divide: ['$cantidad', 31] } },
        consumoDiario: { $avg: '$cantidad' },
      },
    },
    {
      $project: {
        _id: false,
        consumoDiario: '$consumoDiario',
      },
    },
  ]);
};
