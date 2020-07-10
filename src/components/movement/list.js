const Movement = require('./model');
const wrapper = require('../../middlewares/async');

module.exports = async () => {
  const [err, movements] = await wrapper(Movement.find());

  if (err) return console.error(err);

  if (!movements.length) return console.log('No hay movimientos');

  movements.forEach(movement => {
    console.log(movement);
  });
};
