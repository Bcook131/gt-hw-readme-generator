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
