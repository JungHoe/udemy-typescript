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

interface Ilength {
  length: number;
}

const countAndDescribe = <T extends Ilength>(element: T): [T, string] => {
  let text = "😍";
  if (element.length > 0) {
    text += ` X ${element.length}`;
  }
  return [element, text];
};

console.log(countAndDescribe("Hi man~"));

const keyAccessor = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

console.log(keyAccessor({ name: "Junghoe" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Test");

textStorage.addItem("Immutable");

textStorage.removeItem("Test");

console.log(textStorage.getItems());
