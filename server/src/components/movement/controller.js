import InventoryMovement from './model';
import wrapper from '../../utils/async';

const list = async (req, res) => {
  const [err, movements] = await wrapper(InventoryMovement.find({}));

  return err ? res.status(500).send(err) : res.status(200).json(movements);
};

const create = async (req, res) => {
  const movement = new InventoryMovement(req.body);
  const [err, savedMovement] = await wrapper(movement.save());

  return err
    ? res.status(500).send(err)
    : res.status(200).json({ movement: savedMovement });
};

export { list, create };
