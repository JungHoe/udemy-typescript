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

function add(a: Combinaable, b: Combinaable) {
  // 유니온타입의 동작을 명확하게해주는 type 검사를
  // type Guard 라고 한다.
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

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
  if (veheicle instanceof Truck) {
    veheicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
