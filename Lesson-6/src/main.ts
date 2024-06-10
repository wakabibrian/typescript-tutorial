// ==================== Typescript Classes
// Basic class
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;

//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// Visibility modifier - Less repetitive
class Coder {
  secondLang!: string; //Definite assignment assertion operator

  constructor(
    public readonly name: string,
    readonly music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I'm ${this.age}`;
  }
}

// Private and Protected examples
// Protected can be accessed inside of the class and derived/sub classes (extended to sub classes)
// Private can only be accessed inside of that class
const Wakabi = new Coder("Wakabi", "Rock", 34);
console.log(Wakabi.getAge());
// console.log(Wakabi.age); //Throws an error because it is private (can only be accessed within that class) but it is legal Javascript
// console.log(Wakabi.lang); //Throws an error because it is protected (can only be accessed within that class and subclasses) but it is legal Javascript

// Extends for subclasses
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`; //Lang is default
  }
}

const Britney = new WebDev("Mac", "Britney", "Lofi", 5);
console.log(Britney.getLang());
// console.log(Britney.age); //Throws an error because it is private (can only be accessed within class Coder)
// console.log(Britney.lang); //Throws an error because it is private (can only be accessed within class Coder and it's subclasses)

// Implements for Interfaces
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitarist");
console.log(Page.play("strums"));

// Static Class Members
class Peeps {
  static count: number = 0; //Applies to the class directly not the instantiation

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.getCount());

// Getters and Setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();

MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Zz Top"];
console.log(MyBands.data);
// MyBands.data = [3, 4]; //Throws a typescript error
