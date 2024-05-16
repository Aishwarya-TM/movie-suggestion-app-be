// const movieModel = require('../models/movieModel')

// const validateGenre = async(request, response)=>
//     {
//         const givenmovieGenre2 = request.body.movieGenre2

//         try
//         {
//             const validGenre = await movieModel.findOne({movieGenre1 : givenmovieGenre2})
//             return response.status(400).send({message: `Movie Genre already Exist!`})
//         }
//         catch(error)
//         {
//             response.status(500).
//         }
//     }