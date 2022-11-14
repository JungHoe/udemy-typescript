var combine = function (a, b) {
    var result;
    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
console.debug("🤔 ~ file: app.ts ~ line 9 ~ combinedAges", combinedAges);
var combinedNames = combine("Jung", "Hoe");
console.debug("🤔 ~ file: app.ts ~ line 17 ~ combinedNames", combinedNames);
