const movieModel = require('../models/movieModel')
const initialData = require('../data/initialData')

const getAllMovies = async(request, response) =>
{
    try{
    const movies = await movieModel.find()
        if(movies.length === 0)
        {
            const initialMovies = await movieModel.insertMany(initialData)
        }
        return response.status(200).json(movies)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const addNewMovie = async(request, response) => {
    const movieToBeAdded = request.body

    try
    {
        const existingMovie = await movieModel.findOne({movieName : movieToBeAdded.movieName})
        if(existingMovie)
        {
            return response.status(409).send({message: `A movie with movieName ${movieToBeAdded.movieName} already exists`})
        }
        const insertedMovie = await movieModel.create(movieToBeAdded)
        response.status(201).json(insertedMovie)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const getMovieSuggestion = async(request, response) => {
    const { movieGenre1, movieGenre2 } = request.query;
    try {
        const filteredMovies = await movieModel.find({
          $or: [
            { movieGenre1: movieGenre1 },
            { movieGenre2: movieGenre1 }
          ],
          $or: [
            { movieGenre1: movieGenre2 },
            { movieGenre2: movieGenre2 }
          ]
        }).exec();
    
        response.json(filteredMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        response.status(500).json({ error: 'An error occurred while fetching movies' });
      }
  };

module.exports = {getAllMovies, addNewMovie, getMovieSuggestion}