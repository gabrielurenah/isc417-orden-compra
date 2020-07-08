const connectToDB = require('./services/mongo');
const menu = require('node-menu');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

connectToDB();

// console.log('Digite la opcion: \n1. test\n2. test 2');
// const recursiveAsyncReadLine = () => {
//   readline.question(``, opt => {
//     if (opt == 1) {
//       console.log('this is a test 1');
//     } else if (opt == 2) {
//       console.log('this is a second test');
//     } else console.log('not an option');
//     recursiveAsyncReadLine();
//   });
// };

// recursiveAsyncReadLine();

/**
 * MENU library
 */
// menu
//   .addDelimiter('-', 40, 'Menu Principal')
//   .addItem('Option 1', () => console.log('klk'))
//   .addItem('option2', () => console.log('klk2'))
//   .addDelimiter('*', 40)
//   .customHeader(function () {
//     process.stdout.write('Tarea ISC417 - Ordenes de Compra\n');
//   })
//   .disableDefaultHeader()
//   .customPrompt(function () {
//     process.stdout.write('\n Introduzca la opcion que desea realizar:\n');
//   })
//   .disableDefaultPrompt()
//   .start();
