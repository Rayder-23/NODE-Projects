import inquirer from "inquirer";
let numgen = Math.floor(Math.random() * 10 + 1);
console.log(numgen);
let score = 0;
let guess = await inquirer.prompt([
    {
        message: "Welcome to the Number Guessing Game! Please enter your guess from a range on 1-10.",
        type: "number",
        name: "num",
    },
]);
if (guess.num > 10 || guess.num < 1) {
    console.log("Please enter a value in the given range of 1-10.");
}
else if (numgen == guess.num) {
    console.log("Correct! the number was " + numgen + "."), ++score;
}
else if (numgen != guess.num) {
    console.log("Incorrect, the number was " + numgen + "."), --score;
}
console.log("Score: " + score);
console.log("ROUND 2!");
numgen = Math.floor(Math.random() * 10 + 1);
console.log(numgen);
guess = await inquirer.prompt([
    {
        message: "Please enter your guess from a range on 1-10.",
        type: "number",
        name: "num",
    },
]);
if (guess.num > 10 || guess.num < 1) {
    console.log("Please enter a value in the given range of 1-10.");
}
else if (numgen == guess.num) {
    console.log("Correct! the number was " + numgen + "."), ++score;
}
else if (numgen != guess.num) {
    console.log("Incorrect, the number was " + numgen + "."), --score;
}
console.log("Score: " + score);
console.log("ROUND 3!");
numgen = Math.floor(Math.random() * 10 + 1);
console.log(numgen);
guess = await inquirer.prompt([
    {
        message: "Please enter your guess from a range on 1-10.",
        type: "number",
        name: "num",
    },
]);
if (guess.num > 10 || guess.num < 1) {
    console.log("Please enter a value in the given range of 1-10.");
}
else if (numgen == guess.num) {
    console.log("Correct! the number was " + numgen + "."), ++score;
}
else if (numgen != guess.num) {
    console.log("Incorrect, the number was " + numgen + "."), --score;
}
console.log("Your score is " + score + ".");
