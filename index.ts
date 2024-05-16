#! /usr/bin/env node
//Word Counter Project by Irfan Memon
console.log("********************************************* Welcome to Memon's Coding Project *********************************************");

import inquirer from "inquirer"
const answers: {
Sentence: string
 } = await inquirer.prompt([
{
name: "Sentence",
type: "input",
message: "Enter any sentence to count the words: "
}
])
const words = answers.Sentence.trim().split(" ")
console.log(words)
console.log ("your sentence word count is "+ (words.length));