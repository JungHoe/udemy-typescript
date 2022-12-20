const buttonDom = document.body.querySelector("button")!; //!는 typescript에게 선택될거니 에러를 발생시키지 말라고 한다.

console.debug("🤔 ~ file: app.ts:3 ~ buttonDom", buttonDom);

buttonDom.addEventListener("click", () => {
  console.log("clicked");
});
