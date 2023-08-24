`use strict`
// FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For numbers that are multiples of both 3 and 5, print "FizzBuzz."
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
  if (i % 3 === 0) {
      output += "Fizz";
    }

    if (i % 5 === 0) {
      output += "Buzz";
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
}
fizzBuzz();

// Prime Number: Write a function that determines if a given number is a prime number 

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }
  return true; 
}
console.log(isPrime(5)); 
console.log(isPrime(10)); 
console.log(isPrime(13)); 
console.log(isPrime(1)); 
console.log(isPrime(0)); 

// Reverse a String: Write a function that takes a string as input and returns the string reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); 
console.log(reverseString("JavaScript")); 
console.log(reverseString("12345")); 


// Title Case: Write a function that takes a sentence as input and returns the sentence in title case (the first letter of each word is capitalized).


function titleCase(sentence) {
  const words = sentence.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}
console.log(titleCase("hello world"));
console.log(titleCase("javascript is awesome")); 
console.log(titleCase("aBc DeF gHi")); 


