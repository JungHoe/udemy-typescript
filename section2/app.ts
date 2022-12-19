let userInput: unknown;
// let userInput: any;
// any 는 타입검사를 아얘안해버림

let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}
