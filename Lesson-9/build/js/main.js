"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//Required and Readonly
const recordAssignment = (assign) => {
    //All required including verified
    // Send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88; //Typescript throws an error because it is readonly
// recordAssignment(assignGraded); //Typescript throws an error because it is missing verified
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })); //Typescript throws an error because it is missing verified
// Record - Most popular
const hexColorMap = {
    //Keys and values will be strings
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    // Keys - Student, Values - LetterGrades
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
