require("dotenv").config();
let inquirer = require("inquirer")
let movie = require("./movie.js")
let spotify = require("./spotify.js")
let conert = require("./concert.js")

inquirer
    .prompt([{
        name: 'selection',
        type: 'checkbox',
        choices: [{
            name: 'Look up a concert',
            value: 'concert'
        }, {
            name: 'Look up a song',
            value: 'spotify'
        }, {
            name: 'Look up a movie',
            value: 'movie'
        }, {
            name: 'Look up random',
            value: 'random'
        }]
    }])
    .then(res => {
        res.selection.forEach(query => {
            if (query === 'conert') {
                concert()
            }
            if (query === 'spotify') {
                spotify()
            }
            if (query === 'movie') {
                movie()
            }
            if (query === 'random') {}
        })
    })