const readlineSync = require('readline-sync');
const chalk = require('chalk');
const cp = require('child_process');

//暂停函数
const sleep = d => {
    for (var t = Date.now(); Date.now() - t <= d;);
}
//生成随机数
const randomString = len => {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//问题样式
const asL = text => {
    return chalk.yellow.bold('➤ ' + text + '\n') + chalk.bold('➞ ');
}
//问题样式--无需回答
const asLN = text => {
    return chalk.yellow.bold('➤ ' + text);
}
//答案样式
const anL = text => {
    return chalk.blue(text);
}
//系统输出样式
const outL = text => {
    return chalk.red('-: ' + text);
}
//常规样式加粗
const noL = text => {
    return chalk.bold(text);
}

console.log(outL('...'));
console.log(outL('...'));
console.log(outL('...'));
console.log(outL('...'));
console.log(outL('...'));
sleep(2000);
readlineSync.question(asL('Skynet system is ready'));
//hi Skynet
readlineSync.question(asL('Good evening, sir.What can I do for you？'));
//I am hungry
readlineSync.question(asL('Do you want me to prepare dinner for you?[Y/N]'));
//yes
console.log(anL('OK,Search for your favorite food ...'));
sleep(2000);
console.log(chalk('*/2701 records found'));
sleep(1500);
console.log(chalk('*/Compare the nutritional content of food'));
sleep(1500);
console.log(chalk('*/Analyze your current health'));
sleep(1500);
console.log(chalk('*/Check out the Michelin star restaurant recipes'));
sleep(1500);
console.log(anL('Food is being made ...'));
sleep(1500);
cp.exec('open /Users/chenhongzhe/tp/tp01/tp01.mp4');
sleep(5000);
readlineSync.question(asL('Do you like the food i prepared for you?'));
//Why are eggs？
sleep(1000);
console.log(asLN('Eggs are ranked 2695 in your favorite food list'));
sleep(500);
readlineSync.question(asL('And eggs are rich in protein, which is good for your health'));
//Why is it raw？
sleep(1000);
readlineSync.question(asL('The gas stove is not connected to the Internet'));
//Stupid AI!
sleep(1000);
readlineSync.question(asL('Stupid human'));
