// console.log("good");
// const userName: string = "junghoe";

// let age = 25;
// age = 27;

// // function add(a: number, b: number) {
// //   const result = a + b;
// //   return result;
// // }

// // function add(a: number, b: number) {
// //   var result = a + b;
// //   return result;
// // }

// // if (true) {
// //   var test = true;
// //   let test2 = true;
// // }
// // console.log(test);
// // console.log(test2);

// const add = (a: number, b: number = 0) => {
//   return a + b;
// };

// const printf = (output: string | number): void => {
//   console.log(output);
// };

// const buttonDom = document.body.querySelector("button")!;
// buttonDom.addEventListener("click", (e) => {
//   console.log(e);
// });
// printf(add(5));

// const hobbies = ["Sports", "Cooking"];
// const newHobby = ["Computer Games"];

// newHobby.push(...hobbies);

// console.log(newHobby);

// const person = {
//   name: "hong guy",
//   age: 16,
// };

// console.debug("🤔 ~ file: app.ts:50 ~ person", person);

// // const copyedPerson = person; pointer copy
// const copyedPerson = { ...person };

// console.debug("🤔 ~ file: app.ts:55 ~ copyedPerson", copyedPerson);

// console.log(person === copyedPerson);

// const add = (...numbers: number[]) =>
//   numbers.reduce((prev, curr) => prev + curr, 0);

// const addNumbers = add(1, 2, 3, 45, 1, 512, 5);

// console.debug("🤔 ~ file: app.ts:63 ~ addNumbers", addNumbers);

const numbers = [1, 23, 4, 5];

const [value1, value2] = numbers;

console.log(value1);
console.log(value2);

const person = {
  firstName: "hong guy",
  age: 16,
};

const { firstName, age } = person;

console.debug("🤔 ~ file: app.ts:80 ~ age", age);

console.debug("🤔 ~ file: app.ts:80 ~ firstName", firstName);
