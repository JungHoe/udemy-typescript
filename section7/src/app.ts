// // const names: string[] = [];
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done done done");
//   }, 5000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// const merge = (a: object, b: object) => {
//   return Object.assign(a, b);
// };

// const mergedObj = merge({ name: "Max" }, { age: 30 });
// mergedObj.name; //typescript는 해당object를 추론할수없음

// const merge = <T, U>(a: T, b: U) => {
//   return { ...a, ...b };
// };

// const mergedObj = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 30 }
// );

const merge = <T extends object, U extends object>(a: T, b: U) => {
  return Object.assign(a, b);
};

const mergedObj = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
console.debug("🤔 ~ file: app.ts:36 ~ mergedObj", mergedObj);
