// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    message: 'Describe your project',
    name: 'description',  
  },
  {
    type: 'input',
    message: 'What installations did you use?',
    name: 'installations',
  },
  {
    type: 'input',
    message: 'What is this project used for',
    name: 'usage', 
  },
  {
    type: 'list',
    message: 'What license did you use',
    choices:['Apache_2.0_License','Boost_Software_License_1.0','BSD_3-Clause_License','BSD_2-Clause_License','Eclipse_Public License_1.0','none'],
    name: 'license', 
  },
  {
      type: 'input',
      message: 'Who worked with you on this',
      name: 'contributors',
  },
  {
    type: 'input',
    message: 'Was there any test ran on this project',
    name: 'test', 
  }
  ,{
    type: 'input',
    message: 'What is your github username',
    name: 'github',   
  },
  {
    type: 'input',
    message: 'What is your email',
    name: 'email', 
  }
])
.then((data) => {
 fs.writeFile('SampleREADME.MD',generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
