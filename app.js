const inquirer = require('inquirer')
const fs = require('fs')
const portfolioGenerator = require('./portfolioGenerator.js')

inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Where is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Tell us your bio',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedIn'
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: "github"
    }
    ])
    .then(answers => {
        fs.writeFile('portfolio.html', portfolioGenerator(answers), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
    .catch(error => {
        if (error.itTtyError) {
    
        } else {

        }
    })