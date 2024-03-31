#! /usr/bin/env node

import inquirer from "inquirer";

let todos = []      //array
let condition = true

while (condition == true){
let addTask = await inquirer.prompt([
    {
        message: "What would you like to add to your ToDo List?",
        type: 'input',
        name: 'todo'
    },
    {
        message: "Would you like to add more?",
        type: 'confirm',
        name: 'addMore',
        default: "false"
    }
])
todos.push(addTask.todo)
condition = addTask.addMore
console.log(todos)
}