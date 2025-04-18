// named exports

function add(a,b){
    return a+b;
}

let subtract = (a,b) => {
    return a-b;
}

function multiply(a,b){
    return a*b;
}

module.exports = {add,subtract,multiply};