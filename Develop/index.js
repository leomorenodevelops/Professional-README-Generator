const inquirer = require('inquirer');
const fs = require('fs');

// inquirer to generate questions
inquirer.prompt([
    {
        type: 'input',
        message: "What's the project title?",
        name: 'title',
        // validate property to check that the user provided a value
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Description of project:',
        name: 'description',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Table of contents:',
        name: 'contents',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'How is the app installed?',
        name: 'installation',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'How is the app used?',
        name: 'usage',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'list',
        message: 'What licenses were used?',
        name: 'license',
        choices: ['MIT license', 'GPL license', 'Apache license', 'GNU license', 'N/A'],
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Who are the contributors of this project?',
        name: 'contributors',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Is there a test included?',
        name: 'test',
        validate: (value) => { if (value) {return true}
        else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Any issues/questions?',
        name: 'questions',
        validate: (value) => { if (value) {return true}
        else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'git',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    },
    {
        type: 'input',
        message: 'Enter E-mail:',
        name: 'email',
        validate: (value) => { if (value) {return true}
    else {return 'Enter value to continue'}}
    }
])
.then(( {
    title,
    description,
    contents,
    installation,
    usage,
    license,
    contributors,
    test,
    questions,
    git,
    email
}))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
