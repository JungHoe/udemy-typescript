const buttonDom = document.body.querySelector("button")!; //!는 typescript에게 선택될거니 에러를 발생시키지 말라고 한다.

console.debug("🤔 ~ file: app.ts:3 ~ buttonDom", buttonDom);

function add(num1: number, num2: number) {
  const sum = num1 + num2;
  if (sum > 0) {
    return sum;
  }
  return;
}

const clickHandler = (msg: string) => {
  // let userName = "Junghoe";
  console.log(msg);
};

buttonDom.addEventListener("click", clickHandler.bind(null, "you are welcome"));
