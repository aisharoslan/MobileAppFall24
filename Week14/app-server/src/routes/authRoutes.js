const express = require('express')

// To access our user schema / model here
const mongoose = require('mongoose')
const User = mongoose.model('User') // using UserSchema to model

// create a router - contains small collection of routes - e.g. sign in/out
// e.g. location tracker (all trails) - track hike and drops json dots - tracks go into another table in DB - another file - x to do with sign up/in
const router = express.Router()

// create a signup route
router.post('/signup', async (req, res) => {
    // for now, just send back a plain text message
    // res.send('Hello signup route, but with JSON!')
    
    // this is after JSON parsing is enabled
    // console.log(req.headers)
    console.log(req.body)
    
    // destructure from the request body
    const { email, password } = req.body

    // use them to create a new user and validate it
    const user = new User({email, password})

    // write/send to database (MongoDB)
    await user.save()

    // send a message if we get here
    res.send('User created!')
})

// export it for use elsewhere
module.exports = router