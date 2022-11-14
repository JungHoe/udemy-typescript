// const person: object = { object 로 정의할경우 제대로된 타입추론불가함 = person : {}
//   name: "junghoe",
//   age: 30,
// };
var person = 
// : { 타입 추론이 명확히 가능할때는 타입을 명시하지 않는것이 가독성이 좋다.
//   name: string;
//   age: number;
//   hobbies: string[];
// }
{
    name: "junghoe",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
console.log(person.name);
var favoriteActivities;
favoriteActivities = ["tennis", "soccer"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var item = _a[_i];
    item.toUpperCase();
    console.log(item);
}
