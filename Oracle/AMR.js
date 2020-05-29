var readlineSync = require('readline-sync');
chalk = require('chalk');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
  mask: chalk.magenta('\u2665')
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');

//测试颜色设置
var testColor = readlineSync.question(chalk.red.bold('> ') + chalk.black.bold.bgYellow('  What is this color?  '));
console.log('is ' + testColor + '?');