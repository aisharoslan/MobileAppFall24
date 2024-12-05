// plain node, not in web/react project
// just js and node
// frontend is completely separate project, we just connect with node server that's hosted somewhere and then just do the /, /signup etc in url, right now it's just local, so hv to think about that
// to get email and password etc, need those endpoints to communicate with mongodb using express

require('./models/User') // can only hv 1 isntance, so x need to assign to var

// import express library
const express = require('express')

// mongoose - models, mongodb - collection/database
// validation all in mongoose
// writing in mongodb

// import mongoose to communicate with mongoDB
const mongoose = require('mongoose')

// import bodyparser for handling request bodies json
const bodyParser = require('body-parser')

// import our auth routes
const authRoutes = require('./routes/authRoutes')

// our one time available URI, put in a .env for safe keeping and DON'T PUBLISH THIS LINE OF CODE TO GITHUB
const mongoUri = 'COPY_PASTE_FROM_ENV_TO_CONNECT'

// create an app object, this is our application
const app = express()

// enable the ability to parse JSON from the body of requests/results
app.use(bodyParser.json())

// use the router - obviously this needs to go AFTER we create our app object
app.use(authRoutes)

// connect to our DB via mongoose
mongoose.connect(mongoUri)

// think of this as an event listener - like onConnect
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to our MongoDB instance!')
})

// listen for errors as well
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to Mongo', err)
})

// our first route handler, any time a user makes a request to '/'
// run the function (second argument)
// req res are things we get for free when we hit a route
// req = request (outgoing), res = result/response (incoming)
app.get('/', (req, res) => {
    // for now, send back a plain text message - render on screen
    res.send('Hello first Express route!')
})

// have our app listen on a specific port on our machine
// just watching that port
app.listen(3000, () => {
    console.log('Listening on port 3000')
})