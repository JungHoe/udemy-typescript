var combine = function (a, b, resultType //리터럴타입
) {
    var result;
    if ((typeof a === "number" && typeof b === "number") ||
        resultType === "as-number") {
        result = +a + +b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
    //   if (resultType === "as-number") {
    //     return +result;
    //   }
    //   return result.toString();
};
var combinedAges = combine(30, 26, "as-number");
console.debug("🤔 ~ file: app.ts ~ line 9 ~ combinedAges", combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.debug("🤔 ~ file: app.ts ~ line 21 ~ combinedStringAges", combinedStringAges);
var combinedNames = combine("Jung", "Hoe", "as-text");
console.debug("🤔 ~ file: app.ts ~ line 17 ~ combinedNames", combinedNames);
