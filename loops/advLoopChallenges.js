/*
Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".
Store all the teas before "chai" in a new array named selectedTeas.
*/

// let teas = ["green tea", "black tea", "chai", "oolong tea"], selectedTeas = [];
// for(let i = 0; i<teas.length; i++){
//     if(teas[i] === "chai") break;
//     selectedTeas.push(teas[i]);
// }
// console.log(selectedTeas);

/*
Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
Store all the other cities in a new array named visitedCities.
*/

// let cities = ["London", "New York", "Paris", "Berlin"], visitedCities = [];
// for(let i = 0; i<cities.length; i++){
//     if(cities[i] === "Paris") continue;
//     visitedCities.push(cities[i]);
// }
// console.log(visitedCities);

/*
Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found.
Store the numbers before 4 in an array named smallNumbers.
*/

// let numbers = [1,2,3,4,5], smallNumbers = [];

// for (const num of numbers) {
//     if(num === 4) break;
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);

/*
Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
Store the other teas in an array named preferredTeas.
*/

// let teas = ["chai", "green tea", "herbal tea", "black tea"], preferredTeas = [];

// for (const tea of teas) {
//     if(tea === "herbal tea") continue;
//     preferredTeas.push(tea);
// }
// console.log(preferredTeas);

/*
Use a for-in loop to loop through an object containing city populations.
Stop the loop when population of "Berlin" is found and store all the previous cities' populations in a new object named cityPopulations.
let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
};
*/

// let citiesPopulation = {
//     "London" : 8900000,
//     "New York" : 8400000,
//     "Paris" : 2200000,
//     "Berlin" : 3500000
// };
// let cityPopulations = {};

// for(const city in citiesPopulation){
//     if(city === "Berlin") break;
//     cityPopulations[city] = citiesPopulation[city];
// }
// console.log(cityPopulations);

/*
Use a for-in loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named largeCities.
let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000
};
*/

// let worldCities = {
//     "Sydney" : 5000000,
//     "Tokyo" : 9000000,
//     "Berlin" : 3500000,
//     "Paris" : 2200000
// };
// let largeCities = {};

// for(const city in worldCities){
//     if(worldCities[city] < 3000000) continue;
//     largeCities[city] = worldCities[city];
// }
// console.log(largeCities);

/*
Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
Stop the loop when "chai" is found and store all the previous tea types in an array named availableTeas.
*/

// let teas = ["earl grey", "green tea", "chai", "oolong tea"], availableTeas = [];
// let stop = false;

// teas.forEach((tea) => {
//     if(stop) return;
//     if(tea === "chai"){
//         stop = true;
//         return;
//     }
//     availableTeas.push(tea);
// })

// console.log(availableTeas);

/*
Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in an array named traveledCities.
*/

// let cities = ["Berlin", "Tokyo", "Sydney", "Paris"], traveledCities = [];

// cities.forEach(city => {
//     if (city === "Sydney") return;
//     traveledCities.push(city);
// });

// console.log(traveledCities);

/*
Write a for loop that loops through the array [2,5,7,9].
Skip the value 7 and multiply the rest by 2.
Store the rest in a new array named doubledNumbers.
*/

// let numbers = [2,5,7,9], doubledNumbers = [];

// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] === 7) continue;
//     doubledNumbers.push(numbers[i]*2);
// }

// console.log(doubledNumbers);

/*
Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named shortTeas.
*/

let teas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"], shortTeas = [];

for (const tea of teas) {
    if(tea.length > 10) break;
    shortTeas.push(tea);
}

console.log(shortTeas);