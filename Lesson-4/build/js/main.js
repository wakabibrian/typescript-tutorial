"use strict";
// ==================== Typescript Functions
// interface postId = typeOrNumber; //This can't work
// Literal types
let myName;
// myName = "Brian" // Throws a typescript error
myName = "Wakabi";
let username;
username = "Miracle";
// Functions
const add = (a, b) => {
    return a + b;
};
// Function with no return value
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add("a", 3)); // Throws a typescript error
// The function keyword
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
let multiply2 = function (c, d) {
    return c * d;
};
logMsg(multiply2(2, 2));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));
const sumAll2 = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll2(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// The never type - Functions that throw errors and infinite/endless loops
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; //If tis wasn't there it would be a never type
    }
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen!");
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString2 = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
