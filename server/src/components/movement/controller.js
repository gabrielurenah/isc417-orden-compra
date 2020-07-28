import InventoryMovement from './model';
import wrapper from '../../utils/async';
import formatDate from 'date-fns/format';
import { es } from 'date-fns/locale';
import Article from '../article/model';

const list = async (req, res) => {
  const [err, movs] = await wrapper(
    InventoryMovement.find({}, { _id: 0, __v: 0 })
  );

  const movements = movs.map(m => ({
    cantidad: m.cantidad,
    codigoAlmacen: m.codigoAlmacen,
    tipo: m.tipo,
    codigo: m.codigo,
    codigoArticulo: m.codigoArticulo,
    fecha: formatDate(new Date(m.fecha), 'P', { locale: es }),
  }));

  return err ? res.status(500).send(err) : res.status(200).json(movements);
};

const create = async (req, res) => {
  const { codigoAlmacen, codigoArticulo, tipo, cantidad } = req.body;
  let findQuery = {
    codigo: codigoArticulo,
    'disponibilidad.codigoAlmacen': codigoAlmacen,
  };
  let cant = cantidad;

  if (tipo === 'Salida') {
    cant *= -1;

    findQuery = {
      ...findQuery,
      'disponibilidad.cantidad': { $gt: cantidad },
    };
  }

  try {
    const article = await Article.findOne(findQuery);

    if (!article) {
      return res.status(400).send('No hay cantidad suficiente en ese almacen');
    }

    const movement = new InventoryMovement(req.body);
    await movement.save();

    await Article.findOneAndUpdate(findQuery, {
      $inc: { 'disponibilidad.$.cantidad': cant },
    });

    return res.status(200).json(movement);
  } catch (error) {
    console.error('ERRRRRRRRRR => ', error);
    return res.status(500).send(error);
  }
};

export { list, create };
