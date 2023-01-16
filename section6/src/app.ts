type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// & 연산자로 intersection 타입을 선언할수있다.
type ElevatedEmployee = Admin & Employee;
// interface 로 구현시 위 2가지 타입을 extends 받는것과 동일하다.

const e1: ElevatedEmployee = {
  name: "Junghoe",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinaable = string | number;
type Numeric = number | boolean;
// 객체 타입이아닌 union 타입간에 intersection 타입은
// 두 타입중 중복되는 타입만 허용한다.
type Universal = Combinaable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinaable, b: Combinaable) {
  // 유니온타입의 동작을 명확하게해주는 type 검사를
  // type Guard 라고 한다.
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
// 숫자를 매개변수로 넘겨도 ts는 number로 리턴될지 예상하지못함
// number or string 으로 넘어올것만 예상함 따라서 함수 overloading해야됨
const result = add(1, 5);

type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee) {
  console.log(`emp.name === ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`privileges === ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`startDate === ${emp.startDate}`);
  }
}
printEmpInfo({ name: "Max", startDate: new Date() });

class Car {
  drive() {
    console.log("driving...");
  }
}
class Truck {
  drive() {
    console.log("driving... Truck");
  }
  loadCargo(amount: number) {
    console.log("loading cargo ..." + amount);
  }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(veheicle: Vehicle) {
  veheicle.drive();
  // interface로 구현시 instanceof 는 사용할수없다
  // 왜why? interface는 자바스크립트로 컴파일되지않기때문
  if (veheicle instanceof Truck) {
    veheicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at spped : " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const division = document.getElementById("message-output")!;
// 1.<> 안에 타입을 명시하여 type casting 가능함
// const inputElement = <HTMLInputElement>document.getElementById("user-input")!;

// 2.뒤에 as 키워드를 사용하여 타입을 명시
const inputElement = document.getElementById("user-input")! as HTMLInputElement;
inputElement.value = "Good Day~";

// 3. if로 null 여부를 체크시
// const inputElement = document.getElementById("user-input");
// if(inputElement) (inputElement as HTMLInputElement).value = "Good Day~";

interface ErrorContainer {
  [keys: string]: string;
}

const errorManager: ErrorContainer = {
  email: "Not a valid Email!",
  userName: "user name is required",
};
