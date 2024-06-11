// ==================== Typescript Index Signatures, keyof Assertions & the Record Utility Type
// Index signatures are useful when you are creating objects but you don't know the exact names of the object keys
// but you do know the shape of the object and you can declare the type of the keys and the types of the value
// Also useful when you are trying to access the values dynamically

// Why you need an index signature
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);

// let prop: string = "Pizza";
// console.log(todaysTransactions[prop]); //Throws a Typescript error - We haven't created an index signature and we are trying to access it dynamically

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transact in transactions) {
//     total += transactions[transact]; //Throws a Typescript error - Dynamically accessing the value
//   }
//   return total;
// };

// console.log(todaysNet(todaysTransactions));

// index signature syntax
// interface TransactionObj {
//   readonly [index: string]: number;
// }

//Combining required properties with index signatures
interface TransactionObj {
  readonly [index: string]: number; //Allows to add other properties
  Pizza: number; //This and the other two are required
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Wakabi: 34,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]); //Throws a Typescript error - We haven't created an index signature and we are trying to access it dynamically

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transact in transactions) {
    total += transactions[transact]; //Throws a Typescript error - Dynamically accessing the value
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40; //Typescript throws an error because of readonly

// Non existing Properties
console.log(todaysTransactions["Wakabi"]); //Typescript doesn't give us an error and returns undefined because we used index signature which is a problem

// Optional Properties
interface Student {
  [key: string]: string | number | number[] | undefined; //undefined because one of the properties is optional
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Wakabi",
  GPA: 3.5,
  classes: [100, 200],
};

console.log(student.test); // No error because of index signature is added
