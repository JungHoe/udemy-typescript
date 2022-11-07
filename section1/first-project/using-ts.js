// !를 추가하여 해당값이 null이 아님을 정의
// const button = document.querySelector("button");
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // input의 value는 항상 string 타입이다.
    console.log(add(+input1.value, +input2.value));
});
