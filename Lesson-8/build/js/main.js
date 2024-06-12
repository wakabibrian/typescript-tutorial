"use strict";
// ==================== Typescript Generics
// Sometimes we don't know what types will be passed to our functions, interface, type alias etc
// Generics provides a type variables...
// Basic Example and syntax
const echo = (arg) => arg;
// isObject example
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
