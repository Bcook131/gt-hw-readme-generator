const generateMarkdown = require("./utils/generateMarkdown")

// adding fs var
const fs = require("fs")

// adding inquirer var
const inquirer = require("inquirer")

// array of questions for user
const questions = () => {
  return inquirer.prompt([
   {
       type: "input",
       name: "title",
       message: "What is your Project Title?",
   },
   {
    type: "input",
    name: "description",
    message: "What is your project's description?",
},
{
    type: "input",
    name: "install",
    message: "What is the installation for your project?",
},
{
    type: "input",
    name: "usage",
    message: "What is your project going to be used for?",
},
{
    type: "list",
    name: "licenses",
    message: "What license would you like to use for your project?",
    choices: ["MIT"]
},
  ])
};
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
console.log("Create a ReadMe!");
questions()
}

// function call to initialize program
init();
