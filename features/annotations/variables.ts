const today = new Date();
today.getMonth(); // Ts will refer to date methods

const person = {
  age: 20,
};

class Color {}

const red = new Color();

//TYPE ANNOTATIONs
let apples: number = 5; // type of apple is assigned to number

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"]; // assign an array of strings
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car(); // refer to class Car

// Object literal
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

// Function
//(i: number) => void -> a function that takes an argument i (number) and return nothing (void). description of a function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
//1, function that returns the 'any' type
const json = '{"X": 10, "y":20}';
const cordinates: { x: number; y: number } = JSON.parse(json);
console.log(cordinates); // {x:10, y:20}

// const cordinates = JSON.parse(json) -> type: any

//2, When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3, variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // value can be a boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; 
  }
}
