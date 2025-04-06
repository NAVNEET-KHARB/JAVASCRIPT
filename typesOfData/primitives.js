// Number
let num = 120;
let aNum = new Number(120);

// console.log(num);
// console.log(aNum);
// console.log(aNum.valueOf());
// console.log(typeof num);
// console.log(typeof aNum);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true);

// console.log(typeof isActive);
// console.log(typeof isReallyActive);

// null & undefined

let firstName;
let lastName = null;

// console.log(firstName);
// console.log(lastName);

// String

let myString = "Hello";
let userName = 'Navneet';
let oldGreet = myString + " " + userName;
let newGreet = `${myString} ${userName}!!!`;

// console.log(oldGreet);
// console.log(newGreet);

// Symbol

let sm1 = Symbol();
let sm2 = Symbol("Navneet");
let sm3 = Symbol("Navneet");
let sm4 = Symbol(12);

console.log(sm1);
console.log(sm2);
console.log(sm3);
console.log(sm4);
console.log(sm2 == sm3);