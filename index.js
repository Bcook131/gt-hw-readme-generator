const generateMarkdown = require("./utils/generateMarkdown.js")
// adding fs const
const fs = require("fs")

// adding inquirer const
const inquirer = require("inquirer");

// array of questions for user
const questions = [

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
    type: "checkbox",
    name: "licenses",
    message: "What license would you like to use for your project?",
    choices: ["MIT"]
},
{
    type: "input",
    name: "contributing",
    message: "How would you like people to contibrute to this project?",
},
{
    type: "input",
    name: "tests",
    message: "Were there any tests done for this project? If so please explain.",
},
{
    type: "input",
    name: "username",
    message: "Enter your github username here.",
},
{
    type: "input",
    name: "email",
    message: "Enter your email address here.",
},
  
];
// function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err)
        }
    });
};

// function to initialize program
async function init() {
    const response = await inquirer.prompt(questions);
    writeToFile("README.md", generateMarkdown(response));
}

// function call to initialize program
init();
