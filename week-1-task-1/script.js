`use strict`

//1. Write a JavaScript function that merges two arrays and removes all duplicate elements.Test data :var array1 = [1, 2, 3];var array2 = [2, 30, 1];


function mergeArrays(array1,array2) {
let mergedArray = array1.concat(array2)
let newArray = [...new Set(mergedArray)]
return newArray
}
array1=[1,2,3]
array2=[2,30,1]
const removesAllDuplicateElements = mergeArrays(array1,array2)
console.log(removesAllDuplicateElements);


//2. Write a JavaScript function to generate an array between two integers of 1 step length.Test Data :console.log(rangeBetween(4, 7)); [4, 5, 6, 7]console.log(rangeBetween(-4, 7));[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]


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


//3 .Write a JavaScript program to check if an array is a factor chain or not.A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) 
// ([2, 4, 16, 32, 64]) 
// ([2, 4, 16, 32, 68]) 


function isFactorChain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      return false; 
    }
  }
  return true; 
}
console.log(isFactorChain([2, 4, 8, 16, 32])); 
console.log(isFactorChain([2, 4, 16, 32, 64])); 
console.log(isFactorChain([2, 4, 16, 32, 68])); 

//4. Write a JavaScript program to find all the unique values in a set of numbers.Test Data :[1, 2, 2, 3, 4, 4, 5],[1, 2, 3, 4, 5],[1, -2, -2, 3, 4, -5, -6, -5].

function uniqueValues(numbers) {
  let num = [...new Set(numbers)]
  return num;
}
console.log(uniqueValues([1,2,3,3,4,5,5,6,6]));
console.log(uniqueValues([17,18,1,9,18,1,20,17]));
console.log(uniqueValues([10,20,30,30,50,20]));

//5. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

let numbers= [-3, 8, 7, 6, 5, -4, 3, 2, 1];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); 

//6. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog

String.prototype.substring = function() 
{
let subset = [];
  for (let i = 0; i< this.length; i++) 
  {
    for (let a = i+1; a<this.length+1; a++) 
    {
      subset.push(this.slice(i,a));
    }
  }
  return subset;
};

console.log("dog".substring());




//7. Write a JavaScript program to get the length of a JavaScript object.
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


  //8. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]

function bubbleSort(a)
{
    let swapping;
    let n = a.length-1;
    let x=a;
    do {
        swapping = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
              let temp = x[i];
              x[i] = x[i+1];
              x[i+1] = temp;
              swapping = true;
            }
        }
        n--;
    } while (swapping);
return x; 
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));






//9. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


function displayClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  console.log(`${hours}:${minutes}:${seconds}`);
}
displayClock();
setInterval(displayClock, 1);


// 10. Write a JavaScript function to print all the methods in a JavaScript object.

function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function(property) {
    return typeof obj[property] == "function";
  });
} 
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));
function all_properties(obj) 
{
return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));


