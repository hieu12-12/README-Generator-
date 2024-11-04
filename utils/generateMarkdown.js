// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![Static Badge](https://img.shields.io/badge/license-${encodeURIComponent(license)}-red)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://mit.edu/~amini/LICENSE.md)`;
  } else if (license === 'Apache_2.0') {
    return `[Apache 2.0](https://apache.org/licenses/LICENSE-2.0.txt)`;
  } else if (license === 'BSD_3') {
    return `[BSD 3](https://opensource.org/license/BSD-3-Clause)`;
  } else if (license === 'Mozilla_2.0') {
    return `[Mozilla 2.0](https://mozilla.org/en-US/MPL/2.0)`;
  } else if (license === 'Eclipse_2.0') {
    return `[Eclipse 2.0](https://eclipse.org/legal/epl-2.0)`;
  } else if (license === 'GPL_3.0') {
    return `[GPL 3.0](https://gnu.org/licenses/gpl-3.0.en.html)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
  
  This project is licensed under the ${renderLicenseLink(license)} license.

  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
 
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any additional questions, you can open an issue or contact me directly at ${data.email}.
  You can view more of my work on my GitHub: [${data.github}](https://github.com/${data.github}).

`;
}

// Export based on the environment
module.exports = generateMarkdown;
