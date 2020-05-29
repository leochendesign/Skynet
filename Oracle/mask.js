const readlineSync = require('readline-sync');
const chalk = require('chalk');

let t = 0;
showTime = (next) => {
    t = t + 1;
    console.log(t);
    if (t < 10) {
        setTimeout(() => {
            showTime(next);
        }, 1000);
    } else {
        setTimeout(() => {
            next();
        }, 1000);
    }
}

var lookMe = readlineSync.question(chalk.red.bold('> ') + chalk.black.bold.bgYellow(' Do you want to look my face? \n') + chalk.blue.bold('- '));
let areYouSure = null;

if (lookMe === 'yes') {
    console.log('----------------------------------------');
    console.log(' --------------------------------------');
    console.log('  ------------------------------------');
    console.log('   ---------++-------------++--------');
    console.log('    ------+-++-+---------+-++-+-----');
    console.log('     -------++-------------++------');
    console.log('      ----------------------------');
    console.log('       --------------------------');
    console.log('        ------+++++++++++++-----');
    console.log('         ----------------------');
    console.log('          --------------------');
    console.log('           ------------------');
    console.log('            ----------------');
    console.log('             --------------');
} else {
    let areYouSure = () => {
        return readlineSync.question(chalk.red.bold('> ') + chalk.black.bold.bgYellow(' Are you sure? \n') + chalk.blue.bold('- '));
    }

    showTime(areYouSure);
}

