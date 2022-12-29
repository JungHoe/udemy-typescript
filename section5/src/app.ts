console.log("good");

class Department {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  describe(this: Department) {
    console.log("department :::" + this.name);
  }
}

const it = new Department("IT");

console.debug("🤔 ~ file: app.ts:12 ~ it", it);

it.describe();

const itCopy = { name: "dummy", describe: it.describe };

itCopy.describe();
