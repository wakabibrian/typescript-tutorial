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

// Function Interface
interface mathFunction2 {
  (a: number, b: number): number;
}

let multiply2: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply2(2, 2));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));

const sumAll2 = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(sumAll2(undefined, 3));

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

// The never type - Functions that throw errors and infinite/endless loops
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;

  while (true) {
    i++;
    if (i > 100) break; //If tis wasn't there it would be a never type
  }
};

const isNumber = (value: any) => {};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};
