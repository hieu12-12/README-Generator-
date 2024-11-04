// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
  },
  {
      type: 'input',
      name: 'description',
      message: 'Please enter a short description of your project.'
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What do users need to know to install your project?'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'What do users need to know to use your project?'
  },
  {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project',
      choices: ['MIT', 'Apache_2.0', 'BSD_3', 'Mozilla_2.0', 'Eclipse_2.0', 'GPL_3.0', 'None']
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'What guidelines should users follow if they want to contribute?'
  },
  {
      type: 'input',
      name: 'tests',
      message: 'What do users need to know to test your project?'
  },
  {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      fs.writeFile('README.md', generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log('Successfully created README!')
      );
    })
    .catch((error) => {
      console.error("Error during inquirer prompt:", error);
    });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
