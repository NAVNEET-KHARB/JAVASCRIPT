let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log(`computer`, computer.__proto__);
// console.log(lenovo);
// console.log(lenovo.cpu);
// console.log(`lenovo`, lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla`, tesla);
// console.log(`tesla`, tesla.tyres);
// console.log(`tesla`, Object.getPrototypeOf(tesla));
// console.log(Object.hasOwn('tyres'));

// devLen Method Call
// Array.prototype.devLen = function(){
//         let len = 0;
//         for(const _ of this) len++;
//         return len-1;
//     }
// let arr = [1,2,3];
// console.log(arr.length);
// console.log(arr.devLen());

// devLen Getter property
Object.defineProperty(Array.prototype, 'devLen', {
  get: function () {
    let len = 0;
    for (const _ of this) len++;
    return len - 1;
  },
});

let arr = [1,2,4];
console.log(arr.devLen);