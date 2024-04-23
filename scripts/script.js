for (let index = 0; index <= 10; index++) {
  console.log(index);
}

console.log("======================");

for (let index = 55; index >= 20; index--) {
  console.log(index);
}

console.log("======================");

const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers);
const numbers_squared = [];
for (let index = 0; index < numbers.length; index++) {
  numbers_squared.push(numbers[index] ** 2);
}
console.log(numbers_squared);

console.log("======================");

let last_elem = numbers_squared.pop();
console.log(`last_elem = ${last_elem}`);

console.log("======================");

const user = {
  first_name: "Ivan",
  last_name: "Ivanov",
  age: 20,
  salary: 500,
};
console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`);