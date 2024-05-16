const express = require('express')
const router = express.Router()

const {getAllMovies, addNewMovie, getMovieSuggestion} = require('../controllers/movieController')

router.get('/', getAllMovies)

router.post('/admin/add', addNewMovie)

router.get('/admin/get', getMovieSuggestion)

module.exports = router