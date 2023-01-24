// 데코레이터는 일반적으로 대문자 펑션으로 시작함
// 데코레이터에 값을 주입하는것을 데코레이터 팩토리 함수라 하고,
// 데코레이터 팩토리 함수는 데코레이터 함수를 감사는 랩핑 함수다.
function Logger(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor, "확인용");
  };
}
function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function (constructor: any) {
    console.log("run template");
    const hookElemnet = document.getElementById(hookId);
    const p = new constructor();
    if (hookElemnet) {
      hookElemnet.innerHTML = template;
      hookElemnet.querySelector("h1")!.textContent = p.name;
    }
  };
}
//인스턴스화 되지않아도 데코레이터가 실행된다.
// 데코레이터의 호출읜 위에서 부터 실행되지만
// 실질적 코드가있는 팩토리는 아래부터 우선적으로 실행된다.
@Logger("LOGGING-PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("constructor ...");
  }
}

// const personInstance = new Person();

// console.debug("🤔 ~ file: app.ts:11 ~ personInstance", personInstance);
// property decorator
function Logger4Product(target: any, PropertyName: string) {
  console.log("Property decorator");
  console.log(target, PropertyName);
}
// accessor decorator
function Logger4Product_accessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
//method decorator
function Logger4Product_method(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Logger4Product_Parameter(
  target: any,
  methodName: string,
  positiion: number
) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(methodName);
  console.log(positiion);
}

class Product {
  @Logger4Product
  title: string;
  private _price: number;
  constructor(t: string, _p: number) {
    this.title = t;
    this._price = _p;
  }
  @Logger4Product_accessor
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }
  @Logger4Product_method
  getPriceWithTax(@Logger4Product_Parameter tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);

const p2 = new Product("Book", 29);

function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMehtod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get: function () {
      const boundFn = originalMehtod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "This is Message!";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printInstance = new Printer();
const buttonDom = document.querySelector("button")!;
buttonDom.addEventListener("click", printInstance.showMessage);
