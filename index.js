const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  `
  # ${answers.projectName}
  
  # Description
  ${answers.projectDescription}

  # Table of Contents
  1. Installation
  2. Images
  3. Live Project
  4. Credit
  5. License
    
  # Installation
  ${answers.installation}

  # Images
  ${answers.imageUrl}

  # Usage
  ${answers.usage}

  # Contributing
  ${answers.contribution}

  # Testing
  ${answers.testing}
  
  # Live Project
  ${answers.liveUrl}

  # Credit
  ${answers.credit}
  
  # License
  ${answers.license}
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'What is your project description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation steps?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What usage info do you want to provide?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What are the testing guidelines?',
    },
    {
      type: 'input',
      name: 'imageUrl',
      message: 'URL for images of application?',
    },
    {
      type: 'input',
      name: 'liveUrl',
      message: 'Enter your live page URL.',
    },
    {
      type: 'input',
      name: 'credit',
      message: 'Enter anyone that deserves credit for work on the project.',
    },
    {
        //Update to be a choice list
      type: 'input',
      name: 'license',
      message: 'What license do you want to use?',
    },
  ])
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);
    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });