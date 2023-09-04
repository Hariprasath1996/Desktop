`use strict`

// Write a JavaScript function to check whether a string is blank or not.
function isBlank(str) {
const trimmedStr = str.trim();
  return trimmedStr === '';
}
console.log(isBlank(''));    // true (blank)
console.log(isBlank('abc')); // false (not blank)


// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: 'webmaster'

function sortStringAlphabetically(str) { 
const charArray = str.split('');
const sortedArray = charArray.sort();
const sortedStr = sortedArray.join('');
return sortedStr;
}
const inputString = 'webmaster';
const sortedString = sortStringAlphabetically(inputString);
console.log(sortedString); 


// Write a program that takes an arbitrary number of strings and concatenates them using a rest parameter.
// Sample Input: const result = concatenateStrings("Hello", "world", "from", "JavaScript!");
function concatenateStrings(...strings) {
return strings.join(' ');
}
const result = concatenateStrings("Hello", "world", "from", "JavaScript!");
console.log(result); 


// Write a program that takes an arbitrary number of numbers and finds the maximum value using a rest parameter.Sample Input: const max = (10, 5, 30, 15, 25);
function findMax(...numbers) {
return Math.max(...numbers);
}
const max = findMax(10, 5, 30, 15, 25);
console.log(max); 


// Write a program that creates a deep clone of a nested array using the spread syntax.Sample Input: const original = [1, [2, 3], [4, [5, 6]]];

function deepCloneArray(arr) {
  const result = [];
  for (const item of arr) {
if (Array.isArray(item)) {
result.push(deepCloneArray(item));
} else {  
result.push(item);
    }
  }
  return result;
}

const original = [1, [2, 3], [4, [5, 6]]];
const cloned = deepCloneArray(original);
cloned[0] = 100;
cloned[1][0] = 200;
console.log(original); 
console.log(cloned);  


// Write a program that takes a function and an array of numbers, and spreads the array as function parameters.Sample Input: const numbers = [10, 20, 30];

function addNumbers(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];
const final = addNumbers(...numbers);
console.log(final); 

// A simple sorting algorithm that works by repeatedly stepping through the list to be sorted,Sample Data: [6,4,0, 3,-2,1]

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
      
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
const sampleData = [6, 4, 0, 3, -2, 1];
const sortedData = bubbleSort(sampleData);
console.log(sortedData); 

