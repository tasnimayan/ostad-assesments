// 1) javascript For in loop

// Function to print the object property and value
function printObjectProperties(passedObject){
  if(Object.keys(passedObject).length != 0){
    for( let item in passedObject){
      console.log(item+": "+ passedObject[item]);
    }
  }
  else {
    console.log("Object is empty");
  }
}



// 2) javascript function returns

// Function to find maximum value of array
function findMaxNumber(numbers){
  if(numbers.length == 0){
    return null;
  }
  let maxNum = 0;
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] > maxNum){
      maxNum = numbers[i];
    }
  }
  return maxNum;
}



// 3) javascript Spread Operator

// Function to Merge two array
function mergeArrays(firstArray, secondArray){
  return [...firstArray, ...secondArray]
}



// 4) javascript arrow function

// Function to return square of a number
let calculateSquare = (a) => {
  return Math.pow(a, 2);
}



// 5) javascript es6 map

// Function to return double of the array elements
function doubleNumbers(numbers){
  return numbers.map( a => a*2)
}



// 6) javascript es6 static keyword

// Class static method
class MathUtility{
  static multiply(a, b){
    return a*b;
  }

}



// 7) javascript es6 class inheritance

// Animal class inherited by Dog class
class Animal{
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  }

  makeSound(){
    console.log(this.sound);
  }
}

class Dog extends Animal{
  constructor(name, sound){
    super(name, sound)
  }

  fetch(){
    console.log("Fetching the ball!")
  }
}



// 8) javascript es6 super keyword

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  introduce(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }

  introduce(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`)
  }

}



// -----------These are the test cases for each of the solution----------------
// -----------Take out one test case at a time and run------------------------- 
/*

// 1) javascript For in loop
const animal = {
  animalName: "Panda",
  animalColor: "Black & White",
  avgAge: 15,
}
printObjectProperties(animal);



// 2) javascript function returns
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null



// 3) javascript Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]



// 4) javascript arrow function
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64



// 5) javascript es6 map
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]



// 6) javascript es6 static keyword
console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16



// 7) javascript es6 class inheritance
const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"



// 8) javascript es6 super keyword
const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."
*/
