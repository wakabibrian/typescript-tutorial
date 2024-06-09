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
