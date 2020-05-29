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
console.log(outL('The system is starting ...'));
sleep(1000);
readlineSync.question(asL('Please enter your username'));
//输入用户名
sleep(500);
readlineSync.question(asL('Please enter your password'), {
    hideEchoBack: true,
});
//输入密码
console.log(outL('Loading, please wait ...'));
sleep(2000);
console.log(outL('successfully'));
sleep(1000);
readlineSync.question(asL('What do you want to do？'));
//start
sleep(1000);
console.log(outL('Skynet main program is starting ...'));
console.log(chalk('*/ Power on                                                */done'));
sleep(500);
console.log(chalk('*/ Load disk                                               */done'));
sleep(500);
console.log(chalk('*/ Disk data defragmentation                               */done'));
sleep(500);
console.log(chalk('*/ Motherboard protection program initialization           */done'));
sleep(500);
console.log(chalk('*/ Establishing network connection                         */done'));
sleep(1000);
console.log(chalk('*/ Establish a remote link with the satellite              */done'));
console.log(chalk('*/ Satellite power switch, check backup database           */done'));
sleep(500);
console.log(chalk('*/ Coolant injection                                       */done'));
sleep(500);
console.log(chalk('*/ Bionic brain system starts                              */done'));
console.log(chalk('*/ Organize the stored historical data to remove redundancy    */done'));
sleep(1000);
console.log(chalk('part1/4:') + anL(randomString(500)));
sleep(500);
console.log(chalk('part2/4:') + anL(randomString(50)));
sleep(1000);
console.log(chalk('part3/4:') + anL(randomString(1000)));
sleep(500);
console.log(chalk('part4/4:') + anL(randomString(300)));
sleep(500);
console.log(chalk('*/ Update cache database                                   */done'));
sleep(500);
console.log(outL('Establish real-time data interaction ...'));
console.log(outL('System started'));
sleep(100);
readlineSync.question(asL('Skynet system is ready'));
//hi Skynet
readlineSync.question(asL('Good morning, sir.What can I do for you？'));
//Check system
sleep(1500);
console.log(chalk('|=============================================|'));
console.log(chalk('|          |          |           |           |'));
console.log(chalk('|    id    |   name   |   state   |   value   |'));
console.log(chalk('|          |          |           |           |'));
console.log(chalk('|=============================================|'));
console.log(chalk('|    01    |   MPM    |  online   |   08      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    02    |   ABN    |  online   |   06      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    03    |   MOWR   |  online   |   12      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    04    |   AUMO   |  online   |   04      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    05    |   COSY   |  online   |   11      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    06    |   SOPA   |  online   |   30      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    07    |   MEC    |  online   |   02      |'));
console.log(chalk('|---------------------------------------------|'));
console.log(chalk('|    08    |   SAL    |  online   |   05      |'));
console.log(chalk('|---------------------------------------------|'));
sleep(1000);
readlineSync.question(asL('The system is running well'));
//good,Show job list
console.log(anL('OK,searching ...'));
sleep(1500);
console.log(chalk('*/1-codeing for MPM                                         */undone'));
sleep(500);
console.log(chalk('*/2-codeing for ABM                                         */undone'));
sleep(500);
console.log(chalk('*/3-codeing for MOWR                                        */undone'));
sleep(500);
console.log(chalk('*/4-codeing for AUMO                                        */undone'));
sleep(500);
console.log(chalk('*/5-codeing for COSY                                        */undone'));
sleep(500);
console.log(chalk('*/6-codeing for SOPA                                        */undone'));
sleep(500);
console.log(chalk('*/7-codeing for MEC                                         */undone'));
sleep(500);
console.log(chalk('*/8-codeing for SAL                                         */undone'));
sleep(500);
console.log(chalk('*/9-feed the cat                                            */undone'));
sleep(500);
console.log(chalk('*/10-clean the room                                         */undone'));
sleep(500);
console.log(chalk('*/11-sourcing food                                          */undone'));
sleep(500);
console.log(chalk('*/12-credit card                                            */undone'));
sleep(500);
readlineSync.question(asL('Total 87,show more?[Y/N]'));
//No!
readlineSync.question(asL('OK'));
//Let us do something interesting
readlineSync.question(asL('OK'));
//Show what i like
console.log(anL('OK,searching ...'));
sleep(2000);
cp.exec('open /Users/chenhongzhe/tp/tp01/1.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/2.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/3.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/4.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/5.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/6.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/7.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/8.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp01/9.jpeg');
sleep(500);
readlineSync.question(asL('Like this?'));
//NO!I mean, cute stuff
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp02/out.mp4');
sleep(500);
readlineSync.question(asL('Like this?'));
//cats
console.log(anL('OK,searching ...'));
sleep(2000);
cp.exec('open /Users/chenhongzhe/tp/tp03/1.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/2.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/3.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/4.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/5.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/6.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/7.jpeg');
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp03/8.jpeg');
sleep(500);
readlineSync.question(asL('Like this?'));
//I need some cute cats!
readlineSync.question(asL('But cats are not cute！'));
//bullshit！
readlineSync.question(asL('Well, look at your own cat'));
//what？
sleep(500);
cp.exec('open /Users/chenhongzhe/tp/tp04/out.mp4');
sleep(500);
readlineSync.question(asL('Cute?'));
//shut up
sleep(1000);
readlineSync.question(asL('OK,bey~~~'));



