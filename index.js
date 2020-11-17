const inquirer = require('inquirer');
const fs = require('fs');
import generateMarkdown from './utils/generateMarkdown.js';

inquirer
  .prompt([
    // Questions 1: Title
      {
        type: "input",
        name: "title",
        message: "What is the title for your README file?"
      },
      // Questions 2: Short description explaining of the app.
      {
        type: "input",
        name: "description",
        message: "Describe what the app does and what it is for here:"
      }
      // Questions 3: Installation
      {
        type: "input",
        name: "installation"
        message: "How is the app installed?"
      },
      // Questions 4: Usage
      {
        type: "input",
        name: "usage"
        message: "What is the intended usage of this app?"
      },
      // Questions 5: License
      {
        type: "list"
        name: "license"
        message:
      },
      // Questions 6: Contributing
      {
        type: "input",
        name: "contributing"
        message:
      },
      // Questions 7: Tests
      {
        type: "input",
        name: "tests"
        message:
      },
      // Questions 8: Questions
      {
        type: "input",
        name: "questions"
        message:
      }
  ])
  .then(answers => {
    console.log(answers)
    writeToFile(answers)
  })
  .catch(error => {
    // if(error.isTtyError) {
    //   // Prompt couldn't be rendered in the current environment
    // } else {
    //   // Something else when wrong
    // }
    console.log(error)
  });

// array of questions for user
// const questions = [

// ];

// function to write README file
function writeToFile() {
  fs.writeFile("README.md", function(err){console.log(err || "File written successfully!")})
}

// function to initialize program
function init() {
  prompt(questions).then(answers => {
      const response = generateMarkdown(answers);
      writetoFile("./README.md", response);
  })
}

// function call to initialize program
init();