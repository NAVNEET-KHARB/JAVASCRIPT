/*
Write a while loop that calculates sum of all numbers from 1 to 5 and stores the result in a variable named sum.
*/

// let sum = 0, i = 1;
// while(i<=5){
//     sum += i;
//     i++;
// }
// console.log(sum);

/*
Write a while loop that counts down from 5 to 1 and stores the numbers in a array named countdown.
*/

// let i = 5, countdown = [];
// while (i>0) {
//     countdown.push(i);
//     i--;
// }
// console.log(countdown);

/*
Write a do while loop that prompts a user to enter their favorite tea type until they enter stop.
Store each tea type in an array named teaCollection.
*/

// let teaCollection = [];
// let tea;

// do{
//     tea = prompt(`Enter your favorite tea (Enter "stop to exit")`);
//     if(tea !== "stop") teaCollection.push(tea);
// }while(tea !== "stop")
// console.log(teaCollection);

/*
Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total.
*/

// let i = 1, total = 0;
// do {
//     total += i;
//     i++;
// } while (i<=3);
// console.log(total);

/*
Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named multipliedNumbers.
*/

// let arr = [2,4,6], multipliedNumbers = [];
// for(let i = 0; i<arr.length; i++){
//     multipliedNumbers.push(arr[i]*2);
// }
// console.log(multipliedNumbers);

/*
Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"]  and store each city in a new array named cityList.
*/

let cities = ["Paris", "New York", "Tokyo", "London"], cityList = [];

for (let i = 0; i < cities.length; i++) {
    cityList.push(cities[i]);
}
console.log(cityList);