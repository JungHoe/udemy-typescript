type Combineable = number | string;
const combine = (
  a: Combineable,
  b: Combineable,
  resultType: "as-number" | "as-text" //리터럴타입
) => {
  let result: any;
  if (
    (typeof a === "number" && typeof b === "number") ||
    resultType === "as-number"
  ) {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   }
  //   return result.toString();
};

const combinedAges = combine(30, 26, "as-number");

console.debug("🤔 ~ file: app.ts ~ line 9 ~ combinedAges", combinedAges);

const combinedStringAges = combine("30", "26", "as-number");

console.debug(
  "🤔 ~ file: app.ts ~ line 21 ~ combinedStringAges",
  combinedStringAges
);

const combinedNames = combine("Jung", "Hoe", "as-text");

console.debug("🤔 ~ file: app.ts ~ line 17 ~ combinedNames", combinedNames);
