"use strict";
// ==================== Typescript Index Signatures, keyof Assertions & the Record Utility Type
// Index signatures are useful when you are creating objects but you don't know the exact names of the object keys
// but you do know the shape of the object and you can declare the type of the keys and the types of the value
// Also useful when you are trying to access the values dynamically
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Wakabi: 34,
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
// todaysTransactions.Pizza = 40; //Typescript throws an error because of readonly
// Non existing Properties
console.log(todaysTransactions["Wakabi"]); //Typescript doesn't give us an error and returns undefined because we used index signature which is a problem
const student = {
    name: "Wakabi",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test); // No error because of index signature is added - potential error
// keyof assertions
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => console.log(student[key]));
// Record utility type vs index signatures
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
