// const person: object = { object 로 정의할경우 제대로된 타입추론불가함 = person : {}
//   name: "junghoe",
//   age: 30,
// };
const person: {
  name: string;
  age: number;
} = {
  name: "junghoe",
  age: 30,
};

console.debug("🤔 ~ file: app.ts ~ line 6 ~ person", person);
console.log(person.name);
