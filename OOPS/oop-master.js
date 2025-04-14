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
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation

class BankAccount{
    #balance = 0;
    
    deposit(amount){
        this.#balance += amount;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let acc1 = new BankAccount();
// acc1.deposit(1000);
// console.log(acc1.getBalance());

// Abstraction

class CoffeeMachine{
    start(){
        // call db
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee(){
        // complex calc
        return `Brewing coffee`;
    }
    pressStartButton(){
        return `${this.start()} ${this.brewCoffee()}`;
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.pressStartButton());

// Polymorphism
class Bird{
    fly(){
        return `Flying ....`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin  = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

class Calculator{
    static sum = 0;
    static add(a,b){
        this.sum += (a+b);
        return a+b;
    }
}

// console.log(Calculator.add(2,4));
// console.log(Calculator.sum);
// console.log(Calculator.add(23,11));
// console.log(Calculator.sum);

// Getters & setters

class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0) throw new Error(`Invalid salary`);
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You aren't allowed to get the salary`;
    }

    set salary(value){
        if(value<0) console.error(`Salary can't be negative`);
        else this.#salary = value;
    }
}

let emp = new Employee("Alice",-50000);
console.log(emp.salary);
// emp.salary = -5555;