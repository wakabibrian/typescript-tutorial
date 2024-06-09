// ==================== Type assertions and Type casting (Mean the same)
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
type One = string;
type Two = string | number;
type Three = "hello";

// Converting Types with assertions
// Convert to more or less specific
let a: One = "hello";
let b = a as Two; // Converted to a Less specific type (number or string);
b = "Wakabi";
b = 2;
let c = a as Three; // Converted to a more specific type ("hello")
