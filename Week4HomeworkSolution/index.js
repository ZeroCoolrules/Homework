// Get Button Element
let button = document.getElementById("myButton");

//Add an event listner to the button
button.addEventListener("click", function(){
    alert("Button Clicked!");
});

// Get the button Element
let myButton2 = document.getElementById("myButton2");

// Add an event listener to the button for the click event
myButton2.addEventListener("click", function() {
    alert("Button Clicked Again");
});
//Add an event listener to the button for the mouseover event 
myButton2.addEventListener("mouseover", function() {
    console.log("Mouse Over!");
});

///Define an Array of Numbers 
let numbers = [1, 2, 3, 4, 5];

//Use the map() method to create a new array with each number multiplied by 2
let doubleNumbers = numbers.map(function(number){
    return number * 2;
});

// Use the filter() method to create a new array with only the even numbers 
let evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});

// Use the reduce() method to calculate the sum of all the numbers
let sum = numbers.reduce(function(total, number){
    return total + number;
}, 0);

// Get the List Element
let list = document.getElementById("myList");

// Add each number to the list as a new item
doubleNumbers.forEach(function(number){
    let item = document.createElement("li");
    item.textContent = number;
    list.appendChild(item);
});


// Log the even numbers and the sum to console
console.log(evenNumbers);
console.log(sum);