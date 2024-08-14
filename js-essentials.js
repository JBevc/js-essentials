// 0 - Bajar repo, hacer hola mundo console.log
//console.log("Hola mundo!");

//------------------------------------------------------------------------------
// 2 - Funciones:
// let result = 0;
// function add(firstOperator, secondOperator) {
//   result = firstOperator + secondOperator;
//   //return result;
// }
// add(4, 5);
// console.log(result);

// function subtract(firstOperator, secondOperator) {
//   result = firstOperator - secondOperator;
//   console.log(result);
// }
// subtract(5, 3);

// function divide(firstOperator, secondOperator) {
//   result = firstOperator / secondOperator;
//   console.log(result);
// }
//divide(8, 2);

// function multiply(firstOperator, secondOperator) {
//   result = firstOperator * secondOperator;
//   console.log(firstOperator,secondOperator);
// }

// -----------------------------------------------------------------------------
// 3 - Funcion
// function dress(temperature, isRaining) {
//   if (isRaining) {
//     console.log("llevar paraguas ☂️");
//   }
//   if (temperature < 10) {
//     console.log("ir en auto 🚗");
//   }
//   if (temperature > 30) {
//     console.log("ir de short 🩳");
//   }
//   if (temperature === 30) {
//     console.log("usar lentes 🕶");
//   }
// }
//dress(4, false);

// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

// 4 - Funcion
// function calculate(operation, firstOperator, secondOperator) {
//   switch (operation) {
//     case "add":
//       return add(firstOperator, secondOperator);
//     case "subtract":
//       return subtract(firstOperator, secondOperator);
//     case "divide":
//       return divide(firstOperator, secondOperator);
//     case "multiply":
//       return multiply(firstOperator, secondOperator);
//   }
// }
// calculate("divide", 10, 5);

// 5 - Funcion
// function eating(name, foods) {
//   for (let index = 0; index < foods.length; index++) {
//     console.log(`${name} is eating ${foods[index]}`);
//   }
// }
// eating("pepe", ["🍔", "🍟", "🍗"]);

// 6 - Funcion
// function finalCountDown(count) {
//   while (count > 0) {
//     console.log(count);
//     count--;
//   }
// }
// finalCountDown(7);

// 7 - Funcion
// function getGrade(score) {
//   switch (true) {
//     case 0 <= score && score <= 40:
//       return "D";
//     case 41 <= score && score <= 60:
//       return "R";
//     case 61 <= score && score <= 74:
//       return "B";
//     case 75 <= score && score <= 84:
//       return "BMB";
//     case 85 <= score && score <= 96:
//       return "MB";
//     case 97 <= score && score <= 100:
//       return "S";
//   }
// }
// let result = getGrade(70);
// console.log(result);

// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

// 8 - Funcion
function fillCart(person, articlesCollection) {
  person.cart = [...articlesCollection];
}

const cartArticlesCollection = [{ article: "👟", amount: 1, price: 25 }];
const person = { name: "Pepe", cart: [] };
fillCart(person, cartArticlesCollection);
console.log(person.cart);
// it should modify person's cart in order to add the the new collection of articles

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
