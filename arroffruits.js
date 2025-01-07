const arrOfFruits = [
  { name: "apple", color: "red", weight: 100 },
  { name: "banana", color: "yellow", weight: 150 },
  { name: "pineapple", color: "yellow", weight: 200 },
  { name: "orange", color: "orange", weight: 120 },
  { name: "lemon", color: "yellow", weight: 130 },
  { name: "mango", color: "yellow", weight: 180 },
];
//      Total Fruits
const totalFruits = arrOfFruits.length;

//   Unique Fruits  in Array
const uniqueFruit = new Set(arrOfFruits.map((fruits) => fruits.color)).size;

//    Average Weight of all Fruits
const avgWeight =
  arrOfFruits.reduce((sum, fruits) => sum + fruits.weight, 0) / totalFruits;

//    Lightest Weight of the Fruits
const lightestFruit = arrOfFruits.reduce(
  (lightest, fruit) => (fruit.weight < lightest.weight ? fruit : lightest),
  arrOfFruits[0]
);

//    Hightest Weight of the Fruits
const heaviestFruit = arrOfFruits.reduce(
  (heaviest, fruit) => (fruit.weight < heaviest.weight ? fruit : heaviest),
  arrOfFruits[0]
);
//   const heaviest
console.log("Total fruits :", totalFruits);
console.log("Unique fruits :", uniqueFruit);
console.log("Average Weight of Fruits :", avgWeight);
console.log("Lightest Weight of the Fruit : ", lightestFruit);
console.log("Heaviest Fruit and color :");
