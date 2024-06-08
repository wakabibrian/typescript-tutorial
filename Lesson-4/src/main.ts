// ==================== Typescript Functions

// Type Aliases - Representing our typescript type with a different name
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// interface postId = typeOrNumber; //This can't work

// Literal types
let myName: "Wakabi";
// myName = "Brian" // Throws a typescript error
myName = "Wakabi";

let username: "Wakabi" | "Brian" | "Miracle";
username = "Miracle";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

// Function with no return value
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add("a", 3)); // Throws a typescript error

// The function keyword
let subtract = function (c: number, d: number): number {
  return c - d;
};

// Function Type Aliases
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));
