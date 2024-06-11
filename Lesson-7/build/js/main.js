"use strict";
// ==================== Typescript Index Signatures, keyof Assertions & the Record Utility Type
// Index signatures are useful when you are creating objects but you don't know the exact names of the object keys
// but you do know the shape of the object and you can declare the type of the keys and the types of the value
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]); //Throws a Typescript error - We haven't created an index signature and we are trying to access it dynamically
const todaysNet = (transactions) => {
    let total = 0;
    for (const transact in transactions) {
        total += transactions[transact]; //Throws a Typescript error - Dynamically accessing the value
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
