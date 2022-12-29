console.log("good");

class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}
  describe(this: Department) {
    console.log(`department ::: ${this.id}__${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees.length);

    console.log(this.employees);
  }
}

const it = new Department("A001", "IT");

console.debug("🤔 ~ file: app.ts:12 ~ it", it);

it.describe();
it.addEmployee("Max");
it.addEmployee("Min");
it.printEmployee();

// const itCopy = { name: "dummy", describe: it.describe };

// itCopy.describe();
