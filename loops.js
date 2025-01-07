// const numbers = 20;
// for (let i = 0; i <= 15; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }
// function factorial(num) {
//   if (num < 0) {
//     console.log("Factorial is not defined for negative numbers.");
//     return;
//   }

//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   console.log(`The factorial of ${num} is ${result}`);
// }

// factorial(5);

// const number = 10;

// for (let i = 1; i <= 10; i++) {
//   const result = i * number;
//   console.log(`${number} * ${i} = ${result}`);
// }

// let num = 6785943;

// let str = num.toString();

// let rev_num = "";

// for (let i = 0; i < str.length; i++) {
//   rev_num = str[i] + rev_num;
// }

// console.log(rev_num);
let maxNum = 30;
let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

while (true) {
  let nextNum = num1 + num2;

  if (nextNum > maxNum) {
    break;
  }
  console.log(nextNum);

  num1 = num2;
  num2 = nextNum;
}
