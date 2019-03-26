// Hits the spotify API
// Returns the Artist(s), Song Name, preivew link, and song
// Defaults to The Sign by Ace of Base

module.exports = querySpotify


function querySpotify(input = "default") {
    require("dotenv").config();
    let inquirer = require('inquirer')
    let keys = require("./keys.js");
    let Spotify = require('node-spotify-api')
    var spotify = new Spotify(keys.spotify);

    if (input !== "default") {
        spotify.search({
                type: 'track',
                query: input,
                limit: 5
            })
            .then(data => {
                let rawSongs = data.tracks.items;
                let songs = [];
                rawSongs.forEach(song => {
                    let artists = song.artists[0].name;
                    let name = song.name;
                    let preview = song.preview_url;
                    let album = song.album.name;
                    songs.push({
                        name,
                        artists,
                        preview,
                        album
                    })
                })
                console.log(`Here are ${Object.keys(songs).length} results for ${input}.\n`)
                songs.forEach(song => {
                    console.log(JSON.stringify(song, null, 2))
                })
            })
            .catch(err => {
                console.log("An error occurred: ", err)
            })
    } else {

        inquirer
            .prompt({
                message: 'What song would you like to learn about?',
                name: "song",
                type: 'input'
            })
            .then((resp) => {
                spotify.search({
                        type: 'track',
                        query: resp.song,
                        limit: 5
                    })
                    .then(data => {
                        let rawSongs = data.tracks.items;
                        let songs = [];
                        rawSongs.forEach(song => {
                            let artists = song.artists[0].name;
                            let name = song.name;
                            let preview = song.preview_url;
                            let album = song.album.name;
                            songs.push({
                                name,
                                artists,
                                preview,
                                album
                            })
                        })
                        console.log(`Here are ${Object.keys(songs).length} results for ${resp.song}.\n`)
                        songs.forEach(song => {
                            console.log(JSON.stringify(song, null, 2))
                        })
                    })
                    .catch(err => {
                        console.log("An error occurred: ", err)
                    })
            })
    }

}