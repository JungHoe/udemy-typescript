function add(a: number, b: number): number {
  // 함수 뒤에 type을 정의하면 return type이 정의된다.

  return a + b;
}

// function printResult0(numb: number): undefined {
//   return;
// }
function printResult(numb: number): void {
  //return type을 void로 추론함

  console.debug("🤔 ~ file: app.ts:10 ~ pinrtResult ~ numb", numb);
}

function addAndHandle(a: number, b: number, callBack: (c: number) => void) {
  const result = a + b;
  callBack(result);
}

// printResult(add(10, 5));
console.log(printResult(add(10, 5)));

// 컴파일시 문제가 없음 런타임시 오류발생함 any로 인식

// let combineValue;
// combineValue = add;
// combineValue = 5;
// console.log(combineValue(8, 8));

// 다른 2가지의 function일 경우 구분하지못함

// let combineValue: Function;
// combineValue = add;
// // combineValue = printResult;
// console.log(combineValue(8, 8));

let combineValue: (a: number, b: number) => number;
combineValue = add;
console.log(combineValue(8, 8));

addAndHandle(10, 20, (res) => {
  console.log(res);
  return res;
});
