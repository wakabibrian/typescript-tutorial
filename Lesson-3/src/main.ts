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
