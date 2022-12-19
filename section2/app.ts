let userInput: unknown;
// let userInput: any;
// any 는 타입검사를 아얘안해버림

let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput;

// 추론이 가능한경우 unknown 보단 union을 권장
if (typeof userInput === "string") {
  userName = userInput;
}

// 절대적으로 반환하지않음 void와 비슷 그러나 충돌이나 오류의 가능성을 명시함
function generateError(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
}

generateError("somethings wrong", 404);
