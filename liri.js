require("dotenv").config();
let inquirer = require("inquirer")
let movie = require("./movie.js")
let spotify = require("./spotify.js")
let concert = require("./concert.js")
let random = require("./random.js")

inquirer
    .prompt([{
        name: 'selection',
        type: 'list',
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
            name: 'Do what random.txt says',
            value: 'random'
        }]
    }])
    .then(res => {
        if (res.selection === 'concert') {
            concert()
        }
        if (res.selection === 'spotify') {
            spotify()
        }
        if (res.selection === 'movie') {
            movie()
        }
        if (res.selection === 'random') {
            random()
        }
    })