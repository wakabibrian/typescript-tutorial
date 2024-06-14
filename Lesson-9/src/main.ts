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

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;

type namesOnly = NonNullable<AllPossibleGrades>; //Excludes both null and undefined

// ReturnType
// type NewAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>; //This is useful for functions that you did not create - Automatically updates the return type

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with a return type of promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
