import connectToDB from './services/mongo';
import menu from 'node-menu';

connectToDB();

menu
  .addDelimiter('-', 40, 'Menu Principal')
  .addItem('No parameters', () => console.log('No parameters is invoked'))
  .addItem('Option 1', () => console.log('klk'))
  .addItem('option2', () => console.log('klk2'))
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
