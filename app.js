const express = require('express')
const app = express()
const PORT = 3500

app.use('/',(request, response) =>
{
    response.status(200).send({message : "Hello!"})
})

app.listen(PORT, ()=>
{
    console.log(`server is running at http://localhost:${PORT}`)
})