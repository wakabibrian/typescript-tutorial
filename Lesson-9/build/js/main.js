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
