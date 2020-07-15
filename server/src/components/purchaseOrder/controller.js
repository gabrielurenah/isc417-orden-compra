import PurchaseOrder from './model';
import wrapper from '../../utils/async';

const list = async (req, res) => {
  const [err, purchaseOrders] = await wrapper(PurchaseOrder.find({}));

  return err ? res.status(500).send(err) : res.status(200).json(purchaseOrders);
};

const create = async (req, res) => {
  const purchaseOrder = new PurchaseOrder(req.body);
  const [err, savedPO] = await wrapper(purchaseOrder.save());

  return err
    ? res.status(500).send(err)
    : res.status(200).json({ purchaseOrder: savedPO });
};

export { list, create };
