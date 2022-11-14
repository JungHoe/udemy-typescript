var add = function (a, b, showResult, phrase) {
    //   console.log(typeof a); vanilla script
    var result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
};
var number1 = 5;
// const number1 = "5"; // --> 52.8
var number2 = 2.8;
var printResult = true;
var prefix = "결과는 ===>";
add(number1, number2, printResult, prefix);
