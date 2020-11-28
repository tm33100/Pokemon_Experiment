// Exercise 1: Uncomment the following lines of code cmd + k + u

//console.log(
//  "YAY! IF YOU CAN SEE THIS IN THE PREVIEW, PLEASE COMMENT ME AGAIN! CMD + K + C.",
// );

//////////////////////////////////////////////////////////////////////////

// Note: for all these exercises, please use console.log() to display the results and check Codesandbox console.

//////////////////////////////////////////////////////////////////////////

// Exercise 2: Write a console.log() statement and have it print your name
console.log("Tuuli täällä moikkaa");
//////////////////////////////////////////////////////////////////////////

// Exercise 3a: Write variables using either let or const for the following data types: string, number, boolean
let numero = 35;

// Exercise 3b: Write a string variable using const and display its value with console.log()
const tervehdys = "hei vaan, maailma!";
console.log(tervehdys);
//////////////////////////////////////////////////////////////////////////

// Exercise 4a: Sum two number variables, display the result with console.log()
let ika = 10;
let summa = numero + ika;
console.log(summa);
// Exercise 4b: Concatenate two strings variables together, display the result with console.log()
const mikaPaiva = " tanaan on lauantai";
console.log(tervehdys + mikaPaiva);
//////////////////////////////////////////////////////////////////////////

// Exercise 5a: Write an array of people's first name and an array (with the same number of items) of numbers for their age
var nimet = ["meri", "mimmi", "maija"];
var iat = ["12", "56", "6"];

// Exercise 5b: Read the number of the people's array with the property .length
console.log(nimet.length);
// Exercise 5c: Add a person to the people array with the method .push(), and do the same for their age
nimet.push("tuuli");
iat.push("666");
console.log(nimet.length);
console.log(iat.length);
// Exercise 5d: Write a custom more verbose version of the method .push()
nimet[nimet.length] = "Iiris";

// Steps: count the number of items you already have, add a new item in the next available index position

// Exercise 5e: Use the pop() method to remove and read the last element for both the people and age arrays

//////////////////////////////////////////////////////////////////////////

// Exercise 6a: Create a person object with firstName, lastName and age (remember that age is a number and not a string)

// Example of Car Object:
// const car = {"type": "Fiat", model: "500", "color": "white"};

// Exercise 6b: The person you just created has had a sudden birthday, add +1 to the age using operations

// Exercise 6c: Create an array of person objects like the one we created before (All people need to have firstName, lastName and age)

//////////////////////////////////////////////////////////////////////////

// Exercise 7: Create a number variable and determine whether it's bigger than 10 with an If statement

//////////////////////////////////////////////////////////////////////////

// Exercise 8: Create a string variable and determine if the value is either 'morning' 'afternoon' or 'evening' with a switch statement.

//////////////////////////////////////////////////////////////////////////

// Exercise 9: Show 10 times the word 'Hello'

//////////////////////////////////////////////////////////////////////////

// Exercise 10a: Create a function that will sum two parameters

// Exercise 10b: Create a function that takes an array as a parameter and displays all the elements in an array with their index number
// Example:
// const fruits = ['Banana', 'Apple', 'Lemon'];
// const listItems = (items) => {
//
// }
// console.log();
// Expected output:
// 0. Banana
// 1. Apple
// 2. Lemon
