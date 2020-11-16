const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // Questions 1: Title
      {
        type: "input",
        name: "title",
        message: "What is the title for your README file?"
      },
      // Questions 2: Short description explaining: - What the app is for, - how to use it, - how to install it, - how to report issues,
      {
        type: "input",
        name: "description",
        message: "Write a short description explaining: - What the app is for, - how to use it, - how to install it, - how to report issues"
      },
    // Questions 3: Table of Contents
      {
        type:
        name:
        message:
      },
      // Questions 4: Installation
      {
        type:
        name:
        message:
      },
      // Questions 5: Usage
      {
        type:
        name:
        message:
      },
      // Questions 6: License
      {
        type:
        name:
        message:
      },
      // Questions 7: Contributing
      {
        type:
        name:
        message:
      },
      // Questions 8: Tests
      {
        type:
        name:
        message:
      },
      // Questions 9: Questions
      {
        type:
        name:
        message:
      }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
