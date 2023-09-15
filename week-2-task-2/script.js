`use strict`

// Write a JavaScript function to check if a given number is even or odd.
function givenNumberIsEvenOrOdd(num) {
if (num % 2 === 0 ) {
return `its even`
  } else {
  return `its odd`
  }
}
console.log( givenNumberIsEvenOrOdd(1));
console.log( givenNumberIsEvenOrOdd(15));
console.log( givenNumberIsEvenOrOdd(18));
console.log( givenNumberIsEvenOrOdd(4));

// Write a JavaScript program to calculate the factorial of a number.
function factorialRecursive(n) {
  if (n === 0) {
  return 1;
  } else {
  return n * factorialRecursive(n - 1);
  }
}

const number = 5; 
const result = factorialRecursive(number);
console.log(`Factorial of ${number} is ${result}`);


// Write a JavaScript program to find the sum of all numbers in each array, excluding any numbers that are less than 0.
