import PurchaseOrder from './model';
import wrapper from '../../utils/async';
import {
  getBalanceActual,
  getConsumoDiario,
  getDiffDays,
  dameElMejorSuplidor,
} from './helpers';
import formatDate from 'date-fns/format';
import { es } from 'date-fns/locale';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const list = async (req, res) => {
  const [err, orders] = await wrapper(
    PurchaseOrder.find({}, { _id: 0, __v: 0 })
  );

  const purchaseOrders = orders.map(po => ({
    montoTotal: formatter.format(po.montoTotal),
    codigo: po.codigo,
    codigoSuplidor: po.codigoSuplidor,
    cantArticulos: po.articulos.length,
    fechaOrden: formatDate(new Date(po.fechaOrden), 'P', { locale: es }),
  }));

  return err ? res.status(500).send(err) : res.status(200).json(purchaseOrders);
};

const create = async (req, res) => {
  const purchaseOrder = new PurchaseOrder(req.body);
  const [err, savedPO] = await wrapper(purchaseOrder.save());

  return err
    ? res.status(500).send(err)
    : res.status(200).json({ purchaseOrder: savedPO });
};

const automaticOrder = async (req, res) => {
  const { fechaOrden, articulos } = req.body;

  const diffDays = getDiffDays(fechaOrden);

  let ordenes = [];

  for (let index = 0; index < articulos.length; index++) {
    const { articulo: codigo, cantidad } = articulos[index];
    console.log('automaticOrder -> codigo', codigo);

    const [consumo] = await getConsumoDiario(codigo);
    const consumoFechaDeseada = consumo.consumoDiario * diffDays;
    console.log('automaticOrder -> consumoFechaDeseada', consumoFechaDeseada);

    const { balanceActual, precioUnidad } = await getBalanceActual(codigo);

    const cantidadOrdenada = consumoFechaDeseada + cantidad - balanceActual;
    console.log('automaticOrder -> cantidadOrdenada', cantidadOrdenada);

    if (cantidadOrdenada <= 0) continue;

    const suplidor = await dameElMejorSuplidor(codigo, diffDays);

    if (!suplidor) continue;

    const fechaOrden = new Date();
    fechaOrden.setDate(fechaOrden.getDate() + suplidor.articulos.tiempoEntrega);
    console.log('automaticOrder -> fechaOrden', fechaOrden);

    const elRealIndiceDelSuplidor = ordenes.findIndex(
      ({ codigoSuplidor, fechaOrden: fo }) =>
        codigoSuplidor === suplidor._id && fechaOrden === fo
    );

    if (elRealIndiceDelSuplidor === -1) {
      let ordenArticulo = {
        codigoArticulo: codigo,
        cantidadOrdenada,
        precioCompra: cantidadOrdenada * precioUnidad,
      };
      const [err, count] = await wrapper(PurchaseOrder.count());
      const codOrder = `ORD-${(count + ordenes.length + 1)
        .toString()
        .padStart(3, '0')}`;

      let orden = {
        codigo: codOrder,
        codigoSuplidor: suplidor.codigo,
        fechaOrden,
        montoTotal: ordenArticulo.precioCompra,
        articulos: [ordenArticulo],
      };

      ordenes.push(orden);
    } else {
      ordenes[elRealIndiceDelSuplidor].montoTotal += ordenArticulo.precioCompra;
      ordenes[elRealIndiceDelSuplidor].articulos.push(ordenArticulo);
    }
  }

  const [err, orders] = await wrapper(PurchaseOrder.insertMany(ordenes));

  return err
    ? res.status(500).send(err)
    : res.status(200).json({ purchaseOrders: orders });
};

export { list, create, automaticOrder };
