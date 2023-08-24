`use strict`;

// Write a JavaScript function to convert an amount into coins.
//  Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//  Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//  Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }

  return result;
}

const amount = 46;
const coinDenominations = [25, 10, 5, 2, 1];
const coinsUsed = amountToCoins(amount, coinDenominations);

console.log(coinsUsed);

// Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y, result = []) {
  if (x >= y - 1) {
    return result;
  } else {
    result.push(x + 1);
    return range(x + 1, y, result);
  }
}

const start = 2;
const end = 9;
const integersInRange = range(start, end);

console.log(integersInRange);

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const numbers = [-5, -2, -6, 0, -1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

alert("The largest number is: " + largest);

// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function computeExponent(base, exponent) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }

  return result;
}

const base = 8;
const exponent = 2;

const result = computeExponent(base, exponent);
console.log(`${base}^${exponent} = ${result}`);
`use strict`;

// Write a JavaScript function to convert an amount into coins.
//  Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//  Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//  Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }

  return result;
}

const amo = 46;
const coinDenomination = [25, 10, 5, 2, 1];
const coinsUse = amountToCoins(amo, coinDenomination);

console.log(coinsUsed);

// Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y, result = []) {
  if (x >= y - 1) {
    return result;
  } else {
    result.push(x + 1);
    return range(x + 1, y, result);
  }
}

const star = 2;
const en = 9;
const integersInRang = range(star, en);

console.log(integersInRang);

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const number = [-5, -2, -6, 0, -1];
let large = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

alert("The largest number is: " + largest);

// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function computeExponent(bas, expo) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }

  return result;
}

const bas = 8;
const expo = 2;

const res = computeExponent(bas, expo);
console.log(`${base}^${exponent} = ${result}`);
