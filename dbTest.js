const db = require('./models');

// Create a movie
db.movie.findOrCreate({
    where: { title: 'Godfather'},
    defaults: {
        byline: 'Vincent Canby',
        headline: 'Godfather, Part II',
        date: '2020-11-19',
        url: 'http://nytimes.com'
    }
}).then(([movie, created]) => {
    console.log(true)
    console.log(movie);
})
