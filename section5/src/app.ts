console.log("good");

class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}
  describe(this: Department) {
    console.log(`department ::: ID=${this.id}  Name=${this.name}`);
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
}

class AcountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReport() {
    console.log(this.reports);
  }
}

const dept = new Department("D001", "dept");

console.debug("🤔 ~ file: app.ts:30 ~ dept", dept);

const it = new ItDepartment("I001", ["Chan"]);

it.addEmployee("Maxi");
it.addEmployee("Minu");
it.describe();
console.log(it);
const accounting = new AcountingDepartment("A001", []);
accounting.addReport("Add Wrong Report");

accounting.printReport();
