//           Array of Students
const arrOfStudents = [
  { name: "John", age: 21, teacher: "Mike", marks: 7 },
  { name: "Jane", age: 20, teacher: "Mike", marks: 8 },
  { name: "Bob", age: 20, teacher: "Mike", marks: 6 },
  { name: "Peter", age: 21, teacher: "Sarah", marks: 5 },
  { name: "Kate", age: 22, teacher: "Sarah", marks: 4 },
  { name: "Alice", age: 21, teacher: "Sarah", marks: 10 },
  { name: "Mary", age: 23, teacher: "Bob", marks: 7 },
  { name: "Kate", age: 22, teacher: "Bob", marks: 8 },
  { name: "Bob", age: 20, teacher: "Bob", marks: 9 },
  { name: "Mary", age: 23, teacher: "Bob", marks: 10 },
  { name: "John", age: 21, teacher: "Bob", marks: 7 },
];
//  Total students in Array
const totalStudents = arrOfStudents.length;

//   Unique Teachers in Array
const uniqueTeacher = new Set(arrOfStudents.map((students) => students.teacher))
  .size;

//    Average age of all Students
const avgAge =
  arrOfStudents.reduce((sum, student) => sum + student.age, 0) / totalStudents;

//    Highest Marks of the Student
const highestMarks = Math.max(...arrOfStudents.map((student) => student.marks));

//   Oldest Student
const oldestStudent = arrOfStudents.reduce(
  (oldest, student) => (student.age > oldest.age ? student : oldest),
  arrOfStudents[0]
);

//      Marks less than or equal to 5
const studentWithLowMarrks = arrOfStudents.filter(
  (student) => student.marks <= 5
).length;

//      Average marks of students taught by "Mike"
const mikeStudents = arrOfStudents.filter(
  (student) => student.teacher === "Mike"
);
const avgMarkMike =
  arrOfStudents.reduce((sum, student) => sum + student.marks, 0) /
  mikeStudents.length;

//   Students have the name "Kate"
const kateCount = arrOfStudents.filter(
  (student) => student.name === "Kate"
).length;

//    All the students taught by "Bob"
const bobStudents = arrOfStudents
  .filter((student) => student.teacher === "Bob")
  .map((student) => student.name);

console.log("Total students : ", totalStudents);
console.log("Unique Teachers : ", uniqueTeacher);
console.log("Average Age of Students : ", avgAge);
console.log("The highest marks of Student : ", highestMarks);
console.log("The Oldest Student : ", oldestStudent);
console.log("Total Students with Low Marks : ", studentWithLowMarrks);
console.log("Average Marks of the Mike Students : ", avgMarkMike);
console.log("Total Students have the name Kate : ", kateCount);
console.log("Total Students  taught by Bob : ", bobStudents);

const heaviestFruitInfo = {
  name: heaviestFruit.name,
  color: heaviestFruit.color,
};
