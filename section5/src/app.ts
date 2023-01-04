// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// type과 동일해 보이지만 interface는 객체의 구조를 설명하기 위해서만 사용한다
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}

  greet(this: Person, phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Person;

user1 = new Person("Max");

user1.greet("Hi I'm ");
