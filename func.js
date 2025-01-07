//              Q#01
// function calculateRectangleArea(length, width) {
//   return length * width;
// }
// let length = 7;
// let width = 6;
// console.log(
//   "the Area of Rectangle is : " + calculateRectangleArea(length, width)
// );

//             Q#02
// function reversestring(str) {
//   return str.split("").reverse().join("");
// }
// let originalstring = "You are Beautiful";
// console.log("The reverse string is: " + reversestring(originalstring));

//              Q#03
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// let number = 12;
// console.log("The factorail of " + number + " is " + factorial(number));

//            Q#04
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let number = 9;
// console.log("Is " + number + " a prime number? " + isPrime(number));

//           Q#05
// function generateFibonacci(numTerm) {
//   if (numTerm <= 0) {
//     return [];
//   } else numTerm === 1;
//   {
//     return [1];
//   }
// }
// let fibonacciSequence = [0, 1];
// for (let i = 2; i <= numTerm; i++) {}

//              Q#06
// function calculatePower(base, exponent) {
//   return base ** exponent;
// }
// let base = 5;
// let exponent = 2;
// console.log(
//   base +
//     " raise to the power of " +
//     exponent +
//     " is: " +
//     calculatePower(base, exponent)
// );

//            Q#07
// function findMaxNumber(numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }
//   let maxNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//       maxNumber = numbers[i];
//     }
//   }
//   return maxNumber;
// }
// let array = [56, 35, 76, 87, 43, 65];
// console.log("The maximum number in an array is: " + findMaxNumber(array));

//             Q#08
// function calculateAverage(number) {
//   if (number.length === 0) {
//     return null;
//   }
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum / number.length;
// }
// let array = [4, 6, 7, 5, 8, 3, 9, 34, 12, 76];
// console.log("The average of the array is " + calculateAverage(array));

//             Q#09
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let inputString = "Welcome to the world of Programming.";
console.log("The number of vowels in a string is: " + countVowels(inputString));
