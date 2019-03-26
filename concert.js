// Hits the bands in town api
// Returns the Venue name, location, and date MM/DD/YYYY
// `"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`

module.exports = queryBandsInTown


function queryBandsInTown(input) {
    let inquirer = require('inquirer')
    let axios = require('axios')
    let moment = require('moment')

    if (input) {
        axios
            .get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
            .then(res => {
                let shows = []
                let len = res.data.length
                for (let i = 0; i < len; i++) {
                    // console.log(res.data[i].venue)
                    let venue = res.data[i].venue.name;
                    let location = `${res.data[i].venue.city}, ${res.data[i].venue.country}`;
                    let rawDate = res.data[i].datetime
                    let date = moment(rawDate).format("MM/DD/YYYY")
                    shows.push({
                        venue,
                        location,
                        date
                    })
                }
                console.log(JSON.stringify(shows, null, 2))
            })
            .catch(err => {
                console.log('An error occurred:', err)
            })
    } else {
        inquirer
            .prompt({
                message: 'What band would you like to see concerts for?',
                name: "band",
                type: 'input'
            })
            .then(resp => {
                axios
                    .get(`https://rest.bandsintown.com/artists/${resp.band}/events?app_id=codingbootcamp`)
                    .then(res => {
                        let shows = []
                        let len = res.data.length
                        for (let i = 0; i < len; i++) {
                            // console.log(res.data[i].venue)
                            let venue = res.data[i].venue.name;
                            let location = `${res.data[i].venue.city}, ${res.data[i].venue.country}`;
                            let rawDate = res.data[i].datetime
                            let date = moment(rawDate).format("MM/DD/YYYY")
                            shows.push({
                                venue,
                                location,
                                date
                            })
                        }
                        console.log(JSON.stringify(shows, null, 2))
                    })
                    .catch(err => {
                        console.log('An error occurred:', err)
                    })
            })
    }
}