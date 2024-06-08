// ==================== Typescript Functions

// Type Aliases - Representing our typescript type with a different name
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// interface postId = typeOrNumber; //This can't work
