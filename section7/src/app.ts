// const names: string[] = [];
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done done done");
  }, 5000);
});

promise.then((data) => {
  data.split(" ");
});
