import inquirer from "inquirer";

// 'Math.random() * max + min' is used to generate a random number and map it to a desired range
// Using 'Math.floor()' it is made into an integer
let numgen = Math.floor(Math.random() * 10 + 1);

console.log(numgen);

let guess = await inquirer.prompt([
  {
    message:
      "Welcome to the Number Guessing Game! Please enter your guess from a range on 1-10.",
    type: "number",
    name: "num",
  },
]);


if (guess.num > 10 || guess.num < 1) {
  console.log("Please enter a value in the given range of 1-10.");
} 
else if (numgen == guess.num) {
  console.log("Correct! the number was " + numgen);
} 
else if (numgen != guess.num) {
  console.log("Incorrect, the number was " + numgen);
}
