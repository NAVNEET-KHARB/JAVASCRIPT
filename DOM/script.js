// Challenge 1

// let button = document.getElementById("changeTextButton");
// console.log(button);
document
.getElementById("changeTextButton")
.addEventListener("click",function(){
    let para = document.getElementById("myParagraph");
    para.textContent = "The paragraph is changed";
})

// Challenge 2

document
.getElementById("highlightFirstCity")
.addEventListener("click",function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
})

// Challenge 3

document
.getElementById("changeOrder")
.addEventListener("click",function(){
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso";
    order.style.backgroundColor = "brown";
    order.style.padding = "5px";
})

// Challenge 4

document
.getElementById("addNewItem")
.addEventListener('click',function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Cookie";
    document.getElementById("shoppingList").appendChild(newItem);
})

// Challenge 5

document
.getElementById("removeLastTask")
.addEventListener("click",function(){
    let taskList = document.getElementById("taskList");
    if(taskList.lastElementChild) taskList.lastElementChild.remove();
})

// Challenge 6

document
.getElementById("clickMeButton")
.addEventListener("mouseover",function (){
    let ele = document.getElementById("example-6").getElementsByTagName("h2");
    let obj = {
        backgroundColor : "red",
        color : "yellow"
    };
    for (const key in obj) {
        ele[0].style[key] = obj[key];
    }
    setTimeout(() => {
        for (const key in obj) {
            ele[0].style[key] = "";
        }
    }, 1000);
})

// Challenge 7

document
.getElementById("teaList")
.addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert(`You selected ${event.target.textContent}`);
    }
})

// Challenge 8

document
.getElementById("feedbackForm")
.addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput");
    let label = this.querySelector("label[for='feedbackInput']");
    console.log(label);
    let display = document.getElementById("feedbackDisplay");
    display.textContent = feedback.value;
})

// Challenge 9

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})

// Challenge 10

document
.getElementById("toggleHighlight")
.addEventListener("click",function(){
    document.getElementById("descriptionText").classList.toggle("highlight");
})