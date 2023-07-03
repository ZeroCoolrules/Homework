//Eric Bailey Homework for Week3

// Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["pepperoni", "mushrooms", "onions", "sausage"];
// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings
function greetCustomer() {
  let toppings = "";
  for (let i = 0; i < pizzaToppings.length; i++) {
    toppings += pizzaToppings[i];
    if (i < pizzaToppings.length - 1) {
      toppings += ", ";
    }
  }
  console.log(`Welcome to Pizza House, our toppings are: ${toppings}.`);
}
//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!
//outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  let toppingsList = "";
  for (let i = 0; i < toppings.length; i++) {
    toppingsList += toppings[i];
    if (i < toppings.length - 1) {
      toppingsList += ", ";
    }
  }
  console.log(`One ${size} ${crust} pizza with ${toppingsList} coming up!`);
  return [size, crust, toppings];
}

//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(pizza) {
  console.log("...Cooking pizza...");
  return {
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2]
  };
}

//Create a servePizza function that
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your
// large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

function servePizza(pizza) {
  let toppings = "";
  for (let i = 0; i < pizza.toppings.length; i++) {
    toppings += pizza.toppings[i];
    if (i < pizza.toppings.length - 1) {
      toppings += ", ";
    }
  }
  console.log(
    `Order up! Here's your ${pizza.size} ${pizza.crust} pizza with ${toppings}. Enjoy!`
  );
  return pizza;
}
// Figure out how to add "and" before the last topping in a
// list of toppings so when we list toppings it is more grammatically correct.
// You could create a listToppings function that stores the functionality, and
// call the function each time we list toppings in a function.

function listToppings(toppings) {
  if (toppings.length === 1) {
    return toppings[0];
  } else if (toppings.length === 2) {
    return `${toppings[0]} and ${toppings[1]}`;
  } else {
    let toppingsList = "";
    for (let i = 0; i < toppings.length; i++) {
      if (i < toppings.length - 2) {
        toppingsList += toppings[i] + ", ";
      } else if (i === toppings.length - 2) {
        toppingsList += toppings[i] + ", and ";
      } else {
        toppingsList += toppings[i];
      }
    }
    return toppingsList;
  }
}

// In getPizzaOrder, if an order is placed with no toppings, print a slightly
//  different message, like "One large thick crust cheese pizza coming up!"

// In getPizzaOrder, check the toppings the customer ordered against your list of available toppings

greetCustomer();
const order = getPizzaOrder("large", "thick crust", "pepperoni", "mushrooms");
const pizza = preparePizza(order);
servePizza(pizza);
