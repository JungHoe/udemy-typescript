var userInput;
// let userInput: any;
// any 는 타입검사를 아얘안해버림
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput;
// 추론이 가능한경우 unknown 보단 union을 권장
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
generateError("somethings wrong", 404);
