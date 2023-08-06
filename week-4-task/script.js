`use strict`

// Given an array of integers, rearrange the elements in a way that all the even numbers come before the odd numbers.

function rearrangeEvenOdd(arr) {
  let evenArray = [];
  let oddArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }

  return evenArray.concat(oddArray);
}
const inputArray = [3, 8, 2, 1, 6, 4, 5, 7];
const rearrangedArray = rearrangeEvenOdd(inputArray);
console.log(rearrangedArray);

// Write a function to find the missing number in an array of integers from 1 to N.
function findMissingNumber(arr, N) {
  let sumOfIntegers = (N * (N + 1)) / 2;
  let sumOfArray = arr.reduce((acc, curr) => acc + curr, 0);
  return sumOfIntegers - sumOfArray;
}
const array = [1, 2, 4, 6, 3, 7, 8];
const N = 8;
const missingNumber = findMissingNumber(array, N);
console.log(missingNumber); 



// Implement a function that returns the longest word in a sentence.
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
const inputSentence = "The quick brown fox jumps over the lazy dog";
const longest = longestWord(inputSentence);
console.log(longest); 


// . Write a function to check if a given string contains only unique characters (no repeating characters).

function hasUniqueCharacters(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false; // Found a repeating character
    }
    charSet.add(char);
  }
  return true; 
}
const inputString1 = "abcdefg";
const inputString2 = "hello";
console.log(hasUniqueCharacters(inputString1)); 
console.log(hasUniqueCharacters(inputString2)); 


// Given an array of integers and a target sum, find the index of two numbers that add up to the target sum.

function findTwoSum(arr, targetSum) {
  const numToIndexMap = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = targetSum - arr[i];
    if (complement in numToIndexMap) {
      return [numToIndexMap[complement], i];
    }
    numToIndexMap[arr[i]] = i;
  }
  return null; 
}
const Number =  [2, 7, 11, 15];
const targetSum = 9;
const indices = findTwoSum(inputArray, targetSum);
console.log(indices);
