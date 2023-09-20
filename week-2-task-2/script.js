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

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const array1 = [1, 2, 3, 4, -5, -6, 7];
const array2 = [-1, -2, -3, -4, -5];
const array3 = [0, 0, 0, 0];

const sum1 = sumOfPositiveNumbers(array1);
const sum2 = sumOfPositiveNumbers(array2);
const sum3 = sumOfPositiveNumbers(array3);

console.log("Sum of positive numbers in array1:", sum1); 
console.log("Sum of positive numbers in array2:", sum2); 
console.log("Sum of positive numbers in array3:", sum3); 


// Write a JavaScript program to check if a given number, is a perfect square.
function isPerfectSquare(number) {
  const sqrt = Math.sqrt(number);
  return Number.isInteger(sqrt);
}
const number1 = 16;
const number2 = 25;
const number3 = 14;
console.log(number1, "is a perfect square:", isPerfectSquare(number1)); 
console.log(number2, "is a perfect square:", isPerfectSquare(number2)); 
console.log(number3, "is a perfect square:", isPerfectSquare(number3)); 


// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
function countVowels(str) {
  str = str.toLowerCase();
  
  let vowelCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
const inputString = 'The quick brown fox';
console.log("Number of vowels in the string:", countVowels(inputString));

// 