const fs = require("fs");

const path = require("path");

const inquirer = require("inquirer");

const api = require("./utils/api");


const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        default: 'username'
    },
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title',
        default: 'Title'
    },
    {
        type: 'input',
        message: 'Add a description for your project',
        name: 'description',
        default: 'Description'
    },
    {
        type: 'input',
        message: 'What command to run to install dependencies',
        name: 'installation',
        default: 'Installation'
    },
    {
        type: 'input',
        message: 'What command to run to for testing',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know to use this repo',
        name: 'usage',
        default: 'Usage'
    },
    {
        type: 'input',
        message: 'How can the user contribute',
        name: 'contributing',
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log("Readme updated! Open Readme File to view changes");
  
      api
        .getUser(inquirerResponses.github)
        .then(({ data }) => {
          writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }));
        })
    })
  }
  
  init();