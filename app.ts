#! /usr/bin/env node

import inquirer from "inquirer";
async function atm() {
    const pin: number = 123;
    let currentAmount: number = 5000;
    let user_inputs = await inquirer.prompt([
        {
            name: "pinNumber",
            type: "input",
            message: "enter the pin",
            validate: (number) => {
                if (number !== pin.toString()) {

                    return "Wrong Pin";

                } else {
                    return true;
                }
            }
        }, {
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Check balance"],
        },


    ]);
    if (user_inputs.operation === "Withdraw") {
        let User_input_amount = await inquirer.prompt([
            {
                name: "amount",
                type: "input",
                message: "Enter the amount for withdraw",
                validate: (input) => {
                    if (input) {
                        if (input < currentAmount) {
                            return true
                        } else {
                            console.log();
                            return `\n your current ammount is ${currentAmount} : \n \t Enter valid ammount please\n`;
                        }
                    } else {
                        return false;
                    }
                }
            }
        ]);

        currentAmount = currentAmount - User_input_amount.amount;
        console.log(`Your ammount have been withdraw: \n your current ammount is: ${currentAmount}`);

    } else if (user_inputs.operation === "Check balance") {
        console.log(`Your current amount is: ` + currentAmount);
    }
}
atm();