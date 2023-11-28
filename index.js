// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is your project title?", // Name of the project
    name: "title",
  }, //
  {
    message: "What is your project description?",
    name: "description", // Description of the project
  },
  {
    message: "What are the steps required to install your project?",
    name: "installation", // Installation of the project
  },
  {
    message: "What are the steps required to use your project?",
    name: "usage", // Usage of the project
  },
  {
    message: "What license would you like to use?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "BSD 3-Clause", "None"], // License of the project
  },
  {
    message: "What is you name?",
    name: "name",
  },
  {
    message: "What is your email address?",
    name: "email",
  },
  {
    message: "What is your GitHub username?",
    name: "github",
  },
]; // End of questions array

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log("error"); // logs error if error occurs
    } else {
      console.log("ReadMe file created.");
    }
  }); // End of fs.writeFile
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const markdownContent = generateMarkdown(answers); //stores the data to enter into README file to a variable
    writeToFile("README.md", markdownContent);
  }); // End of inquirer prompt
}

// Function call to initialize app
init();
