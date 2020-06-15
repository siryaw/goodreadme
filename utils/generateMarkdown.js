function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `

# ${data.title}

${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributing](#contributing)

* [Questions](#questions)

## Installation

Run to install the necessary dependecies: 

\`\`\`
${data.installation}
\`\`\`

## Tests

Run command for test:

\`\`\`
${data.test}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
