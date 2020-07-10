const CLI = require('clui');

const countdown = new CLI.Spinner('Iniciando la aplicacion...', [
  '⣾',
  '⣽',
  '⣻',
  '⢿',
  '⡿',
  '⣟',
  '⣯',
  '⣷',
]);
countdown.start();

const connectToDB = require('./services/mongo');
const menu = require('node-menu');
const movement = require('./components/movement');
const articleSeeder = require('./components/article/seeder');

const init = async () => {
  countdown.message('Conectando a Mongo🥭...');
  await connectToDB();
  // articleSeeder();

  setTimeout(() => {
    countdown.stop();

    menu
      .addDelimiter('-', 40, 'Menu Principal')
      .addItem('Registrar movimiento', () => movement.create())
      .addItem('Ver movimientos', () => movement.list())
      .addDelimiter('*', 40)
      .customHeader(function () {
        process.stdout.write('Tarea ISC417 - Ordenes de Compra\n');
      })
      .disableDefaultHeader()
      .customPrompt(function () {
        process.stdout.write('\n Introduzca la opcion que desea realizar:\n');
      })
      .disableDefaultPrompt()
      .start();
  }, 2500);
};

setTimeout(() => init(), 2500);
