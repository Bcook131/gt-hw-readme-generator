// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ## Table of Contents
   -[Description](#description)
   -[Installation](#install)
   -[Usage](#usage)
   -[Licenses](#licenses)
   -[Contribution](#contribution)
   -[Tests](#tests)
   -[Questions](#questions)

   ## Description
   # ${data.description}

   ## Install
   # ${data.install}


  `;
  }
  
  module.exports = generateMarkdown;
  