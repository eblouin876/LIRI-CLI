// Hits the OMDB API wiht Axios apiKey = trilogy
// Returns Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country, Language, Plot, Actors



module.exports = queryOMDB


function queryOMDB(input) {
    let inquirer = require('inquirer')
    let axios = require('axios')

    if (input) {
        axios
            .get(`http://www.omdbapi.com/?apikey=trilogy&t=${input.split(' ').join('+')}`)
            .then(res => {
                let movie = res.data;
                let title = movie.Title;
                let year = movie.Year;
                let imdbRating = movie.Ratings[0].Value;
                let rottenTomatoes = movie.Ratings[1].Value;
                let country = movie.Country;
                let language = movie.Language;
                let plot = movie.Plot;
                let actors = movie.Actors
                let info = {
                    title,
                    year,
                    imdbRating,
                    rottenTomatoes,
                    country,
                    language,
                    plot,
                    actors
                }
                console.log(JSON.stringify(info, null, 2))
            })
            .catch(err => {
                console.log('An error occurred:', err)
            })
    } else {
        inquirer
            .prompt({
                message: 'What movie would you like to learn about?',
                name: "movie",
                type: 'input'
            })
            .then(resp => {
                axios
                    .get(`http://www.omdbapi.com/?apikey=trilogy&t=${resp.movie.split(' ').join('+')}`)
                    .then(res => {
                        let movie = res.data;
                        let title = movie.Title;
                        let year = movie.Year;
                        let imdbRating = movie.Ratings[0].Value;
                        let rottenTomatoes = movie.Ratings[1].Value;
                        let country = movie.Country;
                        let language = movie.Language;
                        let plot = movie.Plot;
                        let actors = movie.Actors
                        let info = {
                            title,
                            year,
                            imdbRating,
                            rottenTomatoes,
                            country,
                            language,
                            plot,
                            actors
                        }
                        console.log(JSON.stringify(info, null, 2))
                    })
                    .catch(err => {
                        console.log('An error occurred:', err)
                    })
            })
    }
}