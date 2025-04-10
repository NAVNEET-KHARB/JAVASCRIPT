/*
Write a function named makeTea that take one parameter typeOfTea and returns a string like "making typeOfTea".
Store the result in a variable named teaOrder.
*/

// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }

// let teaOrder = makeTea("Green Tea");
// console.log(teaOrder);

/*
Create a function named orderTea that takes one parameter teaType. Inside this function create another function named confirmOrder that returns a message like "Order confrmed for chai".
Call confirmOrder from within he orderTea and return the result.
*/

// function orderTea(teaType){
//     function confirmOrder(){
//         return `Order confirmed for ${teaType}`;
//     }
//     return confirmOrder();
// }

// console.log(orderTea("Masala Chai"));

/*
Write an arrow function named calculateTotal that takes 2 parmaeters : price and quantity. The function should return the totalCost by multiplying price and quantity.
Store the result in a variable named totalCost.
*/

// const calculateTotal = (price, quantity) => {
//     return price*quantity;
// }
// const calculateTotal = (price,quantity) => price*quantity;

// let totalCost = calculateTotal(50,12);
// console.log(totalCost);

/*
Write a function named processTeaOrder that takes another function, makeTea as a parmeter and calls it with an argument "earl grey".
Return the result of calling makeTea.
*/

// function makeTea(typeOfTea){
//     return `Making ${typeOfTea} tea`;
// }

// function processTeaOrder(teaFunc){
//     return teaFunc("earl grey");
// }

// let order = processTeaOrder(makeTea);
// console.log(order);

/*
Write a function named createTeaMaker that returns another function. The returned function should take one parameter, teaType and return a message like "making green tea".
Store the returned function in a variable named teaMaker and call it with green tea.
*/

function createTeaMaker(name){
    return function (teaType){
        return `Making ${teaType} ${name}`;
    }
}

let teaMaker = createTeaMaker("Navneet");
let result = teaMaker("Green Tea");
console.log(result);