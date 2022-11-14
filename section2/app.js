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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
    Role[Role["AUTHOR_USER"] = 2] = "AUTHOR_USER";
})(Role || (Role = {}));
var person = {
    name: "junghoe",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(person.name);
var favoriteActivities;
favoriteActivities = ["tennis", "soccer"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var item = _a[_i];
    item.toUpperCase();
    console.log(item);
}
if (person.role === Role.ADMIN) {
    console.log("관리자입니다.");
}
