// Declare a variable to store the integer
// var num = -5; // You can change this value to test different numbers

// const { i, numbers } = require("./loops");

// // Check if the number is positive, negative, or zero
// if (num > 0) {
//   console.log("The number is positive.");
// } else if (num < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// let number = 10;
// if (number % 3 === 0) {
//   console.log("Then number is divisible by 3");
// } else {
//   console.log("The number is not divisible by 3");
// }
// let year = 2030;
// if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//   console.log("This is a Leap Year!");
// } else {
//   console.log("This is not a leap year");
// }

// let num1 = 40;
// let num2 = 87;
// if (num1 > num2) {
//   console.log(num1 + " is larger");
// } else num1 < num2;
// {
//   console.log(num2 + " is larger");
// }

// let age = 66;

// if (age < 5) {
//   console.log("Ticket price: Free");
// } else if (age >= 5 && age <= 12) {
//   console.log("Ticket price: $10");
// } else if (age >= 13 && age <= 17) {
//   console.log("Ticket price: $15");
// } else if (age >= 18 && age <= 60) {
//   console.log("Ticket price: $20");
// } else {
//   console.log("Ticket price: $10");
// }

// let char = "d";
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log(char + " is a Vowel");
// } else char >= "i" || char <= "z";
// {
//   console.log(char + " is a Costant");
// }

// let angle1 = 45;
// let angle2 = 60;
// let angle3 = 90;
// if (angle1 === 60 && angle2 === 60 && angle3 === 60) {
//   console.log("The triangle is Equilateral");
// } else if (angle1 === angle2 || angle2 === angle3 || angle3 === angle1) {
//   console.log("The triangel is Isosceles");
// } else {
//   console.log("The triangle is scalene");
// }

// let num = 55;
// if (num >= 90) {
//   console.log("Grade is : A");
// } else if (num >= 80) {
//   console.log("Grade is : B");
// } else if (num >= 70) {
//   console.log("Grade is : C");
// } else if (num >= 60) {
//   console.log("Grade is : D");
// } else if (num >= 50) {
//   console.log("Grade is : F");
// } else {
//   console.log("Negative Marks : Invalid Marks");
// }

// let num1 = 47;
// let num2 = 98;
// let num3 = 59;
// if (num1 <= num2 && num1 <= num3) {
//   console.log(num1 + " is smallest number");
// } else if (num2 <= num1 && num2 <= num3) {
//   console.log(num2 + " is a smallest number");
// } else {
//   console.log(num3 + " is a smallest number");
// }
// for (let i = 0; i >= numbers; i++) {
//   if (i % 5 === 0 || i % 3 === 0) {
//     console.log(i);
//   }
// }

// let number = 12345;
// let digits = 0;

// if (number < 0) {
//   number = -number;
// }

// if (number === 0) {
//   digits = 1;
// } else if (number < 10) {
//   digits = 2;
// } else if (number < 100) {
//   digits = 3;
// } else if (number < 1000) {
//   digits = 4;
// } else if (number < 10000) {
//   digits = 5;
// } else if (number < 100000) {
//   digits = 6;
// } else if (number < 1000000) {
//   digits = 7;
// } else if (number < 10000000) {
//   digits = 8;
// } else if (number < 100000000) {
//   digits = 9;
// } else {
//   digits = 10;
// }

// console.log("The number of digits is :", digits);

let num = 12321;
let strNum = num.toString();

if (strNum[0] === strNum[4] && strNum[1] === strNum[3]) {
  console.log(num + " is a Palindrome.");
} else {
  console.log(num + " is not a Palindrome.");
}
