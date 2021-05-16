const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  `
  # ${answers.projectName}
  
  # Description
  ${answers.projectDescription}

  # Table of Contents
  1. [Installation](#installation)
  2. [Images](#images)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Testing](#testing)
  5. [Questions](#questions)
  6. [Live Project](#live-project)
  7. [Credit](#credit)
  8. [License](#license)
    
  # Installation
  ${answers.installation}

  # Images
  [project image](${answers.imageUrl})

  # Usage
  ${answers.usage}

  # Contributing
  ${answers.contribution}

  # Testing
  ${answers.testing}

  # Questions
  GitHub: ${answers.githubUrl}  
  Email: ${answers.email}
  
  # Live Project
  ${answers.liveUrl}

  # Credit
  ${answers.credit}
  
  # License
  This project is [${answers.license}](${answers.repoUrl}/blob/main/LICENSE) licensed.
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
      name: 'repoUrl',
      message: 'What is your project repo URL?',
    },
    {
      type: 'editor',
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
      name: 'githubUrl',
      message: 'What is your GitHub URL?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
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
      type: 'list',
      name: 'license',
      message: 'What license do you want to use?',
      choices: ['Apache','GNU','MIT',],
    },
  ])
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);
    fs.writeFile('README2.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });