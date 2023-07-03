//Week2 Homework
let pizzaPlace = "Dude Where's My Pizza";
let numberOfToppings = 12;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}, where we offer ${numberOfToppings} toppings!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 !== 1) {
    console.log(i);
  }
}
