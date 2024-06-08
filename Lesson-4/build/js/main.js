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
