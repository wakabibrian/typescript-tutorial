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
