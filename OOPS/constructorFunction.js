function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Mahindra", "Thar");
// console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a type of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

let masalaChai = new Tea("masala Chai");
// console.log(masalaChai.describe());

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let human = new Animal("Human");
// console.log(human.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must use a new keyword");
    }
    this.name = name;
}

let coffee = new Drink("coffee");
let chai = Drink("chai");