console.log("good");

abstract class Department {
  //static member는 클래스 내부에서 thi접근할수없다.
  static fiscalYear = 2020;
  // private name: string;
  // private employees: string[] = [];
  // protected 제어자는 하위 개체에서도 접근 가능하도록 한다.
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {}
  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name };
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees.length);

    console.log(this.employees);
  }
}
class ItDepartment extends Department {
  // public admins :string[];
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //super 는 부모 생성자를 호출한다.
    // this.admins=admins;
  }
  describe(this: ItDepartment): void {
    console.log(this.id, " ::: It_id");
  }
}

class AcountingDepartment extends Department {
  private lastReport: string;
  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report Found");
  }
  set recentReport(text: string) {
    if (text.trim() !== "") {
      this.addReport(text);
      return;
    }
    throw new Error("invalid value");
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  // override 가능
  addEmployee(name: string): void {
    if (name === "Junghoe") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
  describe(this: AcountingDepartment): void {
    console.log(this.id, " ::: Accounting_id");
  }
}

const it = new ItDepartment("I001", ["Chan"]);

it.addEmployee("Maxi");
it.addEmployee("Minu");
it.describe();
console.log(it);
const accounting = new AcountingDepartment("A001", []);

accounting.addReport("Add Wrong Report");
// setter 를 사용할땐 값을 =로 주입한다.
// accounting.recentReport = "";
accounting.recentReport = "Test";
console.log(accounting.recentReport);

accounting.printReport();

accounting.addEmployee("Junghoe");
accounting.addEmployee("Max");
accounting.printEmployee();

const employee1 = Department.createEmployee("Junghoe");

console.debug(
  "🤔 ~ file: app.ts:95 ~ employee1",
  employee1,
  Department.fiscalYear
);
