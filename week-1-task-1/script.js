`use strict`

// Write a JavaScript function that merges two arrays and removes all duplicate elements.Test data :var array1 = [1, 2, 3];var array2 = [2, 30, 1];


function mergeArrays(array1,array2) {
let mergedArray = array1.concat(array2)
let newArray = [...new Set(mergedArray)]
return newArray
}
array1=[1,2,3]
array2=[2,30,1]
const removesAllDuplicateElements = mergeArrays(array1,array2)
console.log(removesAllDuplicateElements);


// Write a JavaScript function to generate an array between two integers of 1 step length.Test Data :console.log(rangeBetween(4, 7)); [4, 5, 6, 7]console.log(rangeBetween(-4, 7));[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]


function rangeBetween(start,end) {
 const newArray = []
  if (start<=end) {
    for (let i = start; i <= end; i++) {
      newArray.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));


// .Write a JavaScript program to check if an array is a factor chain or not.A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false


function isFactorChain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      return false; // If any pair of consecutive elements doesn't satisfy the factor condition, return false
    }
  }
  return true; // If all consecutive elements satisfy the factor condition, return true
}
console.log(isFactorChain([2, 4, 8, 16, 32])); 
console.log(isFactorChain([2, 4, 16, 32, 64])); 
console.log(isFactorChain([2, 4, 16, 32, 68])); 

// Write a JavaScript program to find all the unique values in a set of numbers.Test Data :[1, 2, 2, 3, 4, 4, 5],[1, 2, 3, 4, 5],[1, -2, -2, 3, 4, -5, -6, -5].

function uniqueValues(numbers) {
  let num = [...new Set(numbers)]
  return num;
}
console.log(uniqueValues([1,2,3,3,4,5,5,6,6]));
console.log(uniqueValues([17,18,1,9,18,1,20,17]));
console.log(uniqueValues([10,20,30,30,50,20]));

// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

let numbers= [-3, 8, 7, 6, 5, -4, 3, 2, 1];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); 

// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog





// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Ray",
// class : "VI",
// rollNo : 12 }
let student = {
  name : "David Ray",
  class : "VI",
  rollNo : 12 }

  let result = Object.keys(student).length;

  console.log(`length of the given object :`, result);


  // Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]







// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


// function displayClock() {
//   const currentTime = new Date();
//   const hours = currentTime.getHours().toString().padStart(2, '0');
//   const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//   const seconds = currentTime.getSeconds().toString().padStart(2, '0');
//   console.log(`${hours}:${minutes}:${seconds}`);
// }
// displayClock();
// setInterval(displayClock, 10);


// 10. Write a JavaScript function to print all the methods in a JavaScript object.



