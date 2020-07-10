const Movement = require('./model');
const Article = require('../article/model');
const inquirer = require('inquirer');
const wrapper = require('../../middlewares/async');

const prompts = [
  {
    name: 'codigoAlmacen',
    type: 'input',
    message: '\nInserte el codigo del almacen: ',
    default: 'ALM-001',
    validate: value => (value.length ? true : 'Este campo es obligatorio.'),
  },
  {
    name: 'tipo',
    type: 'list',
    message: '\nQué tipo de movimiento va a realizar?',
    choices: ['Entrada', 'Salida'],
  },
  {
    name: 'codigoArticulo',
    type: 'input',
    message: '\nInserte el codigo del artículo: ',
    default: 'ART-001',
    validate: async value => {
      if (!value.length) return 'Este campo es obligatorio.';

      const exists = await wrapper(Article.exists({ codigo: value }));
      if (!exists) return 'El artículo no existe.';

      return true;
    },
  },
  {
    name: 'cantidad',
    type: 'number',
    message: '\nInserte la cantidad de artículos en movimiento: ',
    validate: value =>
      value > 0 ? true : 'La cantidad debe ser mayor que cero',
  },
  {
    name: 'unidad',
    type: 'list',
    message: '\nEn qué unidad se están moviendo?',
    choices: ['Unidad', 'Caja (12)'],
  },
];

module.exports = async () => {
  let fields = await inquirer.prompt(prompts);

  [amntErr, amount] = await wrapper(Movement.countDocuments());
  fields.codigo = `MOV-${(amount + 1).toString().padStart(3, '0')}`;

  const [err, docs] = await wrapper(Part.insertMany([fields]));

  if (err) console.error(err);
  else console.log(docs[0]);
};
