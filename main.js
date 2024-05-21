import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("\nwelcome to our Currency Converter made by Mehak Shahbaz\n"));
//list of currencies n there exchange rate
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280, //Pakistani Rupees
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("Select the Currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert Into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.blue("Please Enter the Amount to Convert:")
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of currency converter
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display converted amount
console.log(`Converted Amount = ${converted_amount}`);
