const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let [, ...students] = input;
students = students.map((student) => {
  const [name, score] = student.split(" ");
  return [name, Number(score)];
});

students.sort((a, b) => a[1] - b[1]);
console.log(students);
