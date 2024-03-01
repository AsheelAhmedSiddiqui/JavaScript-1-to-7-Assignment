/* 1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser. 
2. Repeat task1 for subtraction, multiplication, division &
modulus.*/

// Solution

/* var num1 = 8;
var num2 = 10;
document.write(`<h1>Sum of ${num1} and ${num2} is ${num1 + num2}</h1>`);
document.write(`<h1>Subtraction of ${num1} and ${num2} is ${num1 - num2}</h1>`);
document.write(
  `<h1>Multiplication of ${num1} and ${num2} is ${num1 * num2}</h1>`
);
document.write(`<h1>Division of ${num1} and ${num2} is ${num1 / num2}</h1>`);
document.write(`<h1>Modulus of ${num1} and ${num2} is ${num1 % num2}</h1>`); */

/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value

MATH EXPRESSIONS | JAVASCRIPT

Page 2 of 9

after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value */

/* // a. Declare a variable.
var myVariable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value.
var remainder = myVariable % 3;
document.write("Remainder after dividing the variable's value by 3 is: " + remainder + "<br>"); 

// l. Output : “The remainder is : 0”.
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");*/

/* 4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output: */

// Solution

/* var ticketPrice = 600;
var ticketQuantity = 5;
var totalTicketPrice = ticketPrice * ticketQuantity;
document.write(
  `<h1>Total cost to buy ${ticketQuantity} tickets to a moive is ${totalTicketPrice} PKR</h1>`
); */

/* 5. Write a script to display multiplication table of any
number in your browser. */

// Solution

var userInput = +prompt("Enter your any number to generate table");
console.log(userInput);
document.write(`<h1>Table of ${userInput}</h1>`);
document.write(`<h3>${userInput} X 1 = ${userInput * 1}</h3>`);
document.write(`<h3>${userInput} X 2 = ${userInput * 2}</h3>`);
document.write(`<h3>${userInput} X 3 = ${userInput * 3}</h3>`);
document.write(`<h3>${userInput} X 4 = ${userInput * 4}</h3>`);
document.write(`<h3>${userInput} X 5 = ${userInput * 5}</h3>`);
document.write(`<h3>${userInput} X 6 = ${userInput * 6}</h3>`);
document.write(`<h3>${userInput} X 7 = ${userInput * 7}</h3>`);
document.write(`<h3>${userInput} X 8 = ${userInput * 8}</h3>`);
document.write(`<h3>${userInput} X 9 = ${userInput * 9}</h3>`);
document.write(`<h3>${userInput} X 10 = ${userInput * 10}</h3>`);
