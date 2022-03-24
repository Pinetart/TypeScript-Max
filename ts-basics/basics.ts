// Primitives: number, strong, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Type Inference

let course: string | number = "React - The Complete Guide";

// Functions & Types

function add(a: number, b: number) {
  return a + b;
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedAwway = insertAtBeginning(demoArray, -1);
const stringAwway = insertAtBeginning(["a", "b", "c"], "d");
