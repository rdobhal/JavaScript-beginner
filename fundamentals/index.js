'use strict';
// let js = 'amazing';
// if(js == 'amazing'){
//     alert('js is fun');
// }
// console.log(40 + 8 - 23 - 1);

// let age = 30;
// age = 31;

// birthYear = 1992;
// console.log(birthYear);

// const value = 8;
// const newValue = value - 3;
// const newValue2 = value - 1;

// console.log(newValue, newValue2);
// console.log(typeof value);

// let marksMass = 78;
// let marksHeight = 1.69;
// let johnsMass = 92;
// let johnsHeight = 1.95;

// function calculateBMI(m1,m2,h1,h2){
// let result ;
// let BMI1 = m1 / (h1 ** 2);
// let BMI2 = m2 / (h2 * h2);
// const markHeigherBMI = BMI1 > BMI2;
// if(markHeigherBMI){
//  result = `Mark's BMI ${BMI1} higher than John's!`
// }else{
//      result = `John's BMI higher than Mark's!`
// }
// console.log(result)
// }
// calculateBMI(marksMass,johnsMass,marksHeight,johnsHeight);
//  const firstName = 'Amir';
//  const lastName = 'Khan';
//  const birthYear = 1971;
//  const year = 2020;

//  const person = `I am ${firstName}
//   ${lastName}`
//  console.log(person)

// let year = '1991';
// console.log(year + 21);
// year = Number(year);
// console.log(year + 21);

// let n = 1 + '1';
// n = n - 1;
// console.log(n);

// let Dolphines = {
//     score1 : 97,
//     score2 : 112,
//     score3 : 101
// }

// let Koalas = {
//     score1 : 109,
//     score2 : 95,
//     score3 : 106
// }

// function calculateAverage(s1, s2, s3){
// let a = (s1 + s2 + s3);
// let result = a/3;
// return result;
// }
// let DolphinesAverage = calculateAverage(Dolphines.score1, Dolphines.score2, Dolphines.score3)
// let koalasAverage = calculateAverage(Koalas.score1, Koalas.score2, Koalas.score3);
// console.log(DolphinesAverage);
// console.log(koalasAverage);

// if(DolphinesAverage > koalasAverage){
//     console.log('Dolphines are having highest average 🏆')// win + .
// }else if(koalasAverage > DolphinesAverage){
//     console.log('Koalas are having highest average')
// }else{
//     console.log('Its a tie')
// }

// if(DolphinesAverage > koalasAverage && DolphinesAverage >= 100){
//     console.log('Dolphines are having highest average 🏆')// win + .
// }else if(koalasAverage > DolphinesAverage && koalasAverage >= 100){
//     console.log('Koalas are having highest average')
// }else{
//     console.log('Its a tie')
// }

// let billValue = {
//     bill1 : 275,
//     bill2 : 40,
//     bill3 : 430
// }

// function billCalculator(bill){
//let tip = (billValue.bill1 > 50 && billValue.bill1 < 300) ? (billValue.bill1 * 15)/ 100 : (billValue.bill1 * 20)/ 100;
// return tip;
// }
//billCalculator(billValue.bill1);

//  console.log(`The bill was ${billValue.bill1}, the tip was ${tip}, and the total value ${ billValue.bill1 + tip} `);

// function logger(){
//     console.log('calling.....')
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// let result = fruitProcessor(2,3);
// console.log(result);
// console.log(fruitProcessor(2,3));
// Arrow function

// const calcAge = function(birthYear){
//     return 2021 - birthYear;
// }
// // Arrow Function
// const calAge2 = birthYear => 2021 - birthYear;
// console.log(calcAge)

// const calcAverage = (s1,s2,s3)=>(s1 + s2 + s3)/3;

// const avgDolphines = calcAverage(44,23,71);
// const avgKoalas = calcAverage(85,54,41);
//  const checkWinner = (avgDolphines, avgKoalas)=>{
// if(avgDolphines > avgKoalas){
//     console.log(`Koalas win (${avgDolphines} Vs. ${avgKoalas})`)
// }else if(avgKoalas > avgDolphines){
// console.log(`Koalas win (${avgKoalas} Vs. ${avgDolphines})`)
// }else{
//     console.log('Its a tie');
// }
//  }
//  checkWinner(avgDolphines, avgKoalas);
// const billArray = [125, 555, 44];
// const calcTip =(bill) =>{
// let tip = (bill >= 50 && bill <= 300) ? (bill * 15)/ 100 : (bill* 20)/ 100;
// return tip;
// }
// const tipArray = [calcTip(billArray[0]),calcTip(billArray[1]),calcTip(billArray[2])];
// const total =[tipArray[0]+billArray[0],tipArray[1]+billArray[1],tipArray[2]+billArray[2]];
// console.log(billArray,tipArray,total);
// const arr = ['Jonas', 200-267, ['Harry','Potter']];
// console.log(arr);
// const Name = {
//     firstName : 'Harry',
//     lastName : 'Potter',
//     age : 23,
//     job : 'Teacher',
//     friends : ['Ron','Hermoine','Naville']
// }
// const newName = 'Name';
// console.log(Name['first' + newName])
// const interestedIn = prompt('What do you want to know about Harry?');
// console.log(Name[interestedIn])
// console.log(Name['firstName'])

// if(!Name[interestedIn]){
//     console.log('unavailable');
// }

// console.log(`${Name.firstName} has ${Name.friends.length} friends and his best friend is called ${Name.friends[0]}`)

// const person1 = {
//     firstName : 'Mark',
//     lastName : 'Miller',
//     height : 1.69,
//     mass : 78,
//     friends : ['Ron','Hermoine','Naville'],
//     calcBMI : function(){
//        this.bmi = this.mass/(this.height * this.height);
//        return this.bmi;
//     },
//     hasMagicalWand : true
// }
// const person2 = {
//     firstName : 'John',
//     lastName : 'Smith',
//     height : 1.95,
//     mass : 92,
//     friends : ['Ron','Hermoine','Naville'],
//     calcBMI : function(height, mass){
//         return mass/(height * height);
//     },
//     hasMagicalWand : true
// }
// if(person1.calcBMI > person2.calcBMI){
// console.log(`${person1.firstName} 's BMI (${person1.calcBMI(person1.height, person1.mass)}) is higher than ${person2.firstName} (${person2.calcBMI(person2.height, person2.mass)})`);
// }else{
//     console.log(`${person2.firstName} 's BMI (${person2.calcBMI(person2.height, person2.mass)}) is higher than ${person1.firstName} (${person1.calcBMI(person1.height, person1.mass)})`);
// }
// console.log(person1.calcBMI());
// console.log(person1.bmi)

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];
// const calcTip =(bill) =>{
//     let tip = (bill >= 50 && bill <= 300) ? (bill * 15)/ 100 : (bill* 20)/ 100;
//     return tip;
//     }
// for(let i = 0; i< 10; i++){
//          const tip = calcTip(bills[i]);
//          tips.push(tip);
//          totals.push(tip + bills[i] )
//     }
// console.log(bills, tips,totals);
// console.log();
