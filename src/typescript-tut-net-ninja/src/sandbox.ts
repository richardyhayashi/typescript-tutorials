//let greet: Function;

// Example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// Example 3
let logDetails: (obj: {name: string, age: number}) => void;

type Person = {name: string, age: number};

//logDetails = (ninja: { name: string; age: number }) => {
logDetails = (ninja: Person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
};