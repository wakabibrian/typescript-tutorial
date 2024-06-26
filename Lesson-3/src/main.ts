// ==================== Typescript Objects, Arrays, Tuples & Enums
// Arrays
let stringArr = ["One", "Hey", "Wakabi"]; // string only

let guitars = ["Strat", "Les Paul", 5150]; // string and number

let mixedData = ["EVH", 1984, true]; // string, number, boolean

// stringArr[0] = 54 //Typescript throws an error
stringArr[0] = "John";
// stringArr.push(42); //Typescript throws an error
stringArr.push("Hey");

guitars[0] = 1984;
guitars.unshift("Jim");
// guitars.unshift(true); //Typescript throws an error

// stringArr = guitars //Typescript throws an error
guitars = stringArr;
mixedData = guitars;
// guitars = mixedData //Typescript throws an error

let test = []; // any type
let bands: string[] = [];
bands.push("Van Halen");

// Tuple - specific with position (More strict than an array)
let myTuple: [string, number, boolean] = ["Wakabi", 245, true]; //Tuple

let mixed = ["Dave", 456, true]; //Array

mixed = myTuple;
// myTuple = mixed; //Typescript throws an error
// myTuple[3] = 42; //Typescript throws an error because position 3 is not available (tuple is strict)
myTuple[2] = false;
myTuple[1] = 34;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;

// Object Type Inference
const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

// exampleObj.prop2 = 42; //Typescript throws an error
exampleObj.prop2 = false; //Typescript throws an error

// Object type annotation
type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

// Object Assignment
let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

// evh.years = 40; //Typescript throws an error

// Optional Object Property
type Guitarist2 = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let jp2: Guitarist2 = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

// Object type as a parameter
const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(evh));

// Type vs Interface -> Works the same but preferably use Interface when defining a class
interface Guitarist3 {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let jp3: Guitarist3 = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

// Narrowing with optional properties
interface Guitarist4 {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let jp4: Guitarist4 = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist2 = (guitarist: Guitarist4) => {
  //   return `Hello ${guitarist.name.toUpperCase()}`; // Throws a typescript error. If name is optional during declaration... also make is optional
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return "Hello!";
};

// Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
