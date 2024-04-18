#! /usr/bin/env node

import inquirer from "inquirer";

let condition = true
while (condition == true) {

const input: {
    Sentence: string;
}   = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence that you wish to count.",
    }
])

let words = input.Sentence.trim().split(" ")    // .trim removes whitespaces, 
// .split places all the words into an array and makes them each an element.
// space is added in (" ") otherwise it counts characters instead of words.

console.log(words)

console.log(`Your sentence contains ${words.length} words.`)


let input2 = await inquirer.prompt([
    {
        name: "continue",
        type: "confirm",
        message: "Do you wish to continue?",
        default: false
    }
])

condition = input2.continue
}