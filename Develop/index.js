const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    // README template
    const template = `# ${title}
    ## Description
    ${description}(#table-of-contents)
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributors)
    - [Tests](#test)
    - [Questions](#questions)
    ## Installation
    ${installation}(#table-of-contents)
    ## Usage
    ${usage}(#table-of-contents)
    ## License
    ${license}(#table-of-contents)
    ## Contribution
    ${contributors}(#table-of-contents)
    ## Tests
    ${test}(#table-of-contents)
    
    ## Questions(#table-of-contents)
    Find me on GitHub: ${git}
    E-mail me with any questions: ${email}`;

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

