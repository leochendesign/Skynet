const readlineSync = require('readline-sync');
const chalk = require('chalk');
const cp = require('child_process');

var inputPath = readlineSync.question(chalk.red.bold('> ') + chalk.black.bold.bgYellow(' input the Path \n') + chalk.blue.bold('- '));

if (inputPath === 'no') {
    console.log('ok,bey');
} else {
    cp.exec('open ' + inputPath);
}

var todo = readlineSync.question(chalk.red.bold('> ') + chalk.black.bold.bgYellow(' put any key \n') + chalk.blue.bold('- '));

console.log('beybey');