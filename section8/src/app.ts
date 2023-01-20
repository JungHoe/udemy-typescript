// 데코레이터는 일반적으로 대문자 펑션으로 시작함
// 데코레이터에 값을 주입하는것을 데코레이터 팩토리 함수라 하고,
// 데코레이터 팩토리 함수는 데코레이터 함수를 감사는 랩핑 함수다.
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor, "확인용");
  };
}

//인스턴스화 되지않아도 데코레이터가 실행된다.
@Logger("LOGGING-PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("constructor ...");
  }
}

// const personInstance = new Person();

// console.debug("🤔 ~ file: app.ts:11 ~ personInstance", personInstance);
