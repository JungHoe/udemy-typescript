// const person: object = { object 로 정의할경우 제대로된 타입추론불가함 = person : {}
//   name: "junghoe",
//   age: 30,
// };
var person = {
    name: "junghoe",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [1, "author"]
};
// person.role.push("admin"); ㅈ바 스크립트여서 push 를 막을순없음 ㅠ.ㅠ
// person.role[1] = 10; 튜플 타입 인자 오류로 컴파일 에러발생
console.log(person.name);
var favoriteActivities;
favoriteActivities = ["tennis", "soccer"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var item = _a[_i];
    item.toUpperCase();
    console.log(item);
}
