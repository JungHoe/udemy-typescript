// !를 추가하여 해당값이 null이 아님을 정의
// const button = document.querySelector("button");
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  // input의 value는 항상 string 타입이다.
  console.log(add(+input1.value, +input2.value));
});
