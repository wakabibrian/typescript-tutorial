// ==================== Type assertions and Type casting (Mean the same)
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
type One = string;
type Two = string | number;
type Three = "hello";

// Converting Types with assertions
// Convert to more or less specific
let a: One = "hello";
let b = a as Two; // Converted to a Less specific type (number or string);
b = "Wakabi";
b = 2;
let c = a as Three; // Converted to a more specific type ("hello")

//Angle bracket syntax instead of "as"
let d = <One>"World"; //d is of value "World" and is of type string
let e = <string | number>"World"; //not used much because they (d and e) cannot be used in react

// Narrowing return values with assertions
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + b + c;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Caution assertions allows mistakes
let nextVal: number = addOrConcat(2, 2, "concat") as number; //This is a mistake but it allows it - a string is returned

// Double casting and the unknown type
// 10 as string; //Throws a typescript error (Checks before converting)
10 as unknown as string; //Double casting with unknown type (But always avoid this just like the any type because it over rules typescript)

// DOM Selection Types (Assertions more useful here)
const img = document.querySelector("img") as HTMLImageElement; //More specific
const myImg = document.getElementById("#img"); //Less specific

img.src; //Throws an error if the assertion wasn't applied because of null
myImg.src;
