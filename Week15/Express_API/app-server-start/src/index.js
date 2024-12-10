require('./models/User')
// import express
const express = require('express')
// import mongoose to communicate with mongoDB
const mongoose = require('mongoose')
// import bodyparser for handling our request bodie's json
const bodyParser = require('body-parser')

// import our authRoutes
const authRoutes = require('./routes/authRoutes')

// require our middleware authorization
const requireAuth = require('./middlewares/requireAuth')

// our one time available URI, put in a .env for safe keeping and DONT publish this line of code to github!
const mongoUri = 'PUT MONGO_URI FROM ENV HERE'

// future proof for mongoose 7+
if (!mongoUri) {
  throw new Error('MongoURI was not supplied')
}

// fix v7 deprecation error
mongoose.set('strictQuery', true)

// make sure whitelist ur IP address everytime u disconnect too

// connect to our DB via mongoose
mongoose.connect(mongoUri)

// think of this as an event listener
mongoose.connection.on('connected', () => {
  console.log('Successfully connected to our mongo instance!')
})
// listen for errors as well
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err)
})
// create an app object, this is our application
const app = express()

// enable the ability to parse JSON from the body of reqs/ress
app.use(bodyParser.json())

//use the router - obviously this needs to go AFTER we create our app object
app.use(authRoutes)

// our first route handler, any time a user makes a request to `/`
// run the function (second argument)
// req = request, res = result/response
// include requireAuth in / route
// NEW add requireAuth as second param to verify and look up user
app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`)
})

// have our app listen on a specific port on our machine
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
