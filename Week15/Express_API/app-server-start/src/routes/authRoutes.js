const express = require('express')
const jwt = require('jsonwebtoken')
// To access our user schema / model here
const mongoose = require('mongoose')
const User = mongoose.model('User')

// create a router
const router = express.Router()

// create a signup route
router.post('/signup', async (req, res) => {
  // for now, just send back a plain text message
  // res.send('Hello signup route, but with JSON')
  // this is after JSON parsing is enabled, log the reqest body in terminal
  // console.log(req.headers)
  // console.log(req.body)
  // destructure from the request
  const {email, password} = req.body
  try {
    // use them to create a new user
    const user = new User({email, password})

    ///// here we'll do the salting and hashing /////

    // write to our DB
    await user.save()
    // generate a new JWT
    const token = jwt.sign({userID: user._id}, 'MY_SECRET_KEY')
    // send it back to user
    res.send({token})
  } catch(err) {
    return res.status(422).send(err.message) // 422: smth wrong w req
  }

  // send a message if we get here
  res.send('User created!')
})

router.post('/signin', async (req, res) => {
  const {email, password} = req.body
  // make sure we have both fields
  if (!email || !password) {
    return res.status(422).send({error: 'Must provide email and password!'})
  }
  // look it up
  const user = await User.findOne({email})
  // if we can't find the user in DB
  if (!user) {
    return res.status(422).send({error: 'Invalid email or password!'})
  }

  // passed our checks, now we can compare
  try {
    // the method we just added to User 
    await user.comparePassword(password)
    const token = jwt.sign({userID: user._id}, 'MY_SECRET_KEY')
    res.send({token})
  } catch(err) {
    return res.status(422).send({error: 'Invalid password or email'})
  }
})

// export it for use elsewhere
module.exports = router

// jsonwebtoken - ID/driver's license/passport - important hard to fake/dupe identification
// generated string
// secret key comes from server