// Reads from the random.txt file
module.exports = random


function random() {
    let fs = require('fs')
    let movie = require("./movie.js")
    let spotify = require("./spotify.js")
    let concert = require("./concert.js")

    fs
        .readFile('random.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("Ran into error:", err)
            }
            let command = data.replace('"', '').split(',')[0]
            let query = data.replace(/\"/g, '').split(',')[1]
            if (command === "spotify-this-song") {
                spotify(query)
            }
            if (command === "movie-this") {
                movie(query)
            }
            if (command === "concert-this") {
                concert(query)
            }
        })
}