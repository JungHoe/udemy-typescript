const combine = (a: number | string, b: number | string) => {
  let result: any;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
};

const combinedAges = combine(30, 26);

console.debug("🤔 ~ file: app.ts ~ line 9 ~ combinedAges", combinedAges);

const combinedNames = combine("Jung", "Hoe");

console.debug("🤔 ~ file: app.ts ~ line 17 ~ combinedNames", combinedNames);
