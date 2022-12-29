console.log("good");

class Department {
  name: string;
  private employees: string[] = [];
  constructor(initName: string) {
    this.name = initName;
  }
  describe(this: Department) {
    console.log("department :::" + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees.length);

    console.log(this.employees);
  }
}

const it = new Department("IT");

console.debug("🤔 ~ file: app.ts:12 ~ it", it);

it.describe();
it.addEmployee("Max");
it.addEmployee("Min");
it.printEmployee();

// const itCopy = { name: "dummy", describe: it.describe };

// itCopy.describe();
