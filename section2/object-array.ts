// const person: object = { object 로 정의할경우 제대로된 타입추론불가함 = person : {}
//   name: "junghoe",
//   age: 30,
// };
// const person: //타입 추론이 명확히 가능할때는 타입을 명시하지 않는것이 가독성이 좋다.

// { name: string; age: number; hobbies: string[]; role: [number, string] } = {
//   name: "junghoe",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [1, "author"],
// };
// // person.role.push("admin"); ㅈ바 스크립트여서 push 를 막을순없음 ㅠ.ㅠ
// // person.role[1] = 10; 튜플 타입 인자 오류로 컴파일 에러발생

// const ADMIN = 0;
// const READ_ONLY_USER = 1;
// const AUTHOR_USER = 2;

// javascript enum 에서는 0부터 다음값을 순차적으로 증가시키고 최초값을 할당하면 해당값부터 증가시킴 ex) ADMIN=5 ..6 7
// 값을 임의로정의하면 별도로 사용도 가능함. ex) ADMIN= 5 ,AUTHOR_USER='author'
enum Role {
  ADMIN,
  READ_ONLY_USER,
  AUTHOR_USER,
}

const person = {
  name: "junghoe",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person.name);
let favoriteActivities: string[];
favoriteActivities = ["tennis", "soccer"];

for (const item of person.hobbies) {
  item.toUpperCase();
  console.log(item);
}

if (person.role === Role.ADMIN) {
  console.log("관리자입니다.");
}
