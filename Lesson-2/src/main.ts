// ==================== Basics of Typescript.
// string, number, boolean and any types
let myName: string = "Wakabi";
let myJob: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

// myName = 42; // Shows a typescript error
myJob = "Programmer";
myJob = "Designer";
meaningOfLife = 42;
isLoading = true;
album = 1994;
album = "Hot step";
album = true;

// Function
const sum = (a: number, b: number): number => {
  return a + b;
};

sum(2, 4);

// Union type
let postId: number | string;
let isActive: number | boolean;

// When you are not sure of the type - hover on the variable to get to know the type
let re: RegExp = /\w+/g;
