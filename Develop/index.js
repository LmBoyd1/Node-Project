// TODO: Include packages needed for this application
const inquire=require("inquirer")
const fs=require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    message:"What is the title of the project?",
    name:"title"
},{
    type:"input",
    message:"What's the description of your project?",
    name:"description"
},{
    type:"input",
    message:"What is the installation?",
    name:"installation"

},{
    type:"input",
    mesaage:"What is the usage?",
    name:"usage"
},{
    type:"list",
    message:"What is the license?",
    name:"license",
    choices:["MIT","Apache","IBM","Mozilla"]
},{
    type:"input",
    message:"Who is the contributing?",
    name:"contributing"
},{
    type:"input",
    message:"What are the tests?",
    name:"tests"
},{
    type:"input",
    message:"What is your github username?",
    name:"username"
},{
    type:"input",
    message:"What is your email address?",
    name:"address"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then(function(response){
        writeToFile("./README.md",generateMarkdown(response))
    })
}

// Function call to initialize app
init();
