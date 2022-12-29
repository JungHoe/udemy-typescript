console.log("good");

class Department {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const department = new Department("IT");

console.debug("🤔 ~ file: app.ts:12 ~ department", department);
