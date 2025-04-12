let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start : function(){
        return `${this.make} car started in ${this.year}`;
    }
}

// console.log(car.start());

function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} speaks`;
}

Array.prototype.navneet = function(){
    return `Custom method ${this}`;
}

let arr = [1,2,3];
// console.log(arr.navneet());

class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Mahindra","Thar ROXX");
console.log(myCar.start());
console.log(myCar.drive());