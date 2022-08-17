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
        choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
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
        message: 'Is there a test included? If so, please provide examples',
        name: 'test',
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
    installation,
    usage,
    license,
    contributors,
    test,
    git,
    email
}) => {
    let projectLicense;
    if (license !== 'N/A') {
        projectLicense = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
      } 
    let licenseLink;
    if (license !== 'N/A') {
        licenseLink = `(https://choosealicense.com/licenses/${license.toLowerCase()})`;
      }
      console.log(projectLicense);
    // README template
    const template = `
# ${title}

![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

## Description

${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

[${license}]${licenseLink}

## Contribution

${contributors}

## Tests

${test}

## Questions

Find me on GitHub: ${git}

E-mail me with any questions: ${email}
`;

    createNewFile(title, template);
}
);

// Function to create README file using fs
function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err){
            console.log(err)
        }
        console.log('README has been generated');
    })
}

