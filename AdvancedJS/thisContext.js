const person = {
    name : "Navneet",
    greet(age,status){
        console.log(`Hi, I am ${this.name} and my age is ${age} and I'm in ${status}`);
    }
}
const person1 = {
    name : "Navneet",
    greet(...args){
        console.log(`Hi, I am ${this.name} and my age is ${args[0]} and I'm in ${args[1]}`);
    }
}

let myObj = {
    name : "John"
};

// person.greet(20,"Situationship");

// let greetFunction = person.greet;
// greetFunction();

const boundGreet = person.greet.bind(myObj,42,"Comitted relationship");
boundGreet();

const callGreet = person.greet.call(myObj,42,"Comitted relationship");

const applyGreet = person1.greet.apply(myObj,[42,"Comitted relationship"]);