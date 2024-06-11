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
interface TransactionObj {
  [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
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
