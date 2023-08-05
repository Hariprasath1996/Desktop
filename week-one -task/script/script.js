`use strict`
// Write a simple JavaScript program to join all elements of the following array into a string.
// Q(1)
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());

// Write a JavaScript function to find the difference between two arrays.
// Q(2)
function findArrayDifference(arr1, arr2) {
  let differenceArray = [];
  for (let i = 0; i < arr1.length; i++) {
    var element = arr1[i];
    
    if (arr2.indexOf(element) === -1) {
      differenceArray.push(element);
    }
  }
  return differenceArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 6, 7];
let difference = findArrayDifference(array1, array2);
console.log("Array difference:", difference); 


// Write a JavaScript program to find the most frequent item in an array.
// Q(3)
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequentItem(arr) {

  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    frequency[element] = (frequency[element] || 0) + 1;
  }
  let mostFrequentItem;
  let maxFrequency = 0;
  for (let item in frequency) {
    if (frequency[item] > maxFrequency) {
      mostFrequentItem = item;
      maxFrequency = frequency[item];
    }
  }

  return mostFrequentItem;
}

let mostFrequent = findMostFrequentItem(arr1);
console.log("Most frequent item:", mostFrequent);


// Write a JavaScript program to find all the unique values in a set of numbers.
// Q(4)

function findUniqueValues(numbers) {
  let uniqueValues = [];
  let visited = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (!visited[num]) {
      uniqueValues.push(num);
      visited[num] = true;
    }
  }

  return uniqueValues;
}
let testData1 = [1, 2, 2, 3, 4, 4, 5];
let testData2 = [1, 2, 3, 4, 5];
let testData3 = [1, -2, -2, 3, 4, -5, -6, -5];

let uniqueValues1 = findUniqueValues(testData1);
console.log("Unique values in testData1:", uniqueValues1);

let uniqueValues2 = findUniqueValues(testData2);
console.log("Unique values in testData2:", uniqueValues2);

let uniqueValues3 = findUniqueValues(testData3);
console.log("Unique values in testData3:", uniqueValues3);


// Write a JavaScript program to get the length of a JavaScript object.
// Q(5)
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function getObjectLength(obj) {
  var keysArray = Object.keys(obj);
  return keysArray.length;
}

var lengthOfStudentObject = getObjectLength(student);
console.log("Length of the student object:", lengthOfStudentObject);


// Write a bubble sort algorithm in JavaScript.
// Sample Data: [6,4,0, 3,-2,1]
// Q(6)

const data=[6,4,0, 3,-2,1]
console.log(data.sort());



