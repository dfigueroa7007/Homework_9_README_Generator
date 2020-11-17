// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#licesnse)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ##Description
  ${data.description}

  ##Installation
  ${data.description}

  ##Usage
  ${data.description}

  ##License
  ${data.description}

  ##Contributing
  ${data.description}

  ##Tests
  ${data.description}

  ##Questions
  ${data.description}
`;
}

module.exports = generateMarkdown;
