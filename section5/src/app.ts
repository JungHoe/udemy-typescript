// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// type과 동일해 보이지만 interface는 객체의 구조를 설명하기 위해서만 사용한다

// type addFunc = (a:number,b:number)=>number;
interface addFunc {
  (a: number, b: number): number;
}

let add: addFunc;

add = (a: number, b: number) => {
  return a + b;
};
interface Named {
  readonly name: string;
  outputName?: string; // 옵션으로 구현 여부 지정
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  constructor(public name: string) {}

  greet(this: Person, phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Person;

user1 = new Person("Max");

user1.greet("Hi I'm ");
