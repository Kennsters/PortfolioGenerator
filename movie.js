const axios = require('axios')
const inquirer = require('inquirer')


inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What is your favorite movie?',
        name: 'movie'
    },
    ])
    .then(answers =>  {
        axios.get(`http://www.omdbapi.com/?apikey=1010d52d&t=${answers.movie}`)
            .then(res => { //deconstructed here
                console.log(`Title: ${res.data.Title}`)
                console.log(`Director: ${res.data.Director}`)
                console.log(`Plot: ${res.data.Plot}`)
            })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(error => {
        if (error.itTtyError) {
    
        } else {

        }
    })


// axios.get('http://www.omdbapi.com/?apikey=1010d52d&t=Goodfellas')
//     .then(res => { //deconstructed here
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })