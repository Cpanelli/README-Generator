// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "BSD 3-Clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) License.

`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contact
- **Name:** ${data.name}
- **Email:** ${data.email}
- **GitHub:** [${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
