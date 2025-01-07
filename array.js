// const number = [2, 4, 6, 7, 10, 7, 5, 15, 18, 20];
// let max = number[0];
// for (let i = 1; i < number.length; i++) {
//   if (number[i] > max) {
//     max = number[i];
//   }
// }
// console.log(max);

// let array = [29, 42, 63, 73, 97, 65, 83];
// let oddNum = 0;
// let evenNum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     evenNum++;
//   } else {
//     oddNum++;
//   }
// }
// console.log("Total even number:" + evenNum);
// console.log("Total odd number:" + oddNum);

// const array = [54, 67, 87, 97, 34, 65, 22];
// array.reverse();
// console.log(array);

// const array = [45, 23, 12, 87, 43, 45, 65];
// let sum = 0;
// let average = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
//   average = sum / array.length;
// }

// console.log(average);

const number = [2, 4, 6, 7, 10, 7, 5, 15, 18, 20];
let largest = number[0];
for (let i = 1; i < number.length; i++) {
  if (number[i] > largest) {
    largest = number[i];
  }
}
console.log(largest);

const num = [2, 4, 6, 7, 10, 7, 5, 15, 18, 20];
let smallest = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}
console.log(smallest);

// const arr = [3, 6, 7, 4, 2];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) sum = sum + i;
// }
// console.log(sum);

// let arr = [1, 2, 5, 6, 1];
// let isPalindrome = true;
// let length = arr.length;

// for (let i = 0; i < length / 2; i++) {
//   if (arr[i] !== arr[length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }
// if (isPalindrome) {
//   console.log("The array is Palindrome.");
// } else {
//   console.log("The array is not Palindrome.");
// }
