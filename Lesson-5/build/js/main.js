"use strict";
// Converting Types with assertions
// Convert to more or less specific
let a = "hello";
let b = a; // Converted to a Less specific type (number or string);
b = "Wakabi";
b = 2;
let c = a; // Converted to a more specific type ("hello")
//Angle bracket syntax instead of "as"
let d = "World"; //d is of value "World" and is of type string
let e = "World"; //not used much because they (d and e) cannot be used in react
// Narrowing return values with assertions
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + b + c;
};
let myVal = addOrConcat(2, 2, "concat");
// Caution assertions allows mistakes
let nextVal = addOrConcat(2, 2, "concat"); //This is a mistake but it allows it - a string is returned
// Double casting and the unknown type
// 10 as string; //Throws a typescript error (Checks before converting)
10; //Double casting with unknown type (But always avoid this just like the any type because it over rules typescript)
// DOM Selection Types (Assertions more useful here)
const img = document.querySelector("img"); //More specific
const myImg = document.getElementById("#img"); //Less specific
const nextImg = document.getElementById("#img"); //Caution: This wont work in tsx files for react
img.src; // Use ! on myImg which is non null assertion
myImg.src; // Throws an error if the assertion wasn't applied because of null
nextImg.src;
