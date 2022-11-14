const add = (a: number, b: number, showResult: boolean, phrase: string) => {
  //   console.log(typeof a); vanilla script
  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
};

const number1 = 5;
// const number1 = "5"; // --> 52.8
const number2 = 2.8;

const printResult = true;
const prefix = "결과는 ===>";
add(number1, number2, printResult, prefix);
