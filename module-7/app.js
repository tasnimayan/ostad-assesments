// Module import section
const express = require('express')
const router = require('./src/routes/api');

const cors = require('cors')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const multer = require('multer')


// Creating express application
const app = express()

// Defining the middlwares
app.use("/" , router);
// Response for undefined routing
app.use('*', (req, res)=>{
  res.status(404)
  res.end(JSON.stringify({title:"Not found", message:"The page you are searching could not be found!"}))
})


app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(rateLimit())


module.exports = app;
