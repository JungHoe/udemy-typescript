type Admin = {
  name: string;
  priviliges: string[];
};


type Employee = {
  name:string;
  startDate : Date;
}
// & 연산자로 intersection 타입을 선언할수있다.
type ElevatedEmployee = Admin & Employee;
// interface 로 구현시 위 2가지 타입을 extends 받는것과 동일하다.


const e1 : ElevatedEmployee = {
  name : 'Junghoe',
  priviliges: ['create-server'],
  startDate: new Date();
}

type Combinaable = string | number;
type Numeric = number | boolean
// 객체 타입이아닌 union 타입간에 intersection 타입은 
// 두 타입중 중복되는 타입만 허용한다.
type Universal = Combinaable & Numeric;