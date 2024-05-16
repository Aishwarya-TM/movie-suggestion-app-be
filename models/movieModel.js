const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        movieName : {
            type : String,
            required : true
        },
        movieYear : {
            type : String
        },
        imdbRating : {
            type : Number,
            required : true,
            index : true
        },
        movieGenre1 : {
            type : String,
            required : true,
            enum : ["Action", "SciFi", "Comedy", "Romance", "Drama", "Crime", "Thriller", "Adventure", "Horror", "Animation","Fantasy", "Biography"]
        },
        movieGenre2 : {
            type : String,
            required : true,
            enum : ["Action", "SciFi", "Comedy", "Romance", "Drama", "Crime", "Thriller", "Adventure", "Horror", "Animation","Fantasy", "Biography"]
        }
    },
    {
        collection : 'movies'
    }
)
module.exports = mongoose.model('movies', movieSchema)