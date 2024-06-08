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

const logMsg = (message: string): void => {
  console.log(message);
};
