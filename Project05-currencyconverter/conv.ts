#! /usr/bin/env node

import inquirer from "inquirer";

const currency:any = {
  USD: 1,           //usd as base currency, all rate are according to usd
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};


let userAns = await inquirer.prompt([
  {
    name: "from",
    message: "Choose the currency you wish to convert from.",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Choose the currency you wish to convert to.",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Please enter the amount you wish to convert.",
    type: "number",
  },
]);


let fromAmount = currency[userAns.from]     // currency['USD']
let toAmount = currency[userAns.to]         // currency['PKR']


let baseAmount = (userAns.amount / fromAmount)      // outputs amount in base currency(USD)

let convAmount = (baseAmount * toAmount)

console.log(`Your converted amount is, ${convAmount}.`)
