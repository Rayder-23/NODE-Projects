import inquirer from "inquirer";
const accountName = "John";
const accountPass = "1234";
let balance = Math.floor(Math.random() * 10000 + 1000);
console.log("Welcome to the RY ATM.");
console.log(" ");
console.log("Please enter your login credentials.");
let input = await inquirer.prompt([
    { message: "Name? (Hint: John)", type: "string", name: "name" },
    { message: "Password? (Hint: 1234)", type: "string", name: "pass" },
]);
if (accountName == input.name && accountPass == input.pass) {
    console.log("Welcome Mr. John");
    console.log("Your balance is " + balance);
}
else {
    console.log("Incorrect Credentials, please try again.");
}
console.log(" ");
let input2 = await inquirer.prompt([
    {
        message: "What would you like to do?",
        type: "list",
        name: "change",
        choices: ["Withdrawal", "Deposit"],
    },
    { message: "Amount?", type: "number", name: "amount" },
]);
console.log(" ");
let wit = (balance - input2.amount);
let dep = (balance + input2.amount);
if (input2.change == "Withdrawal" && input2.amount <= balance) {
    console.log("You're balance is now " + wit);
}
else if (input2.change == "Withdrawal" && input2.amount > balance) {
    console.log("You're withdrawal request is larger than your balance, please try again.");
}
else if (input2.change == "Deposit") {
    console.log("You're balance is now " + dep);
}
