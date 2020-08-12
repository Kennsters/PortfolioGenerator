const axios = require('axios')

axios.get('https://swapi.dev/api/people/1')
    .then(({ data }) => { //deconstructed here
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })