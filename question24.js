"use strict";
// Question 24 
let string1 = 'Hello';
let string2 = 'World';
let lowerCaseString = 'javascript';
let num1 = 10;
let num2 = 5;
let fruits = ['apple', 'banana', 'cherry'];
let colors = ['red', 'green', 'blue'];
console.log("String Equality Test (True):");
console.log(string1 == 'Hello'); // True
console.log("String Inequality Test (False):");
console.log(string1 != string2); // False
console.log("Lowercase Test (True):");
console.log(lowerCaseString.toLowerCase() === 'javascript'); // True
console.log("Greater Than Test (True):");
console.log(num1 > num2); // True
console.log("Less Than or Equal To Test (False):");
console.log(num2 <= num1); // False
console.log("Logical AND Test (True):");
console.log(num1 > num2 && string1 === 'Hello'); // True
console.log("Logical OR Test (True):");
console.log(num1 < num2 || string1 === 'Hello'); // True
console.log("Array Inclusion Test (True):");
console.log(fruits.includes('cherry')); // True
console.log("Array Exclusion Test (False):");
console.log(!colors.includes('red')); // False
