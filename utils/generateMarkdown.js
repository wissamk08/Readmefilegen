// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  ---
* [Description](#description)
* [Installations](#installations)
* [Usage](#usage)
* [license](#license)
* [Contributors](#contributors)
* [test](#test)
* [Questions](#questions)

 ---



  ## Description
   ${data.description}
  ## Installations
  ${data.installations}
  ## Usage
  ${data.usage}
  ## license
  ${data.license}
  ## Contributors 
  ${data.contributors}
  ## Test
  ${data.test}
  ---
  
  ## Questions
  If you have any questions you can reach me at my
  [github](https://github.com/${data.github})
  and my email
  ${data.email}
`;
}

module.exports = generateMarkdown;
