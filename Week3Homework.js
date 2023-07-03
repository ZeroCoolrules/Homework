//Eric Bailey Homework for Week3

let pizzaToppings = ["pepperoni", "mushrooms", "onions", "sausage"];

function greetCustomer() {
  let toppings = "";
  for (let i = 0; i < pizzaToppings.length; i++) {
    toppings += pizzaToppings[i];
    if (i < pizzaToppings.length - 2) {
      toppings += ", ";
    } else if (i === pizzaToppings.length - 2) {
      toppings += ", and ";
    }
  }
  console.log(`Welcome to Pizza House, our toppings are: ${toppings}.`);
}

function getPizzaOrder(size, crust, ...toppings) {
  let toppingsList = "";
  for (let i = 0; i < toppings.length; i++) {
    toppingsList += toppings[i];
    if (i < toppings.length - 2) {
      toppingsList += ", ";
    } else if (i === toppings.length - 2) {
      toppingsList += ", and ";
    }
  }
  console.log(`One ${size} ${crust} pizza with ${toppingsList} coming up!`);
  return [size, crust, toppings];
}

function preparePizza(pizza) {
  console.log("...Cooking pizza...");
  return {
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2]
  };
}

function servePizza(pizza) {
  let toppings = "";
  for (let i = 0; i < pizza.toppings.length; i++) {
    toppings += pizza.toppings[i];
    if (i < pizza.toppings.length - 2) {
      toppings += ", ";
    } else if (i === pizza.toppings.length - 2) {
      toppings += ", and ";
    }
  }
  console.log(
    `Order up! Here's your ${pizza.size} ${pizza.crust} pizza with ${toppings}. Enjoy!`
  );
  return pizza;
}

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
greetCustomer();
const order = getPizzaOrder("large", "thick crust", "pepperoni", "mushrooms");
const pizza = preparePizza(order);
servePizza(pizza);
