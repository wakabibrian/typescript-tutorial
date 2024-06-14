// ==================== Typescript Utility Types
// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //All required including verified
  // Send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  //Can not change these values
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 88; //Typescript throws an error because it is readonly
// recordAssignment(assignGraded); //Typescript throws an error because it is missing verified
recordAssignment({ ...assignGraded, verified: true }); //Typescript throws an error because it is missing verified