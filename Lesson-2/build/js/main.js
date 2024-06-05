"use strict";
// ==================== Basics of Typescript.
// string, number, boolean and any types
let myName = "Wakabi";
let myJob;
let meaningOfLife;
let isLoading;
let album;
// myName = 42; // Shows a typescript error
myJob = "Programmer";
myJob = "Designer";
meaningOfLife = 42;
isLoading = true;
album = 1994;
album = "Hot step";
album = true;
// Function
const sum = (a, b) => {
    return a + b;
};
sum(2, 4);
// Union type
let postId;
let isActive;
