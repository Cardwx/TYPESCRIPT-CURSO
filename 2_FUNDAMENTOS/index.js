"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.788787;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Lucas";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Cardoso";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof (a));
a = true;
console.log(a);
// 4 - ineference e annotation
let ann = "teste";
let inf = "Teste";
// inf = 1
// ann = 1
console.log("Testando");
// 5 - desafio 2
const n1 = 10;
const numberToString = n1.toString();
const printMyNumber = `Eu vou imprimir o número ${numberToString}`;
console.log(printMyNumber);
