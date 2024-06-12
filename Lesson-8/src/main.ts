// ==================== Typescript Generics
// Sometimes we don't know what types will be passed to our functions, interface, type alias etc
// Generics provides a type variables...

// Basic Example and syntax
const echo = <T>(arg: T): T => arg;
