function add(a, b) {
    // 함수 뒤에 type을 정의하면 return type이 정의된다.
    return a + b;
}
function printResult(numb) {
    //return type을 void로 추론함
    console.debug("🤔 ~ file: app.ts:10 ~ pinrtResult ~ numb", numb);
}
// printResult(add(10, 5));
console.log(printResult(add(10, 5)));
