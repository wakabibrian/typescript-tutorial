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

// Record - Most popular
const hexColorMap: Record<string, string> = {
  //Keys and values will be strings
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  // Keys - Student, Values - LetterGrades
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">; //Pick only properties that you want to use (studentId and grade)

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;
