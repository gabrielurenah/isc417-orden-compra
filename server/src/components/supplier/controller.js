import Supplier from './model';
import wrapper from '../../utils/async';

const list = async (req, res) => {
  const [err, suppliers] = await wrapper(Supplier.find({}));

  return err ? res.status(500).send(err) : res.status(200).json(suppliers);
};

const create = async (req, res) => {
  const supplier = new Supplier(req.body);
  const [err, savedSupplier] = await wrapper(supplier.save());

  return err
    ? res.status(500).send(err)
    : res.status(200).json({ supplier: savedSupplier });
};

export { list, create };
